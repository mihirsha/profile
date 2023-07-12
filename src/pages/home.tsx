/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  nameBox,
  firstNameBox,
  contentBox,
  welcomeBox,
  summaryFont,
  imageLayout,
  mainContainer,
  downArrowLayout,
} from "../styles/home.style";
import { motion } from "framer-motion";
import { GREET_MESSAGE, SUMMARY_1, SUMMARY_2, SUMMARY_3 } from "../constant";
import { SocialMediaIcons } from "../components/socialMediaIcons";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import { WORDS } from "../constant";
import { NavBar, NameNavBar } from "../components/navbar";
import { FaArrowDown, FaArrowLeft } from "react-icons/fa";
import { MAIN_SCREEN_BACKGROUND } from "../palette";
import { Menu } from "../components/menu";
import { iconsDownLayout, iconsDownLayoutMob } from "../styles/navbar.styles";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, [openMenu]);

  return (
    <div style={{ overflow: "hidden" }}>
      {!openMenu ? (
        <div>
          <NameNavBar matches={matches} setOpenMenu={setOpenMenu} />

          <div
            style={
              matches
                ? { ...mainContainer }
                : { ...mainContainer, fontSize: "2.7em" }
            }
          >
            {matches ? (
              <div style={imageLayout}>
                {/* <div
              style={{
                height: "35%",
                width: "50%",
                backgroundColor: "blue",
                borderRadius: "50%",
              }}
            ></div> */}
              </div>
            ) : (
              <></>
            )}

            <Func matches={matches} />
          </div>

          <div style={downArrowLayout}>
            <FaArrowDown
              id="Animate-arrow"
              className="Animate-down-arrow"
              style={{ color: "black" }}
            />
          </div>
        </div>
      ) : (
        <Menu setOpenMenu={setOpenMenu} />
      )}
    </div>
  );
}

function Func(props: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          // ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1.6,
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
      // className="Animate"
      style={
        props.matches ? { ...contentBox, width: "30rem" } : { ...contentBox }
      }
    >
      <div style={welcomeBox}>{GREET_MESSAGE}</div>
      <div style={nameBox}>
        <div style={firstNameBox}>I'm</div>
        <span style={firstNameBox}>
          <Typewriter
            loop={false}
            cursor={true}
            cursorStyle={"|"}
            words={WORDS}
          />
        </span>
      </div>
      <div style={summaryFont}>
        &#x2022; {SUMMARY_1}
        {SUMMARY_2}
      </div>
      <div style={summaryFont}>&#x2022; {SUMMARY_3}</div>

      {!props.matches ? (
        <div style={iconsDownLayoutMob}>
          <SocialMediaIcons />
        </div>
      ) : (
        <></>
      )}
    </motion.div>
  );
}
