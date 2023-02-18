import classes from "./listitem.module.css";
import { Link } from "react-router-dom";

const ListItem = () => {
  return (
    <div>
      <div>
        <h4>CAREFULLY CREATED COLLECTIONS</h4>
        <h3>BROWSE OUR CATEGORIES</h3>
      </div>
      <div className={classes.img_container}>
        <div className={classes.img1}>
          <Link to="/shop">
            <img className={classes.imgitem} src="./image/product_1.png" />
          </Link>
          <Link to="/shop">
            <img className={classes.imgitem} src="./image/product_2.png" />
          </Link>
        </div>
        <div className={classes.img2}>
          <Link to="/shop">
            <img className={classes.imgitem} src="./image/product_3.png" />
          </Link>
          <Link to="/shop">
            <img className={classes.imgitem} src="./image/product_4.png" />
          </Link>
          <Link to="/shop">
            <img className={classes.imgitem} src="./image/product_5.png" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
