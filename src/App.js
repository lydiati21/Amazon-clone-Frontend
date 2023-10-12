import './App.css';
import Orders from "./Components/Orders/Orders";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Payment from "./Components/Payment/Payment";
import Footer from "./Components/Footer";
import { useStateValue } from "././Components/StateProvider";
import { auth } from "././Components/firebase";
import React, {useEffect  } from "react";
import Login from "./Components/Login/Login";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const promise = loadStripe(
  "pk_test_51NcipOHqFBN5rYIkvn6lpVuAzoEfiFvC6kOsQf5xY3O09h3WIESHJIJx6A3jnb5W7g6A1GJqBW1E5TYBzeaGaHEj00HX2cwZHl"
);
function App() {
    const [{}, dispatch] = useStateValue();

  useEffect(() => {
     auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  },[]);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="Checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
