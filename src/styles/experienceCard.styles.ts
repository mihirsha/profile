import { CSSProperties } from "react";
import { MAIN_SCREEN_BACKGROUND } from "../palette";


export const cardOuterLayout: CSSProperties = {
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
  }


  export const dateLayout: CSSProperties = {
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
  //   backgroundColor:"yellow"
    }
export const dividerLayout: CSSProperties = {width:".2%", height:"90%", backgroundColor: "#d8d8d8"}


export const cardBackgroundInformationLayout: CSSProperties = {
    height:"100%",
    width:"65%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"column",
    // backgroundColor:"purple",
    borderColor:"grey",
    borderWidth:"10px"
  }

export const designationLayout:CSSProperties=  {
    display:"flex",
    // flexDirection:"row",
    fontSize:"1em",
    fontFamily:"Poppins",
    fontWeight:700,
}

export const professionTypeLayout: CSSProperties = {
    display:"flex",
    alignItems:"center",
    // flexDirection:"row",
    fontSize:"0.75em",
    color: "rgba(72,69,69,1)",
    fontFamily:"Poppins",
    fontWeight:700,
}

export const companyNameLayout: CSSProperties = {
    fontSize:"0.9em",
    fontWeight:700,
    fontFamily:"Poppins",
    color: "rgba(72,69,69,1)",
    }