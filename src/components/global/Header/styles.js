import { createUseStyles } from "react-jss";

import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    alignItems: "center",
    height: pxToRem(70),
  },
  menuIcon: {
    marginLeft: pxToRem(22),
  },
});

export default useStyles;
