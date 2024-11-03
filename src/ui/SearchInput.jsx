import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import Input from "./Input";
// const StyledInput = styled.input`
//   background: var(--color-stone-50);
//   padding: 0.8rem 1.2rem;

//   width: 40rem;
//   height: 40px;
//   border-radius: 40px;
//   padding: 2.4rem 3.2rem 2.4rem 4.8rem;
//   font-size: 1.6rem;
//   letter-spacing: 1px;
//   outline: none;
//   border: none;
//   border: 2px solid var(--color-stone-400);
//   background-color: var(--color-stone-50);
//   /* transition: all 0.3s; */
//   &:focus {
//     /* box-shadow: 0 5px 5px var(--color-brand-100); */
//     border: 2px solid var(--color-brand-600);
//   }
// `;

const Search = styled.div`
  position: relative;
  width: 400px;
  margin: 0 16px;

  & svg {
    font-size: 2.4rem;
    color: var(--color-stone-600);
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
  }
`;

function SearhInput() {
  return (
    <>
      <Search>
        <Input iconPosition="left" type="search" placeholder="Search..." />
        <CiSearch />
      </Search>
    </>
  );
}

export default SearhInput;
