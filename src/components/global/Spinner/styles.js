import { createUseStyles } from "react-jss";

import { pxToRem } from "utils/helpers";
import { colors } from "constants/colors";

const useStyles = createUseStyles({
  spinner: {
    border: "4px solid",
    color: colors.lightblue,
    width: pxToRem(36),
    minWidth: pxToRem(36),
    height: pxToRem(36),
    minHeight: pxToRem(36),
    borderRadius: "50%",
    borderLeftColor: "transparent",
    animation: "$spin 1s ease infinite",
  },

  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },

    "100%": {
      transform: "rotate(360deg)",
    },
  },
});

export default useStyles;
