import { useState } from "react";
import { navbarComponent, nameNavbarComponent } from "../styles/navbar.styles";
import { NavbarButton } from "./button";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

const array = ["Home", "About me", "Resume", "Experience", "Projects"];

const mapping = [
  { Instagram: "https://www.instagram.com/mihirr_shah/" },
  { Github: "https://github.com/mihirsha" },
  { Linkedin: "https://www.linkedin.com/in/mihirshah0114/" },
];
// underLine

export function NavBar() {
  return (
    <div style={navbarComponent}>
      {/* <div style={{ display: "flex", flexDirection: "row" }}> */}
      {array.map((it: string, index: any) => {
        return (
          <>
            <NavbarButton text={it} />
          </>
        );
      })}
      {/* </div> */}
    </div>
  );
}

export function NameNavBar() {
  return (
    <>
      <div style={nameNavbarComponent}>
        <div className="Animate-navbar" style={{ margin: "2em" }}>
          Mihir Shah
        </div>
        <div
          style={{
            margin: "2em",
            // backgroundColor: "brown",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {/* <SocialIcon type="instagram" /> */}
          {mapping.map((item, index) => {
            console.log(index);
            return (
              <IconButton
                key={index}
                idx={index}
                socialMediaUrl={item["Instagram"]}
              />
            );
          })}
        </div>
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
        isClicked
          ? {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "45px",
              width: "45px",
              borderRadius: "70%",
              backgroundColor: "#c6c6c6",
              margin: "0.8em",
              cursor: "pointer",
              transition: "all .6s",
            }
          : isHover
          ? {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "45px",
              width: "45px",
              borderRadius: "70%",
              backgroundColor: "#e0e0e0",
              margin: "0.8em",
              cursor: "pointer",
              transition: "all .6s",
            }
          : {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "40px",
              width: "40px",
              borderRadius: "70%",
              backgroundColor: "#e0e0e0",
              cursor: "pointer",
              margin: "0.7em",
              transition: "all .2s",
            }
      }
      onClick={handleMouseClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.idx === 0 ? (
        <FaInstagram
          style={
            isHover
              ? { color: "black", transition: "all .2s", width: "90px" }
              : { color: "#666", transition: "all .0s", height: "24px" }
          }
        />
      ) : props.idx === 1 ? (
        <FaGithub
          style={
            isHover
              ? { color: "black", transition: "all .2s", width: "90px" }
              : { color: "#666", transition: "all .0s", height: "24px" }
          }
        />
      ) : (
        <FaLinkedinIn
          style={
            isHover
              ? { color: "black", transition: "all .2s", width: "90px" }
              : { color: "#666", transition: "all .0s", height: "24px" }
          }
        />
      )}
    </div>
  );
}
