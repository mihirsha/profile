import {
  navbarComponent,
  nameNavbarComponent,
  iconsDownLayout,
} from "../styles/navbar.styles";
import { NavbarButton } from "./button";
import { FaBars } from "react-icons/fa";
import { PERSON_NAME_FIRSTNAME, PERSON_NAME_SURNAME } from "../constant";
import { MENU_ITEMS } from "../constant";
import { SocialMediaIcons } from "./socialMediaIcons";

export function NavBar() {
  return (
    <div style={navbarComponent}>
      {/* <div style={{ display: "flex", flexDirection: "row" }}> */}
      {MENU_ITEMS.map((it: string, index: any) => {
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
        {props.matches ? (
          <div style={iconsDownLayout}>
            <SocialMediaIcons />
          </div>
        ) : (
          <div
            style={{
              margin: "1.5em",
            }}
          >
            <FaBars onClick={() => props.setOpenMenu(true)} />
          </div>
        )}
      </div>
    </>
  );
}
