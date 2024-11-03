import styled from "styled-components";
import Spinnerminni from "./Spinnerminni";

const StyledSpinner = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 5px solid var(--color-brand-100);
  border-top: 5px solid var(--color-brand-500);
  animation: spin 1s infinite linear;

  @keyframes spin {
    0% {
      transform: rotate(360deg);
    }

    50% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
`;

const Loader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.4rem;
  /* display: inline-block; */
  max-width: 100px;
`;
function Spinner() {
  return (
    <>
      <Loader>
        <StyledSpinner></StyledSpinner>
      </Loader>
      <Spinnerminni />
    </>
  );
}
// import { ImSpinner3 } from "react-icons/im";

export default Spinner;
