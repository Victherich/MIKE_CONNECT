import React from "react";
import styled from "styled-components";
import { Slide, Zoom } from "react-awesome-reveal";
import c1 from '../Images/c1.png'
import c2 from '../Images/c2.png'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const categories = [
  { id: 1, title: "Parents", description: "We offer coaching and training for parents on different problems." },
  { id: 2, title: "Children", description: "We also coach children on how to obey and satisfy their parents' needs." },
  { id: 3, title: "Adults", description: "We also offer coaching for adults who need intense coaching." },
  { id: 4, title: "Frustrated and Depressed", description: "What are your problems? We also offer coaching services for the frustrated and depressed." },
  { id: 5, title: "Partners", description: "Are you having relationship problems? Reach out so that we can coach you on how to improve your relationship." },
  { id: 6, title: "Married Couples", description: "Facing marriage problems? Not after meeting Mike-Connect. Contact us today." },
  { id: 7, title: "Disabled People", description: "Are you isolated because you are disabled? Mike-Connect is ever ready to support you." },
  { id: 8, title: "People with Development Issues", description: "Do you need self-help? Are you finding it difficult to develop? Don’t worry – You can rely on Mike-Connect." },
];

export default function CounsellingPage() {
    const navigate = useNavigate();



const handleComingSoon = () => {
  Swal.fire({
    title: "Info",
    text: "Coming soon...",
    icon: "info",
    confirmButtonText: "Okay",
  });
};




  return (
    <PageWrapper>
      {/* HERO SECTION */}
      <Hero>
        <Slide direction="up" duration={1500}>
          <h1>ONE - ON - ONE COUNSELLING</h1>
        </Slide>
        <Slide direction="up" duration={1500}>
          <p>Stage Shows | Mike-Connect Books</p>
        </Slide>
      </Hero>

      {/* CATEGORIES */}
      <Section>
        {categories.map((cat) => (
          <Zoom key={cat.id} duration={1200}>
            <CategoryCard>
              <h2>{cat.title}</h2>
              <p>{cat.description}</p>
            </CategoryCard>
          </Zoom>
        ))}

        <Zoom duration={1200}>
          <CategoryCard>
            <h2>Other Categories</h2>
            <p>We might not have mentioned your category above, but we are still here for you. Reach out today.</p>
            <ReachOutButton onClick={()=>navigate('/contact')}>Reach Out Today</ReachOutButton>
          </CategoryCard>
        </Zoom>
      </Section>

      {/* E-Books, Articles, Community */}
      <Section>
        <Zoom duration={1200}>
          <FeatureCard>
            <h2>E-Books</h2>
            <p>Read our e-books on self-help and get motivated and inspired.</p>
            <ActionButton onClick={handleComingSoon}>Download</ActionButton>
          </FeatureCard>
        </Zoom>
        <Zoom duration={1200}>
          <FeatureCard>
            <h2>Articles</h2>
            <p>Read our articles concerning your problems to help you grow.</p>
            <ActionButton onClick={handleComingSoon}>Browse All</ActionButton>
          </FeatureCard>
        </Zoom>
        <Zoom duration={1200}>
          <FeatureCard>
            <h2>Community</h2>
            <p>Join the forum of the victorious today – Connect with family and friends.</p>
            <ActionButton onClick={()=>navigate('/signup')}>Apply Now</ActionButton>
          </FeatureCard>
        </Zoom>
      </Section>

      {/* FOOTER */}
      <Footer>
        <h2>MIKE-CONNECT</h2>
        <p>Inspire. Think. Grow.</p>
        <ActionButton onClick={()=>navigate('/about')}>Learn More</ActionButton>
      </Footer>
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
  padding: 100px 20px;
  color: white;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${c1}) no-repeat center/cover;

  h1 {
    font-size: 2rem;
    margin-bottom: 12px;
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }
`;

const Section = styled.section`
  max-width: 1000px;
  margin: 50px auto;
  padding: 0 20px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const CategoryCard = styled.div`
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
    margin-bottom: 8px;
    font-size:1rem;
  }

  p {
    font-size: 0.95rem;
    color: #333;
  }
`;

const ReachOutButton = styled.button`
  margin-top: 12px;
  background: #ff9f1c;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #ff6f00;
  }
`;

const FeatureCard = styled(CategoryCard)`
  text-align: center;

  h2 {
    margin-bottom: 12px;
  }

  p {
    margin-bottom: 16px;
  }
`;

const ActionButton = styled(ReachOutButton)`
  min-width: 140px;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 60px 20px;
  color: white;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${c2}) no-repeat center/cover;

  h2 {
    font-size: 2rem;
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 20px;
  }
`;
