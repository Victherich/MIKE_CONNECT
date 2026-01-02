import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import HomePage from './components/home';
import MikeConnectTV from './components/MikeConnectTV';
import DonationPage from './components/DonationPage';
import ContactPage from './components/ContactPage';
import CategoryPage from './components/CategoryPage';
import CounsellingPage from './components/CounsellingPage';
import ResourcesPage from './components/ResourcesPage';
import ScrollToTop from './components/ScrollToTop';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import AdminDashboard from './components/AdminDashborad';
import PrivateAdminDashboard from './components/PrivateAdminDashboard'
import AdminLogin from './components/AdminLogin';
import AdminSignup from './components/AdminSignUp';
import PostPage from './components/PostPage';
import Forum from './components/Forum';

function App() {
  return (
  <BrowserRouter>
  <ScrollToTop/>
  <Header/>
  <Routes>
    <Route path ='/' element={<LandingPage/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/home' element={<HomePage/>}/>
    <Route path='/mikeconnecttv' element={<MikeConnectTV/>}/>
    <Route path='/donate' element={<DonationPage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path="/category/:id" element={<CategoryPage />} />
    <Route path='/counselling' element={<CounsellingPage/>}/>
    <Route path='/resources' element={<ResourcesPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/signup' element={<SignupPage/>}/>
    <Route path='/post/:id' element={<PostPage/>}/>
    <Route path='/forum' element ={<Forum/>}/>



 <Route path='/admindashboard' element={<PrivateAdminDashboard/>}>
    <Route path='' element={<AdminDashboard/>}/>
 </Route>

 <Route path='/adminlogin' element={<AdminLogin/>}/>
 <Route path='/adminsignup' element={<AdminSignup/>}/>



  </Routes>
  <Footer/>
  </BrowserRouter>
  );
}

export default App;
