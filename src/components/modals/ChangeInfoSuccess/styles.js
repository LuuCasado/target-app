import { createUseStyles } from "react-jss";

import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  icon: {
    height: pxToRem(40),
  },
});

export default useStyles;
