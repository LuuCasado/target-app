import { createUseStyles } from "react-jss";

import { pxToRem } from "constants/helpers";

const useStyles = createUseStyles({
  container: {
    width: "50%",
    position: "relative",
  },
  phone: {
    width: "100%",
  },
  play: {
    position: "absolute",
    width: pxToRem(50),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});

export default useStyles;
