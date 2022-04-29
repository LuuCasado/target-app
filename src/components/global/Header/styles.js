import { createUseStyles } from "react-jss";

import { pxToRem } from "constants/helpers";

const useStyles = createUseStyles({
  menuIcon: {
    margin: pxToRem(22),
  },
});

export default useStyles;
