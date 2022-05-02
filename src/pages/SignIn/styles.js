import { createUseStyles } from "react-jss";

import { pxToRem } from "constants/helpers";
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
  leftColumn: {
    paddingTop: pxToRem(100),
    textAlign: "center",

    "& > h1": {
      fontSize: pxToRem(20),
      lineHeight: pxToRem(23),
      letterSpacing: "3px",
    },
    "& > h3": {
      fontSize: pxToRem(18),
      lineHeight: pxToRem(32),
      margin: 0,
    },
    "& > p": {
      fontSize: pxToRem(14),
      width: pxToRem(321),
      marginTop: 0,
      lineHeight: pxToRem(23),
    },
  },
  rightColumn: {
    backgroundColor: colors.lightblue,
    paddingTop: pxToRem(50),
  },
  form: {
    width: "33%",
  },
});

export default useStyles;
