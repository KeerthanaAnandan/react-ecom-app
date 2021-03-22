import React from "react";
import "./SubTotal.css";
import CurrencFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";

function SubTotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ( {basket.length} items):
              <strong>{` ${value}`} </strong>
            </p>

            <small className="subtotal-gift">
              <input type="checkbox" />
              This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default SubTotal;
