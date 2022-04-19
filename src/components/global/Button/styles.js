import { createUseStyles } from "react-jss";
import { pxToRem } from "constants/helpers";

const useStyles = createUseStyles({
  button: {
    fontFamily: "Open Sans, sans-serif",
    border: "1px solid #060606",
    padding: `${pxToRem(10)} ${pxToRem(40)}`,
    letterSpacing: "1.65px",
    fontSize: pxToRem(11),
    color: "#FFFFFF",
    backgroundColor: "#000000",
  },
});

export default useStyles;
