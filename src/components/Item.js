import React from "react";
import styled from "styled-components";

const StockItem = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
`;

const ItemImage = styled.img`
  height: 300px;
  box-shadow: 2px 2px 4px grey;
`;

const ItemPara = styled.p`
  margin: 5px;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  margin: 5px;
  border: 2px solid grey;
  border-radius: 8px;
`;

const Item = ({ item, user, addToBasket }) => {
  const onClick = () => {
    addToBasket(item.id);
  };

  return (
    <StockItem>
      <ItemImage src={require("../images/" + item.image)} alt="item" />
      <Button onClick={onClick}>Add To Basket</Button>
      <p>{item.name}</p>
      <p>£{item.price}</p>
    </StockItem>
  );
};

export default Item;
