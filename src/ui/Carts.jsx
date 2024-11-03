import styled, { css } from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import PropTypes from "prop-types";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 1rem;
  width: 400px;
  padding: 2.4rem;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  & img {
    width: 100%;
    height: 300px;
    border-radius: 8px;
  }
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.5rem;
  line-height: 1.5;

  & svg {
    font-size: 1.8rem;
    color: var(--color-green-500);
  }

  ${(props) =>
    props.notIncluded &&
    css`
      & svg {
        color: red;
        font-size: 2.2rem;
      }
    `}
`;

const Button = styled.button`
  padding: 8px;
  border: none;
  /* background-color: var(--color-blue-400); */
  color: var(--color-stone-0);
  font-size: 1.8rem;
  border-radius: 8px;

  transition: all 0.3s;

  &:hover {
    background-color: var(--color-blue-200);
  }

  ${(props) =>
    props.level === "first" &&
    css`
      /* yellow */
      background: linear-gradient(to bottom right, #eab308, #ea580c, #b45309);
      &:hover {
        background: linear-gradient(to bottom right, #b45309, #ea580c, #eab308);
      }
    `} /* background: linear-gradient(to bottom right, white, yellow); */

    ${(props) =>
    props.level === "third" &&
    css`
      /* purple */
      background: linear-gradient(to bottom right, #a855f7, #9333ea, #7e22ce);

      &:hover {
        background: linear-gradient(to bottom right, #7e22ce, #9333ea, #a855f7);
      }
    `}

    ${(props) =>
    props.level === "second" &&
    css`
      /* sky */
      background: linear-gradient(to bottom right, #0ea5e9, #0284c7, #0369a1);
      &:hover {
        background: linear-gradient(to bottom right, #0369a1, #0284c7, #0ea5e9);
      }
    `}
`;

const Main = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 1rem;
`;

Carts.propTypes = {
  perchaseLevel: PropTypes.string.isRequired,
};
function Carts({ perchaseLevel }) {
  return (
    <Card>
      <Header>
        <img src="./chair-1.jpg" />
      </Header>

      <Main>
        <h1
          style={{
            fontSize: "2.4rem",
          }}
        >
          Remove backgrounds and more with AI
        </h1>
        <Li>
          {" "}
          <FaCheckCircle />
          <span>Add, replace, or remove parts of an image</span>
        </Li>
        <Li>
          {" "}
          <FaCheckCircle />
          <span>Extend images to your desired height</span>
        </Li>
        <Li>
          {" "}
          <FaCheckCircle />
          <span>Add, replace, or remove parts of an image</span>
        </Li>
        <Li>
          {" "}
          <FaCheckCircle />
          <span>Generate new, commercially-safe images</span>
        </Li>
        <Li notIncluded={true}>
          <LiaTimesSolid />
          breakfast
        </Li>

        <li>
          Get unlimited generations and modifications for only
          <strong>$24.99/person</strong>
        </li>
      </Main>
      <Button level={perchaseLevel}>Perchase</Button>
    </Card>
  );
}

export default Carts;
