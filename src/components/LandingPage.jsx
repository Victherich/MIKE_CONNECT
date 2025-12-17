import { Link } from "react-router-dom";
import EntertainmentPosts from "./EntertainmentPosts";
import EntrepreneurshipPosts from "./EntrepreneurshipPosts";
import RelationshipPosts from "./RelationshipPosts";
import TrendingPosts from "./TrendingPosts";
import styled, { keyframes } from "styled-components";
import { useContext } from "react";
import { Context } from "./Context";

/* -------------------- DUMMY DATA -------------------- */
const trendingArticles = [
  "Over 14m Children Remain Unvaccinated Globally – UN",
  "Over 11m People Living With Diabetes In Nigeria – Expert",
  "How Does the Premium for a Family Floater Plan Change if I Add a Child?",
  "What to Do If You Can’t Afford Urgent Medical Treatment",
  "Nigerian Flag Travels The World As Explorer Visits Seven Continents In 71 Hours",
];

const articles = [
  {
    title: "Over 14m Children Remain Unvaccinated Globally – UN",
    category: "News",
    date: "July 17, 2025",
    author: "admin",
    img: "https://source.unsplash.com/800x600/?health",
  },
  {
    title: "Somkele Iyamah-Idhalama Joins Star Trek Cast",
    category: "Entertainment",
    date: "October 25, 2024",
    author: "admin",
    img: "https://source.unsplash.com/800x600/?entertainment",
  },
  {
    title: "Naira depreciates to N1739/$ in parallel market",
    category: "Entrepreneurship",
    date: "October 25, 2024",
    author: "admin",
    img: "https://source.unsplash.com/800x600/?business",
  },
  {
    title: "Manchester United appoint Ruben Amorim as new head coach",
    category: "Sports",
    date: "November 1, 2024",
    author: "admin",
    img: "https://source.unsplash.com/800x600/?sports",
  },
  {
    title: "US Lady Complains About Nigerian Men Coming To US & Abandoning Their Wives",
    category: "Family",
    date: "October 25, 2024",
    author: "admin",
    img: "https://source.unsplash.com/800x600/?family",
  },
  {
    title: "“Kneeling Down To Propose To A Lady Is Satanic,” Says A Pastor",
    category: "Religion",
    date: "October 28, 2024",
    author: "admin",
    img: "https://source.unsplash.com/800x600/?religion",
  },
];



/* -------------------- COMPONENT -------------------- */
export default function LandingPage() {

    const {categories}=useContext(Context);
    
  return (
    <PageContainer>

      {/* TRENDING CAROUSEL */}
      <SectionTitle>🔥 Trending Articles</SectionTitle>
      <CarouselContainer>
        <CarouselWrapper>
          {trendingArticles.map((t, i) => (
            <CarouselItem key={i}>{t}</CarouselItem>
          ))}
        </CarouselWrapper>
      </CarouselContainer>

      {/* FEATURE STORY */}
      <SectionTitle>🌟 Feature Story</SectionTitle>
      <FeatureCard>
        <FeatureImage src={articles[0].img} />
        <FeatureContent>
          <FeatureCategory>{articles[0].category}</FeatureCategory>
          <FeatureTitle>{articles[0].title}</FeatureTitle>
          <FeatureMeta>{articles[0].date} • {articles[0].author}</FeatureMeta>
          <RouterButton to={`/posts/${articles[0].title}`}>Read More</RouterButton>
        </FeatureContent>
      </FeatureCard>

      <EntertainmentPosts/>

      {/* EDITORIALS GRID */}
      <SectionTitle>📝 Editorials Grid</SectionTitle>
      <EditorialsGrid>
        {articles.map((a, i) => (
          <EditorialCard key={i}>
            <EditorialImage src={a.img} />
            <EditorialBody>
              <EditorialCategory>{a.category}</EditorialCategory>
              <EditorialTitle>{a.title}</EditorialTitle>
              <EditorialMeta>{a.date} • {a.author}</EditorialMeta>
              <RouterButton to={`/posts/${a.title}`}>Read More</RouterButton>
            </EditorialBody>
          </EditorialCard>
        ))}
      </EditorialsGrid>

      {/* CATEGORIES SECTION */}
      <SectionTitle>📌 Categories Spotlight</SectionTitle>
      <CategoryGrid>
        {categories.map((c, i) => (
          <CategoryCard key={i}>
            <RouterButton to={`/category/${c.id}`}>{c.title}</RouterButton>
          </CategoryCard>
        ))}
      </CategoryGrid>

      <TrendingPosts/>
      <EntrepreneurshipPosts/>
      <RelationshipPosts/>

    </PageContainer>
  );
}

/* -------------------- STYLES -------------------- */
const PageContainer = styled.div`
  padding: 40px;
  font-family: "Poppins", sans-serif;
  background: #f9f9f9;
  color: #222;
`;

const SectionTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin: 40px 0 20px;
  background: linear-gradient(90deg, #ff4d4d, #ff9900, #00ccff, #9933ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  background: #111;
  padding: 20px 0;
  margin-bottom: 40px;
`;
const CarouselWrapper = styled.div`
  display: inline-block;
  animation: ${scroll} 20s linear infinite;
`;
const CarouselItem = styled.span`
  display: inline-block;
  color: white;
  font-size: 16px;
  padding: 0 40px;
  opacity: 0.9;
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
  box-shadow: 0px 6px 18px rgba(0,0,0,0.06);
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
  font-size: 16px;
  margin: 8px 0;
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
  background: #ff9f1c;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover { transform: scale(1.05); }
`;
