import { createUseStyles } from "react-jss";

import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    "& > h3": {
      fontSize: pxToRem(18),
      lineHeight: pxToRem(32),
      margin: 0,
      fontWeight: 500,
    },

    "& > p": {
      fontSize: pxToRem(14),
      maxWidth: pxToRem(321),
      marginTop: 0,
      lineHeight: pxToRem(23),
    },
  },
});

export default useStyles;
