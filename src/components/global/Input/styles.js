import { createUseStyles } from "react-jss";

import { colors } from "constants/colors";
import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  input: {
    minHeight: pxToRem(35),
    border: `1px solid ${colors.darkGrey}`,
    padding: `${pxToRem(10)} ${pxToRem(5)}`,
    boxSizing: "border-box",
    letterSpacing: "1.5px",
    fontSize: pxToRem(10),
    marginTop: 5,
    textAlign: "center",
  },
  error: {
    marginTop: 5,
    margin: 0,
    color: colors.red,
    letterSpacing: "1.5px",
    fontSize: pxToRem(10),
  },
});

export default useStyles;
