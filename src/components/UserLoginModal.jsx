
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { userLogin } from "../Features/Slice";

// ===== Styled Components =====

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Modal = styled.div`
  background-color: #ffffff;
  padding: 25px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(91, 108, 255, 0.25);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 6px;
  border: 1px solid #d6d9ff;
  font-size: 16px;

  &:focus {
    border-color: #5b6cff;
    box-shadow: 0 0 0 2px rgba(91, 108, 255, 0.2);
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #5b6cff, #7c4dff);
  color: white;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.9;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #5b6cff;
`;

const CloseBtn = styled.span`
  position: absolute;
  top: 12px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
`;

// ===== Component =====

const UserLoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire("Error", "Email and password are required", "error");
      return;
    }

    Swal.fire({
      title: "Logging in...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const res = await axios.post(
        "https://www.mikeconnect.com/mc_api/user1_login.php",
        { email, password }
      );

      if (res.data.success) {
        Swal.fire("Success", res.data.message, "success");

        const userInfo = res.data.user;
        const userToken = res.data.token;

        dispatch(userLogin({ userInfo, userToken }));
        onClose();
      } else {
        Swal.fire("Login Failed", res.data.error, "error");
      }
    } catch (err) {
      Swal.fire("Error", "Server connection failed", "error");
    }
  };

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>×</CloseBtn>
        <Title>User Login</Title>

        <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit">Login</Button>
        </form>
      </Modal>
    </Overlay>
  );
};

export default UserLoginModal;
