import { CSSProperties } from "react";
import { MAIN_SCREEN_BACKGROUND } from "../palette";

export const lineLayout: CSSProperties = {
  width: "30px",
  height: "2px",
  backgroundColor: "rgba(72,69,69,1)",
  margin: ".5em",
  // backgroundColor:"yellow"
};

export const headingLayout: CSSProperties = {
  display: "flex",
  justifyContent:"center",
  flexDirection: "row",
  alignItems: "center",
  fontFamily: "Montserrat",
  fontWeight: "800",
  fontSize: "1.4em",
  margin:"1.5em",
  color: "rgba(72,69,69,1)",
  // width: "90vw",
  width:"98%",
  // backgroundColor:"purple",
  // height:"100%"
};


export const mainLayout: CSSProperties = {
  display: "flex",
  width: "100%",
  minHeight: "100svh",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#e4e4e4",
  // backgroundColor: MAIN_SCREEN_BACKGROUND
};

export const personalInfoLayout: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  fontFamily: "Poppins",
  fontSize: "1.1rem",
  fontWeight: "600",
  color: "#181e27",
};



export const workExperienceLayout: CSSProperties = {
  
    display:"flex", 
    justifyContent:"center", 
    alignItems:"center", 
    fontSize:"4em", 
    // :"-20",
    letterSpacing:".4em", 
    position:"relative", 
    opacity:0, 
    fontFamily:"poppins"
} 

export const myExperienceOuterLayout: CSSProperties = {position:"absolute", display:"flex", flexDirection:"row", alignItems:"center"}
export const mainContentOuterLayout: CSSProperties = {width:"95%", display:"flex", justifyContent:"center", alignItems:"center"}
export const leftContentOuterLayout: CSSProperties = { 
  width:"47%", 
  height:"100%",
  // backgroundColor:"yellow"

  
}

export const rightContentOuterLayout: CSSProperties = {
  opacity:0,
  width:"48%", 
  height:"100%", 
  display:"flex", 
  justifyContent:"space-between", 
  alignItems:"center", 
  flexDirection:"column",
  // backgroundColor:"purple",
  borderLeft: "2.5px solid #d1d1d1"
}

export const experienceCardOuterLayout:CSSProperties = {
  // backgroundColor:"blue", 
  height: "150px",
  width:"100%", 
  padding:0,
  margin:"1em",
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  flexDirection:"row"
}

export const circularLayout: CSSProperties = {
  height:"2em",
  width:"2.5em",
  background: "#e4e4e4",
  borderColor:"#d1d1d1",
  borderRadius:"30px",
  borderWidth:"2.5px",
  borderStyle:"solid",
  marginLeft:"-1.1em",
  // position:"relative"
  
}

export const joinerLayout: CSSProperties = {
  width:"10%",
  height:"2%",
  backgroundColor:"#d1d1d1"
}