import { createUseStyles } from "react-jss";

import { pxToRem } from "utils/helpers";
import { colors } from "constants/colors";

const useStyles = createUseStyles({
  container: {
    display: "flex",

    "& > div": {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  leftContainer: {
    textAlign: "center",

    "& > h1": {
      fontSize: pxToRem(20),
      lineHeight: pxToRem(23),
      letterSpacing: "3px",
      marginBottom: pxToRem(40),
    },
    "& > h3": {
      fontSize: pxToRem(18),
      lineHeight: pxToRem(32),
      margin: 0,
    },
    "& > p": {
      fontSize: pxToRem(14),
      maxWidth: pxToRem(321),
      marginTop: 0,
      lineHeight: pxToRem(23),
    },
  },
  rightContainer: {
    backgroundColor: colors.lightblue,
    paddingTop: pxToRem(50),
  },
  form: {
    width: "33%",
  },
  spinner: {
    margin: "auto",
  },
});

export default useStyles;
