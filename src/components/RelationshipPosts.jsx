
import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

// ---------------- DUMMY RELATIONSHIP POSTS ---------------- //
const relationshipPosts = [
  {
    title: "The purported baby mama of Cubana Chief Priest sobs and discloses that she and her son are destitute",
    date: "January 6, 2025",
    img: "https://source.unsplash.com/400x300/?relationship,couple",
  },
  {
    title: "“Kneeling Down To Propose To A Lady Is Satanic,” Says A Pastor",
    date: "October 28, 2024",
    img: "https://source.unsplash.com/400x300/?proposal",
  },
  {
    title: "My wife pulled my scrotum each time we fought — Husband tells Oyo court",
    date: "October 28, 2024",
    img: "https://source.unsplash.com/400x300/?marriage",
  },
  {
    title: "Man urinates and defecates in bedroom as protest against wife for refusing intimacy",
    date: "October 25, 2024",
    img: "https://source.unsplash.com/400x300/?family",
  },
];

// ---------------- COMPONENT ---------------- //
export default function RelationshipPosts() {
  return (
    <Container>
      <SectionTitle>💖 Relationship</SectionTitle>
      <Grid>
        {/* Feature Card */}
        <Slide direction="up" duration={2000} triggerOnce>
          <RouterButton to={`/posts/${encodeURIComponent(relationshipPosts[0].title)}`}>
            <FeatureCard>
              <FeatureImage src={relationshipPosts[0].img} />
              <FeatureContent>
                <FeatureTitle>{relationshipPosts[0].title}</FeatureTitle>
                <FeatureDate>{relationshipPosts[0].date}</FeatureDate>
              </FeatureContent>
            </FeatureCard>
          </RouterButton>
        </Slide>

        {/* Small Cards */}
        <SmallCards>
          {relationshipPosts.slice(1).map((post, i) => (
            <Slide key={i} direction="up" duration={2000} delay={i * 200} triggerOnce>
              <RouterButton to={`/posts/${encodeURIComponent(post.title)}`}>
                <SmallCard>
                  <SmallImage src={post.img} />
                  <SmallContent>
                    <SmallTitle>{post.title}</SmallTitle>
                    <SmallDate>{post.date}</SmallDate>
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

// ---------------- STYLED COMPONENTS ---------------- //

const Container = styled.div`
  margin: 60px 0;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 25px;
  background: linear-gradient(90deg, #ff6b81, #ffb347, #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
  transition: 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

const FeatureContent = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: white;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7);
`;

const FeatureTitle = styled.h3`
  font-size: 22px;
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
`;

const SmallCard = styled.div`
  display: flex;
  gap: 12px;
  background: #fff0f5;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SmallImage = styled.img`
  width: 120px;
  height: 100px;
  object-fit: cover;
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
  font-size: 14px;
  font-weight: 600;
`;

const SmallDate = styled.div`
  font-size: 12px;
  opacity: 0.6;
`;

// ---------- REACT ROUTER BUTTON ----------
const RouterButton = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;
