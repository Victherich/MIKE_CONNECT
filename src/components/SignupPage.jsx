
// SignupPage.js
import React, { useState } from "react";
import styled from "styled-components";

export default function SignupPage() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Attempt: ", form);
  };

  return (
    <Wrapper>
      <Card>
        <h2>Create Account</h2>
        <p>Join the Mike‑Connect Forum</p>

        <Form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={form.username}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign Up</button>
        </Form>

        <FooterText>
          Already have an account? <a href="/login">Login</a>
        </FooterText>
      </Card>
    </Wrapper>
  );
}

/* ===================== STYLES ===================== */

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
   background: #f4f4f4;
//   background: linear-gradient(135deg, #6a00ff, #ff0080);
  padding: 20px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 420px;
  background: #fff;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
  text-align: center;

  h2 {
    margin-bottom: 8px;
    font-size: 2rem;
    color: #4b0082;
  }

  p {
    margin-bottom: 25px;
    color: #666;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  label {
    text-align: left;
    font-size: 0.9rem;
    font-weight: 600;
    color: #444;
  }

  input {
    padding: 12px 14px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
    outline: none;

    &:focus {
      border-color: #6a00ff;
    }
  }

  button {
    margin-top: 10px;
    padding: 12px 14px;
    background: #6a00ff;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      background: #5000cc;
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
