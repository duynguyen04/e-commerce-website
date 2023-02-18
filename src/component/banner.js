import classes from "./banner.module.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <img src="./image/banner1.jpg" alt="anhday" className={classes.img} />
      <div className={classes.data}>
        <p className={classes.p}>NEW INSPIRATION 2020</p>
        <h2 className={classes.title}>20% OFF ON NEW SEASON</h2>
        <Link to="/shop" className={classes.btn}>
          Browse collections
        </Link>
      </div>
    </div>
  );
};
export default Banner;
