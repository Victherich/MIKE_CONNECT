
import React from "react";
import styled from "styled-components";
import { Zoom, Slide } from "react-awesome-reveal";
import t1 from '../Images/t1.png'
import Swal from "sweetalert2";

export default function MikeConnectTV() {



const handleComingSoon = () => {
  Swal.fire({
    title: "Info",
    text: "Coming soon...",
    icon: "info",
    confirmButtonText: "Okay",
  });
};


  return (
    <Wrapper>

      {/* 🟢 HERO SECTION */}
      <Hero>
        <HeroContent>
          <Zoom duration={3000} triggerOnce={false}>
            <h1>WELCOME TO MIKE-CONNECT TV</h1>
          </Zoom>

          <Slide direction="up" duration={3000} triggerOnce={false}>
            <p>You're one decision away from a totally different life.</p>
          </Slide>

          <Slide direction="up" duration={3000} triggerOnce={false}>
            <HeroButtons>
              <a href="https://www.youtube.com/channel/UCfKMnagD3ytQAH47-p0inng" target="_blank" rel="noopener noreferrer">
                View all videos on YouTube
              </a>
            </HeroButtons>
          </Slide>
        </HeroContent>
      </Hero>

      {/* 🟢 VIDEO PREVIEWS */}
      <Section>
        {[
          {
            title: "DON'T WASTE YOUR LIFE",
            desc: "Even at your single age, you can still break world records and achieve all your dreams as a male or female……",
          },
          {
            title: "IF you do this between age 18 - 45, God will open doors for you.",
            desc: "Watch this life-saving and thrilling video in order to gain knowledge of the essentials of tomorrow.",
          },
          {
            title: "The Real Reason You Procrastinate.",
            desc: "Do you know why you procrastinate? Watch this video and get the real reason behind your procrastination.",
          },
          {
            title: "The Power of You. Your Dreams Deserve More.",
            desc: "What is the extent and power of your subconscious mind? Watch this video and find out more.",
          },
        ].map((video, i) => (
          <VideoCard key={i}>
            <VideoThumbnail />
            <VideoContent>
              <Zoom duration={3000} triggerOnce={false}>
                <h2>{video.title}</h2>
              </Zoom>

              <Slide direction="up" duration={3000} triggerOnce={false}>
                <p>{video.desc}</p>
              </Slide>

              <Slide direction="up" duration={3000} triggerOnce={false}>
              
// In your component
<VideoButtons>
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault(); // prevent navigation
      handleComingSoon();
    }}
    target="_blank"
    rel="noopener noreferrer"
  >
    Watch on YouTube
  </a>
  {/* <button onClick={handleComingSoon}>Play Video</button> */}
</VideoButtons>
              </Slide>
            </VideoContent>
          </VideoCard>
        ))}
      </Section>

      {/* 🟢 FOOTER CTA */}
      <CTASection>
        <Zoom duration={3000} triggerOnce={false}>
          <h2>Want to see all videos?</h2>
        </Zoom>

        <Slide direction="up" duration={3000} triggerOnce={false}>
          <p>See Mike-Connect Youtube channel.</p>
        </Slide>

        <Slide direction="up" duration={3000} triggerOnce={false}>
          <HeroButtons>
            <a href="https://www.youtube.com/channel/UCfKMnagD3ytQAH47-p0inng" target="_blank" rel="noopener noreferrer">
              MIKE-CONNECT YouTube Channel
            </a>
            {/* <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              Watch all MIKE-CONNECT videos on YouTube
            </a> */}
          </HeroButtons>
        </Slide>
      </CTASection>

    </Wrapper>
  );
}

/* ================= STYLES ================= */

const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  color: #222;
  background: #f9f9f9;
`;

const Hero = styled.section`
  color: white;
  text-align: center;
  padding: 80px 20px;
  background:
    linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
    url(${t1});
  background-size: cover;
  background-position: bottom;
`;

const HeroContent = styled.div`
  max-width: 700px;
  margin: auto;

  h1 { font-size: 3rem; margin-bottom: 20px; }
  p { font-size: 1.3rem; margin-bottom: 30px; }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;

  a {
    padding: 12px 28px;
    background: #ff9f1c;
    color: white;
    font-weight: 600;
    text-decoration: none;
    border-radius: 6px;
    transition: 0.3s;
  }

  a:hover { background: #ff6f00; }

  button {
    padding: 10px 20px;
    background: #410b77ff;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;

const Section = styled.section`
  max-width: 1000px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const VideoCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const VideoThumbnail = styled.div`
  flex: 1 1 300px;
  min-height: 220px;
  background: url("https://via.placeholder.com/400x220") center/cover no-repeat;
`;

const VideoContent = styled.div`
  flex: 2 1 500px;
  padding: 30px;

  h2 { font-size: 1.7rem; margin-bottom: 12px; color: #410b77ff; }
  p { margin-bottom: 20px; font-size: 1rem; line-height: 1.5; }
`;

const VideoButtons = styled.div`
  display: flex;
  gap: 15px;

  a { padding: 10px 20px; background: #ff9f1c; color: white; font-weight: 600; text-decoration: none; border-radius: 6px; }
  button { padding: 10px 20px; background: #410b77ff; color: white; font-weight: 600; border: none; border-radius: 6px; cursor: pointer; }
`;

const CTASection = styled.section`
  text-align: center;
  padding: 60px 20px;
  background: #f7f7f7;

  h2 { font-size: 2rem; margin-bottom: 15px; }
  p { margin-bottom: 30px; font-size: 1.1rem; }
`;
