import { createUseStyles } from "react-jss";

import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  map: {
    height: pxToRem(500),
  },
});

export default useStyles;
