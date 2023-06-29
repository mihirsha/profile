import { navbarComponent } from "../styles/navbar.styles";
import { NavbarButton } from "./button";
const array = ["Home", "About me", "Resume", "Experience", "Projects"];

// underLine

export function NavBar() {
  return (
    <div style={navbarComponent}>
      {/* <div style={{ color: "white", fontWeight: "600", fontSize: "1.5em" }}>
        Mihir Shah
      </div> */}
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
