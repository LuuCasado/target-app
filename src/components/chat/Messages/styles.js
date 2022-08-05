import { createUseStyles } from "react-jss";

import { colors } from "constants/colors";
import { pxToRem } from "utils/helpers";

const useStyles = createUseStyles({
  messagesContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "auto",
  },

  recivedMessage: {
    display: "flex",
    marginLeft: pxToRem(40),
    marginTop: pxToRem(15),

    "& > p": {
      fontSize: pxToRem(12),
      lineHeight: pxToRem(14),
      backgroundColor: colors.brightGrey,
      maxWidth: pxToRem(180),
      borderRadius: pxToRem(8),
      padding: pxToRem(7),
      margin: `0 ${pxToRem(10)} 0 0`,
    },

    "& > span": {
      fontSize: pxToRem(9),
      lineHeight: pxToRem(11),
      alignSelf: "flex-end",
    },
  },

  sentMessage: {
    display: "flex",
    marginRight: pxToRem(40),
    marginTop: pxToRem(15),
    flexDirection: "row-reverse",

    "& > p": {
      fontSize: pxToRem(12),
      lineHeight: pxToRem(14),
      backgroundColor: colors.warmYellow,
      maxWidth: pxToRem(180),
      borderRadius: pxToRem(8),
      padding: pxToRem(7),
      margin: `0 0 0 ${pxToRem(10)}`,
    },

    "& > span": {
      fontSize: pxToRem(9),
      lineHeight: pxToRem(11),
      alignSelf: "flex-end",
    },
  },
});

export default useStyles;
