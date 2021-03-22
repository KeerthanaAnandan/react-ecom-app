import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkout-product">
      <img className="checkout-product-image" src={image} alt="" />
      <div className="checkout-product-info">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-price">
          <strong>{price}</strong>
          <small>$</small>
        </p>
        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((any) => (
              <p>
                <i className="fas fa-star text-warning"></i>
              </p>
            ))}
        </div>
        <button onClick={removeFromCart}> Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
