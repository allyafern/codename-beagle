import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.dark,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

const BeableButton = (props) => {
  const classes = useStyles(props);
  return <Button {...props} classes={{ root: classes.root }} />;
};

export default BeableButton;
