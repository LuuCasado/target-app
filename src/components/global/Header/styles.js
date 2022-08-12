import { createUseStyles } from "react-jss";

import { headerHeight } from "constants/styles";
import { colors } from "constants/colors";
import { pxToRem } from "utils/helpers";
import { breakpoints } from "constants/styles";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    height: pxToRem(headerHeight),
    justifyContent: "flex-start",
    width: "100%",
    alignItems: "center",
  },
  inRouteHeader: {
    backgroundColor: colors.lightblue,
    position: "relative",
    justifyContent: "center",

    "& > h1": {
      color: colors.white,
      fontSize: pxToRem(20),
      lineHeight: pxToRem(23),
      letterSpacing: "3px",
      fontWeight: "bold",
    },
  },

  icon: {
    marginLeft: pxToRem(22),
    cursor: "pointer",
  },
  returnIcon: {
    position: "absolute",
    left: pxToRem(20),
    cursor: "pointer",
  },
  locationIcon: {
    display: "none",
  },
  blackIcon: {},

  [`@media screen and (max-width: ${breakpoints.xl}px)`]: {
    locationIcon: {
      display: "block",
      position: "absolute",
      right: pxToRem(20),
      cursor: "pointer",
      fill: colors.white,
    },
    blackIcon: {
      fill: colors.black,
      top: pxToRem(20),
    },
  },
});

export default useStyles;
