import { createUseStyles } from "react-jss";

import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  smilies: {
    width: pxToRem(48),
    position: "absolute",
    bottom: 0,
  },
});

export default useStyles;
