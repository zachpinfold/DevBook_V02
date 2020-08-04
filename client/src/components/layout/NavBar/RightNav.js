import React, { Fragment } from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
    ul {
      list-style: none;
      display: flex;
      flex-flow: column nowrap;
    }
  }
`;

const RightNav = ({
  open,
  authLinks,
  loading,
  guestLinks,
  isAuthenticated
}) => {
  console.log(isAuthenticated);
  return (
    !loading && <Ul open={open}>{isAuthenticated ? authLinks : guestLinks}</Ul>
  );
};

export default RightNav;
