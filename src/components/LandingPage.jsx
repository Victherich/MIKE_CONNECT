
import { Link, useNavigate } from "react-router-dom";
import EntertainmentPosts from "./EntertainmentPosts";
import EntrepreneurshipPosts from "./EntrepreneurshipPosts";
import RelationshipPosts from "./RelationshipPosts";
import TrendingPosts from "./TrendingPosts";
import styled, { keyframes } from "styled-components";
import { useContext, useEffect, useState } from "react";
import { Context } from "./Context";
import axios from "axios";
import FeaturedPosts from "./FeaturedPosts";
import FeaturedPosts2 from "./FeaturedPosts2";
import HeroSection from "./HeroSection";

/* -------------------- CONFIG -------------------- */
const CATEGORY_ID = 0; // 🔥 change to any category id you want
const CATEGORY_ID2 = 5;
const CATEGORY_ID3 = 11;
/* -------------------- COMPONENT -------------------- */
export default function LandingPage() {
  const { categories } = useContext(Context);

  const [articles, setArticles] = useState([]);
    const [articles2, setArticles2] = useState([]);
  const [trendingArticles, setTrendingArticles] = useState([]);
  const navigate = useNavigate();


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
    axios
      .get(
        `https://www.mikeconnect.com/mc_api/get_posts_by_category.php?category=${CATEGORY_ID}&t=${Date.now()}`
      )
      .then(res => {
        if (res.data?.success) {
          const posts = res.data.posts || [];

          setArticles(posts);

          // // Trending = just titles
          // setTrendingArticles(posts.slice(0, 5).map(p => p.title));
        }
      })
      .catch(() => {
        setArticles([]);
        setTrendingArticles([]);
      });
  }, []);

  const featured = articles[0];



    useEffect(() => {
    axios
      .get(
        `https://www.mikeconnect.com/mc_api/get_posts_by_category.php?category=${CATEGORY_ID2}&t=${Date.now()}`
      )
      .then(res => {
        if (res.data?.success) {
          const posts = res.data.posts || [];
          setArticles2(posts);
        }
      })
      .catch(() => {
        setArticles2([]);
        
      });
  }, []);


      useEffect(() => {
    axios
      .get(
        `https://www.mikeconnect.com/mc_api/get_posts_by_category.php?category=${CATEGORY_ID3}&t=${Date.now()}`
      )
      .then(res => {
        if (res.data?.success) {
          const posts = res.data.posts || [];
          // setArticles2(posts);
          // Trending = just titles
          setTrendingArticles(posts);
        }
      })
      .catch(() => {
        setTrendingArticles([]);
        
      });
  }, []);

  return (
    <>
    <HeroSection/>
        <PageContainer>

      {/* TRENDING CAROUSEL */}
      <SectionTitle style={{color:"green"}}>🔥 Trending Articles</SectionTitle>
      <CarouselContainer>
        <CarouselWrapper>
          {trendingArticles.map((p, i) => (
            <CarouselItem key={i} onClick={()=>navigate(`/post/${p.id}`)}>{p.title}</CarouselItem>
          ))}
        </CarouselWrapper>
      </CarouselContainer>

      <FeaturedPosts/>
      <FeaturedPosts2/>

      <EntertainmentPosts />

      {/* EDITORIALS GRID */}
      <SectionTitle style={{color:"green"}}>📝 Digital Skills / Tech</SectionTitle>
      <EditorialsGrid>
        {articles2.slice(0,8).map((a, i) => (
          <EditorialCard key={i} onClick={()=>navigate(`/post/${a.id}`)}>
            <EditorialImage src={a.image} />
            <EditorialBody>
              <EditorialCategory>
  {getCategoryNames(a.category)}
</EditorialCategory>

              <EditorialTitle style={{color:"green"}}>{a.title}</EditorialTitle>
              <EditorialMeta>
                {new Date(a.created_at).toDateString()} • admin
              </EditorialMeta>
              {/* <RouterButton to={`/posts/${a.id}`}>
                Read More
              </RouterButton> */}
            </EditorialBody>
          </EditorialCard>
        ))}
      </EditorialsGrid>

      {/* CATEGORIES SECTION */}
      <SectionTitle2 style={{color:"green"}}>📌 Categories Spotlight</SectionTitle2>
      <CategoryGrid>
        {categories.map((c, i) => (
          <CategoryCard key={i}>
            <RouterButton to={`/category/${c.id}`}>
              {c.title}
            </RouterButton>
          </CategoryCard>
        ))}
      </CategoryGrid>

      <TrendingPosts />
      <EntrepreneurshipPosts />
      <RelationshipPosts />

    </PageContainer>
    </>

  );
}



/* -------------------- STYLES -------------------- */
const PageContainer = styled.div`
  padding: 40px;
  font-family: "Poppins", sans-serif;
  background: #f9f9f9;
  color: #222;

  @media(max-width:768px){
    padding:10px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin: 40px 0 20px;
  // background: linear-gradient(90deg, #ff4d4d, #ff9900, #00ccff, #9933ff);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
`;

const SectionTitle2 = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin: 40px 0 20px;
  // background: linear-gradient(90deg, #ff4d4d, #ff9900, #00ccff, #9933ff);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;

@media(max-width:768px){
display:none;
}

`;

/* ---------- CAROUSEL ---------- */
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;
const CarouselContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  border-radius: 10px;
  background: green;
  padding: 20px 0;
  margin-bottom: 40px;
`;
const CarouselWrapper = styled.div`
  display: inline-block;
  animation: ${scroll} 40s linear infinite;
`;
const CarouselItem = styled.span`
  display: inline-block;
  color: white;
  font-size: 16px;
  padding: 0 40px;
  opacity: 0.9;
  cursor:pointer;
  text-decoration:underline;
`;

/* ---------- FEATURE STORY ---------- */
const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0px 10px 30px rgba(0,0,0,0.08);
`;
const FeatureImage = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
`;
const FeatureContent = styled.div`
  padding: 25px;
`;
const FeatureCategory = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #ff4d4d;
`;
const FeatureTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-top: 12px;
`;
const FeatureMeta = styled.div`
  font-size: 14px;
  opacity: 0.7;
  margin-top: 8px;
`;

/* ---------- EDITORIALS GRID ---------- */
const EditorialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
`;
const EditorialCard = styled.div`
  background: white;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0px 6px 18px rgba(0,0,0,0.1);
  transition: 0.3s;
  cursor: pointer;

  &:hover { transform: translateY(-5px); }
`;
const EditorialImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;
const EditorialBody = styled.div`
  padding: 15px;
`;
const EditorialCategory = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #00ccff;
`;
const EditorialTitle = styled.h4`
  font-size: 0.9rem;
  margin: 8px 0;
  color:#444;
`;
const EditorialMeta = styled.div`
  font-size: 12px;
  opacity: 0.6;
`;

/* ---------- CATEGORY GRID ---------- */
const CategoryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  gap: 12px;

  @media(max-width:768px){
  display:none;
  }
`;
const CategoryCard = styled.div`
//   flex: 1 1 150px;
  text-align: center;
`;
const CategoryName = styled.span``;

/* ---------- REACT ROUTER BUTTON ---------- */
const RouterButton = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 18px;
  background: rgba(65, 163, 65, 0.9);
  border-radius: 6px;
  color: white;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover { transform: scale(1.05); }
`;

