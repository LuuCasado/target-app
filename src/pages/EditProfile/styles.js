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
    flex: 1,
  },
  leftContainer: {
    textAlign: "center",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: pxToRem(20),
  },
  spinner: {
    margin: "auto",
  },
});

export default useStyles;
