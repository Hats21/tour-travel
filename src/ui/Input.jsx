import styled, { css } from "styled-components";

const Input = styled.input`
  background: var(--color-stone-50);
  padding: 0.8rem 1.2rem;

  width: 40rem;
  height: 40px;
  border-radius: 25px;
  ${(props) =>
    props.iconPosition === "left" &&
    css`
      padding: 2.4rem 3.2rem 2.4rem 4.8rem;
    `}

  ${(props) =>
    props.iconPosition === "right" &&
    css`
      padding: 2.4rem 4.8rem 2.4rem 3.2rem;
    `}

  ${(props) =>
    props.iconPosition === "none" &&
    css`
      padding: 2.4rem 3.2rem 2.4rem 3.2rem;
    `}
  font-size: 1.6rem;
  letter-spacing: 1px;
  outline: none;
  border: none;
  border: 2px solid var(--color-stone-300);
  background-color: var(--color-stone-50);
  /* transition: all 0.3s; */
  &:focus {
    /* box-shadow: 0 5px 5px var(--color-brand-100); */
    border: 2px solid var(--color-blue-400);
  }
`;

Input.defaultProps = {
  iconPosition: "none",
};

export default Input;
