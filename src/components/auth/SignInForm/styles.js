import { createUseStyles } from "react-jss";

import { pxToRem } from "constants/helpers";
import { colors } from "constants/colors";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& span": {
      fontWeight: "bold",
      fontSize: pxToRem(11),
      lineHeight: pxToRem(13),
      textAlign: "center",
      letterSpacing: "1.65px",
    },
    "& > div": {
      display: "flex",
      flexDirection: "column",
      marginBottom: pxToRem(15),
    },
  },
  button: {
    margin: `${pxToRem(0)}`,
    marginTop: `${pxToRem(20)}`,
  },

  forgotPassword: {
    fontSize: pxToRem(11),
    lineHeight: pxToRem(13),
    marginTop: `${pxToRem(15)}`,
  },

  link: {
    color: colors.black,
    fontSize: pxToRem(11),
    letterSpacing: "1.65px",
  },
  divider: {
    color: colors.black,
    width: pxToRem(121),
    margin: `${pxToRem(20)}`,
  },
  error: {
    color: colors.red,
    margin: 0,
    fontSize: pxToRem(11),
    lineHeight: pxToRem(13),
    letterSpacing: "1.65px",
  },
});

export default useStyles;
