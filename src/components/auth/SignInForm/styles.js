import { createUseStyles } from "react-jss";

import { pxToRem } from "constants/helpers";
import { colors } from "constants/colors";

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
    color: colors.black,
    fontSize: pxToRem(11),
  },
});

export default useStyles;
