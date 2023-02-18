import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ShopPage.module.css";

const ShopPage = () => {

  const [dataSlect, setdataSlect] = useState("All");
  const [dataClick, setdataClick] = useState([]);

  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((res) => res.json())
      .then((data) => {
        if (dataSlect === "All") {
          setdataClick(data);
        } else {
          setdataClick(
            data.filter((item) => {
              return item.category === dataSlect;
            })
          );
        }
      });
  }, [dataSlect]);
  function Click(e) {
    setdataSlect(e.target.innerText);
  }
  // console.log(dataClick);

  return (
    <div>
      <div className={classes.shop}>
        <h2>SHOP</h2>
        <p>Shop</p>
      </div>
      <div className={classes.container}>
        <div>
          <h5>CATEGORIES</h5>
          <h6>APPLE</h6>
          <ul>
            <li>
              <a href="#" onClick={Click}>
                All
              </a>
            </li>
          </ul>
          <h6>IPHONE & MAC</h6>
          <ul>
            <li onClick={Click}>
              <a href="#">iphone</a>
            </li>
            <li onClick={Click}>
              <a href="#">ipad</a>
            </li>
            <li onClick={Click}>
              <a href="#">macbook</a>
            </li>
          </ul>
          <h6>WIRELESS</h6>
          <ul>
            <li onClick={Click}>
              <a href="#">airpod</a>
            </li>
            <li onClick={Click}>
              <a href="#">watch</a>
            </li>
          </ul>
          <h6>OTHER</h6>
          <ul>
            <li onClick={Click}>
              <a href="#">Mouse</a>
            </li>
            <li onClick={Click}>
              <a href="#">KeyBoard</a>
            </li>
            <li onClick={Click}>
              <a href="#">Other</a>
            </li>
          </ul>
        </div>
        <div className={classes.imgList}>
          {dataClick?.map((item, index) => {
            return (
              <div key={index} className={classes.item}>
                <Link to={`/detail/${item._id.$oid}`}>
                  <img src={item.img1} id={item._id.$oid} />
                </Link>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ShopPage;
