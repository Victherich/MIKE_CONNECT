
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
  formatted = formatted.replace(/\. +/g, ".<br /><br />");

  return formatted;
}




export default function PostPage() {
  const { id } = useParams();
  const postId = Number(id);

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!postId) return;

    setLoading(true);
    setError(null);

    axios
      .get(
        `https://www.mikeconnect.com/mc_api/get_post_by_id.php?id=${postId}&t=${Date.now()}`,
        {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        }
      )
      .then(res => {
        if (res.data?.success) {
          setPost(res.data.post);
        } else {
          setError(res.data?.error || "Post not found");
        }
      })
      .catch(() => setError("Network error"))
      .finally(() => setLoading(false));
  }, [postId]);








  if (loading) return <Status>Loading post...</Status>;
  if (error) return <Status>{error}</Status>;
  if (!post) return null;

  return (
    <Wrapper>
      <Hero style={{ backgroundImage: `url(${post.image})` }}>
        <Overlay />
        <HeroContent>
          <Title>{post.title}</Title>
          <Meta>{new Date(post.created_at).toDateString()}</Meta>
        </HeroContent>
      </Hero>




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
postId={postId}
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
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.85)
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

const Title = styled.h1`
  font-size: 2rem;
  line-height: 1.2;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

   @media (max-width: 360px) {
    font-size: 1rem;
  }
`;

const Meta = styled.div`
  font-size: 0.95rem;
  opacity: 0.85;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin:0 auto;
  padding: 40px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
 
    padding: 24px;
  }
`;

const Article = styled.div`
  font-size: 1.1rem;
  line-height: 1.9;
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
