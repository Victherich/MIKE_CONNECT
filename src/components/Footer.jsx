
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <Container>
//       <FooterGrid>

//         {/* ABOUT */}
//         <FooterSection>
//           <SectionTitle>About Us</SectionTitle>
//           <p>
//             We are Mike-Connect, we are here to connect you to a beautiful life experience.
//           </p>
//         </FooterSection>

//         {/* PAGES */}
//         <FooterSection>
//           <SectionTitle>Pages</SectionTitle>
//           <StyledLink to="/home">HOME</StyledLink>
//           <StyledLink to="/about">ABOUT US</StyledLink>
//           <StyledLink to="/">OUR BLOG</StyledLink>
//           <StyledLink to="/donate">DONATE</StyledLink>
//         </FooterSection>

//         {/* HELP */}
//         <FooterSection>
//           <SectionTitle>Help</SectionTitle>
//           <StyledLink to="/contact">CONTACT US</StyledLink>
//           <StyledLink to="/terms">TERMS AND CONDITIONS</StyledLink>
//           <StyledLink to="/privacypolicy">OUR PRIVACY POLICY</StyledLink>
//         </FooterSection>

//         {/* SOCIAL */}
//         <FooterSection>
//           <SectionTitle>Social Media</SectionTitle>
//           <SocialBox>
//             <SocialItem>Facebook-f</SocialItem>
//             <SocialItem>Youtube</SocialItem>
//           </SocialBox>
//         </FooterSection>

//       </FooterGrid>

//         <BottomBar>
 
//       Disclaimer: Every Mike-Connect Forum member is solely responsible for anything that he/she posts or uploads on Mike-Connect.
    
//       </BottomBar>

//       <BottomBar>
//         © {new Date().getFullYear()} Mike-Connect — All Rights Reserved.
//       </BottomBar>

//       <BottomBar 
//       style={{cursor:"pointer",
//         textDecoration:"underline",
//         color:"rgba(255,255,255,0.7)"
//       }}
//       onClick={()=>window.open('https://elexdontech.com/',"_blank")}
//       >
//         POWERED BY ELEXDON DIGITAL TECHNOLOGIES LIMITED
//       </BottomBar>
// </Container>
//   );
// }

// //  #9933ff,
// //     #9933ff,
// //     // #00ccff,
// //     #ff9900,
// //     #9933ff

// /* ---------------------- STYLED COMPONENTS ---------------------- */

// const Container = styled.footer`
//   color: white;
//   padding: 50px 30px 20px 30px;
//   background: linear-gradient(
//     135deg,
//     #451774ff,
//     #331055ff,
//     // #00ccff,
//     #5e3800ff,
//     #9933ff
//   );
//   font-family: "Poppins", sans-serif;
// //   margin-top: 60px;
// `;

// const FooterGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   gap: 30px;
// `;

// const FooterSection = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const SectionTitle = styled.h3`
//   font-size: 18px;
//   font-weight: 700;
//   margin-bottom: 15px;
//   text-shadow: 1px 1px #0005;
// `;

// const StyledLink = styled(Link)`
//   margin-bottom: 8px;
//   cursor: pointer;
//   opacity: 0.9;
//   transition: 0.25s;
//   font-size: 14px;
//   color: white;
//   text-decoration: none;

//   &:hover {
//     opacity: 1;
//     transform: translateX(4px);
//   }
// `;

// const SocialBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const SocialItem = styled.span`
//   cursor: pointer;
//   background: rgba(255, 255, 255, 0.18);
//   padding: 8px 12px;
//   border-radius: 6px;
//   font-size: 14px;
//   transition: 0.3s;

//   &:hover {
//     background: rgba(0, 0, 0, 0.4);
//     transform: translateX(4px);
//   }
// `;

// const BottomBar = styled.div`
//   text-align: center;
//   margin-top: 50px;
//   font-size: 13px;
//   opacity: 0.85;
//   padding-top: 20px;
//   border-top: 1px solid rgba(255, 255, 255, 0.22);
// `;




import styled from "styled-components";
import { Link } from "react-router-dom";

/* ================= THEME ================= */
const colors = {
  bg: "#f2f2f2",
  lemon: "#00FF00",
  dark: "#1a1a1a",
  soft: "#ffffffcc",
  muted: "#555"
};

export default function Footer() {
  return (
    <Container>
      <FooterGrid>

        {/* ABOUT */}
        <FooterSection>
          <SectionTitle>About Us</SectionTitle>
          <p>
            We are Mike-Connect — connecting you to insight, inspiration,
            purpose, and a transformed life experience.
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
          <StyledLink to="/privacypolicy">OUR PRIVACY POLICY</StyledLink>
        </FooterSection>

        {/* SOCIAL */}
        <FooterSection>
          <SectionTitle>Social Media</SectionTitle>
          <SocialBox>
            <SocialItem onClick={()=>window.open('https://www.facebook.com/share/171ty7zc2J/','_blank')}>Facebook</SocialItem>
             <SocialItem onClick={()=>window.open('https://www.instagram.com/mikeconect?igsh=MXFxdjdlaTk2djhuZw==','_blank')}>Instagram</SocialItem>
          
            <SocialItem onClick={()=>window.open('https://www.youtube.com/channel/UCfKMnagD3ytQAH47-p0inng','_blank')}>YouTube</SocialItem>
          </SocialBox>
        </FooterSection>

      </FooterGrid>

      <BottomBar>
        Disclaimer: Every Mike-Connect Forum member is solely responsible for
        anything that he/she posts or uploads on Mike-Connect.
      </BottomBar>

      <BottomBar>
        © {new Date().getFullYear()} Mike-Connect — All Rights Reserved.
      </BottomBar>

      <BottomBar
        style={{ cursor: "pointer", textDecoration: "underline" }}
        onClick={() =>
          window.open("https://elexdontech.com/", "_blank")
        }
      >
        POWERED BY ELEXDON DIGITAL TECHNOLOGIES LIMITED
      </BottomBar>
    </Container>
  );
}

/* ================= STYLES ================= */

const Container = styled.footer`
  background: ${colors.bg};
  color: ${colors.dark};
  padding: 60px 30px 25px;
  font-family: "Poppins", sans-serif;
  border-top: 4px solid ${colors.lemon};
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 14px;
    line-height: 1.6;
    color: ${colors.muted};
  }
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 16px;
  color: ${colors.dark};
  position: relative;

  &::after {
    content: "";
    width: 40px;
    height: 3px;
    background: ${colors.lemon};
    position: absolute;
    left: 0;
    bottom: -6px;
    border-radius: 2px;
  }
`;

const StyledLink = styled(Link)`
  margin-bottom: 10px;
  font-size: 14px;
  color: ${colors.dark};
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;

  &:hover {
    color: ${colors.lemon};
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
  background: ${colors.soft};
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
  transition: 0.3s;

  &:hover {
    background: ${colors.lemon};
  }
`;

const BottomBar = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 13px;
  color: ${colors.muted};
  padding-top: 18px;
  border-top: 1px solid #ddd;
`;
