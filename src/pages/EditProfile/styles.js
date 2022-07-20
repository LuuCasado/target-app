import { createUseStyles } from "react-jss";

import { colors } from "constants/colors";
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
});

export default useStyles;
