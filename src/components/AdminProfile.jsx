import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import {
  FaUserShield,
  FaUsers,
  FaComments,
  FaSignOutAlt,
  FaPhoneAlt,
  FaIdCard,
  FaKey,
} from "react-icons/fa";

/* ================= THEME ================= */
const colors = {
  primary: "#5B6CFF",
  secondary: "#7C4DFF",
  bg: "#F4F6FF",
  card: "rgba(255,255,255,0.85)",
  textDark: "#2D2E4A",
};

/* ================= LAYOUT ================= */
const Page = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  padding: 2rem;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* ================= PROFILE PANEL ================= */
const ProfilePanel = styled.div`
  background: ${colors.card};
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: white;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Name = styled.h2`
  color: ${colors.textDark};
  margin-bottom: 0.2rem;
`;

const Email = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 1.2rem;
`;

const InfoItem = styled.p`
  font-size: 0.9rem;
  color: #444;
  margin: 0.4rem 0;
`;

const EditButton = styled.button`
  margin-top: 1rem;
  width: 100%;
  padding: 10px;
  background: ${colors.primary};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: ${colors.secondary};
  }
`;

/* ================= ACTION AREA ================= */
const ActionArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  color: white;
  margin-bottom: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

const ActionCard = styled.div`
  background: ${colors.card};
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.6rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  color: ${colors.primary};
  margin-bottom: 0.6rem;
`;

const Label = styled.h4`
  color: ${colors.textDark};
  margin-bottom: 0.2rem;
`;

const Desc = styled.p`
  font-size: 0.85rem;
  color: #666;
`;

/* ================= MODAL ================= */
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
`;

const Modal = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 14px;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 1rem 0;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: white;
  background: ${({ cancel }) => (cancel ? "#999" : colors.primary)};
`;

/* ================= COMPONENT ================= */
const AdminDetailsPage = ({ adminId, onNavigate, onLogout }) => {
  const [admin, setAdmin] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [newPhone, setNewPhone] = useState("");

  useEffect(() => {
    if (!adminId) return;
    axios
      .get(`https://www.mikeconnect.com/mc_api/get_admin_by_id.php?id=${adminId}`)
      .then((res) => res.data.success && setAdmin(res.data.user))
      .catch(() => Swal.fire("Error", "Failed to load admin", "error"));
  }, [adminId]);

  const savePhone = () => {
    axios
      .post("https://www.mikeconnect.com/mc_api/update_admin_phone.php", {
        id: admin.id,
        phone: newPhone,
      })
      .then((res) => {
        if (res.data.success) {
          setAdmin((p) => ({ ...p, phone: newPhone }));
          setEditOpen(false);
          Swal.fire("Updated", "Phone updated", "success");
        }
      });
  };

  if (!admin) return <p style={{ color: "white" }}>Loading...</p>;

  return (
    <Page>
      <Wrapper>
        {/* PROFILE */}
        <ProfilePanel>
          <Avatar>👤</Avatar>
          <Name>{admin.name}</Name>
          <Email>{admin.email}</Email>

          <InfoItem><FaIdCard /> ID: {admin.id}</InfoItem>
          <InfoItem><FaUserShield /> Role: {admin.role}</InfoItem>
          <InfoItem><FaKey /> Joined: {new Date(admin.created_at).toLocaleDateString()}</InfoItem>

          <EditButton onClick={() => { setNewPhone(admin.phone); setEditOpen(true); }}>
            <FaPhoneAlt /> Edit Phone
          </EditButton>
        </ProfilePanel>

        {/* ACTIONS */}
        <ActionArea>
          <Title>Admin Actions</Title>
          <Grid>

             <ActionCard onClick={() => onNavigate("manageblogposts")}>
              <Icon><FaUserShield /></Icon>
              <Label>Manage Blog Posts</Label>
              <Desc>Create, Edit, Delete posts</Desc>
            </ActionCard>

            <ActionCard onClick={() => onNavigate("alladmin")}>
              <Icon><FaUserShield /></Icon>
              <Label>Admins</Label>
              <Desc>Manage admins</Desc>
            </ActionCard>

            <ActionCard onClick={() => onNavigate("forum")}>
              <Icon><FaComments /></Icon>
              <Label>Forum</Label>
              <Desc>Community discussions</Desc>
            </ActionCard>

            <ActionCard onClick={() => onNavigate("adminsignup")}>
              <Icon><FaUsers /></Icon>
              <Label>Add Admin</Label>
              <Desc>Create new admin</Desc>
            </ActionCard>

            <ActionCard onClick={onLogout}>
              <Icon style={{ color: "red" }}><FaSignOutAlt /></Icon>
              <Label>Logout</Label>
              <Desc>Sign out securely</Desc>
            </ActionCard>
          </Grid>
        </ActionArea>
      </Wrapper>

      {editOpen && (
        <ModalOverlay>
          <Modal>
            <h3>Edit Phone</h3>
            <Input value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
            <ButtonRow>
              <Button onClick={savePhone}>Save</Button>
              <Button cancel onClick={() => setEditOpen(false)}>Cancel</Button>
            </ButtonRow>
          </Modal>
        </ModalOverlay>
      )}
    </Page>
  );
};

export default AdminDetailsPage;
