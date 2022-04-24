import React from "react";
import Product from "./Prod";

export default function ProductList({ title, products }) {
  return (

    <>

    <div class="row mb-5">
         {products.map(item => {
          return <Product key={item._id} {...item} />;
        })}
    </div>




           </>
  );
}
