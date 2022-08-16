import { createUseStyles } from "react-jss";

import { colors } from "constants/colors";
import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  user: {
    backgroundColor: colors.lightblue,
    borderRadius: "100%",
    padding: pxToRem(20),
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
