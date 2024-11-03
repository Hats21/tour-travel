import styled, { css } from "styled-components";
import { MdOutlineNavigateNext } from "react-icons/md";

import { GrFormPrevious } from "react-icons/gr";

const StyledButton = styled.button`
  position: absolute;
  top: 50%;

  transition: all 0.2s;
  z-index: 9;

  ${(props) =>
    props.position === "right" &&
    css`
      right: 0;
    `}

  ${(props) =>
    props.position === "left" &&
    css`
      left: 0;
    `}

  border-radius: 50%;
  background-color: var(--color-stone-100);
  border: none;
  padding: 1rem;

  & svg {
    color: var(--color-stone-500);
    font-size: 2.4rem;
  }

  &:hover {
    ${(props) =>
      props.position === "right" &&
      css`
        transform: translateX(2px);
      `}
    ${(props) =>
      props.position === "left" &&
      css`
        transform: translateX(-2px);
      `}
  }
`;

const Img = styled.img`
  width: 100%;
  height: 75vh;
`;

function DetailHeader() {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Img src="img/img5.jpg" />;
      <div
        style={{
          position: "absolute",
          bottom: "22px",
          left: "50%",
          display: "flex",
          gap: "4px",
          alignItems: "center",
        }}
      >
        <button
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "var(--color-stone-200)",
            border: "1px solid var(--color-brand-500)",
          }}
        ></button>

        <button
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "var(--color-stone-200)",
            border: "1px solid var(--color-brand-500)",
          }}
        ></button>
        <button
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "var(--color-stone-200)",
            border: "1px solid var(--color-brand-500)",
          }}
        ></button>
        <button
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "var(--color-brand-500)",
            border: "1px solid var(--color-stone-500)",
          }}
        ></button>
      </div>
      <StyledButton position="right">
        <MdOutlineNavigateNext />
      </StyledButton>
      <StyledButton position="left">
        <GrFormPrevious />
      </StyledButton>
      <h1
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "1rem",
          background: "var(--color-stone-200)",
          color: "var(--color-stone-600)",
        }}
      >
        About the heritage this is an axum which is invetned from the something
        and also we can also
      </h1>
    </div>
  );
}

export default DetailHeader;
