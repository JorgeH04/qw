import React from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/products";
import { CartContext } from "../../context/cart";
import { useHistory } from "react-router-dom";
import Loading from "./Loading";
export default function ProductDetails() {
  const { _id } = useParams();
  const history = useHistory();

  const { featured } = React.useContext(ProductContext);
  const { addToCart } = React.useContext(CartContext);
  const productF = featured.find(item => item._id === _id);
  if (featured.length === 0) {
    return <Loading />;
  } else {
    const { image, title, price, description } = productF;

    
    return (


      <>


      

      <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><a href="index.html">Home</a> <span class="mx-2 mb-0">/</span> <a href="shop.html">Shop</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Gray Shoe</strong></div>
        </div>
      </div>
      </div>  
      
      <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="item-entry">
              <a href="#" class="product-item md-height bg-gray d-block">
                <img src={image} alt="Image" class="img-fluid"/>
              </a>
              
            </div>
      
          </div>
          <div class="col-md-6">
            <h2 class="text-black">{title}</h2>
            <p>hgghhg.</p>
            <p class="mb-4">Ex numquam veritatis debitis minima quo error quam eos dolorum quidem perferendis. Quos repellat dignissimos minus, eveniet nam voluptatibus molestias omnis reiciendis perspiciatis illum hic magni iste, velit aperiam quis.</p>
            <p><strong class="text-primary h4">${price}</strong></p>
            <div class="mb-1 d-flex">
            
            </div>
            <div class="mb-5">
              <div class="input-group mb-3"  >
              <div class="input-group-prepend">
               </div>
              <div class="input-group-append">
                 
              </div>
            </div>
      
            </div>
            <p><button 
                onClick={() => {
                  addToCart(productF);
                  history.push("/cart");
                }}
                class="buy-now btn btn-sm height-auto px-4 py-3 btn-primary">Add To Cart
                </button>
            </p>
      
          </div>
        </div>
      </div>
      </div>
      
      
            </>




    );
  }
}
