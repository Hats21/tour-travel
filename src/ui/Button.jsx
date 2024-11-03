import styled, { css } from "styled-components";

const Button = styled.button`
  border: none;
  color: var(--color-stone-50);
  font-size: 1.8rem;
  border-radius: 8px;
  transition: all 0.2s;
  ${(props) =>
    props.type === "primary" &&
    css`
      background: var(--color-brand-600);
    `}

  ${(props) =>
    props.type === "secondary" &&
    css`
      color: var(--color-brand-600);
      background: none;
      border: 1px solid var(--color-brand-500);
    `}
    ${(props) =>
    props.size == "small" &&
    css`
      font-size: 1.4rem;
      padding: 0.8rem 1rem;
    `}

    ${(props) =>
    props.size === "medium" &&
    css`
      font-size: 1.6rem;
      padding: 1rem 1.2rem;
    `}

    ${(props) =>
    props.size === "large" &&
    css`
      font-size: 1.8rem;
      padding: 1.2rem 1.6rem;
    `}
  &:hover {
    background: var(--color-brand-800);
    color: var(--color-stone-0);
  }
`;

Button.defaultProps = {
  type: "primary",
  size: "medium",
};

export default Button;
