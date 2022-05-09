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
  leftColumn: {
    paddingTop: pxToRem(100),

    "& > h3": {
      fontSize: pxToRem(20),
      letterSpacing: "3px",
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
