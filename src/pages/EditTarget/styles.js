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
  title: {
    fontSize: pxToRem(11),
    lineHeight: pxToRem(13),
    textAlign: "center",
    letterSpacing: "1.65px",
    fontWeight: "normal",
    marginBottom: pxToRem(30),
  },
  rightContainer: {
    flex: 1,
  },
  leftContainer: {
    textAlign: "center",
    paddingTop: pxToRem(40),
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default useStyles;
