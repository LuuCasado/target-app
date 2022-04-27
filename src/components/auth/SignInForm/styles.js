import { createUseStyles } from "react-jss";
import { pxToRem } from "constants/helpers";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",

    "& span": {
      fontWeight: "bold",
      fontSize: pxToRem(11),
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
    fontSize: pxToRem(11),
  },
});

export default useStyles;
