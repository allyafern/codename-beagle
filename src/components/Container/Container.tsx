import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../Button/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    padding: theme.spacing(1),
    maxWidth: "350px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "900px",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "1024px",
    },
  },
  section: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(1),
    width: "100%",
    "& button": {
      margin: theme.spacing(3, 3),
    },
  },
}));

const Container = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">Beagle Components Catalog</Typography>
      <div className={classes.section}>
        <Typography>
          Beagle components are built base on Material-UI components
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography variant="h5">Primary Button</Typography>
        <Button emphasis="high">High emphasis</Button>
        <Button>Medium emphasis</Button>
        <Button emphasis="low">Low emphasis</Button>
      </div>
      <div className={classes.section}>
        <Typography variant="h5">Secondary Button</Typography>
        <Button color="secondary" emphasis="high">
          High emphasis
        </Button>
        <Button color="secondary">Medium emphasis</Button>
        <Button color="secondary" emphasis="low">
          Low emphasis
        </Button>
      </div>
    </div>
  );
};

export default Container;
