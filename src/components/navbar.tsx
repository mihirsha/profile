import { useState } from "react";
import { navbarComponent, nameNavbarComponent } from "../styles/navbar.styles";
import { NavbarButton } from "./button";
// import { SocialIcon } from "react-native-elements";

const array = ["Home", "About me", "Resume", "Experience", "Projects"];

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
        <div style={{ margin: "2em" }}>Mihir Shah</div>
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
          <IconButton />
          <IconButton />
          <IconButton />
          <IconButton />
        </div>
      </div>
    </>
  );
}

export function IconButton() {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      style={
        isHover
          ? {
              height: "45px",
              width: "45px",
              borderRadius: "70%",
              backgroundColor: "lightgrey",
              margin: "0.8em",
              cursor: "pointer",
              transition: "all .6s",
            }
          : {
              height: "40px",
              width: "40px",
              borderRadius: "70%",
              backgroundColor: "#bdbdbd",
              cursor: "pointer",
              margin: "0.7em",
              transition: "all .4s",
            }
      }
      onClick={handleMouseEnter}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ></div>
  );
}
