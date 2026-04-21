
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import axios from "axios";

export default function FeaturedPosts() {
  const categoryId = 0; // Relationship posts category ID
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          const lastFourPosts = fetchedPosts.slice(0,4); // Take only last 4 posts
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
      <SectionTitle style={{color:"green"}}>Featured Posts</SectionTitle>
      <Grid>
        {/* Feature Card */}
        <Slide direction="up" duration={2000} triggerOnce>
          <RouterButton to={`/post/${posts[0].slug}`}>
            <FeatureCard>
              <FeatureImage src={posts[0].image} />
              <FeatureContent>
                <FeatureTitle>{posts[0].title}</FeatureTitle>
                <FeatureDate>{new Date(posts[0].created_at).toDateString()}</FeatureDate>
              </FeatureContent>
            </FeatureCard>
          </RouterButton>
        </Slide>

        {/* Small Cards */}
        <SmallCards>
          {posts.slice(1).map((post, i) => (
            <Slide key={i} direction="up" duration={2000} delay={i * 200} triggerOnce>
              <RouterButton to={`/post/${post.slug}`}>
                <SmallCard>
                  <SmallImage src={post.image} />
                  <SmallContent>
                    <SmallTitle>{post.title}</SmallTitle>
                    <SmallDate>{new Date(post.created_at).toDateString()}</SmallDate>
                  </SmallContent>
                </SmallCard>
              </RouterButton>
            </Slide>
          ))}
        </SmallCards>
      </Grid>
    </Container>
  );
}

// ---------------- STYLES ---------------- //

const Container = styled.div`
  margin: 60px 0;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 25px;
  // background: linear-gradient(90deg, #ff6b81, #ffb347, #ff6b6b);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

   
`;

// const FeatureCard = styled.div`
//   position: relative;
//   border-radius: 14px;
//   overflow: hidden;
//   cursor: pointer;
//   box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
//   transition: 0.3s;

//   &:hover {
//     transform: scale(1.03);
//   }
// `;

const FeatureCard = styled.div`
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    transform: scale(1.03);
  }

  /* Overlay */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 1) 0%,   /* dark at bottom */
      rgba(0, 0, 0, 0.5) 40%,
      rgba(0, 0, 0, 0.05) 70%,
      rgba(0, 0, 0, 0) 100%   /* transparent at top */
    );
    z-index: 1;
  }
`;




const FeatureImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  object-position:top;
`;

// const FeatureContent = styled.div`
//   position: absolute;
//   bottom: 15px;
//   left: 15px;
//   color: white;
//   text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7);
// `;

const FeatureContent = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: white;
  z-index: 2; /* important */
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7);
`;

const FeatureTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
`;

const FeatureDate = styled.div`
  font-size: 14px;
  margin-top: 6px;
`;

const SmallCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media(max-width:768px){
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  }
`;

const SmallCard = styled.div`
  display: flex;
  gap: 12px;
  // background: #fff0f5;
  background:white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.3s;


  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
     width:300px;
  }
`;

const SmallImage = styled.img`
  width: 120px;
  height: 100px;
  object-fit: cover;
  object-position:top;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
  }
`;

const SmallContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SmallTitle = styled.h4`
  font-size: 0.7rem;
  font-weight: 600;
  color:green;
  margin-bottom:5px;
`;

const SmallDate = styled.div`
  font-size: 0.7rem;
  opacity: 0.6;
`;

const RouterButton = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const Status = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #555;
  margin: 40px 0;
`;









// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { Slide } from "react-awesome-reveal";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function FeaturedPosts() {
//   const categoryId = 0;
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const res = await axios.get(
//           `https://www.mikeconnect.com/mc_api/get_posts_by_category.php?category=${categoryId}&t=${Date.now()}`
//         );

//         if (res.data?.success) {
//           const fetchedPosts = res.data.posts || [];
//           const lastFourPosts = fetchedPosts.slice(0, 4);
//           setPosts(lastFourPosts);
//         } else {
//           setPosts([]);
//           setError(res.data?.error || "No posts found");
//         }
//       } catch (err) {
//         setPosts([]);
//         setError("Network error");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (loading) return <Status>Loading posts...</Status>;
//   if (error) return <Status>{error}</Status>;
//   if (posts.length === 0) return <Status>No posts available.</Status>;

//   return (
//     <Container>
//       <SectionTitle>Featured Posts</SectionTitle>

//       <Grid>
//         {posts.map((post, i) => (
//           <Slide
//             key={post.id}
//             direction="up"
//             duration={1200}
//             delay={i * 150}
//             triggerOnce
//           >
//             <BlogCard
//               bg={post.image}
//               onClick={() => navigate(`/post/${post.slug}`)}
//             >
//               <Overlay />
//               <CardContent>
//                 <h3>{post.title}</h3>
//                 <BlogMeta>
//                   {new Date(post.created_at).toDateString()}
//                 </BlogMeta>
//               </CardContent>
//             </BlogCard>
//           </Slide>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// /* ================= STYLES ================= */

// const Container = styled.div`
//   margin: 60px 0;
// `;

// const SectionTitle = styled.h2`
//   font-size: 28px;
//   font-weight: 700;
//   margin-bottom: 25px;
//   color: green;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

//   gap: 25px;
// `;

// const BlogCard = styled.div`
//   position: relative;
//   height: 220px;
//   border-radius: 18px;
//   overflow: hidden;
//   background-image: url(${props => props.bg});
//   background-size: contain;
//   background-position: center;
//   box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
//   cursor: pointer;
//   transition: transform 0.4s ease, box-shadow 0.4s ease;
//     max-width:600px;

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
//     margin-bottom: 5px;
//   }
// `;

// const BlogMeta = styled.div`
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