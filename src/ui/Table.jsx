/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Pagination from "./Pagination";
import Filter from "./Sort";
import Sort from "./Filter";

const Container = styled.div`
  width: 100rem;
  margin: 2rem auto;
`;

const StyledTable = styled.table`
  width: 100%;
  /* width: 100rem; */
  /* margin: 10rem auto; */
  border-collapse: collapse;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
`;

const Body = styled.tbody`
  padding: 0.8rem 1rem;
`;

const Row = styled.tr`
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 1rem;

  /* display: grid; */
  /* grid-template-columns: 50px 1fr 1fr 1fr; */
  color: var(--color-stone-500);
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: capitalize;
  /* border-bottom: 1px solid blue; */

  &:nth-child(even) {
    background-color: var(--color-stone-100);
  }

  &:nth-child(odd) {
    background-color: var(--color-stone-0);
  }

  & td,
  & th {
    /* border: 1px solid #c7dfef; */
    /* border: 1px solid var(--color-brand-100); */
    /* border-collapse: collapse; */
    padding: 1rem 1.2rem;
    /* background-color: red; */
  }

  & td:first-child {
    background: #e4f3ff;
    /* background: var(--color-brand-200); */
    text-align: center;
  }

  & td:last-child {
    color: var(--color-blue-500);
  }
`;

function Table() {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "4rem",
        }}
      >
        <h1>All bookings</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {/* [{value, label}] */}
          <Sort
            options={[
              { value: "all", label: "all" },
              {
                value: "unconfirmed",
                label: "unconfirmed",
              },
              {
                value: "checked-in",
                label: "checked in",
              },
              {
                value: "checked-out",
                label: "checked out",
              },
            ]}
          />
          <Filter
            options={[
              { value: "name-asc", label: "name ascending" },
              {
                value: "name-desc",
                label: "name descending",
              },
            ]}
          />
        </div>
      </div>
      <StyledTable>
        <TableHeader />
        <TableBody />
      </StyledTable>
      <Pagination />
    </Container>
  );
}

const Header = styled.thead`
  & tr {
    display: grid;
    grid-template-columns: 50px 1fr 1fr 1fr 1fr;
    column-gap: 2rem;
    row-gap: 1rem;

    background: #0068af;
    /* background: var(--color-brand-700); */
    color: var(--color-stone-0);
    font-size: 1.4rem;
    /* border-radius: 8px 8px 0 0px; */
    font-weight: 600;
    text-transform: capitalize;
    /* justify-items: flex-start; */
    /* align-items: flex-start; */
    text-align: left;

    & th {
      padding: 0.8rem 1rem;
    }

    /* grid-template-columns: 100px 1fr 1fr 1fr; */
  }
`;

const Rejected = styled.td`
  background: #e301014c;
  color: #e30101;
`;

const CheckedOut = styled.td`
  color: var(--color-stone-300);
  background: var(--color-stone-50);
`;

const CheckedIn = styled.td`
  background: #8de02c4c;
  color: #8de02c;
  font-weight: bold;
`;

const Unconfirmed = styled.td`
  background: #e3ce074c;
  color: #e5ce07;
  font-weight: bold;
`;

// .status.pending {
//   background: #e3ce074c;
//   color: #e5ce07;
// }
const Progress = styled.td`
  background: rgba(2, 155, 227, 0.3);
  color: #019be3;
  font-weight: bold;
`;

// .status.delivered {
//   background: #8de02c4c;
//   color: #8de02c;
// }

function TableHeader() {
  return (
    <Header>
      <tr>
        <th></th>
        <th>name</th>
        <th>Date of arrival</th>
        <th>Status</th>
        <th>actions</th>
      </tr>
    </Header>
  );
}

function TableBody() {
  return (
    <Body>
      <Row>
        <td>1</td>
        <td>Jonas shemetman</td>
        <td>After 7 days</td>
        <Unconfirmed>unconfirmed</Unconfirmed>
        <td>view | edit | delete </td>
      </Row>
      <Row>
        <td>2</td>
        <td>Angela Yu</td>
        <td>visiting...</td>
        <CheckedIn>checked in</CheckedIn>
        <td>view | edit | delete </td>
      </Row>{" "}
      <Row>
        <td>3</td>
        <td>nickolas micheal</td>
        <td>After 3 days</td>
        <Progress>visiting...</Progress>
        <td> view | edit | delete </td>
      </Row>{" "}
      <Row>
        <td>4</td>
        <td>joe smith</td>
        <td>After 15 days</td>
        <CheckedOut>checked out</CheckedOut>
        <td>view | edit | delete </td>
      </Row>{" "}
      <Row>
        <td>5</td>
        <td>Hatsey tikur</td>
        <td>After 1 day</td>
        <CheckedIn>checked in</CheckedIn>
        <td>view | edit | delete </td>
      </Row>
      <Row>
        <td>6</td>
        <td>Jonas shemetman</td>
        <td>After 7 days</td>
        <CheckedIn>checked in</CheckedIn>
        <td>view | edit | delete </td>
      </Row>
      <Row>
        <td>7</td>
        <td>Angela Yu</td>
        <td>After 10 days</td>
        <Rejected>rejected</Rejected>
        <td>view | edit | delete </td>
      </Row>{" "}
      <Row>
        <td>8</td>
        <td>nickolas micheal</td>
        <td>After 3 days</td>
        <CheckedIn>checked in</CheckedIn>
        <td> view | edit | delete </td>
      </Row>{" "}
      <Row>
        <td>9</td>
        <td>joe smith</td>
        <td>After 15 days</td>
        <Progress>visiting...</Progress>
        <td>view | edit | delete </td>
      </Row>{" "}
      <Row>
        <td>10</td>
        <td>Hatsey tikur</td>
        <td>After 1 day</td>
        <CheckedIn>checked in</CheckedIn>
        <td>view | edit | delete </td>
      </Row>
      <Row>
        <td>11</td>
        <td>Jonas shemetman</td>
        <td>After 7 days</td>
        <CheckedOut>checked out</CheckedOut>
        <td>view | edit | delete </td>
      </Row>
      <Row>
        <td>12</td>
        <td>Angela Yu</td>
        <td>After 10 days</td>
        <CheckedOut>checked out</CheckedOut>
        <td>view | edit | delete </td>
      </Row>{" "}
      <Row>
        <td>13</td>
        <td>nickolas micheal</td>
        <td>After 3 days</td>
        <Progress>Visiting...</Progress>
        <td> view | edit | delete </td>
      </Row>{" "}
      <Row>
        <td>14</td>
        <td>joe smith</td>
        <td>After 15 days</td>
        <Progress>visiting...</Progress>
        <td>view | edit | delete </td>
      </Row>{" "}
      <Row>
        <td>15</td>
        <td>Hatsey tikur</td>
        <td>After 1 day</td>
        <Rejected>rejected</Rejected>
        <td>view | edit | delete </td>
      </Row>
    </Body>
  );
}

export default Table;

// function Table() {
//   return (
//     <table
//       style={{
//         border: "1px solid green",
//         borderCollapse: "collapse",
//       }}
//     >
//       <thead
//         style={{
//           // display: "grid",
//           // gridTemplateColumns: "1fr 1fr",
//           padding: "0.8rem 1rem",
//           background: "red",
//         }}
//       >
//         <tr>
//           <th
//             style={{
//               border: "1px solid green",
//             }}
//           >
//             name
//           </th>
//           <th
//             style={{
//               border: "1px solid green",
//             }}
//           >
//             email
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td
//             style={{
//               border: "1px solid green",
//             }}
//           >
//             hatsey
//           </td>
//           <td
//             style={{
//               border: "1px solid green",
//             }}
//           >
//             hatsey@gmail.com
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   );
// }

// export default Table;
