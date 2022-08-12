import { createUseStyles } from "react-jss";

import { breakpoints } from "constants/styles";

const useStyles = createUseStyles({
  authenticated: {
    width: "30%",
    position: "relative",
  },
  common: {
    width: "50%",
  },
  hidden: {},

  [`@media screen and (max-width: ${breakpoints.xl}px)`]: {
    authenticated: {
      width: "100%",
    },
    common: {
      width: "100%",
    },
    hidden: {
      display: "none !important",
    },
  },
});

export default useStyles;
