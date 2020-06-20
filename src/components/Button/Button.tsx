import React, { FC } from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      fontWeight: 500,
    },
    primary: {
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
      },
    },
    secondary: {
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
      },
    },
  }),
  { name: "BeagleButton" }
);

export interface BeagleButtonProps
  extends Omit<ButtonProps, "variant" | "color"> {
  emphasis?: "high" | "medium" | "low";
  color?: "primary" | "secondary";
}

const BeableButton: FC<BeagleButtonProps> = (props) => {
  const classes = useStyles(props);
  const { emphasis, color } = props;

  if (emphasis === "high") {
    return (
      <Button
        {...props}
        classes={{
          containedPrimary: classes.primary,
          containedSecondary: classes.secondary,
        }}
        className={classes.root}
        variant="contained"
        color={color}
      />
    );
  } else if (emphasis === "low") {
    return (
      <Button
        {...props}
        className={classes.root}
        variant="text"
        color={color}
      />
    );
  }
  return (
    <Button
      {...props}
      className={classes.root}
      variant="outlined"
      color={color}
    />
  );
};

BeableButton.defaultProps = {
  emphasis: "medium",
  color: "primary",
};

export default BeableButton;
