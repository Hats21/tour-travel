import styled from "styled-components";

import { PiSpinner } from "react-icons/pi";

const StyledSpinner = styled.div`
  & svg {
    width: 3rem;
    height: 3rem;
    animation: spin 1s infinite linear;
    color: var(--color-brand-500);
  }

  @keyframes spin {
    0% {
      transform: rotate(360deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
`;

function Spinner() {
  return (
    <StyledSpinner>
      <PiSpinner />
    </StyledSpinner>
  );
}

export default Spinner;
