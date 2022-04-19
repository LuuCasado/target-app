import { createUseStyles } from "react-jss";
import { pxToRem } from "constants/helpers";

const useStyles = createUseStyles({
  dropdownMenu: {
    position: "relative",
    display: "inline-block",
  },
  dropbtn: {
    fontFamily: "Open Sans, sans-serif",
    border: "1px solid #060606",
    padding: `${pxToRem(10)} ${pxToRem(40)}`,
    letterSpacing: "1.5px",
    fontSize: pxToRem(11),
    boxSizing: "border-box",
    minHeight: pxToRem(35),
    backgroundColor: "#FFFFFF",
  },
  content: {
    display: "none",
    position: "absolute",
    backgroundColor: "#f1f1f1",
    overflow: "auto",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: 1,
    fontSize: pxToRem(11),
    letterSpacing: "1.5px",
    "& > div": {
      border: "1px solid #060606",
    },
  },
  isContentVisible: {
    display: "block",
  },
});

export default useStyles;
