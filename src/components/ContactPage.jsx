import React, { useState } from "react";
import styled from "styled-components";
import { Slide, Zoom } from "react-awesome-reveal";
import Swal from "sweetalert2";
import t1 from "../Images/t1.png";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.message) {
      Swal.fire("Error", "All fields are required", "error");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "https://www.mikeconnect.com/mc_api/contact_form_endpoint.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.success) {
        Swal.fire("Success", data.message, "success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        Swal.fire("Error", data.error || "Failed to send message", "error");
      }
    } catch (err) {
      Swal.fire("Error", "Network error. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  const Animated = ({ children, effect = "slide", duration = 3000 }) => {
    if (effect === "zoom") return <Zoom duration={duration}>{children}</Zoom>;
    return <Slide direction="up" duration={duration}>{children}</Slide>;
  };

  return (
    <Wrapper>
      {/* HERO */}
      <Hero>
        <Animated><h1>Contact Us</h1></Animated>
        <Animated><p>We are humbled by your interest in Mike-Connect</p></Animated>
      </Hero>

      {/* FORM */}
      <FormSection>
        <Animated effect="zoom">
          <FormTitle>Send us a message</FormTitle>
        </Animated>

        <FormCard onSubmit={handleSubmit}>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name *"
          />

          <Input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email *"
          />

          <Input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone *"
          />

          <Textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Comment or Message *"
          />

          <SubmitButton disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </SubmitButton>
        </FormCard>
      </FormSection>
    </Wrapper>
  );
}


/* ================= STYLES ================= */
const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  color: #222;
  background: #f9f9f9;
`;

const Hero = styled.section`
  background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${t1});
  background-size: cover;
  background-position: bottom;
  color: white;
  text-align: center;
  padding: 80px 20px;

  h1 { font-size: 3rem; margin-bottom: 16px; }
  p { font-size: 1.2rem; opacity: 0.95; }
`;

const Section = styled.section`
  max-width: 900px;
  margin: 60px auto;
  padding: 0 20px;
`;

const BookingText = styled.div`
  margin-bottom: 40px;
  font-size: 1.1rem;
  line-height: 1.5;
`;

const InfoGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`;

const Card = styled.div`
  background: white;
  padding: 28px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 6px 20px rgba(10,10,15,0.08);

  h3 { color: #410b77ff; font-size: 1.1rem; margin-bottom: 8px; }
  p { margin: 4px 0; font-size: 0.95rem; }
`;

const FormSection = styled.section`
  max-width: 700px;
  margin: 50px auto;
  padding: 0 20px;
`;

const FormTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  color: green;
`;

const FormCard = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: white;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 6px 24px rgba(10,10,15,0.06);
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1rem;
  outline: none;
  width: 100%;

  &:focus { border-color: #410b77ff; box-shadow: 0 0 0 3px rgba(65,11,119,0.08); }
`;

const Textarea = styled.textarea`
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1rem;
  outline: none;
  resize: vertical;
  width: 100%;

  &:focus { border-color: #410b77ff; box-shadow: 0 0 0 3px rgba(65,11,119,0.08); }
`;

const SubmitButton = styled.button`
  background: #ff9f1c;
  color: white;
  padding: 14px 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover { background: #ff6f00; }
`;

const SocialSection = styled.section`
  text-align: center;
  padding: 60px 20px;

  h2 { font-size: 2.2rem; margin-bottom: 12px; color: #410b77ff; }
  p { margin-bottom: 30px; font-size: 1.1rem; }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  a {
    padding: 12px 22px;
    background: #410b77ff;
    color: white;
    border-radius: 8px;
    font-size: 0.95rem;
    text-decoration: none;
    font-weight: 600;
  }

  a:hover { background: #2c0750; }
`;
