import React from "react";
import { ProductContext } from "../context/products";
import Loading from "../components/Products/Loading";
import ProductList from "../components/Products/ProductList";
import PageProducts from "../components/Products/PageProducts";
import Filters from "../components/Products/Filters";
export default function Products() {
  const { loading, products } = React.useContext(ProductContext);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
        <div class="site-section">
      <div class="container">
      <PageProducts></PageProducts>
      </div>
    </div>
    </>
  );
}