import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0.8rem 1.2rem;
  font-size: 1.8rem;
  transition: all 0.2s;
  border-radius: 8px;
  & svg {
    font-size: 2.4rem;
  }

  &:hover svg {
    color: var(--color-stone-0);
  }

  &:hover {
    color: var(--color-stone-0);
    background-color: var(--color-blue-500);
  }
`;

function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleNext() {
    const currentPage = Number.parseInt(searchParams.get("page")) || 1;
    searchParams.set("page", currentPage + 1);
    setSearchParams(searchParams);
  }
  function handlePrev() {
    const currentPage = Number.parseInt(searchParams.get("page")) || 1;
    if (currentPage <= 1) return;
    searchParams.set("page", currentPage - 1);
    setSearchParams(searchParams);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 1.2rem",
        // marginTop: "2rem",
        background: "var(--color-brand-100)",
        borderRadius: "0 0 8px 8px",
      }}
    >
      <p
        style={{
          fontSize: "1.6rem",
          color: "var(--color-stone-500)",
          fontFamily: "curiour",
        }}
      >
        Showing <strong>1</strong> to <strong>20</strong> of results{" "}
      </p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <Button onClick={handlePrev}>
          {" "}
          <GrFormPrevious />
          <span>Previous</span>
        </Button>
        <Button
          onClick={() => {
            handleNext();
          }}
        >
          {" "}
          <span>Next</span>
          <MdOutlineNavigateNext />
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
