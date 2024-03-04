import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "black",
  },
  link: {
    textDecoration: "none",
  },
  title: {
    cursor: "pointer",
    color: "white",
  },
}));

export default function AppNav() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography className={classes.title}>Pokedex</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
