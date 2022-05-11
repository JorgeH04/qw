import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CartLink from "./Cart/CartLink";
import { useContext } from 'react'
import { ProductContext } from "../context/products";

export default function Nav() {
  const { connectWallet, currentAccount, disconnectWallet } = useContext(ProductContext)

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
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                  
                    <li class="active">
                       <Link to="/products">Products</Link>
                    </li>
                    <li class="active">
                     </li>
                   
                    {currentAccount ? (
                    <>
                       <li class="active">
                            {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
                      </li>

                       <li class="active">
                           <button class="btn btn-sm btn-primary" 
                              onClick={() => disconnectWallet()} >
                                 Logout
                           </button>
                       </li>
                   </>
                    ) : (
                      <li class="active">
                         <button  class="btn btn-sm btn-primary" 
                           onClick={() => connectWallet()}>
                              Connect Wallet
                         </button>
                       </li>
                    )}

                 
 
                </ul>
              </nav>
            </div>
            <div class="icons">
               <a class="icons-btn d-inline-block bag">
               

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

    

