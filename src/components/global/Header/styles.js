import { createUseStyles } from "react-jss";

import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  menuIcon: {
    margin: pxToRem(22),
  },
});

export default useStyles;
