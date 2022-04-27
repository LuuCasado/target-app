import { createUseStyles } from "react-jss";
import { pxToRem } from "constants/helpers";

const useStyles = createUseStyles({
  dropdownMenu: {
    position: "relative",
    display: "inline-block",
    minHeight: pxToRem(35),
    width: "100%",
    cursor: "pointer",
    marginTop: 5,
  },
  dropbtn: {
    fontFamily: "Open Sans, sans-serif",
    border: "1px solid #060606",
    padding: `${pxToRem(10)} 0`,
    letterSpacing: "1.5px",
    fontSize: pxToRem(11),
    boxSizing: "border-box",
    minHeight: pxToRem(35),
    backgroundColor: "#FFFFFF",
    width: "100%",
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
    width: "100%",
    textAlign: "center",

    "& > div": {
      border: "1px solid #060606",
      padding: "3px 0",
    },
  },
  isContentVisible: {
    display: "block",
  },
  error: {
    margin: 0,
    marginTop: 5,
    color: "red",
    letterSpacing: "1.5px",
    fontSize: pxToRem(10),
    textAlign: "center",
  },
});

export default useStyles;
