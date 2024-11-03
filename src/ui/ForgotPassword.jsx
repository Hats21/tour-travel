import styled, { css } from "styled-components";
import Input from "./Input";

const Button = styled.button`
  padding: 8px;
  border: none;
  background-color: var(--color-blue-400);
  color: var(--color-stone-0);
  font-size: 1.8rem;
  border-radius: 8px;

  &:hover {
    background-color: var(--color-blue-200);
  }
`;

const Form = styled.form`
  /* position: fixed;
  top: 50%;
  left: 50%; */
  margin: 5rem auto;
  /* transform: translate(-50%, -50%); */
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem;
  /* background-color: red; */
  border-radius: 1.2rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  & label,
  & p {
    font-size: 1.8rem;
    font-weight: 500;
  }

  & a {
    font-size: 1.6rem;
  }

  ${(props) =>
    props.isRight &&
    css`
      align-self: flex-end;
    `}
`;

function ForgotPassword() {
  return (
    <Form>
      <h1
        style={{
          fontSize: "2.4rem",
        }}
      >
        Reset your password
      </h1>
      <Container>
        <label>Enter your email</label>
        <Input type="email" placeholder="example@gmail.com" />
      </Container>

      <Button>Submit</Button>
    </Form>
  );
}

export default ForgotPassword;
