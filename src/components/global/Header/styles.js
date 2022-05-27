import { createUseStyles } from "react-jss";

import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    height: pxToRem(70),
    justifyContent: "flex-start",
    width: "100%",
    alignItems: "center",
  },
  menuIcon: {
    marginLeft: pxToRem(22),
  },
});

export default useStyles;
