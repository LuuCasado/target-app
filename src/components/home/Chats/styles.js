import { createUseStyles } from "react-jss";

import { colors } from "constants/colors";
import { pxToRem, hexToRGBA } from "utils/helpers";

const useStyles = createUseStyles({
  emptyContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",

    "& > h3": {
      fontSize: pxToRem(18),
      lineHeight: pxToRem(32),
      margin: `0 ${pxToRem(50)} 0 ${pxToRem(50)} `,
    },
  },

  chatsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > h3": {
      fontSize: pxToRem(13),
      lineHeight: pxToRem(15),
      letterSpacing: "1.95px",
    },

    "& > hr": {
      width: "95%",
      color: hexToRGBA(colors.black, 0.5),
    },
  },

  messagesContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    "& > div": {
      flexGrow: 2,
      textAlign: "left",
    },
  },

  userAvatar: {
    height: pxToRem(30),
    margin: `0 ${pxToRem(27)} 0 ${pxToRem(30)} `,
    borderRadius: "100%",
  },

  defaultAvatar: {
    height: pxToRem(30),
    marginLeft: "5px",
  },

  userName: {
    fontSize: pxToRem(12),
    fontWeight: "bold",
    margin: 0,
  },

  lastMessage: {
    fontSize: pxToRem(11),
    margin: 0,
  },

  topicContainer: {
    display: "flex",
    justifyContent: "right",
    marginRight: pxToRem(50),
    position: "relative",

    "& > img": {
      height: pxToRem(20),
      margin: `0 ${pxToRem(15)} 0 ${pxToRem(15)} `,
    },
    "& > span": {
      position: "absolute",
      bottom: pxToRem(15),
      textAlign: "center",
      backgroundColor: colors.warmYellow,
      borderRadius: "100%",
      color: colors.white,
      fontSize: pxToRem(10),
      width: pxToRem(16),
      height: pxToRem(16),
    },
  },
});

export default useStyles;
