import { colors } from "constants/colors";
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
  },
  user: {
    backgroundColor: colors.lightblue,
    borderRadius: "100%",
  },
  userName: {
    margin: pxToRem(15),
    fontSize: pxToRem(14),
    lineHeight: pxToRem(16),
    letterSpacing: "2px",
    fontWeight: "bold",
  },
});

export default useStyles;
