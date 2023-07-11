import { CSSProperties } from "react";

export const aboutMeTextLayout: CSSProperties = {
  width: "50%",
  height: "50%",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  fontSize: "1.2rem",
  //   marginBottom: "1.2em",
};

export const contentLayout: CSSProperties = {
  height: "100%",
  width: "85vw",
  display: "flex",
  flexDirection: "column",
  fontFamily: "Poppins",
  //   fontFamily: "Montserrat",
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
  //   fontFamily: "Poppins",
  fontFamily: "Montserrat",
  fontWeight: "900",
  fontSize: "2.6rem",
  color: "rgba(72,69,69,1)",
  marginLeft: ".5em",
  width: "90vw",
};

export const outerLayout: CSSProperties = {
  margin: ".5em",
};

export const mainLayout: CSSProperties = {
  display: "flex",
  width: "100%",
  //   height: "100svh",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#e4e4e4",
};

export const personalInfoLayout: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  fontFamily: "Poppins",
  fontSize: "1.1rem",
  fontWeight: "600",
  color: "#181e27",
};
