import { createUseStyles } from "react-jss";

import currentPosition from "assets/icons/marker-current-position.png";
import { colors } from "constants/colors";
import { pxToRem, hexToRGBA } from "utils/helpers";

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
    background: hexToRGBA(colors.warmYellow, 0.7),
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& > div": {
      width: pxToRem(25),
      height: pxToRem(25),
      backgroundSize: "contain",
      mixBlendMode: "multiply",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  },
  previewMarker: {
    backgroundSize: "cover",
    width: pxToRem(45),
    height: pxToRem(45),
    background: hexToRGBA(colors.white, 0.7),
    border: `1px solid ${colors.warmYellow}`,
    borderRadius: "100%",
  },
});

export default useStyles;
