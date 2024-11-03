/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const Button = styled.button`
  border: 1px solid var(--color-stone-200);
  background: none;
  padding: 0.4rem 0.8rem;
  font-size: 1.4rem;
  border-radius: 5px;
  transition: all 0.2s;

  ${(props) =>
    props.active &&
    css`
      background: #0068af;
      color: var(--color-stone-0);
    `}

  &:hover {
    background: #0068af;
    color: var(--color-stone-0);
  }
`;

function Sort({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set("status", value);
    setSearchParams(searchParams);
  }
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      {options.map((cur) => (
        <Button
          key={cur.value}
          onClick={() => handleClick(cur.value)}
          active={searchParams.get("status") === cur.value}
        >
          {cur.label}
        </Button>
      ))}
    </div>
  );
}

export default Sort;
