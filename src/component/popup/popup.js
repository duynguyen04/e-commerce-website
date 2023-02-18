import { Link } from "react-router-dom";
import classes from "./popup.module.css";

const Popup = (props) => {
  console.log(props);
  return (
    <div className={classes.popup}>
      <div className={classes.backdrop} onClick={props.CloseModel}></div>
      <div className={classes.title}>
        <img src={props.data.img1} />
        <div>
          <button className={classes.btnX} onClick={props.CloseModel}>
            X
          </button>
          <h2 className={classes.name}>{props.data.name}</h2>
          <p className={classes.price}>{props.data.price}</p>
          <p className={classes.short_desc}>{props.data.short_desc}</p>
          <Link to={`/detail/${props.data._id.$oid}`}>
            <button className={classes.btn}>View Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Popup;
