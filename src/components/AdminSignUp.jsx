import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';

/* ================= THEME ================= */
const colors = {
  primary: '#5B6CFF',
  secondary: '#7C4DFF',
  bg: '#F4F6FF',
  card: 'rgba(255,255,255,0.9)',
  textDark: '#2D2E4A',
};

/* ================= LAYOUT ================= */
const Page = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
  // background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  background:rgba(0,0,255,0.1);
`;

const Card = styled.div`
  width: 100%;
  max-width: 520px;
  background: ${colors.card};
  backdrop-filter: blur(14px);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  text-align: center;
  color: ${colors.primary};
  margin-bottom: 0.3rem;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 2rem;
`;

/* ================= FORM ================= */
const Field = styled.div`
  margin-bottom: 1.2rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: ${colors.textDark};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border-radius: 10px;
  border: 2px solid #e6e8ff;
  font-size: 0.95rem;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(91, 108, 255, 0.2);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border-radius: 10px;
  border: 2px solid #e6e8ff;
  font-size: 0.95rem;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.9rem;
  margin-top: 1rem;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.95;
  }
`;

const LinkText = styled.p`
  text-align: center;
  margin-top: 1.2rem;
  font-size: 0.9rem;
  color: ${colors.primary};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

/* ================= COMPONENT ================= */
const AdminSignup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.email !== form.confirmEmail) {
      return Swal.fire('Error', 'Emails do not match', 'error');
    }

    if (form.password !== form.confirmPassword) {
      return Swal.fire('Error', 'Passwords do not match', 'error');
    }

    Swal.fire({
      title: 'Creating account...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const response = await fetch(
        'https://www.mikeconnect.com/mc_api/admin_signup.php',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (data.success) {
        Swal.fire('Success 🎉', data.message, 'success');
        navigate('/adminlogin');
        setForm({
          name: '',
          email: '',
          confirmEmail: '',
          phone: '',
          password: '',
          confirmPassword: '',
          role: '',
        });
      } else {
        Swal.fire('Error ❌', data.error || 'Something went wrong', 'error');
      }
    } catch {
      Swal.fire('Error ❌', 'Server connection failed', 'error');
    }
  };

  return (
    <Page>
      <Card>
        <Title>Admin Registration</Title>
        <Subtitle>Create a new administrator account</Subtitle>

        <form onSubmit={handleSubmit}>
          <Field>
            <Label>Full Name</Label>
            <Input name="name" value={form.name} onChange={handleChange} required />
          </Field>

          <Field>
            <Label>Email</Label>
            <Input type="email" name="email" value={form.email} onChange={handleChange} required />
          </Field>

          <Field>
            <Label>Confirm Email</Label>
            <Input type="email" name="confirmEmail" value={form.confirmEmail} onChange={handleChange} required />
          </Field>

          <Field>
            <Label>Phone Number</Label>
            <Input name="phone" value={form.phone} onChange={handleChange} required />
          </Field>

          <Field>
            <Label>Password</Label>
            <Input type="password" name="password" value={form.password} onChange={handleChange} required />
          </Field>

          <Field>
            <Label>Confirm Password</Label>
            <Input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
          </Field>

          <Field>
            <Label>Role</Label>
            <Select name="role" value={form.role} onChange={handleChange} required>
              <option value="" disabled>
                Select role
              </option>
              <option value="Admin">Admin</option>
            </Select>
          </Field>

          <Button type="submit">Create Account</Button>
        </form>

        <LinkText onClick={() => navigate('/adminlogin')}>
          Already have an account? Login
        </LinkText>
      </Card>
    </Page>
  );
};

export default AdminSignup;
