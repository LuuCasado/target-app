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

  remove: {
    border: `1px solid ${colors.monza}`,
    padding: `${pxToRem(10)} ${pxToRem(40)}`,
    letterSpacing: "1.65px",
    fontSize: pxToRem(11),
    color: colors.white,
    backgroundColor: colors.monza,
    cursor: "pointer",
  },

  secondary: {
    border: "none",
    fontSize: pxToRem(14),
    lineHeight: pxToRem(16),
    letterSpacing: "2px",
    background: "transparent",
    color: colors.black,
    marginBottom: pxToRem(10),
    cursor: "pointer",
  },
  link: {
    background: "transparent",
    border: "none",
    fontSize: pxToRem(12),
    lineHeight: pxToRem(14),
    letterSpacing: "1.8px",
    cursor: "pointer",
  },
});

export default useStyles;
