import React from 'react'
import moment from "moment";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Formatter from "../formatter";

const Order = ({order}) => {
  return (
    <div className="orderr">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:ma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.cart?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <h3 className="order__total">Order Total:
        {Formatter.format(order.data.amount / 100)}
      </h3>
    </div>
  );
}

export default Order