import {
  navbarComponent,
  nameNavbarComponent,
  iconsDownLayout,
} from "../styles/navbar.styles";
import { NavbarButton } from "./button";
import { FaBars } from "react-icons/fa";
import { PERSON_NAME_FIRSTNAME, PERSON_NAME_SURNAME } from "../constant";
import { MENU_ITEMS } from "../constant";
// import { SocialMediaIcons } from "./socialMediaIcons";
import { motion } from "framer-motion";

export function NavBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          // ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1.2,
        },
      }}
      exit={{
        opacity: 0,
        y: -20,
        transition: {
          ease: "easeInOut",
          duration: 0.3,
        },
      }}
      style={navbarComponent}
    >
      {/* <div style={{ display: "flex", flexDirection: "row" }}> */}
      {MENU_ITEMS.map((it: string, index: any) => {
        return <NavbarButton text={it} />;
      })}
      {/* </div> */}
    </motion.div>
  );
}

// const control = true;

export function NameNavBar(props: any) {
  return (
    <>
      <div style={nameNavbarComponent}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              // ease: [0.6, 0.01, -0.05, 0.95],
              duration: 1,
            },
          }}
          exit={{
            opacity: 0,
            y: -20,
            transition: {
              ease: "easeInOut",
              duration: 0.8,
            },
          }}
          style={{ margin: "1.5em", fontWeight: 550, fontSize: "1.4rem" }}
        >
          {PERSON_NAME_FIRSTNAME} {PERSON_NAME_SURNAME}
        </motion.div>
        {props.matches ? (
          <div style={iconsDownLayout}>
            {/* <SocialMediaIcons /> */}
            {props.matches ? <NavBar /> : <></>}
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
