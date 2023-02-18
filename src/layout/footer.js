import classes from "./footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerList}>
        <h2 className={classes.title}>CUSTOMER SERVICES</h2>
        <a>Help & Contact Us</a>
        <a>Returns & Refunds</a>
        <a>Online Stores</a>
        <a>Terms $ Conditions</a>
      </div>
      <div className={classes.footerList}>
        <h2 className={classes.title}>COMPANY</h2>
        <a>What We Do</a>
        <a>Avaiable Services</a>
        <a>Latest Post</a>
        <a>FAQs</a>
      </div>
      <div className={classes.footerList}>
        <h2 className={classes.title}>SOCIAL MEDIA</h2>
        <a>Twitter</a>
        <a>Instagram</a>
        <a>Facebook</a>
        <a>Pinterest</a>
      </div>
    </div>
  );
};
export default Footer;
