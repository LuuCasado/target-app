import { createUseStyles } from "react-jss";

import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  container: {
    display: "flex",

    "& > div": {
      width: "30%",
      flexDirection: "column",
      display: "flex",

      "& p": {
        width: "33%",
        alignSelf: "center",
      },
    },
  },

  rightColumn: {
    flex: 2,
    maxWidth: "100%",
  },
});

export default useStyles;
