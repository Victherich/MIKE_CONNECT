
import styled from "styled-components";
import { Link } from "react-router-dom";
import ab1 from '../Images/ab1.png'
import {
  Slide,
  Zoom,
  Bounce,
  Roll,
  JackInTheBox,
} from "react-awesome-reveal";

export default function About() {
  return (
    <Wrapper>

      {/* HERO SECTION */}
      <Hero>
        <HeroOverlay />
        <HeroContent>
          <Slide duration={3000}   direction="down">
            <h1>About Mike-Connect</h1>
          </Slide>
          <Zoom duration={3000}  >
            <p>
              Inspiring you to discover your purpose, unlock your potential,
              and live a life of impact.
            </p>
          </Zoom>
          <Bounce duration={3000}  >
            <RouterButton to="/contact">CONTACT NOW</RouterButton>
          </Bounce>
        </HeroContent>
      </Hero>

      {/* WHAT WE OFFER */}
      <ImageSection bg="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80">
        <SectionContent>
          <Roll duration={3000}  >
            <h2>What We Offer</h2>
          </Roll>
          <Slide duration={3000}   direction="up">
            <p>
              We guide, mentor, teach and encourage personal development
              through strategic life-changing sessions.
            </p>
          </Slide>
        </SectionContent>
      </ImageSection>

      <SectionCards>
        <CardImage>
          <CardOverlay />
          <CardContent>
            <JackInTheBox duration={3000}  >
              <h3>One-on-One Counselling</h3>
            </JackInTheBox>
            <Slide duration={3000}   direction="up">
              <ul>
                <li>Private & confidential sessions</li>
                <li>No third-party intrusion</li>
                <li>Personal guidance</li>
                <li>Accurate issue diagnosis</li>
              </ul>
            </Slide>
          </CardContent>
        </CardImage>

        <CardImage bg="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=80">
          <CardOverlay />
          <CardContent>
            <JackInTheBox duration={3000}  >
              <h3>Stage Shows</h3>
            </JackInTheBox>
            <Slide duration={3000}   direction="up">
              <p>
                Inspiring a crowd with the message of transformation, hope
                and motivation.
              </p>
            </Slide>
            <Roll duration={3000}  >
              <RouterButton to="/stageshows">View all stage shows</RouterButton>
            </Roll>
          </CardContent>
        </CardImage>

        <CardImage bg="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80">
          <CardOverlay />
          <CardContent>
            <JackInTheBox duration={3000}  >
              <h3>My Books</h3>
            </JackInTheBox>
            <Slide duration={3000}   direction="up">
              <p>
                “One book can change a destiny.”  
                We write to inspire the next generation.
              </p>
            </Slide>
            <Roll duration={3000}  >
              <RouterButton to="/books">OUR BOOKS</RouterButton>
            </Roll>
          </CardContent>
        </CardImage>
      </SectionCards>

      {/* CATEGORIES */}
      <ImageSection bg="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80">
        <SectionContent>
          <JackInTheBox duration={3000}  >
            <h2>Categories</h2>
          </JackInTheBox>
        </SectionContent>
      </ImageSection>

      <CategoryGrid>
        <Slide duration={3000}   direction="up"><CategoryItem>Inspiration & Motivation — 20 posts</CategoryItem></Slide>
        <Slide duration={3000}   direction="down"><CategoryItem>Relationship — 12 posts</CategoryItem></Slide>
        <Slide duration={3000}   direction="up"><CategoryItem>Entrepreneurship — 4 posts</CategoryItem></Slide>
        <Slide duration={3000}   direction="down"><CategoryItem>Mind & Spirit — 3 posts</CategoryItem></Slide>
        <Slide duration={3000}   direction="up"><CategoryItem>Productivity — 2 posts</CategoryItem></Slide>
        <Slide duration={3000}   direction="down"><CategoryItem>Business — 4 posts</CategoryItem></Slide>
        <Slide duration={3000}   direction="up"><CategoryItem>Digital Skills — 2 posts</CategoryItem></Slide>
        <Slide duration={3000}   direction="down"><CategoryItem>Health & Fitness — 10 posts</CategoryItem></Slide>
        <Slide duration={3000}   direction="up"><CategoryItem>Destiny Transformation — 10 posts</CategoryItem></Slide>
      </CategoryGrid>

      {/* DONATE CTA */}
      <ImageSection bg="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80">
        <SectionContent $center>
          <JackInTheBox duration={3000}  >
            <h2>Get Started Today</h2>
          </JackInTheBox>
          <Slide duration={3000}   direction="up">
            <p>
              Support the mission. Give hope. Change lives.  
              Every contribution matters.
            </p>
          </Slide>
          <Bounce duration={3000}  >
            <RouterButton to="/donate">DONATE TODAY</RouterButton>
          </Bounce>
        </SectionContent>
      </ImageSection>

      {/* CORE VALUES */}
      <ImageSection bg="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1400&q=80">
        <SectionContent $center>
          <JackInTheBox duration={3000}  >
            <h2>Our Core Values</h2>
          </JackInTheBox>
        </SectionContent>
      </ImageSection>

      <GraySection>
        <ValueGrid>
          <Slide duration={3000}   direction="up">
            <ValueItem>
              <h3>Concern for Humanity</h3>
              <p>We value humanity and purpose-driven living.</p>
            </ValueItem>
          </Slide>

          <Slide duration={3000}   direction="down">
            <ValueItem>
              <h3>Spirituality</h3>
              <p>Faith guides all our actions and impact.</p>
            </ValueItem>
          </Slide>

          <Slide duration={3000}   direction="up">
            <ValueItem>
              <h3>Family</h3>
              <p>Family is the foundation of leadership and purpose.</p>
            </ValueItem>
          </Slide>

          <Slide duration={3000}   direction="down">
            <ValueItem>
              <h3>Success & Peace</h3>
              <p>We teach productive, peaceful, and fulfilled living.</p>
            </ValueItem>
          </Slide>

          <Slide duration={3000}   direction="up">
            <ValueItem>
              <h3>Honesty & Integrity</h3>
              <p>Truth is essential in transformation.</p>
            </ValueItem>
          </Slide>

          <Slide duration={3000}   direction="down">
            <ValueItem>
              <h3>Simplicity & Wisdom</h3>
              <p>Live with purpose, clarity and understanding.</p>
            </ValueItem>
          </Slide>
        </ValueGrid>

        <Bounce duration={3000}  >
          <RouterButton to="/mikeconnecttv">Mike Connect TV</RouterButton>
        </Bounce>
      </GraySection>
    </Wrapper>
  );
}

/* ====== STYLES (UNCHANGED) ====== */

/* Same styles as before except now we have: */

const RouterButton = styled(Link)`
  display: inline-block;
  padding: 14px 32px;
  background: #ff9f1c;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;



/* ====== STYLES BELOW (unchanged) ====== */

const Wrapper = styled.div`
  color: #222;
  font-family: "Poppins", sans-serif;
`;

/* HERO */
const Hero = styled.section`
  position: relative;
  background-image: url(${ab1});
  background-size: cover;
  background-position: center;
  min-height: 65vh;
  display: flex;
  align-items: center;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.45);
`;

const HeroContent = styled.div`
  position: relative;
  max-width: 700px;
  padding: 80px 40px;
  color: white;

  h1 {
    font-size: 3.2rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 30px;
  }

  button {
    padding: 14px 32px;
    background: #ff9f1c;
    border: none;
    font-weight: 600;
    cursor: pointer;
  }
`;

/* IMAGE SECTIONS */
const ImageSection = styled.section`
  background-image: url(${(p) => p.bg});
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 60px 20px;
  color: white;
`;

const SectionContent = styled.div`
  max-width: 900px;
  margin: auto;
  text-align: ${(p) => (p.$center ? "center" : "left")};

  h2 {
    font-size: 2.3rem;
    margin-bottom: 15px;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9);
  }

  p {
    font-size: 1.1rem;
  }

  button {
    margin-top: 20px;
    padding: 14px 28px;
    background: #ff9f1c;
    border: none;
    cursor: pointer;
  }
`;

/* OFFER CARDS */
const SectionCards = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  display: grid;
  gap: 30px;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CardImage = styled.div`
  background-image: url(${(p) =>
    p.bg ||
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"});
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  min-height: 300px;
`;

const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.45);
`;

const CardContent = styled.div`
  position: relative;
  color: white;
  padding: 30px;

  h3 {
    margin-bottom: 12px;
  }

  a {
    color: #ff9f1c;
    font-weight: 600;
    display: inline-block;
    margin-top: 12px;
    text-decoration: underline;
  }
`;

/* CATEGORIES */
const CategoryGrid = styled.div`
  max-width: 850px;
  margin: 40px auto;
  display: grid;
  gap: 12px;
`;

const CategoryItem = styled.div`
  background: #fff;
  padding: 16px;
  border-left: 5px solid #ff9f1c;
  font-weight: 500;
`;

/* CORE VALUES */
const GraySection = styled.div`
  background: #f7f7f7;
  padding: 80px 20px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;

  button {
    padding: 10px 20px;
    background: #ff9f1c;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    margin-top:20px;
  }
`;

const ValueGrid = styled.div`
  max-width: 950px;
  margin: auto;
  display: grid;
  gap: 30px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ValueItem = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;

  h3 {
    margin-bottom: 12px;
    color: #410b77ff;
  }
`;