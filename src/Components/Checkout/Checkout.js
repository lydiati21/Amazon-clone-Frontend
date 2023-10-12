import React from "react";
import "../Checkout/Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider";
const Checkout = () => {
  const [{ cart }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <h3>Hello</h3>
        <h2 className="checkout__title">Your Shopping cart</h2>

        {cart?.map((item) => {
          const { id, title, image, price, rating } = item;
          return (
            <CheckoutProduct
              id={id}
              title={title}
              image={image}
              price={price}
              rating={rating}
            />
          );
        })}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
