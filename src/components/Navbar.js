import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuthCtx } from "../store/AuthContext";

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: normal;
`;
const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 0.5rem 1rem;
`;
const NavLink = styled(Link)`
  padding: 0.5rem 1rem;
`;

function Navbar() {
  const { isLoggedIn, logout } = useAuthCtx();
  return (
    <Header>
      <Logo to="/">MySkils</Logo>
      <nav>
        {!isLoggedIn && (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
        {isLoggedIn && (
          <>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/add">Add</NavLink>
            <NavLink onClick={logout} to="/login">
              Logout
            </NavLink>
          </>
        )}
      </nav>
    </Header>
  );
}

export default Navbar;
