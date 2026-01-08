
// import React from "react";
// import styled from "styled-components";
// import { Slide } from "react-awesome-reveal";
// import { Link } from "react-router-dom";

// // ---------------- DUMMY ENTREPRENEURSHIP POSTS ---------------- //
// const entrepreneurshipPosts = [
//   {
//     title: "Naira depreciates to N1739/$ in parallel market",
//     category: "Business",
//     date: "October 25, 2024",
//     img: "https://source.unsplash.com/400x300/?business",
//   },
//   {
//     title: "Refinery boost – Dangote now world’s 65th richest with $28bn net worth",
//     category: "Business",
//     date: "October 18, 2024",
//     img: "https://source.unsplash.com/400x300/?factory",
//   },
//   {
//     title: "Report: Sam Raimi May Take Doctor Strange for One More Magical Spin",
//     category: "News",
//     date: "October 5, 2024",
//     img: "https://source.unsplash.com/400x300/?technology",
//   },
//   {
//     title: "NordPass Celebrates Prime Day with a Mind-Blowing 50% Off",
//     category: "Tech",
//     date: "October 5, 2024",
//     img: "https://source.unsplash.com/400x300/?computer",
//   },
//   {
//     title: "The Galaxy Z Fold 6 Is Almost Free On Samsung Site",
//     category: "Tech",
//     date: "October 5, 2024",
//     img: "https://source.unsplash.com/400x300/?smartphone",
//   },
//   {
//     title: "CBN sold $543.5m to stabilize FX market in September",
//     category: "Finance",
//     date: "October 5, 2024",
//     img: "https://source.unsplash.com/400x300/?money",
//   },
// ];

// // ---------------- COMPONENT ---------------- //
// export default function EntrepreneurshipPosts() {
//   return (
//     <Container>
//       <SectionTitle>💼 Entrepreneurship & Business</SectionTitle>
//       <Grid>
//         {entrepreneurshipPosts.map((post, i) => (
//           <Slide key={i} direction="up" duration={3000} triggerOnce>
//             <RouterButton to={`/posts/${encodeURIComponent(post.title)}`}>
//               <Card horizontal={i % 2 === 0}>
//                 <CardImage src={post.img} horizontal={i % 2 === 0} />
//                 <CardBody>
//                   <Category>{post.category}</Category>
//                   <Title>{post.title}</Title>
//                   <Meta>{post.date}</Meta>
//                 </CardBody>
//               </Card>
//             </RouterButton>
//           </Slide>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// // ---------------- STYLED COMPONENTS ---------------- //

// const Container = styled.div`
//   margin: 60px 0;
// `;

// const SectionTitle = styled.h2`
//   font-size: 28px;
//   font-weight: 700;
//   margin-bottom: 25px;
//   background: linear-gradient(90deg, #00ccff, #ff9900, #33ff77, #ff33cc);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 25px;
// `;

// // CARD TYPES
// const Card = styled.div.withConfig({
//   shouldForwardProp: (prop) => prop !== "horizontal",
// })`
//   display: flex;
//   flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
//   background: white;
//   border-radius: 14px;
//   overflow: hidden;
//   box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
//   transition: 0.3s;
//   cursor: pointer;

//   &:hover {
//     transform: translateY(-5px);
//   }

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const CardImage = styled.img.withConfig({
//   shouldForwardProp: (prop) => prop !== "horizontal",
// })`
//   width: ${({ horizontal }) => (horizontal ? "180px" : "100%")};
//   height: ${({ horizontal }) => (horizontal ? "140px" : "200px")};
//   object-fit: cover;
//   flex-shrink: 0;
// `;

// const CardBody = styled.div`
//   padding: 15px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// const Category = styled.span`
//   font-size: 12px;
//   font-weight: 700;
//   color: #00ccff;
//   margin-bottom: 6px;
// `;

// const Title = styled.h3`
//   font-size: 16px;
//   font-weight: 600;
//   margin-bottom: 6px;
// `;

// const Meta = styled.div`
//   font-size: 12px;
//   opacity: 0.6;
// `;

// // ---------- REACT ROUTER BUTTON ----------
// const RouterButton = styled(Link)`
//   display: block;
//   text-decoration: none;
//   color: inherit;
// `;





import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "./Context";

export default function EntrepreneurshipPosts() {
  const categoryId = 3; // Assuming 'Entrepreneurship' category ID is 5
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {categories}=useContext(Context)


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
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(
          `https://www.mikeconnect.com/mc_api/get_posts_by_category.php?category=${categoryId}&t=${Date.now()}`
        );

        if (res.data?.success) {
          const fetchedPosts = res.data.posts || [];
          const lastFourPosts = fetchedPosts.slice(-4); // last 4 posts
          setPosts(lastFourPosts);
        } else {
          setPosts([]);
          setError(res.data?.error || "No posts found");
        }
      } catch (err) {
        setPosts([]);
        setError("Network error");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <Status>Loading posts...</Status>;
  if (error) return <Status>{error}</Status>;
  if (posts.length === 0) return <Status>No posts available.</Status>;

return (
  <Container>
    <SectionTitle style={{color:"green"}}>💼 Entrepreneurship & Business</SectionTitle>

    <Grid>
      {posts.map((post, i) => (
        <Slide key={post.id} direction="up" duration={1200} triggerOnce>
          <BlogCard
            bg={post.image}
            onClick={() => window.location.href = `/post/${post.id}`}
          >
            <Overlay />
            <CardContent>
              <Category>{getCategoryNames(post.category)}</Category>
              <h3>{post.title}</h3>
              <Meta>{new Date(post.created_at).toDateString()}</Meta>
            </CardContent>
          </BlogCard>
        </Slide>
      ))}
    </Grid>
  </Container>
);

}

// ---------------- STYLED COMPONENTS ---------------- //

// const Container = styled.div`
//   margin: 60px 0;
// `;

// const SectionTitle = styled.h2`
//   font-size: 28px;
//   font-weight: 700;
//   margin-bottom: 25px;
//   background: linear-gradient(90deg, #00ccff, #ff9900, #33ff77, #ff33cc);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 25px;
// `;

// const Card = styled.div.withConfig({
//   shouldForwardProp: (prop) => prop !== "horizontal",
// })`
//   display: flex;
//   flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
//   background: white;
//   border-radius: 14px;
//   overflow: hidden;
//   box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
//   transition: 0.3s;
//   cursor: pointer;

//   &:hover {
//     transform: translateY(-5px);
//   }

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const CardImage = styled.img.withConfig({
//   shouldForwardProp: (prop) => prop !== "horizontal",
// })`
//   width: ${({ horizontal }) => (horizontal ? "180px" : "100%")};
//   height: ${({ horizontal }) => (horizontal ? "140px" : "200px")};
//   object-fit: cover;
//   flex-shrink: 0;
// `;

// const CardBody = styled.div`
//   padding: 15px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// const Category = styled.span`
//   font-size: 12px;
//   font-weight: 700;
//   color: #00ccff;
//   margin-bottom: 6px;
// `;

// const Title = styled.h3`
//   font-size: 0.9rem;
//   font-weight: 600;
//   margin-bottom: 6px;
// `;

// const Meta = styled.div`
//   font-size: 12px;
//   opacity: 0.6;
// `;

// const RouterButton = styled(Link)`
//   display: block;
//   text-decoration: none;
//   color: inherit;
// `;

// const Status = styled.div`
//   text-align: center;
//   font-size: 1.2rem;
//   color: #555;
//   margin: 40px 0;
// `;



const Container = styled.div`
  margin: 60px 0;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 25px;
  // background: linear-gradient(90deg, #00ccff, #ff9900, #33ff77, #ff33cc);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 28px;
`;

/* 🔥 SAME CARD STYLE AS CATEGORY PAGE */
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
  padding: 12px;
  z-index: 2;
  color: #fff;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin: 4px 0;
  }
`;

const Category = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  color: #38bdf8;
  text-transform: uppercase;
`;

const Meta = styled.div`
  font-size: 0.7rem;
  color: #d1d5db;
  font-style: italic;
`;

const Status = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #555;
  margin: 40px 0;
`;
