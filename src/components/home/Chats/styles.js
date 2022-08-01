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
      marginLeft: pxToRem(50),
      marginRight: pxToRem(50),
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
    marginLeft: pxToRem(30),
    marginRight: pxToRem(27),
    borderRadius: "100%",
  },

  defaultAvatar: {
    height: pxToRem(30),
    marginLeft: "5px",
  },

  topic: {
    height: pxToRem(17),
    marginLeft: pxToRem(15),
    marginRight: pxToRem(30),
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
});

export default useStyles;
