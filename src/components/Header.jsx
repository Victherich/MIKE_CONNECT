// import { useContext, useEffect, useState } from "react";
// import styled from "styled-components";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import BeautifulDropdown from "./DropDown";
// import { Context } from "./Context";
// import { FaHamburger, FaHome } from "react-icons/fa";

// export default function Header() {
//   const [search, setSearch] = useState("");
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [showMobileMenu, setShowmobileMenu]=useState()

// const {categories}=useContext(Context);

//   // Navigate to category page using ID
//   const handleClick = (cat) => {
//     navigate(`/category/${cat.id}`);
//   };


//   const [catShow, setCatShow]=useState(false);

//   useEffect(()=>{
// if(location.pathname==="/forum"||location.pathname==="/admindashboard"){
//   setCatShow(false)
// }else{
//   setCatShow(true)
// }
//   },[location])


//   const handleSearch = () => {
//   if (!search.trim()) return;
//   navigate(`/search?q=${encodeURIComponent(search.trim())}`);
//   setSearch("");
// };


//   return (
//     <HeaderContainer>
//       <TopRow>
//         <Title onClick={()=>navigate('/home')}>MIKE-CONNECT</Title>

//         <SearchBox>
//           <button style={{fontSize:"28px", padding:"1px 20px"}}
//           onClick={()=>navigate('/home')}
//           ><FaHome/></button>
//         <input
//   type="text"
//   placeholder="Search"
//   value={search}
//   onChange={(e) => setSearch(e.target.value)}
//   onKeyDown={(e) => e.key === "Enter" && handleSearch()}
// />

// <button onClick={handleSearch}>Search</button>

//         </SearchBox>
//       </TopRow>

//       {/* MENU LINKS */}
//      {catShow&& <Menu>
//         <Link
//           to="/home"
//           className={location.pathname === "/home" ? "active" : ""}
//         >
//           HOME
//         </Link>

//         <Link
//           to="/about"
//           className={location.pathname === "/about" ? "active" : ""}
//         >
//           ABOUT
//         </Link>

//         <Link
//           to="/"
//           className={location.pathname === "/" ? "active" : ""}
//         >
//           BLOG
//         </Link>

//         <Link
//           to="/mikeconnecttv"
//           className={location.pathname === "/mikeconnecttv" ? "active" : ""}
//         >
//           MIKE-CONNECT TV
//         </Link>

//         <Link
//           to="/donate"
//           className={location.pathname === "/donate" ? "active" : ""}
//         >
//           DONATE!
//         </Link>

//         <Link
//           to="/contact"
//           className={location.pathname === "/contact" ? "active" : ""}
//         >
//           CONTACT
//         </Link>

//           <BeautifulDropdown/>

//           <Link
//           to="/forum"
//           className={location.pathname === "/forum" ? "active" : ""}
//         >
//           Forum
//         </Link>
//       </Menu>}
    

//       {/* CATEGORIES */}
//     {catShow&&  <Categories>
//         {categories.map((cat) => {
//           const isActive = location.pathname === `/category/${cat.id}`;
//           return (
//             <CategoryItem
//               key={cat.id}
//               className={isActive ? "active" : ""}
//               onClick={() => handleClick(cat)}
//             >
//               {cat.title}
//             </CategoryItem>
//           );
//         })}
//       </Categories>}


// <MobileMenuWrap>
//             {/*Mobile MENU LINKS */}
//      <MobileMenu>
//         <Link
//           to="/home"
//           className={location.pathname === "/home" ? "active" : ""}
//         >
//           HOME
//         </Link>

//         <Link
//           to="/about"
//           className={location.pathname === "/about" ? "active" : ""}
//         >
//           ABOUT
//         </Link>

//         <Link
//           to="/"
//           className={location.pathname === "/" ? "active" : ""}
//         >
//           BLOG
//         </Link>

//         <Link
//           to="/mikeconnecttv"
//           className={location.pathname === "/mikeconnecttv" ? "active" : ""}
//         >
//           MIKE-CONNECT TV
//         </Link>

//         <Link
//           to="/donate"
//           className={location.pathname === "/donate" ? "active" : ""}
//         >
//           DONATE!
//         </Link>

//         <Link
//           to="/contact"
//           className={location.pathname === "/contact" ? "active" : ""}
//         >
//           CONTACT
//         </Link>

//           <BeautifulDropdown/>

//           <Link
//           to="/forum"
//           className={location.pathname === "/forum" ? "active" : ""}
//         >
//           Forum
//         </Link>
//       </MobileMenu>
    

//       {/* CATEGORIES */}
//     <MobileCategories>
//         {categories.map((cat) => {
//           const isActive = location.pathname === `/category/${cat.id}`;
//           return (
//             <CategoryItem
//               key={cat.id}
//               className={isActive ? "active" : ""}
//               onClick={() => handleClick(cat)}
//             >
//               {cat.title}
//             </CategoryItem>
//           );
//         })}
//       </MobileCategories>
// </MobileMenuWrap>
//     {/*Mobile MENU LINKS */}
//      <MobileMenu>
//         <Link
//           to="/home"
//           className={location.pathname === "/home" ? "active" : ""}
//         >
//           HOME
//         </Link>

//         <Link
//           to="/about"
//           className={location.pathname === "/about" ? "active" : ""}
//         >
//           ABOUT
//         </Link>

//         <Link
//           to="/"
//           className={location.pathname === "/" ? "active" : ""}
//         >
//           BLOG
//         </Link>

//         <Link
//           to="/mikeconnecttv"
//           className={location.pathname === "/mikeconnecttv" ? "active" : ""}
//         >
//           MIKE-CONNECT TV
//         </Link>

//         <Link
//           to="/donate"
//           className={location.pathname === "/donate" ? "active" : ""}
//         >
//           DONATE!
//         </Link>

//         <Link
//           to="/contact"
//           className={location.pathname === "/contact" ? "active" : ""}
//         >
//           CONTACT
//         </Link>

//           <BeautifulDropdown/>

//           <Link
//           to="/forum"
//           className={location.pathname === "/forum" ? "active" : ""}
//         >
//           Forum
//         </Link>
//       </MobileMenu>
    

//       {/* CATEGORIES */}
//     <MobileCategories>
//         {categories.map((cat) => {
//           const isActive = location.pathname === `/category/${cat.id}`;
//           return (
//             <CategoryItem
//               key={cat.id}
//               className={isActive ? "active" : ""}
//               onClick={() => handleClick(cat)}
//             >
//               {cat.title}
//             </CategoryItem>
//           );
//         })}
//       </MobileCategories>


//       <FaHamburger style={{fontSize:"35px", position:"fixed", top:"100px", right:"1%"}}
//       onClick={()=>setShowmobileMenu(!showMobileMenu)}
//       />
//     </HeaderContainer>
//   );
// }

// /* ---------------------- STYLED COMPONENTS --------------------- */

// const HeaderContainer = styled.header`
//   width: 100%;
//   padding: 10px;
//   font-family: "Poppins", sans-serif;
//   color: white;
//   background: linear-gradient(135deg,
//   //  #ff4d4d, 
//   //  #ff9900, 
//   //  #00ccff, 
//   //  #9933ff

//    #4a187cff,
//     #611ea5ff,
//     // #00ccff,
//     #5e3800ff,
//     #9933ff
   
//    );
// `;

// const TopRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
// `;

// const Title = styled.h1`
//   font-size: 40px;
//   font-weight: 900;
//   text-shadow: 2px 2px #0006;
//   letter-spacing: 2px;
//   cursor:pointer;

//   @media(max-width:768px){
//   font-size:1.9rem;
//   text-align:center;
//   margin-bottom:15px;
//   }
// `;

// const SearchBox = styled.div`
//   display: flex;
//   gap: 10px;

//   input {
//     padding: 10px 15px;
//     width: 200px;
//     border-radius: 8px;
//     border: none;
//     outline: none;
//     font-size: 16px;
//   }

//   button {
//     background: #111;
//     color: white;
//     border: none;
//     border-radius: 8px;
//     padding: 10px 18px;
//     cursor: pointer;
//     font-weight: bold;
//     transition: 0.3s;
//   }

//   button:hover {
//     background: white;
//     color: #111;
//   }
// `;

// const Menu = styled.nav`
//   display: flex;
//   gap: 18px;
//   flex-wrap: wrap;
//   margin-top: 20px;
//   font-weight: 600;
//   font-size:0.8rem;

//   a {
//     cursor: pointer;
//     background: rgba(255, 255, 255, 0.18);
//     padding: 8px 14px;
//     border-radius: 8px;
//     transition: 0.3s;
//     text-decoration: none;
//     color: white;
//   }

//   a:hover {
//     background: rgba(0, 0, 0, 0.4);
//   }

//   a.active {
//     background: rgba(0, 0, 0, 0.7);
//     font-weight: 800;
//     border: 2px solid white;
//   }
// `;

// const Categories = styled.div`
//   display: flex;
//   gap: 12px;
//   flex-wrap: wrap;
//   margin-top: 25px;
// `;

// const CategoryItem = styled.span`
//   padding: 6px 12px;
//   background: rgba(0, 0, 0, 0.35);
//   border-radius: 6px;
//   font-size: 14px;
//   cursor: pointer;
//   transition: 0.3s;

//   &:hover {
//     background: rgba(255, 255, 255, 0.4);
//     color: #111;
//   }

//   &.active {
//     background: rgba(255, 255, 255, 0.85);
//     color: #111;
//     font-weight: 800;
//     border: 2px solid #111;
//   }
// `;






import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BeautifulDropdown from "./DropDown";
import { Context } from "./Context";
import { FaHamburger, FaHome, FaTimes } from "react-icons/fa";

export default function Header() {
  const [search, setSearch] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { categories } = useContext(Context);

  const [catShow, setCatShow] = useState(false);

  useEffect(() => {
    if (location.pathname === "/forum" || location.pathname === "/admindashboard") {
      setCatShow(false);
    } else {
      setCatShow(true);
    }
    setShowMobileMenu(false); // close on navigation
  }, [location]);

  const handleClick = (cat) => {
    navigate(`/category/${cat.id}`);
    setShowMobileMenu(false);
  };

  const handleSearch = () => {
    if (!search.trim()) return;
    navigate(`/search?q=${encodeURIComponent(search.trim())}`);
    setSearch("");
    setShowMobileMenu(false);
  };

  return (
    <HeaderContainer>
      <TopRow>
        <Title onClick={() => navigate("/home")}>MIKE-CONNECT</Title>

        <SearchBox>
          <HomeButton onClick={() => navigate("/home")}>
            <FaHome />
          </HomeButton>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button onClick={handleSearch}>Search</button>
        </SearchBox>
      </TopRow>

      {/* DESKTOP MENU (UNCHANGED) */}
      {catShow && (
        <Menu>
          <Link to="/home" className={location.pathname === "/home" ? "active" : ""}>HOME</Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>ABOUT</Link>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>BLOG</Link>
          <Link to="/mikeconnecttv" className={location.pathname === "/mikeconnecttv" ? "active" : ""}>
            MIKE-CONNECT TV
          </Link>
          <Link to="/donate" className={location.pathname === "/donate" ? "active" : ""}>DONATE!</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>CONTACT</Link>
          <BeautifulDropdown />
          <Link to="/forum" className={location.pathname === "/forum" ? "active" : ""}>Forum</Link>
        </Menu>
      )}

      {/* DESKTOP CATEGORIES (UNCHANGED) */}
      {catShow && (
        <Categories>
          {categories.map((cat) => (
            <CategoryItem
              key={cat.id}
              className={location.pathname === `/category/${cat.id}` ? "active" : ""}
              onClick={() => handleClick(cat)}
            >
              {cat.title}
            </CategoryItem>
          ))}
        </Categories>
      )}

      {/* MOBILE MODAL MENU */}
      {showMobileMenu && (
        <MobileOverlay>
          <MobileModal>
            <CloseBtn onClick={() => setShowMobileMenu(false)}>
              <FaTimes />
            </CloseBtn>
<h1 style={{fontWeight:"900", fontSize:"1.8rem", textDecoration:"underline", fontStyle:"italic"}}>MENU</h1>
            <MobileMenu>
              
              <Link to="/home">HOME</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/">BLOG</Link>
              <Link to="/mikeconnecttv">MIKE-CONNECT TV</Link>
              <Link to="/donate">DONATE!</Link>
              <Link to="/contact">CONTACT</Link>
              <Link to="/forum">FORUM</Link>
              <BeautifulDropdown />
            </MobileMenu>
<h1 style={{fontWeight:"900",
   fontSize:"1.5rem",
    textDecoration:"underline",
     fontStyle:"italic",
     marginTop:"25px"
     }}>CATEGORIES</h1>

            <MobileCategories>
              {categories.map((cat) => (
                <span key={cat.id} onClick={() => handleClick(cat)}>
                  {cat.title}
                </span>
              ))}
            </MobileCategories>
          </MobileModal>
        </MobileOverlay>
      )}

      {/* HAMBURGER */}
      
        <HamburgerBtn onClick={() => setShowMobileMenu(true)}>
          <FaHamburger />
        </HamburgerBtn>
      
    </HeaderContainer>
  );
}
















/* ---------------------- STYLED COMPONENTS --------------------- */

const HeaderContainer = styled.header`
  width: 100%;
  padding: 10px;
  font-family: "Poppins", sans-serif;
  color: white;
  background: linear-gradient(135deg,
  //  #ff4d4d, 
  //  #ff9900, 
  //  #00ccff, 
  //  #9933ff

   #4a187cff,
    #611ea5ff,
    // #00ccff,
    #5e3800ff,
    #9933ff
   
   );
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media(max-width:768px){
  // justify-content:center;
  align-items:center;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  text-shadow: 2px 2px #0006;
  letter-spacing: 2px;
  cursor:pointer;

  @media(max-width:768px){
  font-size:1.9rem;
  text-align:center;
  margin-bottom:15px;
  }
`;

const SearchBox = styled.div`
  display: flex;
  gap: 10px;

  input {
    padding: 10px 15px;
    width: 200px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 16px;
  }

  button {
    background: #111;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 18px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
  }

  button:hover {
    background: white;
    color: #111;
  }
`;

const Menu = styled.nav`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin-top: 20px;
  font-weight: 600;
  font-size:0.8rem;

  @media(max-width:768px){
  display:none;
  }

  a {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.18);
    padding: 8px 14px;
    border-radius: 8px;
    transition: 0.3s;
    text-decoration: none;
    color: white;
  }

  a:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  a.active {
    background: rgba(0, 0, 0, 0.7);
    font-weight: 800;
    border: 2px solid white;
  }
`;

const Categories = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 25px;

  @media(max-width:768px){
  display:none;
  }
`;

const CategoryItem = styled.span`
  padding: 6px 12px;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    color: #111;
  }

  &.active {
    background: rgba(255, 255, 255, 0.85);
    color: #111;
    font-weight: 800;
    border: 2px solid #111;
  }
`;


const HomeButton = styled.button`
  font-size: 28px;
  padding: 1px 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;








/* ================= MOBILE MENU STYLES ONLY ================= */

const MobileOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.65);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileModal = styled.div`
  width: 90%;
  max-height: 90vh;
  background: linear-gradient(135deg, #4a187c, #611ea5, #9933ff);
  border-radius: 16px;
  padding: 20px;
  overflow-y: auto;
  color: white;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  float: right;
  cursor: pointer;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-wrap:wrap;
  // flex-direction: column;
  gap: 12px;
  margin-top: 10px;
  justify-content:center;


  

  a {
    padding: 5px 10px;
    background: rgba(255,255,255,0.25);
    border-radius: 8px;
    text-decoration: none;
    color: white;
    font-weight: 700;
    text-align: center;
    font-size:0.9rem;
  }
`;

const MobileCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  justify-content:center;

  span {
    background: rgba(255,255,255,0.25);
    padding: 2px 10px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    font-size:0.9rem;
  }
`;

const HamburgerBtn = styled.div`
  position: fixed;
  bottom: 20px;
  right: 16px;
  background: #111;
  padding: 14px;
  border-radius: 50%;
  font-size: 24px;
  z-index: 9998;
  cursor: pointer;

  @media(min-width:769px){
    display:none;
  }
`;
