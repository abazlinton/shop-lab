import React from "react";
import styled from "styled-components";
import Product from "./Product";

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

  const basketComponents = items.map((item, index) => {
    return (
      // use index here as product ids are not unique as we sometimes add same product > 1 times
      <li key={index}>
        <hr />
        <span>
          <Product product={item} />
        </span>
        <Button onClick={() => removeItem(item.id)}>Remove</Button>
      </li>
    );
  });

  const total = items.reduce((subTotal, item) => (subTotal += item.price), 0);

  return (
    <Basketlist>
      <h2>Your items: </h2>
      <h3>Total: £{total}</h3>
      {items.length > 0 ? <ul>{basketComponents}</ul> : <p>Basket Is Empty</p>}
    </Basketlist>
  );
};

export default Basket;
