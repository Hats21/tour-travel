import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 1rem 3.2rem;
  /* background-color: var(--color-stone-500); */
  font-size: 1.4rem;
  color: var(--color-stone-800);
  grid-column: 1/ -1;
`;
function Footer() {
  return (
    <StyledFooter>
      {" "}
      since 2024&mdash; , &copy; Allrights reserved<sup>&reg;</sup>.
    </StyledFooter>
  );
}

export default Footer;
