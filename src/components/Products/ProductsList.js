import React from "react";
import Product from "./Prod";

export default function ProductList({ title, products }) {
  return (

    <>

    <div class="row mb-5">
     <div class="col-lg-6 col-md-6 item-entry mb-4">
        {products.map(item => {
          return <Product key={item._id} {...item} />;
        })}
    </div>
   </div>

    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="products-center"> 
        {products.map(item => {
          return <Product key={item._id} {...item} />;
        })}
      </div>
    </section>


           </>
  );
}
