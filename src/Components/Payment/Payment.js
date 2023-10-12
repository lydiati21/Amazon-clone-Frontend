import React, { useState,useEffect } from "react";
import "../Payment/Payment.css";
import {db} from "../firebase";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import {  useNavigate } from "react-router-dom";
import axios from '../axios';
import CheckOutProduct from "../CheckoutProduct/CheckoutProduct";
import Formatter from "../formatter";
// import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
function Payment() {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [{ cart, user }, dispatch] = useStateValue();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'Post',
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
  }, [cart]);
console.log(`this is clientsecret ${clientSecret}`);
  const getCartTotal = (cart) => {
    return cart?.reduce((amount, item) => {
      return item.price + amount;
    }, 0);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({paymentIntent}) => {
        db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc(paymentIntent.id)
            .set({
              cart: cart,
              amount: paymentIntent.amount,
              created: paymentIntent.created,
            });
           setError(null);
           setSucceeded(true);
           setProcessing(false);
           dispatch({
             type: "EMPTY_CART",
           });
           navigate("/Orders");
         
      });
   
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  // console.log(error);
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/Checkout"> {cart?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3> Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Chicago, IL</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3> Review items and delivery</h3>
          </div>
          <div className="payment__item">
            {cart?.map((item) => (
              <CheckOutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3> Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__price">
                <h3> Order total: {Formatter.format(getCartTotal(cart))}</h3>
              </div>
              <button
                className="payment__button"
                disabled={processing || disabled || succeeded}
              >
                <span> {processing ? <p> processing</p> : "Buy Now"}</span>
              </button>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
