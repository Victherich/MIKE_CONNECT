import styled from "styled-components";
import { Fade, Zoom } from "react-awesome-reveal";
import blogbg from '../Images/blogbg.png'

export default function HeroSection() {
  return (
    <Hero>
      <Overlay />
      <HeroContent>
        <Fade duration={2500}>
          <h1>WELCOME TO MIKE CONNECT</h1>
        </Fade>

        <Zoom delay={300} duration={2500}>
          <p>
            A space for insight, inspiration, growth, and purposeful living —
            where ideas meet experience and stories spark transformation.
          </p>
        </Zoom>
      </HeroContent>
    </Hero>
  );
}

/* ================= STYLES ================= */

const Hero = styled.section`
  position: relative;
  width: 100%;
  min-height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${blogbg}); /* 🔁 replace with your image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
  position: relative;
  max-width: 900px;
  padding: 0 16px;
  text-align: center;
  color: white;
  z-index: 2;

  h1 {
    font-size: 3.2rem;
    font-weight: 900;
    letter-spacing: 4px;
    margin-bottom: 22px;
  }

  p {
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.6;
    color: #f5e81b; /* lemon accent */
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
      letter-spacing: 2px;
    }

    p {
      font-size: 1.05rem;
    }
  }
`;
