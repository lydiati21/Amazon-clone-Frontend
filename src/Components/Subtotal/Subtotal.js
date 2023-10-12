import "../Subtotal/Subtotal.css";
import { useStateValue } from "../StateProvider";
import { Link, useNavigate } from "react-router-dom";
import Formatter from "../formatter";
const Subtotal = () => {
  const navigate = useNavigate();
  const [{ cart }, dispatch] = useStateValue();
  const getCartTotal = (cart) => {
    return cart?.reduce((amount, item) => {
      return item.price + amount;
    }, 0);
  };

 
  return (
    <div className="subtotal">
      <p>
        Subtotal ({cart.length} items):
        <strong>{Formatter.format(getCartTotal(cart))}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This Order Contains a gift 🎁
      </small>

      <button
        className="subtotal__button"
        onClick={(e) => {
          navigate("/Payment");
        }}
      >
        Procced to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
