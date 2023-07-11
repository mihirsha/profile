import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { ABOUT_ME_1st, ABOUT_ME_2nd } from "../constant";
import {
  aboutMeTextLayout,
  contentLayout,
  headingLayout,
  lineLayout,
  mainLayout,
  outerLayout,
} from "../styles/aboutme.styles";

gsap.registerPlugin(ScrollTrigger);

export function AboutMe() {
  useEffect(() => {
    gsap.from("#headingdiv", {
      opacity: 0,
    });
    gsap.from("#content-div", {
      opacity: 0,
    });

    gsap.to("#headingdiv", {
      opacity: 1,
      y: -15,
      x: 10,
      duration: 2,
      scrollTrigger: {
        start: "center 65%",
      },
    });
    gsap.to("#content-div", {
      opacity: 1,
      y: -15,
      x: 10,
      duration: 2,
      delay: 0.5,
      scrollTrigger: {
        start: "center 60%",
      },
    });
  });

  return (
    <div style={mainLayout}>
      <div style={outerLayout}>
        <div id="headingdiv" style={headingLayout}>
          <div style={lineLayout}></div>
          <p>About Me</p>
          <div style={lineLayout}></div>
        </div>
      </div>
      <div style={contentLayout}>
        <div id="content-div" style={aboutMeTextLayout}>
          {ABOUT_ME_1st}&nbsp;
          {ABOUT_ME_2nd}
        </div>
      </div>
    </div>
  );
}
