import { createUseStyles } from "react-jss";

import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  answer: {
    marginTop: pxToRem(15),
    marginBottom: pxToRem(15),
  },
});

export default useStyles;
