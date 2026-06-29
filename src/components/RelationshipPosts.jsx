

// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { Slide } from "react-awesome-reveal";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export default function RelationshipPosts() {
//   const categoryId = 2; // Relationship posts category ID
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

 

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
//           setError("No posts");
//           setLoading(false);
//           clearInterval(interval);
//         }
//         return;
//       }

//       // ✅ Filter category 2 (supports "2,5,18")
//       const categoryPosts = allPosts.filter(post => {
//         if (!post.category) return false;

//         const cats = post.category.split(",").map(Number);
//         return cats.includes(2);
//       });

//       // ⚠️ wait specifically for category 2
//       if (!categoryPosts.length) {
//         if (attempts >= maxAttempts) {
//           setPosts([]);
//           // setError("No category posts found");
//           setLoading(false);
//           clearInterval(interval);
//         }
//         return;
//       }

//       // ✅ Sort latest first
//       const sorted = [...categoryPosts].sort(
//         (a, b) => new Date(b.created_at) - new Date(a.created_at)
//       );

//       // ✅ Take latest 4
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
//   if (posts.length === 0) return;
//   // <Container>
//   //   <SectionTitle style={{color:'green'}}>💖 Relationship</SectionTitle>
//   //   <Status>No posts available...</Status>
//   //   </Container>;

//   return (
//     <Container>
//       <SectionTitle style={{color:'green'}}>💖 Relationship</SectionTitle>
//       <Grid>
//         {/* Feature Card */}
//         <Slide direction="up" duration={2000} triggerOnce>
//           <RouterButton to={`/post/${posts[0].slug}`}>
//             <FeatureCard>
//               <FeatureImage src={posts[0].image} />
//               <FeatureContent>
//                 <FeatureTitle>{posts[0].title}</FeatureTitle>
//                 <FeatureDate>{new Date(posts[0].created_at).toDateString()}</FeatureDate>
//               </FeatureContent>
//             </FeatureCard>
//           </RouterButton>
//         </Slide>

//         {/* Small Cards */}
//         <SmallCards>
//           {posts.slice(1).map((post, i) => (
//             <Slide key={i} direction="up" duration={2000} delay={i * 200} triggerOnce>
//               <RouterButton to={`/post/${post.slug}`}>
//                 <SmallCard>
//                   <SmallImage src={post.image} />
//                   <SmallContent>
//                     <SmallTitle>{post.title}</SmallTitle>
//                     <SmallDate>{new Date(post.created_at).toDateString()}</SmallDate>
//                   </SmallContent>
//                 </SmallCard>
//               </RouterButton>
//             </Slide>
//           ))}
//         </SmallCards>
//       </Grid>
//     </Container>
//   );
// }

// // ---------------- STYLES ---------------- //

// const Container = styled.div`
//   margin: 60px 0;
// `;

// const SectionTitle = styled.h2`
//   font-size: 28px;
//   font-weight: 700;
//   margin-bottom: 25px;
//   // background: linear-gradient(90deg, #ff6b81, #ffb347, #ff6b6b);
//   // -webkit-background-clip: text;
//   // -webkit-text-fill-color: transparent;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: 2fr 1fr;
//   gap: 20px;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

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

// const FeatureImage = styled.img`
//   width: 100%;
//   height: 350px;
//   object-fit: cover;
//   object-position:top;
// `;

// const FeatureContent = styled.div`
//   position: absolute;
//   bottom: 15px;
//   left: 15px;
//   color: white;
//   text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7);
// `;

// const FeatureTitle = styled.h3`
//   font-size: 22px;
//   font-weight: 700;
// `;

// const FeatureDate = styled.div`
//   font-size: 14px;
//   margin-top: 6px;
// `;

// const SmallCards = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;

//   @media(max-width:768px){
//   flex-direction:row;
//   flex-wrap:wrap;
//   justify-content:center;
//   align-items:center;
//   }
// `;

// const SmallCard = styled.div`
//   display: flex;
//   gap: 12px;
//   background: white;
//   border-radius: 12px;
//   overflow: hidden;
//   box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
//   cursor: pointer;
//   transition: 0.3s;


//  @media(max-width:768px){
// // width:300px;
//   }

//   &:hover {
//     transform: translateY(-5px);
//   }

//   @media (max-width: 768px) {
//     flex-direction: column;
//     width:280px;
//   }
// `;

// const SmallImage = styled.img`
//   width: 120px;
//   height: 100px;
//   object-fit: cover;
//   flex-shrink: 0;

//   @media (max-width: 768px) {
//     width: 100%;
//     height: 180px;
//   }
// `;

// const SmallContent = styled.div`
//   padding: 10px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// const SmallTitle = styled.h4`
//   font-size: 14px;
//   font-weight: 600;
// `;

// const SmallDate = styled.div`
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




import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export default function RelationshipPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
            setError("No posts");
            setLoading(false);
            clearInterval(interval);
          }
          return;
        }

        // ✅ Filter category 2 (supports "2,5,18")
        const categoryPosts = allPosts.filter(post => {
          if (!post.category) return false;
          const cats = post.category.split(",").map(Number);
          return cats.includes(2);
        });

        // ⚠️ wait specifically for category 2
        if (!categoryPosts.length) {
          if (attempts >= maxAttempts) {
            setPosts([]);
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
      <SectionTitle>💖 Relationship</SectionTitle>
      <Grid>
        {/* Feature Card Layout */}
        <Slide direction="up" duration={2000} triggerOnce>
          <RouterButton to={`/post/${posts[0].slug}`}>
            <FeatureCard>
              <FeatureImageWrapper>
                <FeatureImage src={posts[0].image} alt={posts[0].title} />
              </FeatureImageWrapper>
              <FeatureContent>
                <FeatureTitle>{posts[0].title}</FeatureTitle>
                <FeatureDate>
                  {new Date(posts[0].created_at).toDateString()}
                </FeatureDate>
              </FeatureContent>
            </FeatureCard>
          </RouterButton>
        </Slide>

        {/* Small Cards Layout */}
        <SmallCardsContainer>
          {posts.slice(1).map((post, i) => (
            <Slide key={post.id || i} direction="up" duration={2000} delay={i * 200} triggerOnce>
              <RouterButton to={`/post/${post.slug}`}>
                <SmallCard>
                  <SmallImageWrapper>
                    <SmallImage src={post.image} alt={post.title} />
                  </SmallImageWrapper>
                  <SmallContent>
                    <SmallTitle>{post.title}</SmallTitle>
                    <SmallDate>
                      {new Date(post.created_at).toDateString()}
                    </SmallDate>
                  </SmallContent>
                </SmallCard>
              </RouterButton>
            </Slide>
          ))}
        </SmallCardsContainer>
      </Grid>
    </Container>
  );
}

// ---------------- STYLES ---------------- //

const Container = styled.div`
  margin: 60px 0;
  font-family: "Poppins", sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: green;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 32px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

/* --- Big Main Spotlight Feature Card Styles --- */
const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  // background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  // box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-4px);
    // box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureImageWrapper = styled.div`
  max-width: 100%;
  max-height: 100%;
  // background-color: #f3f4f6; /* Backing block blends landscape/portrait images naturally */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 576px) {
    // max-height: 240px;
  }
`;

const FeatureImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Complete un-cropped visualization */
  display: block;
`;

const FeatureContent = styled.div`
  padding: 20px 8px 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FeatureTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  // color: #111827;
  color:green;
  margin: 0;
  line-height: 1.4;
`;

const FeatureDate = styled.div`
  font-size: 0.85rem;
  color: #6b7280;
`;

/* --- Right Side Smaller Sidebar Items Styles --- */
const SmallCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
  }
`;

const SmallCard = styled.div`
  display: flex;
  gap: 16px;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0;
    width: 280px;
    margin: 0 auto;
  }
`;

const SmallImageWrapper = styled.div`
  width: 140px;
  height: 110px;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 576px) {
    width: 100%;
    height: 180px;
  }
`;

const SmallImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Fully occupies the specified container boundaries */
  display: block;
`;

const SmallContent = styled.div`
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

const SmallTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
  line-height: 1.4;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const SmallDate = styled.div`
  font-size: 0.8rem;
  color: #6b7280;
`;

const RouterButton = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  width: 100%;
`;

const Status = styled.div`
  text-align: center;
  font-size: 1.1rem;
  color: #6b7280;
  margin: 40px 0;
`;