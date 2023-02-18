import Footer from "./footer";
import Navbar from "./navbar";
import { Fragment } from "react";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};
export default Layout;
