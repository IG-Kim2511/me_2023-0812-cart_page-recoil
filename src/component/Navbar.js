import { Link } from "react-router-dom";

import styled from "styled-components";

import logoElem from "../assets/poke(4).png";

function Navbar() {

  return (
    <Header>

    <Link/>
      <Wrapper>
        <Link to={"/"} aria-label="go home">
          <img src={logoElem} alt="icon" className="imgWidth"/>
        </Link>
        <Nav>
          <Link to={"/"} aria-label="go home">홈</Link>
          <Link to={"/cart"} aria-label="go cart">장바구니</Link>
        </Nav>
      </Wrapper>
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  height: 72px;
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: #fff;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;
const Nav = styled.nav`
  max-width: 1024px;
  display: flex;
  justify-content: right;
  gap: 36px;
  align-items: center;
  > span {
    font-weight: bold;
    cursor: pointer;
  }
`;
export default Navbar;
