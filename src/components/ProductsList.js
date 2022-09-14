import React from "react";
import Product from "./Product";
import styled from "styled-components";

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const ProductsList = ({ products, addToBasket }) => {
  const productsComponents = products.map((product) => (
    <Product key={product.id} product={product} addToBasket={addToBasket} />
  ));

  return <ProductList>{productsComponents}</ProductList>;
};

export default ProductsList;
