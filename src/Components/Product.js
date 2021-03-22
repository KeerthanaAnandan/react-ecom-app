import React from "react";
import "./Product.css";
import {
  useStateValue
} from "./StateProvider";

function Product({
  id,
  title,
  price,
  rating,
  image
}) {
  const [{
    basket
  }, dispatch] = useStateValue();
  const addToBasket = () => {
    // we can use this cause both has same name =>item:{id,title,price , rating , image } alone
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  return ( 
    <div className = "product"
    key = {
      id
    } >
    <div className = "product-info" >
    <p> {
      title
    } </p> 
    <p className = "product-price" >
    <strong > 
      {price} </strong> 
      <small > $ </small> 
      </p>
       <div className = "product-rating" > 
       {
      Array(rating)
      .fill()
      .map((any) => ( <p>

        <i className = "fas fa-star text-warning" > </i>
         </p >
      ))
    } </div> 
    </div >

    <img src = {image}    alt = "" />
    <button onClick = {addToBasket} > Add to Cart </button> 
    </div >
  );
}

export default Product;