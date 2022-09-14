import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import productsData from "../data/productsData";
import Basket from "../components/Basket";
import ShowProduct from "../components/ShowProduct";

const MainContainer = () => {
  const [lineItems, setLineItems] = useState([]);
  const [products, setProducts] = useState(productsData);

  const getLineItemForProductId = (productId) => {
    return lineItems.find((lineItem) => lineItem.productId === productId);
  };

  const addToBasket = (productId) => {
    const existingLineItem = getLineItemForProductId(productId);
    if (existingLineItem) {
      const nextLineItems = lineItems.map((lineItem) => {
        return productId === lineItem.productId
          ? {
              productId: lineItem.productId,
              quantity: lineItem.quantity + 1,
            }
          : lineItem;
      });
      setLineItems(nextLineItems);
    } else {
      setLineItems([...lineItems, { productId, quantity: 1 }]);
    }
  };

  const removeFromBasket = (productId) => {
    const nextLineItems = lineItems
      .map((lineItem) => {
        return lineItem.productId === productId
          ? { ...lineItem, quantity: lineItem.quantity - 1 }
          : lineItem;
      })
      .filter((lineItem) => lineItem.quantity > 0);
    setLineItems(nextLineItems);
  };

  const getProductForId = (productId) => {
    return products.find((product) => product.id === productId);
  };

  const total = lineItems.reduce(
    (total, lineItem) => total + lineItem.quantity,
    0
  );

  return (
    <Router>
      <Header noOfBasketItems={total} />
      <Routes>
        <Route
          path="/"
          element={
            <ProductsList products={products} addToBasket={addToBasket} />
          }
        />
        <Route
          path="/basket"
          element={
            <Basket
              items={lineItems.map((lineItem) => ({
                product: getProductForId(lineItem.productId),
                quantity: lineItem.quantity,
              }))}
              removeFromBasket={removeFromBasket}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <ShowProduct
              getProductForId={getProductForId}
              addToBasket={addToBasket}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default MainContainer;
