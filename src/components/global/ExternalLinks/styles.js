import { createUseStyles } from "react-jss";

import { pxToRem } from "constants/helpers";

const useStyles = createUseStyles({
  externalLinks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& > img": {
      width: pxToRem(120),
      height: pxToRem(38),
    },
  },
  socialMedia: {
    alignSelf: "center",

    "& > a": {
      margin: pxToRem(10),
    },
  },
});

export default useStyles;
