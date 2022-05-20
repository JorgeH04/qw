import React from "react";
import { CartContext } from "../../context/cart";
import EmptyCart from "../../components/Cart/EmptyCart";
import CartItem from "../../components/Cart/CartItem";
import { Link } from "react-router-dom";
import { useMoralis } from 'react-moralis';
import {Select, Button, Modal, Input} from 'antd'

export default function Cart() {
  const { cart, total } = React.useContext(CartContext);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [delivery, setDelivery] = React.useState("");
  const {Moralis, currentAccount, chainId} = useMoralis();


  const handleOk = async () => {
    const web3 = await Moralis.enableWeb3();
    // Get The Price of MATIC
    const options = {
      address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      chain: "eth"
    };
    const price = await Moralis.Web3API.token.getTokenPrice(options);
    const priceMatic = total / price.usdPrice;
    console.log(priceMatic)
    // Send Matic to book store owenr address
    const options1 = {
      type: "native", 
      amount: Moralis.Units.ETH(priceMatic), 
      receiver: "0x5cFab76E36927e25898aA552fbBcF73bfabcd319"
    }
    let result = await Moralis.transfer(options1)
    //Save Transaction Details to DB
    const Transaction = Moralis.Object.extend("Transaction");
    const transaction = new Transaction();

    transaction.set("Customer", currentAccount);
    //transaction.set("Delivery", delivery);
    transaction.set("Product", total);

    transaction.save()
    setIsModalVisible(false);
  }


  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
<div class="site-section">
<div class="container">
  <div class="row mb-5">
    <form class="col-md-12" method="post">
      <div class="site-blocks-table">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th class="product-thumbnail">Image</th>
              <th class="product-name">Product</th>
              <th class="product-quantity">Quantity</th>
              <th class="product-price">Price</th>
              <th class="product-remove">Remove</th>
            </tr>
          </thead>

        {cart.map(item => {
             return <CartItem key={item._id} {...item} />;
         })}
 
 
       </table>
     </div>
   </form>
</div>

<div class="row">
<div class="col-md-6">
<div class="row mb-5">
  <div class="col-md-6 mb-3 mb-md-0">
    <button class="btn btn-primary btn-sm btn-block">Update Cart</button>
  </div>
  <div class="col-md-6">
    <Link to="/" class="btn btn-outline-primary btn-sm btn-block">Continue Shopping</Link>

   </div>
</div>

</div>
<div class="col-md-6 pl-5">
<div class="row justify-content-end">
  <div class="col-md-7">
    <div class="row">
      <div class="col-md-12 text-right border-bottom mb-5">
        <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col-md-6">
        <span class="text-black">Total</span>
      </div>
      <div class="col-md-6 text-right">
        <strong class="text-black">${total}</strong>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <button 
              class="btn btn-primary btn-lg btn-block" 
              onClick={()=>handleOk()}>Buy Now
        </button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>

  );
}






















