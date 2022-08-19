import classes from "./Layout.module.css";

import Card from "./Card";

const Layout = (props) => {
  return (
    <main className={classes.main}>
      <Card>{props.children}</Card>
    </main>
  );
};

export default Layout;
