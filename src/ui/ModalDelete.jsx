import styled, { css } from "styled-components";
import { LiaTimesSolid } from "react-icons/lia";

// import PropTypes from "prop-types";
import { useState } from "react";

const Button2 = styled.button`
  padding: 1rem 1.2rem;
  border: none;
  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-stone-0);
    `}
  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: var(--color-stone-0);
      border: 1px solid var(--color-stone-200);
    `}

font-size: 1.8rem;
  border-radius: 5px;
`;

const StyledModal = styled.div`
  width: 500px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background: var(--color-stone-0);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1rem 1.2rem;
  border-radius: 24px;

  & div:not(:first-child) {
    padding: 1rem 1.2rem;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;

  &:hover {
    background: var(--color-brand-500);
  }

  &:hover svg {
    color: var(--color-stone-0);
  }
  &:focus {
    outline: 1px solid var(--color-stone-500);
  }
  & svg {
    font-size: 2.4rem;
    color: var(--color-stone-500);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  background-color: #ffffff67;
`;

function Modal() {
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen);

  return (
    isOpen && (
      <>
        <Overlay onClick={() => setIsOpen(false)}></Overlay>
        <StyledModal>
          <div
            style={{
              justifySelf: "flex-end",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button onClick={() => setIsOpen(false)}>
              <LiaTimesSolid />
            </Button>
          </div>
          <h1>Delete booking</h1>
          <p
            style={{
              fontSize: "1.6rem",
              fontWeight: "500",
            }}
          >
            This action can&apos;t be undone. are you sure you want to delete
            this permanently?
          </p>

          <div
            style={{
              justifySelf: "flex-end",
              display: "flex",
              gap: "1rem",
              alignContent: "flex-end",
              justifyContent: "flex-end",
              marginRight: "3rem",
            }}
          >
            <Button2 type="primary">Delete</Button2>
            <Button2 type="secondary">back</Button2>
          </div>
        </StyledModal>
      </>
    )
  );
}

export default Modal;
