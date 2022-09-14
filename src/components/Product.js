import React from "react";
import styled from "styled-components";
import ItemImage from "./ItemImage";
import { Link } from "react-router-dom";

const StockItem = styled.div`
  margin: 3px;
  display: flex;
  flex-direction: column;
  padding: 10px;
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

const Item = ({ product, addToBasket }) => {
  const onClick = () => {
    addToBasket(product.id);
  };

  return (
    <StockItem>
      <ItemImage item={product} alt="product" />
      <Button onClick={onClick}>Add To Basket</Button>
      <Link to={`/products/${product.id}`}>
        <p>{product.name}</p>
      </Link>
      <p>£{product.price}</p>
    </StockItem>
  );
};

export default Item;
