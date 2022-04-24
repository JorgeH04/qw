import React from "react";
import { Link } from "react-router-dom";
// impt
import PropTypes from "prop-types";
//import img from "../../assets/mainBcg.jpeg";
export default function Product({ image, title, _id, price }) {
  return (


    <div class="col-lg-6 col-md-6 item-entry mb-4">
       <a href="#" class="product-item md-height bg-gray d-block">
         <Link to={`products/${_id}`} >
           <img src={image} alt="Image" class="img-fluid"/>
        </Link>  
       </a>
      <h2 class="item-title"><a href="#">{title}</a></h2>
      <strong class="item-price">${price}</strong>
    </div>




  );
}
Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};
