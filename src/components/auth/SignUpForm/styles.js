import { createUseStyles } from "react-jss";

import { colors } from "constants/colors";
import { pxToRem } from "constants/helpers";

const useStyles = createUseStyles({
  containerForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& > div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      marginBottom: pxToRem(15),

      "& > span": {
        fontSize: pxToRem(11),
        lineHeight: pxToRem(13),
        letterSpacing: "1.6px",
        textAlign: "center",
        fontWeight: 500,
      },
    },
  },
  button: {
    margin: `${pxToRem(20)} ${pxToRem(0)}`,
    width: "100%",
  },
  input: {
    width: "100%",
    textAlign: "center",
  },
  link: {
    color: colors.black,
    letterSpacing: "1.65px",
    fontSize: pxToRem(11),
  },
  divider: {
    color: colors.black,
    width: pxToRem(121),
  },
  error: {
    color: colors.red,
    margin: 0,
    fontSize: pxToRem(11),
    lineHeight: pxToRem(13),
    letterSpacing: "1.65px",
  },
});

export default useStyles;
