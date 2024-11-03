import styled, { css } from "styled-components";
import { LiaTimesSolid } from "react-icons/lia";
import { VscVerifiedFilled } from "react-icons/vsc";

import { FaSackDollar } from "react-icons/fa6";
import { MdOutlineBedroomParent } from "react-icons/md";
import { HiMiniCheck } from "react-icons/hi2";
import { FaCarSide } from "react-icons/fa";

// import PropTypes from "prop-types";
import { useState } from "react";

const Li = styled.li`
  display: flex;
  list-style-type: none;
  gap: 0.4rem;
  align-items: center;
  font-size: 1.4rem;
  color: var(--color-stone-600);

  & svg {
    font-size: 1.8rem;
    color: var(--color-stone-800);
  }

  & svg:last-child {
    color: var(--color-green-500);
    margin-left: 2rem;
  }
`;

const PaymentStatus = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.8rem;
  align-items: center;
  color: var(--color-yellow-600);
  background: var(--color-yellow-100);
  border-radius: 8px;
  margin: 0 1rem;
  & svg {
    font-size: 2.8rem;
    /* color: var(--color-yellow-600); */
  }
`;

// myComponent.propTypes = {
// optionalArray: PropTypes.array,
// optioalString: PropTypes.string,
// }

// Modal.propTypes = {
//   isOpen: PropTypes.bool,
//   setIsOpen: PropTypes.func,
// };

const Button2 = styled.button`
  padding: 1rem 1.2rem;
  border: none;
  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: var(--color-blue-600);
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

const Select = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 1.2rem;
  background-color: var(--color-stone-0);
  color: var(--color-stone-600);
  font-size: 1.8rem;
  letter-spacing: 0;
  align-items: center;
  font-weight: bold;

  & input {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const StyledModal = styled.div`
  min-width: 950px;
  min-height: 500px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background: var(--color-stone-50);
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  & div:not(:first-child) {
    padding: 1rem 1.2rem;
  }
`;

const ModalHeader = styled.div`
  background: var(--color-blue-600);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.2rem;
  color: var(--color-stone-0);
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;

  &:hover {
    background: var(--color-brand-500);
  }
  &:focus {
    outline: 1px solid var(--color-stone-500);
  }
  & svg {
    font-size: 2.4rem;
    color: var(--color-stone-0);
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
          <ModalHeader>
            <h1>package to be perchased(axum)</h1>
            <p>Will start visiting to Axum on Tue 25 2024</p>

            <Button onClick={() => setIsOpen(false)}>
              <LiaTimesSolid />
            </Button>
          </ModalHeader>
          <div>
            <p
              style={{
                fontSize: "1.6rem",
                color: "var(--color-stone-500)",
              }}
            >
              Angela + 3 guests has booked to visit to axum
            </p>
            <p
              style={{
                color: "var(--color-green-500)",
                fontSize: "1.8rem",
                fontFamily: "'Oswald', sans-serif",
                display: "flex",
                gap: "0.4rem",
                alignItems: "center",
              }}
            >
              <VscVerifiedFilled />
              <span>Identity verified</span>
            </p>
            <ul>
              <h1>Services</h1>

              <li>2-guests</li>
              <li>stay duration 3 days</li>
              <Li>
                <MdOutlineBedroomParent />

                <span>Bedroom</span>
                <HiMiniCheck />
              </Li>

              <Li>
                <FaCarSide />
                <span>car service </span>
                <HiMiniCheck />
              </Li>

              <Li>
                <FaCarSide />
                <span>guidance included</span>
              </Li>

              <li>Camera man olitional</li>
              <li>food service: No</li>
            </ul>
          </div>
          <PaymentStatus>
            <FaSackDollar />
            <p>Total price $2500</p>
            <p>Will pay on arrival</p>
          </PaymentStatus>
          <Select>
            <input id="camera" type="checkbox" />
            <label htmlFor="camera">
              You want to have a camera man for $25
            </label>
          </Select>
          <Select>
            <input id="paymet" type="checkbox" />
            <label htmlFor="paymet">
              I confirm that Jonas has paid $25,00($200, 2000, 500)
            </label>
          </Select>
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
            <Button2 type="primary">Check in</Button2>
            <Button2 type="secondary">back</Button2>
          </div>
        </StyledModal>
      </>
    )
  );
}

export default Modal;
