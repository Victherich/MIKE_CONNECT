


import React, { useContext, useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Context } from "./Context";
import axios from "axios";
import SidebarPostTicker from "./SidebarPostTicker";

export default function CategoryPage() {
  const { categories = [] } = useContext(Context);
  const { id } = useParams();

  const categoryId = Number(id);
  const isValidCategoryId = Number.isInteger(categoryId);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [availablePages, setAvailablePages] = useState([1]);
  const navigate = useNavigate();


  const limit = 50;

  const category = useMemo(() => {
    return categories.find(c => Number(c.id) === categoryId);
  }, [categories, categoryId]);

  const fetchPosts = (pageNum = 1) => {
    if (!isValidCategoryId) return;

    setLoading(true);
    setError(null);

    axios
      .get(
        `https://www.mikeconnect.com/mc_api/get_posts_by_category.php?category=${categoryId}&page=${pageNum}&t=${Date.now()}`
      )
      .then(res => {
        if (res.data?.success) {
          const fetchedPosts = res.data.posts || [];

          setPosts(fetchedPosts);
       

          // If full page returned, assume next page exists
         if (fetchedPosts.length === limit) {
  setAvailablePages(prev => {
    const nextPage = pageNum + 1;
    return prev.includes(nextPage) ? prev : [...prev, nextPage];
  });
}

        } else {
          setPosts([]);
          setError(res.data?.error || "No posts found");
        }
      })
      .catch(() => {
        setPosts([]);
        setError("Network or server error");
      })
      .finally(() => setLoading(false));
  };

  // Initial load
  useEffect(() => {
    setPage(1);
    setAvailablePages([1]);
    fetchPosts(1);
  }, [categoryId, isValidCategoryId]);

  const handlePageClick = pageNum => {
    if (pageNum === page) return;
    setPage(pageNum);
    fetchPosts(pageNum);
  };

  return (
    <Layout>
 <PageWrapper>
      <CategoryTitle>
        {category?.title || "Category"} 
     
      </CategoryTitle>

      {loading && <Loading>Loading posts...</Loading>}
      {error && <NoBlogs>{error}</NoBlogs>}

      {!loading && !error && posts.length > 0 && (
        <>
          <BlogsGrid>
            {posts.map(post => (
         

              <BlogCard
  key={post.id}
  bg={post.image || "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"}
  onClick={()=>navigate(`/post/${post.id}`)}
>
  <Overlay />
  <CardContent>
    <h3>{post.title}</h3>

    <BlogMeta>
      {new Date(post.created_at).toDateString()}
    </BlogMeta>
  </CardContent>
</BlogCard>

            ))}
          </BlogsGrid>

          {/* PAGINATION */}
          <PaginationWrapper>
            {availablePages.map(p => (
              <PageButton
                key={p}
                active={p === page}
                onClick={() => handlePageClick(p)}
              >
                {p}
              </PageButton>
            ))}
          </PaginationWrapper>
        </>
      )}

      {!loading && !error && posts.length === 0 && (
        <NoBlogs>No posts available in this category.</NoBlogs>
      )}
    </PageWrapper>
    
<SidebarPostTicker/>

    </Layout>
   
  );
}

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 10px;
`;

const PageButton = styled.button`
  min-width: 40px;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  background: ${({ active }) => (active ? "green" : "#e5e7eb")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: green;
    color: #fff;
  }
`;



/* ================= STYLES ================= */
const PageWrapper = styled.div`
  // max-width: 1000px;
  margin: 50px auto;
  padding: 0 20px;
  font-family: "Poppins", sans-serif;
  width:100%;
`;
const CategoryTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 30px;
  color: green;
  text-align: center;
`;




const BlogsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 28px;

@media(max-width:768px){
 grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

`;


const BlogCard = styled.div`
  position: relative;
  height: 220px;
  border-radius: 18px;
  overflow: hidden;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
  }

  &:hover ${'' /* zoom image illusion */} {
    background-size: 110%;
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
`;

const Loading = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
`;
const NoBlogs = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #777;
`;


const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.05)
  );
`;


const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  padding: 10px;
  z-index: 2;
  color: #fff;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 5px;
    // line-height: 1.3;
  }
`;

const BlogMeta = styled.div`
  font-size: 0.7rem;
  color: #d1d5db;
  font-style:italic;
`;

// const Layout = styled.div`
//   display: grid;
//   // grid-template-columns: 1fr 320px;
//   gap: 30px;

//   @media (max-width: 1100px) {
//     grid-template-columns: 1fr;
//   }
// `;


const Layout = styled.div`
display:flex;

`
