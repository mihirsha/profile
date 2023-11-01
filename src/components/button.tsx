import { navbuttonLayout, underLine } from "../styles/navbutton.style";
import { useState } from "react";

export function NavbarButton(props: any) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      style={navbuttonLayout}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ display: "flex" }}>
        <div style={{ margin: "0.3em" }}>{props.text}</div>
      </div>
      <div style={isHover ? { ...underLine } : {}}></div>
    </div>
  );
}
