import { createUseStyles } from "react-jss";

import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    width: "100%",
    padding: pxToRem(15),
    boxSizing: "border-box",
  },
  input: {
    flexGrow: 2,
    margin: 0,
    textAlign: "left",
  },
});

export default useStyles;
