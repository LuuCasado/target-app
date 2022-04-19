import { createUseStyles } from "react-jss";
import { pxToRem } from "constants/helpers";

const useStyles = createUseStyles({
  containerForm: {
    display: "flex",
    flexDirection: "column",

    "& > span": {
      fontWeight: "bold",
    },
    "& > div": {
      display: "flex",
      flexDirection: "column",
    },
  },
  button: {
    margin: `${pxToRem(20)} ${pxToRem(0)}`,
  },
  input: {
    marginBottom: pxToRem(15),
  },
  link: {
    color: "#000000",
    letterSpacing: "1.65px",
    fontSize: pxToRem(11),
  },
  divider: {
    color: "#000000",
    width: pxToRem(121),
  },
});

export default useStyles;
