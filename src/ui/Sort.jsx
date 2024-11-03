import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Select = styled.select`
  padding: 0.4rem 0.8rem;
  font-size: 1.4rem;
  border: 1px solid var(--color-stone-200);
  border-radius: 5px;
  background: none;

  &:focus {
    outline: none;
    border: 1px solid var(--color-blue-500);
  }
`;

/* eslint-disable react/prop-types */
function Filter({ options }) {
  // options = [{value, label}]

  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <Select
      value={searchParams.get("sortBy")}
      onChange={(e) => {
        searchParams.set("sortBy", e.target.value);
        setSearchParams(searchParams);
      }}
    >
      <option value=""> --sort by </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
}

export default Filter;
