import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { CartContext } from "../../context/cart";
export default function CartItem({ _id, image, title, price, amount }) {
  // cart context
  const { removeItem, increaseAmount, decreaseAmount } = React.useContext(
    CartContext
  );
  return (


    <>



          <tbody key={_id}>
            <tr>
              <td class="product-thumbnail">
                <img src={image} alt="Image" class="img-fluid"/>
              </td>
              <td class="product-name">
                <h2 class="h5 text-black">{title}</h2>
              </td>
              <td>
                <div class="input-group mb-3" >
                  <div class="input-group-prepend">
                    <button 
                        onClick={() => {
                          decreaseAmount(_id, amount);
                        }}
                    class="btn btn-outline-primary js-btn-minus" 
                    type="button">-</button>
                  </div>
                  <input type="text" class="form-control text-center" value={amount} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                  <div class="input-group-append">
                    <button 
                      onClick={() => {
                        increaseAmount(_id);
                      }}
                    class="btn btn-outline-primary js-btn-plus" type="button">+</button>
                  </div>
                </div>

              </td>
              <td>${price}</td>
              <td><a 
              href="#" class="btn btn-primary height-auto btn-sm"
              onClick={() => {
                removeItem(_id);
              }}
              >X</a></td>
            </tr>

            
          </tbody>
       
</>



   
  );
}
