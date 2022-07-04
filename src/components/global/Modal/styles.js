import { createUseStyles } from "react-jss";

import { pxToRem, hexToRGBA } from "utils/helpers";
import { colors } from "constants/colors";

const useStyles = createUseStyles({
  modal: {
    display: "block",
    position: "fixed",
    zIndex: 1,
    paddingTop: pxToRem(100),
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: hexToRGBA(colors.black, 0.4),
  },
  content: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.white,
    margin: "auto",
    padding: pxToRem(20),
    border: `1px solid ${colors.shadowGrey}`,
    width: "fit-content",
  },
  close: {
    cursor: "pointer",
    alignSelf: "flex-end",
  },
});

export default useStyles;
