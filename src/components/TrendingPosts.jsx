
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// ---------------- DUMMY TRENDING POSTS ---------------- //
const trendingPosts = [
  {
    title: "Over 14m Children Remain Unvaccinated Globally – UN",
    category: "News",
    date: "July 17, 2025",
    img: "https://source.unsplash.com/400x300/?health",
  },
  {
    title: "Nigerian Flag Travels The World As Explorer Visits Seven Continents In 71 Hours",
    category: "News",
    date: "March 26, 2025",
    img: "https://source.unsplash.com/400x300/?world",
  },
  {
    title: "If You Want Trouble, It Is My Work – Falz To VeryDarkMan",
    category: "Entertainment",
    date: "October 25, 2024",
    img: "https://source.unsplash.com/400x300/?entertainment",
  },
  {
    title: "Naira depreciates to N1739/$ in parallel market",
    category: "Business",
    date: "October 25, 2024",
    img: "https://source.unsplash.com/400x300/?business",
  },
  {
    title: "Manchester United appoint Ruben Amorim as new head coach",
    category: "Sports",
    date: "November 1, 2024",
    img: "https://source.unsplash.com/400x300/?sports",
  },
  {
    title: "US Lady Complains About Nigerian Men Coming To US & Abandoning Their Wives",
    category: "Family",
    date: "October 25, 2024",
    img: "https://source.unsplash.com/400x300/?family",
  },
];

// ---------------- COMPONENT ---------------- //
export default function TrendingPosts() {
  return (
    <Container>
      <SectionTitle>🔥 Trending Posts</SectionTitle>
      <PostsGrid>
        {trendingPosts.map((post, i) => (
          <RouterButton key={i} to={`/posts/${encodeURIComponent(post.title)}`}>
            <PostCard large={i % 3 === 0}>
              <PostImage src={post.img} large={i % 3 === 0} />
              <PostContent>
                <PostCategory>{post.category}</PostCategory>
                <PostTitle>{post.title}</PostTitle>
                <PostMeta>{post.date}</PostMeta>
              </PostContent>
            </PostCard>
          </RouterButton>
        ))}
      </PostsGrid>
    </Container>
  );
}

// ---------------- STYLED COMPONENTS ---------------- //

const Container = styled.div`
  margin: 60px 0;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 25px;
  background: linear-gradient(90deg, #ff4d4d, #ff9900, #00ccff, #9933ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
`;

const PostCard = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "large",
})`
  display: flex;
  flex-direction: ${({ large }) => (large ? "column" : "row")};
  background: white;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0px 8px 25px rgba(0,0,0,0.08);
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PostImage = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== "large",
})`
  width: ${({ large }) => (large ? "100%" : "150px")};
  height: ${({ large }) => (large ? "220px" : "100px")};
  object-fit: cover;
  flex-shrink: 0;
`;

const PostContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PostCategory = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #ff9900;
  margin-bottom: 6px;
`;

const PostTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
`;

const PostMeta = styled.div`
  font-size: 12px;
  opacity: 0.6;
`;

const RouterButton = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;
