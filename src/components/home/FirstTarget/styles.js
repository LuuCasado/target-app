import { createUseStyles } from "react-jss";

import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  container: {
    "& > h3": {
      fontSize: pxToRem(18),
      lineHeight: pxToRem(32),
      margin: `${pxToRem(20)} ${pxToRem(30)}`,
      fontWeight: "normal",
    },
    "& > p": {
      fontSize: pxToRem(15),
      lineHeight: pxToRem(32),
    },
  },
  topics: {
    display: "flex",
    flexDirections: "row",
    justifyContent: "center",
    alignItems: "center",

    "& > img": {
      height: pxToRem(20),
    },

    "& > p": {
      fontSize: pxToRem(13),
      lineHeight: pxToRem(15),
      letterSpacing: "1.95px",
      marginLeft: pxToRem(5),
    },
  },
});

export default useStyles;
