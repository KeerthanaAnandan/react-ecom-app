import React from "react";
import {
  useStateValue
} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal.js";


function Checkout() {
  const [{
    basket
  }] = useStateValue();
  return ( 
  <div className = "checkout" > {
      basket?.length === 0 ? ( 
        <div>
        < h2 > Your shopping cart is empty </h2> 
        <p>
        You have no items in your cart, To buy any product click "Add to
        Cart " next to the item </p> 
        </div>
      ) : ( 
      <div >
        <h2 className = "checkout-title" > Your Shopping Cart </h2>
         {
        basket.map((item) => ( <
          CheckoutProduct id = {
            item.id
          }
          title = {
            item.title
          }
          price = {
            item.price
          }
          rating = {
            item.rating
          }
          image = {
            item.image
          }
          />
        ))
      } 
      </div>
    )
  }

  {
    basket.length > 0 && ( <div className = "checkout-right" >
      <SubTotal />
      </div>
    )
  }
  

  </div>
);
}

export default Checkout;