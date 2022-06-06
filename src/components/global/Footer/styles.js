import { createUseStyles } from "react-jss";

import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  smilies: {
    width: pxToRem(48),
  },
});

export default useStyles;
