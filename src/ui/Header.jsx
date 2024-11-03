import styled from "styled-components";
import SearchInput from "./SearchInput";
import Logo from "./Logo";

import { IoPersonCircleOutline } from "react-icons/io5";

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3.2rem;
  background: var(--color-stone-0);
  /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05); */
  grid-column: 1/ -1;
`;

const Login = styled.button`
  font-size: 1.8rem;
  padding: 1rem 1.2rem;
  border: none;
  border-radius: 12px;
  background: none;
  color: var(--color-blue-500);
  border: 1px solid var(--color-stone-100);
  display: flex;
  gap: 0.4rem;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: var(--color-stone-200);
  }

  & svg {
    font-size: 1.8rem;
    width: 2.4rem;
    height: 2.4rem;
    /* color: var(--color-stone-500); */
    color: var(--color-blue-500);
  }
`;
function Header() {
  return (
    <>
      <StyledHeader>
        <Logo />
        <div></div>

        <SearchInput />
        <div>
          {/* <Button type="secondary">size="small" Sign up</Button> */}

          <Login>
            <IoPersonCircleOutline />
            <span>Sign in</span>
          </Login>
        </div>
      </StyledHeader>
    </>
  );
}

export default Header;
