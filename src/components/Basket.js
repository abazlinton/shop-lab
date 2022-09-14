import React from "react";
import styled from "styled-components";

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

const Basket = ({ basketItems, removeFromBasket, getProductForId }) => {
  const removeItem = (id) => {
    removeFromBasket(id);
  };

  const basketComponents = basketItems.map((id) => {
    const item = getProductForId(id);
    if (!item) return null;
    console.log(item);
    return (
      <li>
        <hr />
        <span>
          {item.name} £{item.price}
          <img src={require("../images/" + item.image)} alt="item" />
        </span>
        <Button onClick={() => removeItem(item.id)}>Remove</Button>
      </li>
    );
  });

  return (
    <Basketlist>
      <h2>Your items: </h2>
      {basketItems.length > 0 ? (
        <ul>{basketComponents}</ul>
      ) : (
        <p>Basket Is Empty</p>
      )}
    </Basketlist>
  );
};

export default Basket;
