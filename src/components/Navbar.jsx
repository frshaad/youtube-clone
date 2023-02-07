import styled from "styled-components";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

import { SearchBar } from "./";

const Navbar = () => (
  <NavContainer>
    <Link to='/'>
      <LogoContainer>
        <FaYoutube />
      </LogoContainer>
    </Link>

    <SearchBar />
  </NavContainer>
);

export default Navbar;

const NavContainer = styled.div`
  position: sticky;
  height: 8vh;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: #fff;
  z-index: 10;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  color: red;
  font-size: 60px;
`;
