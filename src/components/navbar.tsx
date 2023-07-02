import { useState } from "react";
import {
  navbarComponent,
  nameNavbarComponent,
  socialIconsButton,
  socialIcons,
  socialIconsHover,
  iconsDownLayout,
} from "../styles/navbar.styles";
import { NavbarButton } from "./button";
import { FaInstagram, FaGithub, FaLinkedinIn, FaBars } from "react-icons/fa";
import { PERSON_NAME_FIRSTNAME, PERSON_NAME_SURNAME } from "../constant";

const array = ["Home", "About me", "Resume", "Experience", "Projects"];

const mapping = [
  "https://www.instagram.com/mihirr_shah/",
  "https://github.com/mihirsha",
  "https://www.linkedin.com/in/mihirshah0114/",
];

export function NavBar() {
  return (
    <div style={navbarComponent}>
      {/* <div style={{ display: "flex", flexDirection: "row" }}> */}
      {array.map((it: string, index: any) => {
        return <NavbarButton text={it} />;
      })}
      {/* </div> */}
    </div>
  );
}

// const control = true;

export function NameNavBar(props: any) {
  return (
    <>
      <div style={nameNavbarComponent}>
        <div className="Animate-name" style={{ margin: "1.5em" }}>
          {PERSON_NAME_FIRSTNAME} {PERSON_NAME_SURNAME}
        </div>

        {/* <NavBar /> */}
        {props.matches ? (
          <div style={iconsDownLayout}>
            {mapping.map((item, index) => {
              console.log(index);
              return (
                <IconButton key={index} idx={index} socialMediaUrl={item} />
              );
            })}
          </div>
        ) : (
          <div
            style={{
              margin: "1.5em",
            }}
          >
            {/* <IconButton isMenu={true}> */}
            <FaBars onClick={() => props.setOpenMenu(true)} />
            {/* </IconButton> */}
          </div>
        )}
      </div>
    </>
  );
}

export function IconButton(props: any) {
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  console.log(props.idx);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleMouseClick = () => {
    setIsClicked(true);
    window.open(props.socialMediaUrl, "_blank");
    setIsClicked(false);

    //
  };

  return (
    <div
      className="Animate-navbar"
      style={
        isClicked || isHover
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
