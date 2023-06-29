import { CSSProperties } from "react";
import { NAVBAR_FONT_COLOR } from "../palette";

export const navbuttonLayout: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1em",
  cursor: "pointer",
  marginLeft: "1em",
  color: NAVBAR_FONT_COLOR,
  // backgroundColor: "grey",
};

export const underLine: CSSProperties = {
  height: "0.1rem",
  width: "2.5rem",
  backgroundColor: "grey",
  transition: "all .8s",
};
