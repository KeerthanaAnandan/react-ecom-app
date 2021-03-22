import React from "react";
import "./Homie.css";
import img from "../assets/bannerpng.gif";
import oneimg from "../assets/one.jpg";
import twoimg from "../assets/two.jpg";
import threeimg from "../assets/three.jpg";
import fourimg from "../assets/four.jpg";
import shoeimg from "../assets/shoe.jpg";
import pantsimg from "../assets/pants.jpg";
import shortsimg from "../assets/shorts.jpg";
import btsimg from "../assets/btsbanner.jpg";
import croptopimg from "../assets/croptop.jpg";
//import beanieimg from "../assets/beanie.jpg";
//import backpackimg from "../assets/backpack.jpg";
import { Link } from "react-router-dom";
import Product from "./Product";

function Homie() {
  return (
    <div className="home">
      <Link to="/">
        <img src={img} alt="" className="home-img" />
      </Link>

      {/* product id , title, price, rating , image */}
      <div className="home-container">
        <div className="home-row">
          <Product
            id={12233334566}
            title="FILA distructor shoe for women"
            price={159}
            rating={5}
            image={shoeimg}
          />

          <Product
            id={1223373738}
            title="Croptop for women-Fitness"
            price={67}
            rating={4}
            image={twoimg}
          />
          <Product
            id={12267899}
            title="Jacket for women- winter collection"
            price={121}
            rating={5}
            image={threeimg}
          />
          <Product
            id={12233440988}
            title="Pants in sports, Fitness for Men"
            price={41}
            rating={3}
            image={pantsimg}
          />
        </div>

        <div className="home-row">
          <Product
            id={1223344112}
            title="Printed Hoodie for Boys and Girls"
            price={56}
            rating={5}
            image={fourimg}
          />

          <Product
            id={122334445}
            title="Shorts pants for Men"
            price={36}
            rating={3}
            image={shortsimg}
          />
          <Product
            id={12233440763}
            title="FILA crop-top for women"
            price={43}
            rating={4}
            image={croptopimg}
          />
          <Product
            id={122334476}
            title="SweatShirt for Men and Women"
            price={50}
            rating={3}
            image={oneimg}
          />
        </div>

        <Link to="/shop">
          <img src={btsimg} alt="" className="second-img" />
        </Link>
      </div>
    </div>
  );
}

export default Homie;
