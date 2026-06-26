



// import React, { useContext, useEffect, useState } from "react";
// import styled from "styled-components";
// import { Slide } from "react-awesome-reveal";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { Context } from "./Context";

// export default function EntrepreneurshipPosts() {
//   const categoryId = 3; // Assuming 'Entrepreneurship' category ID is 5
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const {categories}=useContext(Context)


//   const getCategoryNames = (categoryString) => {
//   if (!categoryString || !categories?.length) return "";

//   const ids = categoryString
//     .split(",")
//     .map(id => id.trim())
//     .filter(Boolean);

//   return ids
//     .map(id => categories.find(c => String(c.id) === id)?.title)
//     .filter(Boolean)
//     .join(", ");
// };


// useEffect(() => {
//   const cacheKey = "all_posts";
//   let attempts = 0;
//   const maxAttempts = 100;

//   const interval = setInterval(() => {
//     attempts++;

//     try {
//       const cached = localStorage.getItem(cacheKey);

//       if (!cached) {
//         console.log(`Attempt ${attempts}: no cached posts`);

//         if (attempts >= maxAttempts) {
//           setPosts([]);
//           setError("No cached posts");
//           setLoading(false);
//           clearInterval(interval);
//         }

//         return;
//       }

//       const allPosts = JSON.parse(cached);
//       if (!allPosts.length) {
//         if (attempts >= maxAttempts) {
//           setPosts([]);
//           setError("No posts available");
//           setLoading(false);
//           clearInterval(interval);
//         }
//         return;
//       }

//       // ✅ Filter category 3 (handles "3,15")
//       const categoryPosts = allPosts.filter(post => {
//         if (!post.category) return false;

//         const cats = post.category.split(",").map(Number);
//         return cats.includes(3);
//       });

//       // ⚠️ wait specifically for category 3
//       if (!categoryPosts.length) {
//         if (attempts >= maxAttempts) {
//           setPosts([]);
//           setError("No posts");
//           setLoading(false);
//           clearInterval(interval);
//         }
//         return;
//       }

//       // ✅ Sort latest first
//       const sorted = [...categoryPosts].sort(
//         (a, b) => new Date(b.created_at) - new Date(a.created_at)
//       );

//       // ✅ Take last 4
//       const lastFour = sorted.slice(0, 4);

//       setPosts(lastFour);
//       setLoading(false);

//       // ✅ stop polling on success
//       clearInterval(interval);

//     } catch (err) {
//       setPosts([]);
//       setError("Error loading cached posts");
//       setLoading(false);
//       clearInterval(interval);
//     }
//   }, 500);

//   return () => clearInterval(interval);
// }, []);

//   // if (loading) return <Status>Loading posts...</Status>;
//   if (error) return <Status>{error}</Status>;
//   if (posts.length === 0) return ;

// return (
//   <Container>
//     <SectionTitle style={{color:"green"}}>💼 Entrepreneurship & Business</SectionTitle>

//     <Grid>
//       {posts.map((post, i) => (
//         // <Slide key={post.id} direction="up" duration={1200} triggerOnce>
//           <BlogCard
//           key={post.id}
//             bg={post.image}
//             onClick={() => window.location.href = `/post/${post.slug}`}
//           >
//             <Overlay />
//             <CardContent>
//               <Category>{getCategoryNames(post.category)}</Category>
//               <h3>{post.title}</h3>
//               <Meta>{new Date(post.created_at).toDateString()}</Meta>
//             </CardContent>
//           </BlogCard>
//         // </Slide>
//       ))}
//     </Grid>
//   </Container>
// );

// }

// // ---------------- STYLED COMPONENTS ---------------- //

// // const Container = styled.div`
// //   margin: 60px 0;
// // `;

// // const SectionTitle = styled.h2`
// //   font-size: 28px;
// //   font-weight: 700;
// //   margin-bottom: 25px;
// //   background: linear-gradient(90deg, #00ccff, #ff9900, #33ff77, #ff33cc);
// //   -webkit-background-clip: text;
// //   -webkit-text-fill-color: transparent;
// // `;

// // const Grid = styled.div`
// //   display: grid;
// //   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
// //   gap: 25px;
// // `;

// // const Card = styled.div.withConfig({
// //   shouldForwardProp: (prop) => prop !== "horizontal",
// // })`
// //   display: flex;
// //   flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
// //   background: white;
// //   border-radius: 14px;
// //   overflow: hidden;
// //   box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
// //   transition: 0.3s;
// //   cursor: pointer;

// //   &:hover {
// //     transform: translateY(-5px);
// //   }

// //   @media (max-width: 768px) {
// //     flex-direction: column;
// //   }
// // `;

// // const CardImage = styled.img.withConfig({
// //   shouldForwardProp: (prop) => prop !== "horizontal",
// // })`
// //   width: ${({ horizontal }) => (horizontal ? "180px" : "100%")};
// //   height: ${({ horizontal }) => (horizontal ? "140px" : "200px")};
// //   object-fit: cover;
// //   flex-shrink: 0;
// // `;

// // const CardBody = styled.div`
// //   padding: 15px;
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: center;
// // `;

// // const Category = styled.span`
// //   font-size: 12px;
// //   font-weight: 700;
// //   color: #00ccff;
// //   margin-bottom: 6px;
// // `;

// // const Title = styled.h3`
// //   font-size: 0.9rem;
// //   font-weight: 600;
// //   margin-bottom: 6px;
// // `;

// // const Meta = styled.div`
// //   font-size: 12px;
// //   opacity: 0.6;
// // `;

// // const RouterButton = styled(Link)`
// //   display: block;
// //   text-decoration: none;
// //   color: inherit;
// // `;

// // const Status = styled.div`
// //   text-align: center;
// //   font-size: 1.2rem;
// //   color: #555;
// //   margin: 40px 0;
// // `;



// const Container = styled.div`
//   margin: 60px 0;
// `;

// const SectionTitle = styled.h2`
//   font-size: 28px;
//   font-weight: 700;
//   margin-bottom: 25px;
//   // background: linear-gradient(90deg, #00ccff, #ff9900, #33ff77, #ff33cc);
//   // -webkit-background-clip: text;
//   // -webkit-text-fill-color: transparent;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 28px;
// `;

// /* 🔥 SAME CARD STYLE AS CATEGORY PAGE */
// const BlogCard = styled.div`
//   position: relative;
//   height: 220px;
//   border-radius: 18px;
//   overflow: hidden;
//   background-image: url(${props => props.bg});
//   background-size: cover;
//   background-position: center;
//   box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
//   cursor: pointer;
//   transition: transform 0.4s ease, box-shadow 0.4s ease;
//   max-width:400px;

//   &:hover {
//     transform: translateY(-8px) scale(1.02);
//     box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
//     background-size: 110%;
//   }
// `;

// const Overlay = styled.div`
//   position: absolute;
//   inset: 0;
//   background: linear-gradient(
//     to top,
//     rgba(0, 0, 0, 1),
//     rgba(0, 0, 0, 0.7),
//     rgba(0, 0, 0, 0.05)
//   );
// `;

// const CardContent = styled.div`
//   position: absolute;
//   bottom: 0;
//   padding: 12px;
//   z-index: 2;
//   color: #fff;

//   h3 {
//     font-size: 0.8rem;
//     font-weight: 600;
//     margin: 4px 0;
//   }
// `;

// const Category = styled.span`
//   font-size: 0.7rem;
//   font-weight: 600;
//   color: #38bdf8;
//   text-transform: uppercase;
// `;

// const Meta = styled.div`
//   font-size: 0.7rem;
//   color: #d1d5db;
//   font-style: italic;
// `;

// const Status = styled.div`
//   text-align: center;
//   font-size: 1.2rem;
//   color: #555;
//   margin: 40px 0;
// `;









import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Context } from "./Context";

export default function EntrepreneurshipPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categories } = useContext(Context);

  const getCategoryNames = (categoryString) => {
    if (!categoryString || !categories?.length) return "";

    const ids = categoryString
      .split(",")
      .map(id => id.trim())
      .filter(Boolean);

    return ids
      .map(id => categories.find(c => String(c.id) === id)?.title)
      .filter(Boolean)
      .join(", ");
  };

  useEffect(() => {
    const cacheKey = "all_posts";
    let attempts = 0;
    const maxAttempts = 100;

    const interval = setInterval(() => {
      attempts++;

      try {
        const cached = localStorage.getItem(cacheKey);

        if (!cached) {
          console.log(`Attempt ${attempts}: no cached posts`);

          if (attempts >= maxAttempts) {
            setPosts([]);
            setError("No cached posts");
            setLoading(false);
            clearInterval(interval);
          }
          return;
        }

        const allPosts = JSON.parse(cached);
        if (!allPosts.length) {
          if (attempts >= maxAttempts) {
            setPosts([]);
            setError("No posts available");
            setLoading(false);
            clearInterval(interval);
          }
          return;
        }

        // ✅ Filter category 3 (handles "3,15")
        const categoryPosts = allPosts.filter(post => {
          if (!post.category) return false;
          const cats = post.category.split(",").map(Number);
          return cats.includes(3);
        });

        // ⚠️ wait specifically for category 3
        if (!categoryPosts.length) {
          if (attempts >= maxAttempts) {
            setPosts([]);
            setError("No posts");
            setLoading(false);
            clearInterval(interval);
          }
          return;
        }

        // ✅ Sort latest first
        const sorted = [...categoryPosts].sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );

        // ✅ Take latest 4
        const lastFour = sorted.slice(0, 4);

        setPosts(lastFour);
        setLoading(false);
        clearInterval(interval);

      } catch (err) {
        setPosts([]);
        setError("Error loading cached posts");
        setLoading(false);
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  if (error) return <Status>{error}</Status>;
  if (posts.length === 0) return null;

  return (
    <Container>
      <SectionTitle>💼 Entrepreneurship & Business</SectionTitle>

      <Grid>
        {posts.map((post) => (
          <RouterButton to={`/post/${post.slug}`} key={post.id}>
            <BlogCard>
              <ImageWrapper>
                <BlogImage src={post.image} alt={post.title} />
              </ImageWrapper>
              
              <CardContent>
                <Category>{getCategoryNames(post.category)}</Category>
                <h3>{post.title}</h3>
                <Meta>{new Date(post.created_at).toDateString()}</Meta>
              </CardContent>
            </BlogCard>
          </RouterButton>
        ))}
      </Grid>
    </Container>
  );
}

// ---------------- STYLED COMPONENTS ---------------- //

const Container = styled.div`
  margin: 60px 0;
  font-family: "Poppins", sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 25px;
  color: green;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
`;

const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  // background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  // box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-4px);
    // box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ImageWrapper = styled.div`
  max-width: 100%;
  max-height: 100%;
  // background-color: #f3f4f6; /* Serves as clean background framing for variable layouts */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const BlogImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Assures full aspect visible with zero clipping */
  display: block;
`;

const CardContent = styled.div`
  padding: 16px 8px 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    // color: #111827;
    color:green;
    margin: 4px 0 0 0;
    line-height: 1.4;

    /* Elegant inline bounding box line restriction */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const Category = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #0284c7;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Meta = styled.div`
  font-size: 0.8rem;
  color: #6b7280;
  margin-top: 2px;
`;

const RouterButton = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  max-width: 400px;
  width: 100%;
`;

const Status = styled.div`
  text-align: center;
  font-size: 1.1rem;
  color: #6b7280;
  margin: 40px 0;
`;