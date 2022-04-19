import { createUseStyles } from "react-jss";
import { pxToRem } from "constants/helpers";

const useStyles = createUseStyles({
  input: {
    fontFamily: "Open Sans, sans-serif",
    minHeight: pxToRem(35),
    border: "1px solid #060606",
    padding: `${pxToRem(10)} ${pxToRem(5)}`,
    boxSizing: "border-box",
    letterSpacing: "1.5px",
    fontSize: pxToRem(10),
  },
});

export default useStyles;
