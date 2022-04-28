import { createUseStyles } from "react-jss";

import { colors } from "constants/colors";
import { pxToRem } from "constants/helpers";

const useStyles = createUseStyles({
  button: {
    border: `1px solid ${colors.darkGrey}`,
    padding: `${pxToRem(10)} ${pxToRem(40)}`,
    letterSpacing: "1.65px",
    fontSize: pxToRem(11),
    color: colors.white,
    backgroundColor: colors.black,
  },
});

export default useStyles;
