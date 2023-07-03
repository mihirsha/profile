import { MAPPING_URL } from "../constant";
import { useState } from "react";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  socialIconsButton,
  socialIcons,
  socialIconsHover,
} from "../styles/navbar.styles";

export function SocialMediaIcons() {
  return (
    <>
      {MAPPING_URL.map((item, index) => {
        console.log(index);
        return <IconButton key={index} idx={index} socialMediaUrl={item} />;
      })}
    </>
  );
}

export function IconButton(props: any) {
  const [isHover, setIsHover] = useState(false);

  console.log(props.idx);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleMouseClick = () => {
    window.open(props.socialMediaUrl, "_blank");

    //
  };

  return (
    <div
      className="Animate-navbar"
      style={
        isHover
          ? {
              ...socialIconsButton,
              height: "50px",
              width: "50px",
              backgroundColor: "#c6c6c6",
            }
          : socialIconsButton
      }
      onClick={handleMouseClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.idx === 0 ? (
        <FaInstagram style={isHover ? socialIcons : socialIconsHover} />
      ) : props.idx === 1 ? (
        <FaGithub style={isHover ? socialIcons : socialIconsHover} />
      ) : (
        <FaLinkedinIn style={isHover ? socialIcons : socialIconsHover} />
      )}
    </div>
  );
}
