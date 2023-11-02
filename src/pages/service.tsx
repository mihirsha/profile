/* eslint-disable react/jsx-no-undef */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import {
  COMPANY,
  DESIGNATION,
  EXPERIENCE_CONTENT,
  EXPERIENCE_DATE,
  EXPERIENCE_LOCATIONS,
  PROFESSION_TYPE,
} from "../constant";
import {
  headingLayout,
  lineLayout,
  mainLayout,
  workExperienceLayout,
  myExperienceOuterLayout,
  mainContentOuterLayout,
  leftContentOuterLayout,
  rightContentOuterLayout,
  experienceCardOuterLayout,
  circularLayout,
  joinerLayout
} from "../styles/service.styles";
import { ExperienceCard } from "../components/experienceCard";



gsap.registerPlugin(ScrollTrigger);



export function Service() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  });


  useEffect(() => {
    gsap.from("#headingdiv", {
      opacity: 0,
    });

    gsap.to("#headingdiv", {
      opacity: 1,
      y: -15,
      x: 10,
      duration: 2,
      scrollTrigger: {
        start: "center 40%",
        // markers:true
      },
    });
    
    gsap.from("#workexpid", {
      opacity: 0,
    });
    
    gsap.to("#workexpid", {
      opacity: 0.06,
      x: 5,
      duration: .5,
      scrollTrigger: {
        start: "center 50%"
      },
    });

    gsap.from("#Card", {
      opacity: 0,
    });

    gsap.to("#Card", {
      opacity: 0.9,
      y: 15,
      x: -10,
      duration: 2,
      scrollTrigger: {
        trigger: "#treeDiv",
        start: "top center"
      },
    });

    gsap.from("#treeDiv", {
      opacity: 0,
    });

    gsap.to("#treeDiv", {
      opacity: 0.8,
      y: 15,
      x: -10,
      duration: 2,
      scrollTrigger: {
        trigger: "#treeDiv",
        start: "top center"
      },
    });
  });

  return (
    <div style={mainLayout} id="experienceId">
        
        <div style={headingLayout}>
          <div id="workexpid" style={workExperienceLayout}>WORK EXPERIENCE</div>
          <div id="headingdiv" style={myExperienceOuterLayout}>
            <div style={lineLayout}></div>
            <p>My Experience</p>
            <div style={lineLayout}></div>
          </div>

        </div>

        <div style={mainContentOuterLayout}>
          <div id="ExpContent" style={leftContentOuterLayout}>
          </div>
            <div id="treeDiv" style={rightContentOuterLayout}>
              {COMPANY.map((item: string, idx: number)=>{
                return (
                  <div style={experienceCardOuterLayout}>
                    <div style={circularLayout}/>
                    <div style={joinerLayout}></div>
                    <ExperienceCard
                      companyName={COMPANY[idx]}
                      professionType={PROFESSION_TYPE[idx]}
                      location={EXPERIENCE_LOCATIONS[idx]}
                      date={EXPERIENCE_DATE[idx]}
                      Designation={DESIGNATION[idx]}
                      content={EXPERIENCE_CONTENT[idx]}
                      idxNumber={idx}/>
                    </div>
                )})
              }
            </div>
          </div>

    </div>
  );
}