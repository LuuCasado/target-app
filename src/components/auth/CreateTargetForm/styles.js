import { createUseStyles } from "react-jss";

import { pxToRem } from "utils/helpers";
import { colors } from "constants/colors";

const useStyles = createUseStyles({
  containerForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70%",

    "& > div": {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      marginBottom: pxToRem(15),

      "& > span": {
        fontSize: pxToRem(11),
        lineHeight: pxToRem(13),
        letterSpacing: "1px",
        textAlign: "left",
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
  error: {
    color: colors.red,
    margin: 0,
    fontSize: pxToRem(11),
    lineHeight: pxToRem(13),
    letterSpacing: "1.65px",
  },
});

export default useStyles;
