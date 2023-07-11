import { CSSProperties } from "react";

export const aboutMeTextLayout: CSSProperties = {
  width: "50%",
  height: "50%",
  display: "flex",
  flexDirection: "row",
  textAlign: "center",
  // backgroundColor: "yellow",
};

export const contentLayout: CSSProperties = {
  height: "100%",
  width: "85vw",
  display: "flex",
  flexDirection: "row",
  fontFamily: "Poppins",
};

export const lineLayout: CSSProperties = {
  width: "40px",
  height: "3px",
  backgroundColor: "rgba(72,69,69,1)",
  margin: ".3em",
};

export const headingLayout: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  fontFamily: "Poppins",
  fontWeight: "900",
  color: "rgba(72,69,69,1)",
  marginLeft: ".5em",
  fontSize: "3rem",
  // backgroundColor: "yellow",
  width: "90vw",
};

export const outerLayout: CSSProperties = {
  margin: ".5em",
};

export const mainLayout: CSSProperties = {
  display: "flex",
  width: "100%",
  height: "100svh",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#e4e4e4",
};
