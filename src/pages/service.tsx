/* eslint-disable react/jsx-no-undef */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { FaMapPin, FaRegHandPointer } from 'react-icons/fa';
// import { TbHandFinger,  } from 'react-icons/tb';

import nielsenImage from "../images/NielsenSymbol.jpg"

import {
  ABOUT_ME_1st,
  ABOUT_ME_2nd,
  COMPANY,
  DESIGNATION,
  EXPERIENCE_CONTENT,
  EXPERIENCE_DATE,
  EXPERIENCE_LOCATIONS,
  PROFESSION_TYPE,
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
  contentUpperLayout,
  outerLayout,
} from "../styles/service.styles";
import { PersonalInfo } from "../components/personalInfo";
import { MAIN_SCREEN_BACKGROUND } from "../palette";

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
        start: "center 40%",
        // markers:true
      },
    });
    
  });

  return (
    <div style={mainLayout} id="About-me">
        <div id="headingdiv" style={headingLayout}>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center", fontSize:"4em", letterSpacing:".4em", position:"relative", opacity:0.07, fontFamily:"poppins"}}>WORK EXPERIENCE</div>
          <div style={{position:"absolute", display:"flex", flexDirection:"row", alignItems:"center"}}>
            <div style={lineLayout}></div>
            <p>My Experience</p>
            <div style={lineLayout}></div>
            
          </div>
        </div>
        <div style={{width:"95%", display:"flex", justifyContent:"center", alignItems:"center", position:"relative"}}>
          <div style={{ 
            width:"50%", 
            height:"100%",
            // backgroundColor:"yellow"
          }}> </div>
          <div style={{height:"100%", width:"0.1%", backgroundColor:"#b1b1b1"}}></div>
          {/* <div style={{

          }}> */}
            <div style={{
              width:"48%", 
              height:"100%", 
              display:"flex", 
              justifyContent:"space-between", 
              alignItems:"center", 
              flexDirection:"column",
              // backgroundColor:"purple",
              borderLeft: "2.5px solid #d1d1d1"
            }}>
              {COMPANY.map((item: string, idx: number)=>{
                return (
                
                
                <div style={{
                  // backgroundColor:"blue", 
                  height: "150px",
                  width:"100%", 
                  padding:0,
                  margin:"1em",
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center",
                  flexDirection:"row"
                }}>
                  <div style={{
                    height:"2em",
                    width:"2.5em",
                    background: "#e4e4e4",
                    borderColor:"#d1d1d1",
                    borderRadius:"30px",
                    borderWidth:"2.5px",
                    borderStyle:"solid",
                    marginLeft:"-1.1em",
                    // position:"relative"
                    
                  }}>
                     {/* <img src={nielsenImage} alt="" className="image-nielsen"/> */}
                  </div>
                  <div style={{
                    width:"10%",
                    height:"2%",
                    backgroundColor:"#d1d1d1"
                  }}></div>
                
                  <Card
                    companyName={COMPANY[idx]}
                    professionType={PROFESSION_TYPE[idx]}
                    location={EXPERIENCE_LOCATIONS[idx]}
                    date={EXPERIENCE_DATE[idx]}
                    Designation={DESIGNATION[idx]}
                    content={EXPERIENCE_CONTENT[idx]}
                    idxNumber={idx}/>
                  </div>
                )
            })
            }
            </div>
          </div>
        {/* </div> */}
        
      </div>
  );
}

function Card(props: any) {
  return (
  <div style={{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    height:"70%",
    // fontFamily:"Poppins",
    fontFamily:"Montserrat",
    width:"100%", 
    backgroundColor:MAIN_SCREEN_BACKGROUND, 
    borderRadius:"20px", 
    padding:"1em",
    marginBottom:"2em",
    margin:"1em",
    flexDirection: "row",
    borderColor: "#d1d1d1",
    borderWidth:".07em",
    borderStyle:"solid",
    boxShadow: "0 0 30px rgba(0, 0, 0, 0.20)"
  }}>

      <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems:"center",
        fontSize:"0.75em",
        fontWeight:700,
        fontFamily:"Poppins",
        color: "rgba(72,69,69,1)",
        height:"100%",
        width:"30%",
        lineHeight:2
        // backgroundColor:"yellow"
        }}>{props.date}<br></br>
        <div><FaMapPin/> {props.location}</div>
        </div>

      <div style={{width:".2%", height:"90%", backgroundColor: "#d8d8d8"}}></div>
      <div style={{
        height:"100%",
        width:"65%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"column",
        // backgroundColor:"purple",
        borderColor:"grey",
        borderWidth:"10px"
      }} className="card-background">
      <div style={{display:"flex", flexDirection: "row", lineHeight:2.5}}>
        <div style={{
          display:"flex",
          // flexDirection:"row",
          fontSize:"1em",
          fontFamily:"Poppins",
          fontWeight:700,
        }}>{props.Designation}</div>

        <div style={{
          display:"flex",
          alignItems:"center",
          // flexDirection:"row",
          fontSize:"0.75em",
          color: "rgba(72,69,69,1)",
          fontFamily:"Poppins",
          fontWeight:700,
        }}> &nbsp; &#x2022; &nbsp; {props.professionType} </div>
      </div>

      <div style={{display:"flex", flexDirection:"row"}}> 
        <div style={{
          fontSize:"0.9em",
          fontWeight:700,
          fontFamily:"Poppins",
          color: "rgba(72,69,69,1)",
          }}>{props.companyName}&nbsp;&nbsp;&nbsp;&nbsp;</div><div>{props.idxNumber == 0 ?<FaRegHandPointer className="Animate-down-arrow"/>:<></>}</div>
      </div>
        
      <div className="card-body">
        <div style={{fontSize:"0.8em"}}>
          {props.content.map((item: string, idx: number) => {
            return (<div>
              &#x2022; &nbsp; <b>{item}</b><br></br><br></br>
            </div>)
          })}
        </div>
        </div>  
      </div>
      
      



  </div>)
}