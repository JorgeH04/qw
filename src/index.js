import React from 'react';
import { render } from 'react-dom';
import App from './App';
import ProductProvider from "./context/products";
import  {CartProvider}  from "./context/cart";
import { MoralisProvider } from "react-moralis";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
<MoralisProvider appId="8dfjlL2Eigs2MJ7Yrtbo2vtG3Kkx1CU4lvaIm7PQ" serverUrl="https://nhfpxmcsvxul.usemoralis.com:2053/server">
 <ProductProvider>
  <CartProvider>
    <App/>
  </CartProvider>
 </ProductProvider>
</MoralisProvider>, 
);




