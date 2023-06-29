import { CSSProperties } from "react";
import {
  MAIN_SCREEN_BACKGROUND,
  FIRSTNAME_COLOR,
  SURNAME_COLOR,
  CONTENT_FONT_COLOR,
} from "../palette";

export const mainContainer: CSSProperties = {
  display: "flex",
  width: "100vw",
  height: "100vh",
  fontSize: "3rem",
  color: "white",
  justifyContent: "center",
  fontFamily: "Montserrat",
  alignItems: "center",
  flexDirection: "row",
  background: MAIN_SCREEN_BACKGROUND,
  // backgroundColor: "purple",
};

export const nameBox: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  margin: "0.2em",
};

export const firstNameBox: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  fontWeight: "bold",
  fontSize: "0.7em",
  marginLeft: "0.2em",
  marginBottom: "0.5em",
  color: FIRSTNAME_COLOR,
};

export const surnameNameBox: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  margin: "0.2em",
  fontWeight: "bold",
  color: SURNAME_COLOR,
};

export const welcomeBox: CSSProperties = {
  paddingLeft: "0.5em",
  display: "flex",
  flexDirection: "column",
  fontSize: "0.4em",
  margin: "0.2em",
  color: CONTENT_FONT_COLOR,
};

export const contentBox: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "20rem",
  marginBottom: "0.7em",
  backgroundColor: MAIN_SCREEN_BACKGROUND,
};

export const summaryFont: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  fontSize: "0.35em",
  marginLeft: "0.9em",
  marginBottom: "0.3em",
  color: CONTENT_FONT_COLOR,
};

export const imageLayout: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "30%",
  // backgroundColor: "yellow",
};
