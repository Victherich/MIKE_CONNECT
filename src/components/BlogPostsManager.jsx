// import React, { useEffect, useState, useContext } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { FaPlus } from "react-icons/fa";
// import { Context } from "./Context";
// import BlogPostModal from "./BlogPostModal";

// /* ================= STYLES ================= */
// const Container = styled.div`
//   max-width: 1000px;
//   margin: auto;
//   padding: 40px;
// `;

// const PageTitle = styled.h2`
//   text-align: center;
//   color: green;
//   margin-bottom: 30px;
// `;

// const FilterRow = styled.div`a
//   margin-bottom: 20px;
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 10px;
//   border-radius: 6px;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
//   gap: 20px;
// `;

// const Card = styled.div`
//   background: #f9f9f9;
//   border-radius: 10px;
//   padding: 20px;
//   box-shadow: 0 4px 10px rgba(0,0,0,0.4);
// `;

// const Title = styled.h4`
//   color: #0a4d24;
// `;

// const Meta = styled.p`
//   font-size: 14px;
//   color: #555;
// `;

// const Action = styled.span`
//   cursor: pointer;
//   margin-right: 15px;
//   font-weight: bold;
//   text-decoration: underline;
//   color: ${({ color }) => color};
// `;

// const FloatingButton = styled.button`
//   position: fixed;
//   bottom: 60px;
//   right: 20px;
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   border: none;
//   background: linear-gradient(90deg, #0cc0e0, #119459);
//   color: white;
//   font-size: 1.5rem;
//   cursor: pointer;
// `;

// /* ================= COMPONENT ================= */
// const BlogPostsManager = () => {
//   const { categories } = useContext(Context);

//   const [posts, setPosts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [openModal, setOpenModal] = useState(false);
//   const [editingPost, setEditingPost] = useState(null);

//   /* -------- FETCH POSTS -------- */
//   const fetchPosts = async (categoryId = "") => {
//     try {
//       const res = await axios.get(
//         "https://www.yoursite.com/api/get_posts.php",
//         { params: { category: categoryId || 0 } }
//       );
//       if (res.data.success) setPosts(res.data.posts);
//     } catch {
//       Swal.fire("Error", "Failed to fetch posts", "error");
//     }
//   };

//   useEffect(() => {
//     fetchPosts(selectedCategory);
//   }, [selectedCategory]);

//   /* -------- DELETE -------- */
//   const deletePost = async (id) => {
//     const confirm = await Swal.fire({
//       title: "Delete post?",
//       text: "This action cannot be undone",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//     });

//     if (!confirm.isConfirmed) return;

//     try {
//       const res = await axios.post(
//         "https://www.yoursite.com/api/delete_post.php",
//         { id }
//       );

//       if (res.data.success) {
//         Swal.fire("Deleted", "Post deleted", "success");
//         fetchPosts(selectedCategory);
//       }
//     } catch {
//       Swal.fire("Error", "Failed to delete", "error");
//     }
//   };

//   return (
//     <Container>
//       <PageTitle>Blog Posts Management</PageTitle>

//       <FilterRow>
//         <Select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//         >
//           <option value="">-- All Categories --</option>
//           {categories.map((c) => (
//             <option key={c.id} value={c.id}>{c.title}</option>
//           ))}
//         </Select>
//       </FilterRow>

//       <Grid>
//         {posts.map((post) => {
//           const category = categories.find(c => c.id == post.category);
//           return (
//             <Card key={post.id}>
//               <Title>{post.title}</Title>
//               <Meta><strong>{category?.title}</strong></Meta>
//               <Meta>{post.created_at}</Meta>

//               <Action color="green" onClick={() => {
//                 setEditingPost(post);
//                 setOpenModal(true);
//               }}>
//                 Edit
//               </Action>

//               <Action color="red" onClick={() => deletePost(post.id)}>
//                 Delete
//               </Action>
//             </Card>
//           );
//         })}
//       </Grid>

//       <FloatingButton onClick={() => {
//         setEditingPost(null);
//         setOpenModal(true);
//       }}>
//         <FaPlus />
//       </FloatingButton>

//       {openModal && (
//         <BlogPostModal
//           post={editingPost}
//           onClose={() => setOpenModal(false)}
//           onSaved={() => fetchPosts(selectedCategory)}
//         />
//       )}
//     </Container>
//   );
// };

// export default BlogPostsManager;




import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import { FaPlus } from "react-icons/fa";
import { Context } from "./Context";
import BlogPostModal from "./BlogPostModal";
import { useNavigate } from "react-router-dom";

/* ================= STYLES (MATCH CATEGORY PAGE) ================= */

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;
`;

const PageTitle = styled.h2`
  text-align: center;
  color: #4f46e5;
  margin-bottom: 30px;
  font-size: 2.2rem;
`;

const FilterRow = styled.div`
  margin-bottom: 30px;
  max-width: 400px;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  font-size: 1rem;
`;

const BlogsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
    background-size: 110%;
  }
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
  padding: 14px;
  z-index: 2;
  color: #fff;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 6px;
  }
`;

const BlogMeta = styled.div`
  font-size: 0.75rem;
  color: #d1d5db;
  font-style: italic;
`;

const Actions = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 12px;
`;

const Action = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
  color: ${({ color }) => color};
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 60px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(90deg, #4f46e5, #6366f1);
  color: white;
  font-size: 1.6rem;
  cursor: pointer;
  box-shadow: 0 12px 25px rgba(0,0,0,0.3);
`;

/* PAGINATION (SAME AS CATEGORY PAGE) */
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

/* ================= COMPONENT ================= */

const BlogPostsManager = () => {
  const { categories } = useContext(Context);

  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [availablePages, setAvailablePages] = useState([1]);
  const limit = 50;

  /* -------- FETCH POSTS (SAME LOGIC AS CATEGORY PAGE) -------- */
  const fetchPosts = (pageNum = 1) => {
    axios
      .get(
        `https://www.mikeconnect.com/mc_api/get_posts_by_category.php`,
        {
          params: {
            category: selectedCategory || 0,
            page: pageNum,
            t: Date.now(),
          },
        }
      )
      .then(res => {
        if (res.data?.success) {
          const fetchedPosts = res.data.posts || [];
          setPosts(fetchedPosts);

          if (fetchedPosts.length === limit) {
            setAvailablePages(prev => {
              const next = pageNum + 1;
              return prev.includes(next) ? prev : [...prev, next];
            });
          }
        } else {
          setPosts([]);
        }
      })
      .catch(() => setPosts([]));
  };

  useEffect(() => {
    setPage(1);
    setAvailablePages([1]);
    fetchPosts(1);
  }, [selectedCategory]);



/* -------- DELETE -------- */
const deletePost = async (id) => {
  // 1️⃣ Confirm deletion
  const confirm = await Swal.fire({
    title: "Delete post?",
    text: "This action cannot be undone",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  });

  if (!confirm.isConfirmed) return;

  // 2️⃣ Show loading
  Swal.fire({
    title: "Deleting...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    // 3️⃣ Send POST request as FormData
    const formData = new FormData();
    formData.append("id", id);

    const res = await axios.post(
      "https://www.mikeconnect.com/mc_api/delete_post.php",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    Swal.close(); // close loading

    if (res.data.success) {
      Swal.fire("Deleted!", "Post deleted successfully.", "success");
      fetchPosts(page); // refresh posts
    } else {
      Swal.fire("Error", res.data.error || "Failed to delete", "error");
      console.log(res.data);
    }
  } catch (err) {
    Swal.close();
    Swal.fire("Error", "Failed to delete post", "error");
    console.error(err);
  }
};


  return (
    <Container>
      <PageTitle>Blog Posts Management</PageTitle>

      <FilterRow>
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(Number(e.target.value))}
        >
          <option value={0}>-- All Categories --</option>
          {categories.map(c => (
            <option key={c.id} value={c.id}>{c.title}</option>
          ))}
        </Select>
      </FilterRow>

      <BlogsGrid>
        {posts.map(post => {
          const category = categories.find(c => c.id == post.category);
          return (
            <BlogCard
              key={post.id}
              bg={post.image || "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"}
              onClick={()=>navigate(`/post/${post.id}`)}
            >
              <Overlay />
              <CardContent>
                <h3>{post.title}</h3>
                <BlogMeta>{category?.title}</BlogMeta>
                <BlogMeta>{new Date(post.created_at).toDateString()}</BlogMeta>

                <Actions>
  <Action
    color="#34d399"
    onClick={(e) => {
      e.stopPropagation(); // ❌ Stop the card's onClick
      setEditingPost(post);
      setOpenModal(true);
    }}
  >
    Edit
  </Action>

  <Action
    color="#f87171"
    onClick={(e) => {
      e.stopPropagation(); // ❌ Stop the card's onClick
      deletePost(post.id);
    }}
  >
    Delete
  </Action>
</Actions>

              </CardContent>
            </BlogCard>
          );
        })}
      </BlogsGrid>

      {/* PAGINATION */}
      <PaginationWrapper>
        {availablePages.map(p => (
          <PageButton
            key={p}
            active={p === page}
            onClick={() => {
              setPage(p);
              fetchPosts(p);
            }}
          >
            {p}
          </PageButton>
        ))}
      </PaginationWrapper>

      <FloatingButton onClick={() => {
        setEditingPost(null);
        setOpenModal(true);
      }}>
        <FaPlus />
      </FloatingButton>

      {openModal && (
        <BlogPostModal
          post={editingPost}
          onClose={() => setOpenModal(false)}
          onSaved={() => fetchPosts(page)}
        />
      )}
    </Container>
  );
};

export default BlogPostsManager;

