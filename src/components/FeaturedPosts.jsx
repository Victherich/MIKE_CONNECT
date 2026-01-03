
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import axios from "axios";

export default function FeaturedPosts() {
  const categoryId = 0; // Relationship posts category ID
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <Status>Loading posts...</Status>;
  if (error) return <Status>{error}</Status>;
  if (posts.length === 0) return <Status>No posts available.</Status>;

  return (
    <Container>
      <SectionTitle>Featured Posts</SectionTitle>
      <Grid>
        {/* Feature Card */}
        <Slide direction="up" duration={2000} triggerOnce>
          <RouterButton to={`/post/${posts[0].id}`}>
            <FeatureCard>
              <FeatureImage src={posts[0].image} />
              <FeatureContent>
                <FeatureTitle>{posts[0].title}</FeatureTitle>
                <FeatureDate>{new Date(posts[0].created_at).toDateString()}</FeatureDate>
              </FeatureContent>
            </FeatureCard>
          </RouterButton>
        </Slide>

        {/* Small Cards */}
        <SmallCards>
          {posts.slice(1).map((post, i) => (
            <Slide key={i} direction="up" duration={2000} delay={i * 200} triggerOnce>
              <RouterButton to={`/post/${post.id}`}>
                <SmallCard>
                  <SmallImage src={post.image} />
                  <SmallContent>
                    <SmallTitle>{post.title}</SmallTitle>
                    <SmallDate>{new Date(post.created_at).toDateString()}</SmallDate>
                  </SmallContent>
                </SmallCard>
              </RouterButton>
            </Slide>
          ))}
        </SmallCards>
      </Grid>
    </Container>
  );
}

// ---------------- STYLES ---------------- //

const Container = styled.div`
  margin: 60px 0;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 25px;
  background: linear-gradient(90deg, #ff6b81, #ffb347, #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  object-position:top;
`;

const FeatureContent = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: white;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7);
`;

const FeatureTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
`;

const FeatureDate = styled.div`
  font-size: 14px;
  margin-top: 6px;
`;

const SmallCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SmallCard = styled.div`
  display: flex;
  gap: 12px;
  // background: #fff0f5;
  background:white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SmallImage = styled.img`
  width: 120px;
  height: 100px;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
  }
`;

const SmallContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SmallTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
`;

const SmallDate = styled.div`
  font-size: 12px;
  opacity: 0.6;
`;

const RouterButton = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const Status = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #555;
  margin: 40px 0;
`;
