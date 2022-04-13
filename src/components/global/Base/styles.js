import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  app: {
    textAlign: "center",
  },
  appLogo: {
    height: "40vmin",
    pointerEvents: "none",
  },
  appHeader: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  appLink: {
    color: "#61dafb",
  },
});

export default useStyles;
