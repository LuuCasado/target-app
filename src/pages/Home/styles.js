import { createUseStyles } from "react-jss";

import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",

    "& > div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  leftColumn: {
    width: "30%",
    paddingTop: pxToRem(100),
    textAlign: "center",

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

  map: {
    width: "70%",
  },
});

export default useStyles;
