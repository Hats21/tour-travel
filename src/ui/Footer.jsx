import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 1rem 3.2rem;
  background-color: var(--color-stone-500);
  color: var(--color-stone-0);
  grid-column: 1/ -1;
`;
function Footer() {
  return <StyledFooter>Allrights reserved &copy; 2024</StyledFooter>;
}

export default Footer;
