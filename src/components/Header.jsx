import { useContext, useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BeautifulDropdown from "./DropDown";
import { Context } from "./Context";

export default function Header() {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

const {categories}=useContext(Context);

  // Navigate to category page using ID
  const handleClick = (cat) => {
    navigate(`/category/${cat.id}`);
  };

  return (
    <HeaderContainer>
      <TopRow>
        <Title>MIKE-CONNECT</Title>

        <SearchBox>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Search</button>
        </SearchBox>
      </TopRow>

      {/* MENU LINKS */}
      <Menu>
        <Link
          to="/home"
          className={location.pathname === "/home" ? "active" : ""}
        >
          HOME
        </Link>

        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          ABOUT
        </Link>

        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          BLOG
        </Link>

        <Link
          to="/mikeconnecttv"
          className={location.pathname === "/mikeconnecttv" ? "active" : ""}
        >
          MIKE-CONNECT TV
        </Link>

        <Link
          to="/donate"
          className={location.pathname === "/donate" ? "active" : ""}
        >
          DONATE!
        </Link>

        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          CONTACT
        </Link>

          <BeautifulDropdown/>
      </Menu>
    

      {/* CATEGORIES */}
      <Categories>
        {categories.map((cat) => {
          const isActive = location.pathname === `/category/${cat.id}`;
          return (
            <CategoryItem
              key={cat.id}
              className={isActive ? "active" : ""}
              onClick={() => handleClick(cat)}
            >
              {cat.title}
            </CategoryItem>
          );
        })}
      </Categories>
    </HeaderContainer>
  );
}

/* ---------------------- STYLED COMPONENTS --------------------- */

const HeaderContainer = styled.header`
  width: 100%;
  padding: 25px;
  font-family: "Poppins", sans-serif;
  color: white;
  background: linear-gradient(135deg, #ff4d4d, #ff9900, #00ccff, #9933ff);
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  text-shadow: 2px 2px #0006;
  letter-spacing: 2px;
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
  margin-top: 25px;
  font-weight: 600;

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
  margin-top: 28px;
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
