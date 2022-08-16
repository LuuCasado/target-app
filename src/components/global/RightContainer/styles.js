import { createUseStyles } from "react-jss";

import { colors } from "constants/colors";
import { pxToRem } from "utils/helpers";
import { breakpoints } from "constants/styles";

const useStyles = createUseStyles({
  common: {
    width: "50%",
  },

  authenticated: {
    minHeight: "100vh",
  },

  user: {
    display: "none",
  },

  hidden: {},

  [`@media screen and (max-width: ${breakpoints.xl}px)`]: {
    authenticated: {
      width: "100%",
    },
    user: {
      display: "block",
      position: "absolute",
      right: pxToRem(20),
      top: pxToRem(20),
      cursor: "pointer",
      backgroundColor: colors.lightblue,
      borderRadius: "100%",
      width: pxToRem(34),
      height: pxToRem(34),
      padding: pxToRem(6),
      zIndex: 1,
    },
    hidden: {
      display: "none !important",
    },
  },
});
export default useStyles;
