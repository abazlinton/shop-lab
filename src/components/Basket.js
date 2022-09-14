import React from "react";
import styled from "styled-components";
import ItemImage from "./ItemImage";

const Basketlist = styled.div`
  width: 80%;
  margin: auto;
  padding: 10px;
  background-color: lightgrey;
  color: black;
  box-shadow: 4px 4px 4px 4px grey;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  margin: 5px;
  border: 2px solid grey;
  border-radius: 8px;
`;

const Basket = ({ items, removeFromBasket }) => {
  const removeItem = (id) => {
    removeFromBasket(id);
  };

  const basketComponents = items.map((item) => {
    return (
      <li key={item.id}>
        <hr />
        <span>
          {item.name} £{item.price}
          <ItemImage item={item} />
        </span>
        <Button onClick={() => removeItem(item.id)}>Remove</Button>
      </li>
    );
  });

  return (
    <Basketlist>
      <h2>Your items: </h2>
      {items.length > 0 ? <ul>{basketComponents}</ul> : <p>Basket Is Empty</p>}
    </Basketlist>
  );
};

export default Basket;
