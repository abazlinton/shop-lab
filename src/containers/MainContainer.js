import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import productsData from "../data/productsData";
import Basket from "../components/Basket";
import ShowProduct from "../components/ShowProduct";

const MainContainer = () => {
  const [basketItemIds, setBasketItemIds] = useState([]);
  const [products, setProducts] = useState(productsData);

  const addToBasket = (productId) => {
    setBasketItemIds([...basketItemIds, productId]);
  };
  const removeFromBasket = (productId) => {
    const nextBasketItemIds = basketItemIds.filter(
      (basketItemId) => basketItemId !== productId
    );
    setBasketItemIds(nextBasketItemIds);
  };
  const getProductForId = (productId) => {
    return products.find((product) => product.id === productId);
  };

  return (
    <Router>
      <Header noOfBasketItems={basketItemIds.length} />
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
              items={basketItemIds.map(getProductForId)}
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
