import { CSSProperties } from "react";

export const aboutMeTextLayout: CSSProperties = {
  width: "55%",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  fontSize: "1.2rem",
//   margin: "2.5em",
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
  width: "30px",
  height: "2px",
  backgroundColor: "rgba(72,69,69,1)",
  margin: ".5em",
  // backgroundColor:"yellow"
};

export const headingLayout: CSSProperties = {
  display: "flex",
  justifyContent:"center",
  flexDirection: "row",
  alignItems: "center",
  fontFamily: "Montserrat",
  fontWeight: "800",
  fontSize: "1.4em",
  margin:"1.5em",
  color: "rgba(72,69,69,1)",
  // width: "90vw",
  width:"98%",
  // backgroundColor:"purple",
  // height:"100%"
};

export const outerLayout: CSSProperties = {
//   margin: ".5em",
};

export const mainLayout: CSSProperties = {
  display: "flex",
  width: "100%",
  minHeight: "100svh",
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

export const contentUpperLayout: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
};
