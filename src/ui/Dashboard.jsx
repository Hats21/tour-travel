import { BsPersonFillAdd } from "react-icons/bs";
import { MdOutlineMenuBook } from "react-icons/md";

import styled from "styled-components";
import { HiHome } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import Spinner from "./Spinner";

const DashBoardLayout = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  height: 85vh;
`;

const Sidebar = styled.nav`
  font-size: 1.8rem;
  /* padding: 0.8rem 1.2rem; */
  /* background: var(--color-stone-300); */
  align-items: center;
  padding-top: 2.4rem;

  & ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* & a:hover {
    color: var(--color-brand-600);
    background-color: var(--color-stone-100);
    width: 80%;
  } */
`;

const Main = styled.main`
  padding: 1rem 2.4rem;
  /* background-color: red; */
  height: 100%;
  overflow: scroll;
  background: var(--color-stone-50);
`;

const List = styled.li``;

const StyledNavLink = styled(NavLink)`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  font-size: 2.4rem;
  color: var(--color-stone-600);
  padding: 1rem 0rem 1rem 1.2rem;
  text-decoration: none;
  border: 1px solid transparent;

  cursor: pointer;
  /* width: 80%; */
  width: 100%;
  margin: 0 auto;
  border-radius: 8px 0 0 8px;

  &:hover,
  &.active {
    background-color: var(--color-stone-50);
    color: var(--color-brand-500);
  }

  & svg {
    width: 2.4rem;
    height: auto;
    color: inherit;
  }
`;

function Dashboard() {
  return (
    <DashBoardLayout>
      <Sidebar>
        <ul>
          <li>
            <StyledNavLink to="/dashboard/home">
              <HiHome />
              <span>Dashboard</span>
            </StyledNavLink>
          </li>
          <List>
            <StyledNavLink to="/dashboard/order_new">
              <BsPersonFillAdd />
              <span>Add</span>
            </StyledNavLink>
          </List>{" "}
          <List>
            <StyledNavLink to="/dashboard/total_bookings">
              <MdOutlineMenuBook />
              <span>Bookings</span>
            </StyledNavLink>
          </List>{" "}
          <List>
            <StyledNavLink to="/dashboard/users">
              <IoPersonCircle />
              <span>Manage users</span>
            </StyledNavLink>
          </List>{" "}
          <List>
            <Spinner />
          </List>
        </ul>
      </Sidebar>
      <Main>
        <Outlet />
      </Main>
    </DashBoardLayout>
  );
}

export default Dashboard;
