
import React from "react";
import styled from "styled-components";

export default function LoginPage() {
  return (
    <PageWrapper>
      <AuthBox>
        <h2>Login</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <button type="submit">Login</button>
        </form>

         <FooterText>
          Don't have an account? <a href="/signup">Sign up</a>
        </FooterText>
      </AuthBox>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
  font-family: "Poppins", sans-serif;
`;

const AuthBox = styled.div`
  width: 380px;
  background: #ffffff;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  text-align: center;

  h2 {
    margin-bottom: 20px;
    color: #4b0082;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  label {
    text-align: left;
    font-weight: 600;
    color: #333;
  }

  input {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }

  button {
    margin-top: 10px;
    padding: 12px;
    border: none;
    border-radius: 8px;
    background: #4b0082;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background: #36005e;
    }
  }
`;

const FooterText = styled.p`
  margin-top: 20px;
  font-size: 0.9rem;
  color: #555;

  a {
    color: #6a00ff;
    font-weight: 600;
  }
`;