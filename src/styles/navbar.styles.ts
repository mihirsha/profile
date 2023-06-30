import { CSSProperties } from "react";
import { MAIN_SCREEN_BACKGROUND } from "../palette";

export const navbarComponent: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "15vh",
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
