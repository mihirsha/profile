import { navbuttonLayout, underLine } from "../styles/navbutton.style";
import { useState } from "react";
import { Link } from "react-scroll";

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
        <Link to={props.divId} spy={true} smooth={true} offset={100} duration={2000} style={{ margin: "0.3em" }}>{props.text}</Link>
      </div>
      <div style={isHover ? { ...underLine } : {}}>
        
      </div>
    </div>
  );
}
