import PropTypes from "prop-types";
import classes from "./Layout.module.css";
import Card from "./Card";

const Layout = (props) => {
  return (
    <main className={classes.main}>
      <Card>{props.children}</Card>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
