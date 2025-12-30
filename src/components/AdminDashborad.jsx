import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { adminLogout } from '../Features/Slice';
import AdminDetailsPage from './AdminProfile';
import AdminSignup from './AdminSignUp.jsx';
import DashboardHomeButton from './DashboardHomeButton.jsx';
import BlogPostsManager from './BlogPostsManager.jsx';

// ================== THEME ==================
const colors = {
  primary: '#5B6CFF',
  secondary: '#7C4DFF',
  lightBg: '#F4F6FF',
  sidebarBg: '#1F1B3A',
  textLight: '#EAEAFF',
  hover: 'rgba(91,108,255,0.15)',
};

// ================== STYLED COMPONENTS ==================
const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${colors.lightBg};
  overflow: hidden;
`;

const Sidebar = styled.div`
  background: ${colors.sidebarBg};
  color: ${colors.textLight};
  width: ${({ isOpen }) => (isOpen ? '250px' : '0')};
  transition: width 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 100;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);

  @media (min-width: 768px) {
    width: 250px;
    position: static;
  }
`;

const SidebarHeader = styled.div`
  padding: 20px;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  color: ${colors.primary};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 10px 0;
  margin: 0;
`;

const SidebarMenuItem = styled.li`
  padding: 14px 20px;
  cursor: pointer;
  color: ${({ active }) => (active ? colors.primary : colors.textLight)};
  background: ${({ active }) => (active ? colors.hover : 'transparent')};
  font-weight: ${({ active }) => (active ? '600' : '400')};
  transition: all 0.25s ease;

  &:hover {
    background: ${colors.hover};
    color: ${colors.primary};
  }
`;

const ContentArea = styled.div`
  flex-grow: 1;
  width: 100%;
  margin-left: ${({ isOpen }) => (isOpen ? '250px' : '0')};
  transition: margin-left 0.3s ease;
`;

const Hamburger = styled.div`
  position: fixed;
  top: 70px;
  left: 20px;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  color: white;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 300;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 50;
`;

// ================== MAIN COMPONENT ==================
const AdminDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('profile');

  const adminInfo = useSelector((state) => state.adminInfo);
  const dispatch = useDispatch();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleMenuClick = (menu) => {
    window.scrollTo(0, 0);
    setActiveMenu(menu);
    setMenuOpen(false);
  };

  const handleLogout = () => {
    Swal.fire({
      title: 'Log out?',
      text: 'You will need to log in again.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: colors.primary,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(adminLogout());
        Swal.fire({
          icon: 'success',
          title: 'Logged out',
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  const renderContent = () => {
    switch (activeMenu) {
      case 'profile':
        return (
          <AdminDetailsPage
            adminId={adminInfo?.id}
            onNavigate={handleMenuClick}
            onLogout={handleLogout}
          />
        );

      case 'adminsignup':
        return <AdminSignup />;

        case 'manageblogposts':
        return <BlogPostsManager />;

      default:
        return (
          <h2 style={{ textAlign: 'center', color: colors.primary }}>
            Welcome to your Dashboard
          </h2>
        );
    }
  };

  return (
    <DashboardContainer>
      <Hamburger onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>

      <Overlay isOpen={menuOpen} onClick={closeMenu} />

      <Sidebar isOpen={menuOpen}>
        <SidebarHeader>Admin Dashboard</SidebarHeader>

        <SidebarMenu>
          <SidebarMenuItem
            active={activeMenu === 'profile'}
            onClick={() => handleMenuClick('profile')}
          >
            Hi, {adminInfo?.name}
          </SidebarMenuItem>

          <SidebarMenuItem
            active={activeMenu === 'adminsignup'}
            onClick={() => handleMenuClick('adminsignup')}
          >
            Register Admin
          </SidebarMenuItem>

          <SidebarMenuItem onClick={handleLogout}>
            Logout
          </SidebarMenuItem>
        </SidebarMenu>
      </Sidebar>

      <DashboardHomeButton onGoHome={() => setActiveMenu('profile')} />

      <ContentArea isOpen={menuOpen}>{renderContent()}</ContentArea>
    </DashboardContainer>
  );
};

export default AdminDashboard;
