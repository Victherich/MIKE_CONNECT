
import React from "react";
import styled from "styled-components";
import { Slide, Zoom } from "react-awesome-reveal";
import r1 from '../Images/r1.png'

const resources = [
  {
    id: 1,
    title: "Inspiration and Motivation",
    description: "“Keep your face always toward the sunshine, and shadows will fall behind you.” We specialise in giving people life-changing quality advice.",
  },
  {
    id: 2,
    title: "Business and Finance",
    description: "Success is not final, failure is not fatal, it is the courage to continue that counts in the business world.",
  },
  {
    id: 3,
    title: "Entrepreneurship and Money",
    description: "I’m convinced that about half of what separates the successful entrepreneurs from the non-successful ones is pure perseverance. – Steve Jobs.",
  },
  {
    id: 4,
    title: "Mind and Spirit",
    description: "Your mind, emotions and body are instruments and the way you align and tune them determines how well you play your life.",
  },
  {
    id: 5,
    title: "Vision and Destiny Transformation",
    description: "Vision is an essential tool for destiny transformation; without a vision or building one, transformation is nearly impossible.",
  },
  {
    id: 6,
    title: "Creativity and Productivity",
    description: "Creativity is seeing and thinking when no one sees and thinks the way that you do.",
  },
  {
    id: 7,
    title: "Digital Skills",
    description: "Acquisition of skills is the first step in the journey to success because skills make you an asset rather than a liability.",
  },
  {
    id: 8,
    title: "Health",
    description: "Health, above all things, is very important because the foundations of wealth were built with the acquisition of good health.",
  },
  {
    id: 9,
    title: "General Life Issues",
    description: "Life, they say, is not a bed of roses, but one of thorns. If we grab our thorns lightly – they prick us, but forcibly – they crumble.",
  },
];

export default function ResourcesPage() {
  return (
    <PageWrapper>
      {/* HERO SECTION */}
      <Hero>
        <Slide direction="up" duration={1500}>
          <h1>RESOURCES</h1>
        </Slide>
        <Slide direction="up" duration={1500}>
          <p>Mike-Connect specializes in twelve main areas of life. We focus on these but accept issues from other sources.</p>
        </Slide>
      </Hero>

      {/* RESOURCE CARDS */}
      <Section>
        {resources.map((res) => (
          <Zoom key={res.id} duration={1200}>
            <ResourceCard>
              <h2>{res.title}</h2>
              <p>{res.description}</p>
              {/* <LearnButton>Learn More</LearnButton> */}
            </ResourceCard>
          </Zoom>
        ))}
      </Section>
    </PageWrapper>
  );
}

/* ===================== STYLES ===================== */

const PageWrapper = styled.div`
  font-family: "Poppins", sans-serif;
  color: #222;
  background: #f9f9f9;
`;

const Hero = styled.section`
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${r1}) no-repeat center/cover;
  color: white;

  h1 {
    font-size: 2rem;
    margin-bottom: 16px;
  }

  p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    opacity: 0.9;
  }
`;

const Section = styled.section`
  max-width: 1100px;
  margin: 50px auto;
  padding: 0 20px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const ResourceCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  h2 {
    color: green;
    font-size:1rem;
    margin-bottom: 12px;
  }

  p {
    font-size: 0.95rem;
    margin-bottom: 16px;
  }
`;

const LearnButton = styled.button`
  background: #ff9f1c;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #ff6f00;
  }
`;
