import { CSSProperties } from "react";
import { MAIN_SCREEN_BACKGROUND } from "../palette";

export const navbarComponent: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: "15vh",
  margin: "1.5em",
  fontFamily: "Montserrat",
  backgroundColor: MAIN_SCREEN_BACKGROUND,
};

export const nameNavbarComponent: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100vw",
  height: "15vh",
  fontFamily: "Montserrat",
  backgroundColor: MAIN_SCREEN_BACKGROUND,
};

export const socialIconsButton: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  width: "40px",
  backgroundColor: "#e0e0e0",
  borderRadius: "70%",
  margin: "0.8em",
  cursor: "pointer",
  transition: "all .9s",
};

export const socialIcons: CSSProperties = {
  color: "black",
  transition: "all .2s",
  width: "90px",
};
export const socialIconsHover: CSSProperties = {
  color: "#666",
  transition: "all .0s",
  height: "24px",
};

export const iconsDownLayout: CSSProperties = {
  margin: "2em",
  // backgroundColor: "brown",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};
