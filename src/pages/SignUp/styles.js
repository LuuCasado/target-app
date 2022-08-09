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
    paddingTop: pxToRem(100),
    textAlign: "center",

    "& > h1": {
      fontSize: pxToRem(20),
      lineHeight: pxToRem(23),
      letterSpacing: "3px",
      marginBottom: pxToRem(40),
    },
  },
  rightContainer: {
    backgroundColor: colors.lightblue,
    paddingTop: pxToRem(50),
  },
  spinner: {
    margin: "auto",
  },
});

export default useStyles;
