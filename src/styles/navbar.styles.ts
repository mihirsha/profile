import { CSSProperties } from "react";
import { MAIN_SCREEN_BACKGROUND } from "../palette";

export const navbarComponent: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: "15svh",
  margin: "1.5em",
  fontFamily: "Montserrat",
  backgroundColor: MAIN_SCREEN_BACKGROUND,
};

export const nameNavbarComponent: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  // alignItems: "center",
  justifyContent: "space-between",
  width: "100vw",
  height: "15svh",
  fontSize: "1em",
  fontFamily: "Montserrat",
  backgroundColor: MAIN_SCREEN_BACKGROUND,
};

export const socialIconsButton: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "45px",
  width: "45px",
  backgroundColor: "#e0e0e0",
  borderRadius: "70%",
  margin: "0.5em",
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
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

export const iconsDownLayoutMob: CSSProperties = {
  margin: ".2em",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};
