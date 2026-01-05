
import React , {useState, useEffect} from "react";
import EntertainmentPosts from "./EntertainmentPosts";
import RelationshipPosts from "./RelationshipPosts";
import styled from "styled-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import h1 from '../Images/h1.png'
import aw1 from '../Images/aw1.png'
import h3 from '../Images/h3.png'
import h4 from '../Images/h4.png'; // adjust path if needed
import ms1 from '../Images/ms1.png'; // adjust path as needed
import Swal from 'sweetalert2'
import axios from "axios";


import {
  Fade,
  Slide,
  Zoom,
  Bounce,
  JackInTheBox,
  Rotate,
} from "react-awesome-reveal";

export default function HomePage() {
  const categoryId=0

    const navigate = useNavigate();



      const [posts, setPosts] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);


      // Inside HomePage component

const [newsletter, setNewsletter] = useState({
  firstName: "",
  lastName: "",
  email: "",
});
const [submitting, setSubmitting] = useState(false);

const handleNewsletterChange = (e) => {
  setNewsletter({ ...newsletter, [e.target.name]: e.target.value });
};

const handleNewsletterSubmit = async () => {
  const { firstName, lastName, email } = newsletter;

  if (!firstName || !lastName || !email) {
    Swal.fire("Error", "All fields are required", "error");
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    Swal.fire("Error", "Please enter a valid email", "error");
    return;
  }

  setSubmitting(true);

  try {
    const res = await fetch(
      "https://www.mikeconnect.com/mc_api/newsletter_subscribe.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newsletter),
      }
    );

    const data = await res.json();

    if (data.success) {
      Swal.fire("Success", data.message, "success");
      setNewsletter({ firstName: "", lastName: "", email: "" });
    } else {
      Swal.fire("Error", data.error || "Subscription failed", "error");
    }
  } catch (err) {
    Swal.fire("Error", "Network error. Please try again.", "error");
  } finally {
    setSubmitting(false);
  }
};

    
      useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true);
          setError(null);
    
          try {
            const res = await axios.get(
              `https://www.mikeconnect.com/mc_api/get_posts_by_category.php?category=${categoryId}&t=${Date.now()}`
            );
    
            if (res.data?.success) {
              const fetchedPosts = res.data.posts || [];
              const lastFourPosts = fetchedPosts.slice(0,4); // Take only last 4 posts
              setPosts(lastFourPosts);
            } else {
              setPosts([]);
              setError(res.data?.error || "No posts found");
            }
          } catch (err) {
            setPosts([]);
            setError("Network error");
          } finally {
            setLoading(false);
          }
        };
    
        fetchPosts();
      }, []);





  return (
    <Wrapper>

      {/* 🟢 HERO SECTION */}
      <Hero>
        <HeroContent>
          <Fade duration={3000}>
            <h1>
              From Inspiration, Motivation, Relationship & Business Empowerment,
              To Entrepreneurship & Creativity. Decades of Experience.
            </h1>
          </Fade>

          <Zoom delay={300} duration={3000}>
            <p>CONNECTING YOU TO A PURPOSE-DRIVEN TRANSFORMED LIFE!!!</p>
          </Zoom>

          <Bounce delay={500} duration={3000}>
            <HeroButtons>
              <button onClick={()=>navigate('/contact')}>Connect Here Now</button>
              <button onClick={()=>window.open("https://www.youtube.com/channel/UCfKMnagD3ytQAH47-p0inng","_blank")}>WATCH MIKE-CONNECT</button>
            </HeroButtons>
          </Bounce>
        </HeroContent>
      </Hero>

      {/* 🟢 TOP SPEAKER SECTION */}
  <TopSpeakerSection>
  <Slide direction="up" duration={3000}>
    <h2>Top Awarded Speaker</h2>
  </Slide>
  <Fade duration={3000}>
    <p>Have a totally different life.</p>
  </Fade>
  <Zoom duration={3000}>
    <img src={aw1} alt="award" style={{ width: "300px", borderRadius: "50%" }} />
  </Zoom>
</TopSpeakerSection>


      {/* 🟢 PROGRAMS */}
      <Section style={{ backgroundColor: "rgba(0,0,255,0.1)" }}>
        <JackInTheBox duration={3000}>
          <h2>MIKE-CONNECT Programs</h2>
          <p>Mike-Connect specialised on six main areas of life</p>
        </JackInTheBox>
        <Slide direction="left" duration={3000}>
          <ProgramsGrid>
            {[
              "INSPIRATION AND MOTIVATION",
              "BUSINESS",
              "RELATIONSHIP",
              "ENTREPRENEURSHIP",
              "DIGITAL SKILLS",
              "RELIGION",
              "VISION AND DESTINY TRANSFORMATION",
              "MIND AND SPIRIT",
              "PRODUCTIVITY AND CREATIVITY",
              "GENERAL LIFE ISSUES",
            ].map((p, i) => (
              <ProgramCard key={i}>{p}</ProgramCard>
            ))}
          </ProgramsGrid>
        </Slide>
        <Fade duration={3000}>
          <ViewAllButton as={Link} to="/resources">VIEW ALL PROGRAMS</ViewAllButton>
        </Fade>
      </Section>

      {/* 🟢 BLOG */}
      <Section style={{ maxWidth: "1100px" }}>
        <Slide direction="left" duration={3000}>
          <h2>Mike-Connect Blog</h2>
        </Slide>
        <Fade cascade duration={3000}>
          <BlogGrid>
            {posts.slice(0,3).map((blog, i) => (
              <BlogCard key={i} as={Link} to={`/post/${blog.id}`}>
                <img src={blog.image} alt="" />
                <h3>{blog.title}</h3>
                <span>{blog.date}</span>
              </BlogCard>
            ))}
          </BlogGrid>
        </Fade>

        <EntertainmentPosts />
        <RelationshipPosts />

        <Fade duration={3000}>
          <ViewAllButton as={Link} to="/">SEE MORE BLOGS</ViewAllButton>
        </Fade>
      </Section>

      {/* 🟢 COMMUNITY */}
      <SectionCenter style={{ background: "rgba(0,0,255,0.1)" }}>
        <Zoom duration={3000}>
          <h2>JOIN OUR WEB COMMUNITY</h2>
        </Zoom>
        <Fade delay={200} duration={3000}>
          <p>Get connected with friends and family members...</p>
        </Fade>
        <Bounce delay={300} duration={3000}>
          <HeroButtons>
            <button onClick={()=>navigate('/signup')}>Register</button>
            <button onClick={()=>navigate('/login')}>LOG-IN</button>
          </HeroButtons>
        </Bounce>
      </SectionCenter>

      {/* 🟢 TESTIMONIALS */}
      <Section style={{ background: "white", borderRadius: "20px", maxWidth: "1100px" }}>
        <Slide direction="up" duration={3000}>
          <h2>What They Say</h2>
        </Slide>
        <Fade cascade damping={0.15} duration={3000}>
          <TestimonialsGrid>
            {[
              { text: "“At 27, I had achieved nothing…”", author: "Emma Johanson" },
              { text: "“I thought it was all over…”", author: "Mårten Lindberg" },
              { text: "“The amount of success…”", author: "Adela Fransson" },
            ].map((t, i) => (
              <TestimonialCard key={i}>
                <p>{t.text}</p>
                <span>{t.author}</span>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </Fade>
        <Zoom duration={3000}>
          {/* <ViewAllButton as={Link} to="/testimonials">See More Stories</ViewAllButton> */}
        </Zoom>
      </Section>

      {/* 🟢 PODCAST / SOCIAL */}
     <SectionBg2>
  <Fade cascade duration={3000}>
    <h2 style={{ color: "white", fontSize: "2.5rem" }}>
      Listen, Read & Watch MIKE-CONNECT
    </h2>
    <HeroButtons>
      {/* <button>Podcast</button> */}
      <button onClick={()=>window.open('https://www.youtube.com/channel/UCfKMnagD3ytQAH47-p0inng', "_blank")}>Watch now</button>
      {/* <button>Instagram</button> */}
      {/* <button>Twitter</button> */}
    </HeroButtons>
  </Fade>
</SectionBg2>


      {/* 🟢 EVENTS */}
      <Section style={{
        background: `linear-gradient(
          135deg,
          #ffe4e4ff,
          #ff99007a,
          #00ccff,
          #9933ff
        )`
      }}>
        <Rotate duration={3000}>
          <h2>LIFE-CHANGING EXPERIENCES</h2>
        </Rotate>
        <Fade duration={3000}>
          <p>Upcoming events — SOON TO BE ANNOUNCED.</p>
          <p>Tickets available on mikeconnect.com</p>
        </Fade>
      <Slide direction="left">
  <ViewAllButton 
  style={{
background:"transparent",
textDecoration:"underline"
  }}
    onClick={() => {
      Swal.fire({
        text: "Coming soon...",
        icon: "info",
        confirmButtonText: "Okay"
      });
    }}
  >
    See all events
  </ViewAllButton>
</Slide>

      </Section>

      {/* 🟢 BOOKING */}
     <SectionBg>
  <Zoom duration={3000}>
    <h2 style={{
      color: "white",
      fontSize: "2.5rem",
      textShadow: "1px 1px 4px rgba(0,0,0,0.9)"
    }}>
      Book MIKE-CONNECT for your next event.
    </h2>
  </Zoom>
  <Bounce duration={3000}>
    <HeroButtons>
      <button onClick={()=>navigate('/contact')}>Book Mike-Connect now</button>
    </HeroButtons>
  </Bounce>
</SectionBg>


      {/* 🟢 NEWSLETTER */}
      <SectionCenter>
        <Slide direction="up" duration={3000}>
          <h2>Sign up For Our Newsletter</h2>
        </Slide>
        <Fade duration={3000}>
      <NewsletterForm>
  <input
    name="firstName"
    placeholder="First Name*"
    value={newsletter.firstName}
    onChange={handleNewsletterChange}
  />
  <input
    name="lastName"
    placeholder="Last Name*"
    value={newsletter.lastName}
    onChange={handleNewsletterChange}
  />
  <input
    name="email"
    placeholder="Email*"
    value={newsletter.email}
    onChange={handleNewsletterChange}
  />
  <button type="button" onClick={handleNewsletterSubmit} disabled={submitting}>
    {submitting ? "Submitting..." : "Send"}
  </button>
</NewsletterForm>

        </Fade>
        <Zoom duration={3000}>
          <p>READ. WATCH. LISTEN & LEARN.</p>
        </Zoom>
      </SectionCenter>

    </Wrapper>
  );
}

/* ---------------- STYLES ---------------- */

// Keep all your styled-components exactly the same as before
// Only changes are <Link> from react-router-dom and "as={Link}" in buttons/blog cards

/* ---------------- STYLES ---------------- */

const Wrapper = styled.div`
//   font-family: "Poppins", sans-serif;
  color: #222;
  background: white;
`;

const Hero = styled.section`
  background-image: url(${h1});
  background-size: cover;
  background-position: center;
  min-height: 60vh;
  display: flex;
  align-items: center;
  font-style:italic;
`;

const HeroContent = styled.div`
  max-width: 700px;
  padding: 80px 40px;
  color: white;
  text-shadow: 0px 2px 10px rgba(0,0,0,0.5);

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;

    @media(max-width:768px){
    text-align:center;
    }
    
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 30px;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 15px;

  @media(max-width:768px){
   justify-content:center; 
  }
 

  button {
    padding: 12px 28px;
    background: #ff9f1c;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background: #ff6f00;
  }
`;

const Section = styled.section`
  padding: 60px 20px;

  margin: auto;

  h2 {
    margin-bottom: 20px;
    color: #410b77ff;

  }

  p {
    margin-bottom: 30px;
    font-size: 1rem;
  }
`;

const SectionCenter = styled(Section)`
  text-align: center;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;

`;

const TopSpeakerSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${ms1});
  background-size:cover;
  background-position:top;
  padding: 60px 20px;
`


const SectionBg = styled(Section)`
  background-image: url(${h3});
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SectionBg2 = styled(Section)`
  background-image: url(${h4});
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap: 15px;
  margin-top: 25px;
  
`;

const ProgramCard = styled.div`
  background: #f7f7f7;
  padding: 20px;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
`;

const ViewAllButton = styled.button`
//   margin-top: 100px; !important;
//   padding: 100px;
//   background: #410b77ff;
  color: #410b77ff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    // background: #6a28b0ff;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 20px;
`;

const BlogCard = styled.div`
  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 12px;
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 6px;
  }

  span {
    font-size: 0.85rem;
    color: #555;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;

  @media(min-width: 700px){
    grid-template-columns: repeat(3,1fr);
  }
`;

const TestimonialCard = styled.div`
  background: #f4f4f4;
  padding: 20px;
  border-radius: 8px;

  p {
    font-style: italic;
    margin-bottom: 10px;
  }

  span {
    font-weight: bold;
  }
`;

const NewsletterForm = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;

  @media(max-width:768px){
  flex-direction:column;
  }

  input {
    padding: 10px 14px;
    border-radius: 6px;
    border: 1px solid #ccc;
  }

  button {
    padding: 10px 20px;
    background: #ff9f1c;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
  }
`;


