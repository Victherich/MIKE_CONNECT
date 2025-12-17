
import React from "react";
import styled from "styled-components";
import { Zoom, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

// ---------------- DUMMY ENTERTAINMENT POSTS ---------------- //
const entertainmentPosts = [
  {
    title: "If You Want Trouble, It Is My Work – Falz To VeryDarkMan",
    date: "October 25, 2024",
    img: "https://source.unsplash.com/400x300/?music",
  },
  {
    title: "Somkele Iyamah-Idhalama Joins Star Trek Cast",
    date: "October 25, 2024",
    img: "https://source.unsplash.com/400x300/?movie",
  },
  {
    title: "Verydarkman Finally Meets His Imitator Veryfairman; Prepares Him For Battles",
    date: "October 25, 2024",
    img: "https://source.unsplash.com/400x300/?celebrity",
  },
  {
    title: "Rapper 50 Cent breaks his silence on allegations made against Diddy",
    date: "October 23, 2024",
    img: "https://source.unsplash.com/400x300/?rapper",
  },
];

// ---------------- COMPONENT ---------------- //
export default function EntertainmentPosts() {
  return (
    <Container>
      <SectionTitle>🎬 Entertainment</SectionTitle>
      <Grid>
        {/* Feature Card */}
        <Zoom duration={3000} triggerOnce>
          <FeatureCard>
            <RouterButton to={`/posts/${encodeURIComponent(entertainmentPosts[0].title)}`}>
              <FeatureImage src={entertainmentPosts[0].img} />
              <FeatureContent>
                <FeatureTitle>{entertainmentPosts[0].title}</FeatureTitle>
                <FeatureDate>{entertainmentPosts[0].date}</FeatureDate>
              </FeatureContent>
            </RouterButton>
          </FeatureCard>
        </Zoom>

        {/* Smaller Cards */}
        <SmallCards>
          {entertainmentPosts.slice(1).map((post, i) => (
            <Slide key={i} direction="up" duration={3000} triggerOnce>
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

// ---------------- STYLES ---------------- //

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
  box-shadow: 0px 10px 25px rgba(0,0,0,0.08);
  transition: 0.3s;

  &:hover { transform: scale(1.03); }
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
  text-shadow: 1px 1px 6px rgba(0,0,0,0.7);
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
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 6px 18px rgba(0,0,0,0.06);
  cursor: pointer;
  transition: 0.3s;

  &:hover { transform: translateY(-5px); }

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
