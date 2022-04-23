import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CartLink from "./Cart/CartLink";
import { ConnectButton, Icon, Select, DatePicker } from "web3uikit";
import { useContext } from 'react'
import { ProductContext } from "../context/products";

export default function Nav() {
      const { connectWallet, currentAccount, disconnectWallet } = useContext(ProductContext);

        return (
            <>
       <div class="site-navbar bg-white py-2">

          <div class="search-wrap">
          <div class="container">
            <a href="#" class="search-close js-search-close"><span class="icon-close2"></span></a>
            <form action="#" method="post">
              <input type="text" class="form-control" placeholder="Search keyword and hit enter..."/>
            </form>  
          </div>
        </div>
  
        <div class="container">
          <div class="d-flex align-items-center justify-content-between">
            <div class="logo">
              <div class="site-logo">
                  <Link to="/" class="js-logo-clone">ShopMax</Link>
               </div>
            </div>
            <div class="main-nav d-none d-lg-block">
              <nav class="site-navigation text-right text-md-center" role="navigation">
                <ul class="site-menu js-clone-nav d-none d-lg-block">
                  <li class="has-children ">
                        <Link to="/">Home</Link>
                    <ul class="dropdown">
                      <li><a href="#">Menu One</a></li>
                      <li><a href="#">Menu Two</a></li>
                      <li><a href="#">Menu Three</a></li>
                      <li class="has-children">
                        <a href="#">Sub Menu</a>
                        <ul class="dropdown">
                          <li><a href="#">Menu One</a></li>
                          <li><a href="#">Menu Two</a></li>
                          <li><a href="#">Menu Three</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  
                  <li class="active">
                      <Link to="/products">Productos</Link>
                  </li>
                  <li><a href="#">Catalogue</a></li>
                  <li><a href="#">New Arrivals</a></li>
                  <li>
                  {currentAccount ? (
                    <>
                       <span >
                           {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
                       </span>
                    <button
                    
                      onClick={() => disconnectWallet()}
                   >
                     Logout
                   </button>
                   </>
                    ) : (
                      <ConnectButton 
                         onClick={() => connectWallet()}
                      />
                    )}

                  </li>
                </ul>
              </nav>
            </div>
            <div class="icons">
               <a href="cart.html" class="icons-btn d-inline-block bag">
               <span class="number">     </span>
               <span class="icon-shopping-bag"></span>

                <CartLink />

              </a>

              <a href="#" class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span class="icon-menu"></span></a>
            </div>
          </div>
        </div>
      </div>
</>
        )
    }

    

