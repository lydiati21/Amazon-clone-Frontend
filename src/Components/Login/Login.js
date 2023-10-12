import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const signInFun = (e) => {
    e.preventDefault();
     signInWithEmailAndPassword(auth,email,password)
     .then((userCredential)=>{
      if(userCredential)
      navigate("/")
     })
     .catch((error)=> alert(error.message))
  };

const registerFun = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigate("/"); 
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

return (
    <div className="login">
      <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt="amazon-logo"
      />
      <div className="login__container">
        <h1> Sign-in</h1>
        <form>
          <h5>E-mail </h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password </h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signInFun}
          >
            sign in
          </button>
        </form>
        <p>
          By signing in you agree to the Amazon FAKE CLONE conditions of use
          sale.Please see our Privacy Notice,our cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login__registerButton" onClick={registerFun}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
