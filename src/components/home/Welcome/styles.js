import { createUseStyles } from "react-jss";

import { colors } from "constants/colors";
import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& > div": {
      display: "flex",
      flexDirection: "row",
      alignItems: "first baseline",
      maxWidth: "45%",
      "& > div": {
        backgroundColor: colors.lightblue,
        borderRadius: "100%",
        height: pxToRem(11),
        width: pxToRem(11),
        margin: "5px",
      },
      "& > p": {
        fontSize: pxToRem(14),
        lineHeight: pxToRem(26),
        textAlign: "justify",
        maxWidth: "93%",
      },
    },

    "& > h2": {
      fontSize: pxToRem(20),
      lineHeight: pxToRem(23),
      letterSpacing: "3px",
      fontWeight: "normal",
    },

    "& > h3": {
      fontSize: pxToRem(18),
      lineHeight: pxToRem(32),
      marginBottom: pxToRem(60),
      fontWeight: 500,
    },
  },
  smilies: {
    alignSelf: "center",
  },
  button: {
    marginTop: pxToRem(100),
  },
});

export default useStyles;
