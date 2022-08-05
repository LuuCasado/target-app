import { createUseStyles } from "react-jss";

import { headerHeight } from "constants/styles";
import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    minHeight: "100vh",
    "& > div": {
      display: "flex",
      flexDirection: "column",
    },
  },
  rightContainer: {
    flex: 1,
  },
  leftContainer: {
    height: "100%",
    justifyContent: "space-between",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    maxHeight: `calc(100vh - ${pxToRem(headerHeight)})`,
  },
});

export default useStyles;
