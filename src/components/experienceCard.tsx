import { FaMapPin, FaRegHandPointer } from "react-icons/fa"
import { cardBackgroundInformationLayout, cardOuterLayout, companyNameLayout, dateLayout, designationLayout, dividerLayout, professionTypeLayout } from "../styles/experienceCard.styles"

export function ExperienceCard(props: any) {
    return (
    <div id="Card" style={cardOuterLayout}>
  
        <div style={dateLayout}>{props.date}<br></br>
          <div><FaMapPin/> {props.location}</div>
        </div>

        <div style={dividerLayout}/>
        <div style={cardBackgroundInformationLayout} className="card-background">
            <div style={{display:"flex", flexDirection: "row", lineHeight:2.5}}>
                <div style={designationLayout}>{props.Designation}</div>
                <div style={professionTypeLayout}> &nbsp; &#x2022; &nbsp; {props.professionType} </div>
            </div>

            <div style={{display:"flex", flexDirection:"row"}}> 
                <div style={companyNameLayout}>{props.companyName}&nbsp;&nbsp;&nbsp;&nbsp;</div>
                {props.idxNumber == 0 ?<FaRegHandPointer className="Animate-down-arrow"/>:<></>}
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