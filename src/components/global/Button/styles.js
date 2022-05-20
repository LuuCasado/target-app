import { createUseStyles } from "react-jss";

import { colors } from "constants/colors";
import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  primary: {
    border: `1px solid ${colors.darkGrey}`,
    padding: `${pxToRem(10)} ${pxToRem(40)}`,
    letterSpacing: "1.65px",
    fontSize: pxToRem(11),
    color: colors.white,
    backgroundColor: colors.black,
    cursor: "pointer",
  },
  link: {
    background: "transparent",
    border: "transparent",
    fontSize: pxToRem(12),
    lineHeight: pxToRem(14),
    letterSpacing: "1.8px",
    cursor: "pointer",
  },
});

export default useStyles;
