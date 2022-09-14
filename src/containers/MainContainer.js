import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import ItemsList from "../components/ItemsList";
import productsData from "../data/products";
import Basket from "../components/Basket";

const MainContainer = () => {
  const [basketItems, setBasketItems] = useState([]);
  const [products, setProducts] = useState(productsData);

  const addToBasket = (productId) => {
    setBasketItems([...basketItems, productId]);
  };
  const removeFromBasket = (productId) => {
    const nextItems = basketItems.filter((id) => id !== productId);
    console.log(nextItems);
    setBasketItems(nextItems);
  };
  const getProductForId = (productId) => {
    return products.find((product) => product.id === productId);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ItemsList products={products} addToBasket={addToBasket} />}
        />
        <Route
          path="/basket"
          element={
            <Basket
              getProductForId={getProductForId}
              removeFromBasket={removeFromBasket}
              basketItems={basketItems}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default MainContainer;
