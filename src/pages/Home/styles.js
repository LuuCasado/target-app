import { createUseStyles } from "react-jss";

import { colors } from "constants/colors";
import { pxToRem, hexToRGBA } from "utils/helpers";

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
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    paddingTop: pxToRem(40),
    width: "100%",
  },
  buttonEdit: {
    color: colors.lightblue,
    fontWeight: "bold",
  },
  divider: {
    color: hexToRGBA(colors.black, 0.5),
    width: pxToRem(121),
    margin: `${pxToRem(20)}`,
  },
});

export default useStyles;
