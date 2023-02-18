import classes from "./OtherInformations.module.css";
const OtherInformations = () => {
  return (
    <div className={classes.item}>
      <div className={classes.item1}>
        <div>
          <h2>FREE SHIPPING</h2>
          <p>Free shipping worlwide</p>
        </div>
        <div>
          <h2>24X7 SERVICE</h2>
          <p>Free shipping worlwide</p>
        </div>
        <div>
          <h2>FRSTIVAL OFFER</h2>
          <p>Free shipping worlwide</p>
        </div>
      </div>
      <div className={classes.item2}>
        <div>
          <h2>LET'S BE FRIENDS!</h2>
          <p>Nisi nisi tempor consequat laboris nisi</p>
        </div>
        <div>
          <input type="text" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};
export default OtherInformations;
