import { createUseStyles } from "react-jss";

import { pxToRem } from "utils/helpers";
import { colors } from "constants/colors";

const useStyles = createUseStyles({
  container: {
    display: "flex",
  },
  leftContainer: {
    textAlign: "center",

    "& > h3": {
      fontSize: pxToRem(18),
      lineHeight: pxToRem(21),
      marginTop: pxToRem(30),
      marginBottom: pxToRem(30),
    },
    "& > p": {
      fontSize: pxToRem(14),
      maxWidth: "75%",
      lineHeight: pxToRem(23),
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "justify",
    },
  },
  rightContainer: {
    flex: 1,
  },
  commonRightContainer: {
    backgroundColor: colors.lightblue,
    paddingTop: pxToRem(50),
  },
  smilies: {
    height: pxToRem(80),
  },
  button: {
    marginTop: pxToRem(30),
  },
});

export default useStyles;
