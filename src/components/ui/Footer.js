import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" mt={5}>
      {"Copyright © "}
      <Link color="inherit" href="http://www.bjcodes.com/">
        Bhagirthi Jhamb{" "}
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}
