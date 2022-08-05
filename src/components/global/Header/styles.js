import { createUseStyles } from "react-jss";

import { headerHeight } from "constants/styles";
import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    height: pxToRem(headerHeight),
    justifyContent: "flex-start",
    width: "100%",
    alignItems: "center",
  },
  icon: {
    marginLeft: pxToRem(22),
    cursor: "pointer",
  },
});

export default useStyles;
