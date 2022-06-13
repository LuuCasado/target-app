import { createUseStyles } from "react-jss";

import currentPosition from "assets/icons/marker-current-position.png";
import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  map: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  currentMarker: {
    backgroundImage: `url(${currentPosition})`,
    backgroundSize: "cover",
    width: pxToRem(43),
    height: pxToRem(50),
  },
  targetMarker: {
    backgroundSize: "cover",
    width: pxToRem(45),
    height: pxToRem(45),
    background: "rgba(239, 198, 56, 0.7)",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& > div": {
      width: pxToRem(25),
      height: pxToRem(25),
      backgroundSize: "contain",
      mixBlendMode: "multiply",
    },
  },
  previewMarker: {
    backgroundSize: "cover",
    width: pxToRem(45),
    height: pxToRem(45),
    background: "rgba(255, 255, 255, 0.7)",
    border: "1px solid #EFC638",
    borderRadius: "100%",
  },
});

export default useStyles;
