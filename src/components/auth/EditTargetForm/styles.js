import { createUseStyles } from "react-jss";

import { pxToRem } from "utils/helpers";
import { colors } from "constants/colors";

const useStyles = createUseStyles({
  containerForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
  },

  inputContainer: {
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

  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
