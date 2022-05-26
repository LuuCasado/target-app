import { createUseStyles } from "react-jss";

import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    minHeight: "100vh",

    "& > div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  rightContainer: {
    flex: 2,
  },
  leftContainer: {
    textAlign: "center",
    paddingTop: pxToRem(40),

    "& > h3": {
      fontSize: pxToRem(18),
      lineHeight: pxToRem(32),
      margin: 0,
      fontWeight: 500,
    },

    "& > p": {
      fontSize: pxToRem(14),
      maxWidth: pxToRem(321),
      marginTop: 0,
      lineHeight: pxToRem(23),
    },
  },
});

export default useStyles;
