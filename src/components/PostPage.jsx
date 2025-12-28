
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function PostPage() {
  const { id } = useParams();
  const postId = Number(id);

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </ContentWrapper>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  color: #111;
`;

const Hero = styled.div`
//   height: 60vh;
//   min-height: 320px;
  background-size: cover;
  background-position: center;
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
  font-size: 2.8rem;
  line-height: 1.2;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 2rem;
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
    margin-top: -40px;
    padding: 24px;
  }
`;

const Article = styled.div`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #333;

  p {
    margin-bottom: 1.2rem;
  }

  img {
    max-width: 100%;
    border-radius: 12px;
    margin: 20px 0;
  }

  h2, h3 {
    margin: 30px 0 15px;
  }

  a {
    color: #4f46e5;
    text-decoration: underline;
  }
`;

const Status = styled.div`
  text-align: center;
  margin-top: 120px;
  font-size: 1.3rem;
  color: #555;
`;
