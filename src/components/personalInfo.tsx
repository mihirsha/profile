import { personalInfoLayout } from "../styles/aboutme.styles";

export function PersonalInfo(props: any) {
  return (
    <div>
      <div style={personalInfoLayout}>
        {props.text}&nbsp; . . . . . . &nbsp;
        <div style={{ color: "#777777" }}>{props.ans}</div>
      </div>
    </div>
  );
}
