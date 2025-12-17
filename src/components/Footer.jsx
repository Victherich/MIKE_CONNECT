
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container>
      <FooterGrid>

        {/* ABOUT */}
        <FooterSection>
          <SectionTitle>About Us</SectionTitle>
          <p>
            We are Mike-Connect, we are here to connect you to a beautiful life experience.
          </p>
        </FooterSection>

        {/* PAGES */}
        <FooterSection>
          <SectionTitle>Pages</SectionTitle>
          <StyledLink to="/home">HOME</StyledLink>
          <StyledLink to="/about">ABOUT US</StyledLink>
          <StyledLink to="/">OUR BLOG</StyledLink>
          <StyledLink to="/donate">DONATE</StyledLink>
        </FooterSection>

        {/* HELP */}
        <FooterSection>
          <SectionTitle>Help</SectionTitle>
          <StyledLink to="/contact">CONTACT US</StyledLink>
          <StyledLink to="/terms">TERMS AND CONDITIONS</StyledLink>
          <StyledLink to="/privacy">OUR PRIVACY POLICY</StyledLink>
        </FooterSection>

        {/* SOCIAL */}
        <FooterSection>
          <SectionTitle>Social Media</SectionTitle>
          <SocialBox>
            <SocialItem>Facebook-f</SocialItem>
            <SocialItem>Youtube</SocialItem>
          </SocialBox>
        </FooterSection>

      </FooterGrid>

      <BottomBar>
        © {new Date().getFullYear()} Mike-Connect — All Rights Reserved.
      </BottomBar>
    </Container>
  );
}

/* ---------------------- STYLED COMPONENTS ---------------------- */

const Container = styled.footer`
  color: white;
  padding: 50px 30px 20px 30px;
  background: linear-gradient(
    135deg,
    #9933ff,
    #00ccff,
    #ff9900,
    #9933ff
  );
  font-family: "Poppins", sans-serif;
//   margin-top: 60px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
  text-shadow: 1px 1px #0005;
`;

const StyledLink = styled(Link)`
  margin-bottom: 8px;
  cursor: pointer;
  opacity: 0.9;
  transition: 0.25s;
  font-size: 14px;
  color: white;
  text-decoration: none;

  &:hover {
    opacity: 1;
    transform: translateX(4px);
  }
`;

const SocialBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SocialItem = styled.span`
  cursor: pointer;
  background: rgba(255, 255, 255, 0.18);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  transition: 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
    transform: translateX(4px);
  }
`;

const BottomBar = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 13px;
  opacity: 0.85;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.22);
`;
