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
  padding: 1rem 2rem;
`;

const LogoContainer = styled.div`
  color: red;
  font-size: 40px;
`;
