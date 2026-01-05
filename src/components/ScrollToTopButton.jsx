import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show button after scrolling down 300px
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      $visible={visible}
      aria-label="Scroll to top"
    >
      ↑
    </Button>
  );
}




const Button = styled.button`
  position: fixed;
  bottom: 24px;
  left: 24px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: #410b77ff;
  color: white;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${(p) => (p.$visible ? 1 : 0)};
  pointer-events: ${(p) => (p.$visible ? "auto" : "none")};
  transform: ${(p) => (p.$visible ? "translateY(0)" : "translateY(10px)")};
  transition: all 0.3s ease;

  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
  }
`;
