/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  nameBox,
  firstNameBox,
  contentBox,
  welcomeBox,
  summaryFont,
  imageLayout,
  mainContainer,
} from "../styles/home.style";
import { GREET_MESSAGE, SUMMARY_1, SUMMARY_2, SUMMARY_3 } from "../constant";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import { WORDS } from "../constant";
import { NavBar } from "../components/navbar";

export default function Home() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      {/* {matches ? <NavBar /> : <></>} */}
      <div
        style={
          matches
            ? { ...mainContainer }
            : { ...mainContainer, fontSize: "2.7em" }
        }
      >
        {matches ? (
          <div style={imageLayout}>
            <div
              style={{
                height: "35%",
                width: "50%",
                backgroundColor: "blue",
                borderRadius: "50%",
              }}
            ></div>
          </div>
        ) : (
          <></>
        )}
        <Func matches={matches} />
      </div>
      <div
        style={{ height: "2rem", backgroundColor: "white", width: "100vw" }}
      ></div>
    </div>
  );
}

function Func(props: any) {
  return (
    <div
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
    </div>
  );
}
