import { createUseStyles } from "react-jss";

import { pxToRem } from "utils/helpers";
import { colors } from "constants/colors";

const useStyles = createUseStyles({
  container: {
    position: "relative",
    borderBottom: `1px ${colors.brightGrey} solid`,
    paddingTop: pxToRem(12),
    paddingBottom: pxToRem(12),
    "& > p": {
      margin: 0,
      textAlign: "center",
    },
  },
  topic: {
    height: pxToRem(24),
    position: "absolute",
    left: pxToRem(60),
    top: 0,
    bottom: 0,
    marginTop: "auto",
    marginBottom: "auto",
  },
  userName: {
    fontSize: pxToRem(14),
    lineHeight: pxToRem(16),
    textAlign: "center",
    letterSpacing: "2.1px",
    fontWeight: "bold",
  },
  title: {
    fontSize: pxToRem(11),
    lineHeight: pxToRem(13),
    color: colors.warmGrey,
  },
});

export default useStyles;
