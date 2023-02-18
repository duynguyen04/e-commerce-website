import { useEffect, useState } from "react";
import classes from "./ListProduct.module.css";
import Popup from "./popup/popup";
const ListProduct = () => {
  const [data, setdata] = useState([]);
  const [datadetail, setdatadetail] = useState();
  const [popup, setPopup] = useState(false);
// lay data
  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
// lưu data của sản phẩm và show model
  function handleClick(item) {
    setdatadetail(item);
    setPopup(true);
  }
  // đóng model
  function CloseModel() {
    setPopup(false);
  }
  return (
    <div>
      <div>
        <p>Made in hard way</p>
        <h3>Top trending products</h3>
      </div>
      <div className={classes.items}>
        {data?.map((item, index) => {
          return (
            <div key={index} className={classes.item}>
              <img src={item.img1} onClick={() => handleClick(item)} />
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
      {popup && <Popup data={datadetail} CloseModel={CloseModel} />}
    </div>
  );
};

export default ListProduct;
