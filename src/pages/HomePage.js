import React from "react";
import Banner from "../component/banner";
import ListItem from "../component/listItem";
import ListProduct from "../component/ListProduct";
import OtherInformations from "../component/OtherInformations/OtherInformations";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ListItem />
      <ListProduct />
      <OtherInformations />
    </div>
  );
};
export default HomePage;
