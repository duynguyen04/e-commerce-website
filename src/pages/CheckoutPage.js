import classes from "./CheckoutPage.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import CartPage from "./CartPage";
const CheckoutPage = () => {
  const cartCtx = useContext(CartContext);
  return (
    <div>
      <div className={classes.checkout}>
        <h2>CHECKOUT</h2>
        <p>HOME/CART/CHECKOUT</p>
      </div>
      <h2>BILLING DETAILS</h2>
      <div className={classes.infomation}>
        <div>
          <h3>FULL NAME</h3>
          <input placeholder="Enter Your Full Name Here"></input>
          <h3>EMAIL</h3>
          <input placeholder="Enter Your Email Here"></input>
          <h3>PHONE NUMBER</h3>
          <input placeholder="Enter Your Phone Number Here"></input>
          <h3>ADDRESS</h3>
          <input placeholder="Enter Your Address Here"></input>
          <button>Place order</button>
        </div>
        <div>
          <div className={classes.cart_total}>
            <h3>YOUR ORDER</h3>
            {cartCtx.items.map((item) => {
              return (
                <div className={classes.item}>
                  <p>{item.name}</p>
                  <p>
                    {item.price} VND X {item.amount}
                  </p>
                </div>
              );
            })}
            <div className={classes.totalAmount}>
              <h2>TOTAL</h2>
              <p>{cartCtx.totalAmount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
