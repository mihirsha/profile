/* eslint-disable react/jsx-no-undef */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import {
  ABOUT_ME_1st,
  ABOUT_ME_2nd,
  personalInfoAnsList,
  personalInfoList,
} from "../constant";
import { Grid } from "@mui/material";
import {
  aboutMeTextLayout,
  contentLayout,
  headingLayout,
  lineLayout,
  mainLayout,
  outerLayout,
} from "../styles/aboutme.styles";
import { PersonalInfo } from "../components/personalInfo";

gsap.registerPlugin(ScrollTrigger);

export function AboutMe() {
  useEffect(() => {
    gsap.from("#headingdiv", {
      opacity: 0,
    });
    gsap.from("#content-div", {
      opacity: 0,
    });
    gsap.from("#personalInfo-div", {
      opacity: 0,
    });

    gsap.to("#headingdiv", {
      opacity: 1,
      y: -15,
      x: 10,
      duration: 2,
      scrollTrigger: {
        start: "center 60%",
      },
    });
    gsap.to("#content-div", {
      opacity: 1,
      y: -15,
      x: 10,
      duration: 2,
      delay: 0.2,
      scrollTrigger: {
        start: "center 60%",
      },
    });
    gsap.to("#personalInfo-div", {
      opacity: 1,
      y: -15,
      x: 10,
      duration: 2,
      delay: 0.4,
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
          <div>{ABOUT_ME_1st}&nbsp;</div>
          {ABOUT_ME_2nd}
        </div>
        <div
          id="personalInfo-div"
          style={{
            maxWidth: "80%",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            margin: "1.4em",
            marginBottom: "4em",
          }}
        >
          {
            <Grid container spacing={2}>
              {personalInfoList.map((item: string, idx: number) => (
                <Grid item xs={2} sm={1} md={6} key={idx}>
                  <PersonalInfo
                    key={idx}
                    text={item}
                    ans={personalInfoAnsList[idx]}
                  />
                </Grid>
              ))}
            </Grid>
          }
        </div>
      </div>
    </div>
  );
}
