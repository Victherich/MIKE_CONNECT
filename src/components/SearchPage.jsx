import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import SidebarPostTicker from "./SidebarPostTicker";

const API_BASE = "https://www.mikeconnect.com/mc_api";

export default function SearchPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("q") || "";

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setError("");

    axios
      .get(`${API_BASE}/search_posts.php?q=${encodeURIComponent(query)}`)
      .then((res) => {
        if (res.data?.success) {
          setPosts(res.data.posts || []);
        } else {
          setError(res.data?.error || "No results found");
        }
      })
      .catch(() => setError("Server or network error"))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <Layout>
      <PageWrapper>
        <SearchTitle>
          Search results for: <span>"{query}"</span>
        </SearchTitle>

        {loading && <Loading>Searching...</Loading>}
        {error && <NoBlogs>{error}</NoBlogs>}

        {!loading && !error && posts.length > 0 && (
          <BlogsGrid>
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                bg={post.image}
                onClick={() => navigate(`/post/${post.id}`)}
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
        )}

        {!loading && !error && posts.length === 0 && (
          <NoBlogs>No posts matched your search.</NoBlogs>
        )}
      </PageWrapper>

      <SidebarPostTicker />
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
  background: ${({ active }) => (active ? "#4f46e5" : "#e5e7eb")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: #4f46e5;
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
const SearchTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #4f46e5;
  text-align: center;
`;




const BlogsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 28px;
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
