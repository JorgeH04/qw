import React from "react";
//import Product from "./Product";
import { ProductContext } from "../../context/products";
import Filters from "./Filters";
import PageProducts from "./PageProducts";

import { Link } from 'react-router-dom'


export default function ProductList() {

  const { featured } = React.useContext(ProductContext);

  return (
    <>


        <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="title-section mb-5 col-12">
            <h2 class="text-uppercase">Popular Products</h2>
          </div>
        </div>
        <div class="row">
         {featured.map(post => (
          <div class="col-lg-4 col-md-6 item-entry mb-4">
             <Link to={`featured/${post._id}`} class="product-item md-height bg-gray d-block">
               <img src={post.image} alt="Image" class="img-fluid"/>
              </Link>
            <h2 class="item-title"><a href="#">{post.title}</a></h2>
            <strong class="item-price">${post.price}</strong>
          </div>
          ))}
 
        </div>
      </div>
    </div>











    <section className="section">
      <h2 className="section-title">Destacados</h2>
      <div className="products-center">
        {
        featured.map(post => (
  <article className="product" key={post._id}>
  <div className="img-container">
    <img src={post.image} alt={post.title || "default title"} />
    <Link to={`featured/${post._id}`} className="btn btn-primary product-link">
          detalles
    </Link>
  
  </div>
  <div className="product-footer">
    <p className="product-title">{post.title || "default title"}</p>
    <p className="product-price">${post.price || 0}</p>
  </div>
</article>))}
      </div>
    </section>


 
    </>
  );


}


