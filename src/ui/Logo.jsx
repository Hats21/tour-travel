import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  position: absolute;
  top: -5px;

  left: 5px;
  padding: 4px auto;

  & a img {
    width: 250px;
  }
`;
function Logo() {
  return (
    <StyledLogo>
      <Link to="/">
        <img src="/logo.png" alt="logo" />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
