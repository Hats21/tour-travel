import styled, { css } from "styled-components";

const Heading = styled.h1`
  /* color: var(--color-stone-800); */
  background: linear-gradient(90deg, #a00b0b 0%, yellow 100%);
  background-clip: text;
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 2.4rem;
    `}
`;

export default Heading;
