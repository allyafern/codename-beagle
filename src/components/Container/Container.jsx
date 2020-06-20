import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../Button/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(1),
  },
}));

const Container = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained">Hello</Button>
    </div>
  );
};

export default Container;
