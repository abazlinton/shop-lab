import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const HeaderGroup = styled.hgroup`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-left: 30px;
`;

const HeaderComponent = ({ noOfBasketItems }) => {
  const location = useLocation();

  return (
    <Header>
      <HeaderGroup>
        <h1>DJ Sports</h1>
        <h4>Prince of Trainers</h4>
      </HeaderGroup>

      <nav>
        <ul>
          <li>
            {location.pathname !== "/" && <Link to="/">View Products</Link>}
            {location.pathname !== "/basket" && (
              <Link to="/basket">View Basket</Link>
            )}
          </li>
        </ul>
      </nav>
      <div id="user-info">
        <h4>
          You have {noOfBasketItems ? noOfBasketItems : "no"} items in your
          basket
        </h4>
      </div>
    </Header>
  );
};

export default HeaderComponent;
