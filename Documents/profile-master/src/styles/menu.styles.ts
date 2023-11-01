import { CSSProperties } from "react";

export const menuPageLayout: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  height: "100svh",
  width: "100vw",
  opacity: 1,
  backgroundColor: "black",
  transition: "all 2s",
};

export const backBtnLayout: CSSProperties = {
  display: "flex",
  alignItems: "center",
  height: "15svh",
  width: "100vw",
};

export const backBtnStyle: CSSProperties = {
  height: "20px",
  width: "20px",
  margin: "1.5em",
  color: "white",
};

export const menuContentLayout: CSSProperties = {
  height: "85svh",
  width: "100vw",
  color: "white",
  display: "flex",
  paddingTop: "1em",
  alignItems: "center",
  flexDirection: "column",
};

export const individualLayout: CSSProperties = {
  margin: "1em",
  fontSize: "1.5rem",
  color: "white",
  fontFamily: "Montserrat",
  textDecoration: "None",
};
