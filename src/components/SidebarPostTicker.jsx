
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SidebarPostTicker() {
  const CATEGORY_ID = 0; // 🔥 change category id here
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.mikeconnect.com/mc_api/get_posts_by_category.php?category=${CATEGORY_ID}&t=${Date.now()}`
      )
      .then(res => {
        if (res.data?.success) {
          // duplicate list for seamless loop
          setPosts([...res.data.posts, ...res.data.posts]);
        }
      })
      .catch(() => setPosts([]));
  }, []);

  if (!posts.length) return null;

  return (
    <Sidebar>
      <Title>🔥 Latest Posts</Title>

      <TickerContainer>
        <Ticker>
          {posts.map((post, i) => (
            <PostItem
              key={i}
              onClick={() => navigate(`/post/${post.id}`)}
            >
              <Thumb src={post.image} />
              <PostInfo>
                <PostTitle>{post.title}</PostTitle>
                <PostDate>
                  {new Date(post.created_at).toDateString()}
                </PostDate>
              </PostInfo>
            </PostItem>
          ))}
        </Ticker>
      </TickerContainer>
    </Sidebar>
  );
}


const slideUp = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
`;

const Sidebar = styled.aside`
  position: sticky;
  top: 90px;
  width: 320px;
  height: 520px;
  background: #ffffff;
  border-radius: 18px;
  padding: 16px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.08);

  @media (max-width: 1100px) {
    display: none;
  }
`;

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #4f46e5;
`;

const TickerContainer = styled.div`
  height: 450px;
  overflow: hidden;

  &:hover div {
    animation-play-state: paused;
  }
`;

const Ticker = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${slideUp} 100s linear infinite;
`;

const PostItem = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0;
  cursor: pointer;
  border-bottom: 1px solid #eee;

  &:hover {
    background: rgba(79, 70, 229, 0.05);
  }
`;

const Thumb = styled.img`
  width: 70px;
  height: 55px;
  border-radius: 10px;
  object-fit: cover;
  flex-shrink: 0;
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostTitle = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: #222;
  line-height: 1.2;
`;

const PostDate = styled.div`
  font-size: 0.7rem;
  color: #777;
  margin-top: 4px;
`;
