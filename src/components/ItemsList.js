import React from "react";
import Item from "./Item";
import styled from "styled-components";

const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ItemsList = ({ products, user, addToBasket }) => {
  const itemComponents = products.map((item) => (
    <Item key={item.id} item={item} user={user} addToBasket={addToBasket} />
  ));

  return <ItemList>{itemComponents}</ItemList>;
};

export default ItemsList;
