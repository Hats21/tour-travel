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

function Login() {
  return (
    <Form>
      <Container>
        <label>Your name</label>
        <Input type="text" placeholder="full name" />
      </Container>
      <Container>
        <label>Email</label>
        <Input type="email" placeholder="your email" />
      </Container>

      <Container>
        <label>Password</label>
        <Input type="password" placeholder="your password" />
      </Container>
      <Container>
        <label>Confirm password</label>
        <Input type="password" placeholder="confirm password" />
      </Container>

      <Button>Register</Button>
      <Container isRight={true}>
        <p>
          Have an account? <a href="#">Log in</a>
        </p>
      </Container>
    </Form>
  );
}

export default Login;
