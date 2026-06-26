
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Comments from "./Comments";
import DOMPurify from "dompurify";



function formatContentWithLinks(content) {
  if (!content) return "";

  let formatted = content.replace(/\r\n/g, "\n");

  // 🔗 Convert URLs to clickable links
  formatted = formatted.replace(
    /((https?:\/\/|www\.)[^\s<]+)/gi,
    (url) => {
      const href = url.startsWith("http") ? url : `https://${url}`;
      return `<a href="${href}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    }
  );

  // 🧱 Break sentences into new lines
  // formatted = formatted.replace(/\. +/g, ".<br /><br />");

  return formatted;
}




export default function PostPage() {
  // const { id } = useParams();
  // const postId = Number(id);
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();





useEffect(() => {
  if (!slug) return;

  setLoading(true);
  setError(null);

  try {
    const cached = localStorage.getItem("all_posts");

    if (!cached) {
      setError("No cached posts found");
      setPost(null);
      return;
    }

    const allPosts = JSON.parse(cached);

    // 🔍 find post by slug
    const foundPost = allPosts.find(p => p.slug === slug);

    if (!foundPost) {
      setError("Post not found");
      setPost(null);
    } else {
      setPost(foundPost);
    }
  } catch (err) {
    setError("Error loading post");
    setPost(null);
  } finally {
    setLoading(false);
  }
}, [slug]);







  // if (loading) return <Status>Loading post...</Status>;
  if (error) return <Status>{error}</Status>;
  if (!post) return null;

  return (
    <Wrapper>

      <HeaderContainer>
    <Title>{post.title}</Title>
    <Meta>Published on {new Date(post.created_at).toDateString()}</Meta>
  </HeaderContainer>

  {post.image && (
    <ImageWrapper>
      <BlogImage src={post.image} alt={post.title} />
    </ImageWrapper>
  )}


      {/* <Hero style={{ backgroundImage: `url(${post.image})` }}>
        <Overlay />
        <HeroContent>
          <Title>{post.title}</Title>
          <Meta>{new Date(post.created_at).toDateString()}</Meta>
        </HeroContent>
      </Hero> */}




      <ContentWrapper>


<Article
  dangerouslySetInnerHTML={{
    __html: DOMPurify.sanitize(post.content),
  }}
/>


  {post.links && post.links.length > 0 && (
    <LinksSection>
      <LinksTitle>References / Links</LinksTitle>
      {post.links.map((link, i) => (
        <LinkItem key={i}>
          <a
            href={link.url.startsWith("http") ? link.url : `https://${link.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.description || link.url}
          </a>
        </LinkItem>
      ))}
    </LinksSection>
  )}
</ContentWrapper>


      <BackWrapper>
  <BackButton onClick={() => navigate(-1)}>
    ← Back
  </BackButton>
</BackWrapper>
<Comments
postId={post?.id}
/>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  color: #111;
`;

const Hero = styled.div`
  height: 60vh;
  min-height: 320px;

  background-position: top;
  position: relative;
  display: flex;
  align-items: flex-end;

  @media (max-width: 768px) {
    // height: 45vh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 1)
  );
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
  color: #fff;
  animation: fadeUp 0.6s ease-out;

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// const Title = styled.h1`
//   font-size: 2rem;
//   line-height: 1.2;
//   margin-bottom: 12px;

//   @media (max-width: 768px) {
//     font-size: 1.5rem;
//   }

//    @media (max-width: 360px) {
//     font-size: 1rem;
//   }
// `;

// const Meta = styled.div`
//   font-size: 0.95rem;
//   opacity: 0.85;
// `;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin:0 auto;
  padding: 40px;
  background: white;
  border-radius: 16px;
  // box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
 
    padding: 24px;
  }
`;

const Article = styled.div`
  font-size: 0.9rem;
  // line-height: 1.9;
  color: #333;

  a {
    color: #2563eb;
    font-weight: 500;
    text-decoration: underline;
    word-break: break-word;
  }

  a:hover {
    color: #1e40af;
  }

  br {
    display: block;
    margin-bottom: 12px;
  }


  /* ✅ Headings in green */
  h1, h2, h3, h4, h5, h6 {
    color: #16a34a; /* nice green */
  }

    /* ✅ Move lists slightly to the right */
  ul, ol {
    padding-left: 20px;
    margin-left: 10px;
  }
`;


const Status = styled.div`
  text-align: center;
  margin-top: 120px;
  font-size: 1.3rem;
  color: #555;
`;


const BackWrapper = styled.div`
  margin-top: 60px;
  margin-bottom:60px;
  display: flex;
  justify-content: center;
`;

const BackButton = styled.button`
  background: linear-gradient(135deg, #4f46e5, #6366f1);
  color: white;
  border: none;
  padding: 14px 36px;
  font-size: 1rem;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 10px 25px rgba(79, 70, 229, 0.35);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(79, 70, 229, 0.45);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
  }
`;


const LinksSection = styled.div`
  margin-top: 30px;
`;

const LinksTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 12px;
  color:green;
`;

const LinkItem = styled.div`
  margin-bottom: 8px;

  a {
    color: #2563eb;
    font-weight: 500;
    text-decoration: underline;

    &:hover {
      color: #1e40af;
    }
  }
`;


const HeaderContainer = styled.header`
  max-width: 740px;      /* Matches clean, readable modern reading widths */
  margin: 0 auto;
  padding: 40px 20px 24px 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  line-height: 1.2;
  font-weight: 900;
  // color: #111827;        /* Crisp, modern near-black */
  margin-bottom: 12px;
  color:green;
  text-align:center;

  @media (max-width: 768px) {
    font-size: 1.85rem;
  }
`;

const Meta = styled.div`
  font-size: 0.95rem;
  color: #6b7280;        /* Sleek modern gray */
  text-align:center;
`;

// const ImageWrapper = styled.div`
//   max-width: 900px;
//   margin: 0 auto 40px auto;
//   // background-color: #f3f4f6; /* Subdued gray canvas background so odd-sized images blend nicely */
//   border-radius: 12px;
//   overflow: hidden;
  
//   display: flex;
//   justify-content: center;
//   align-items: center;
  
//   /* Hard ceiling ensures portrait images don't stretch excessively vertical */
//   max-height: 500px; 
//   width: 100%;
//   padding: 0;
// `;



// const BlogImage = styled.img`
//   max-width: 100%;
//   height: auto;          /* Keep this! It ensures the aspect ratio scales correctly */
//   // max-height: 500px;     /* Keep this! It caps tall portrait images so they don't break the page */
  
//   /* Keeps original aspect ratio entirely visible without cropping */
//   object-fit: contain; 
//   display: block;
// `;



const ImageWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto 40px auto;
  border-radius: 12px;
  overflow: hidden;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* Caps the container height for tall portrait images */
  max-height: 500px; 
  width: 100%;
  padding: 0;
`;

const BlogImage = styled.img`
  /* Small images stay small/sharp; large images shrink safely */
  max-width: 100%;
  
  /* Scales the image proportionally */
  height: auto;          
  
  /* Caps the image height so it matches the wrapper and won't overflow */
  max-height: 500px;     
  
  /* Keeps the full image visible without stretching or cropping */
  object-fit: contain; 
  display: block;
`;