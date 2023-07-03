/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaArrowLeft } from "react-icons/fa";
import { MENU_ITEMS } from "../constant";

export function Menu(props: any) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          height: "100svh",
          width: "100vw",
          opacity: 1,
          backgroundColor: "black",
          transition: "width 2s",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "15svh",
            width: "100vw",
          }}
        >
          <FaArrowLeft
            style={{
              height: "20px",
              width: "20px",
              margin: "1.5em",
              color: "white",
            }}
            onClick={() => props.setOpenMenu(false)}
          />
        </div>
        <div
          style={{
            height: "85svh",
            width: "100vw",
            color: "white",
            display: "flex",
            // justifyContent: "center",
            paddingTop: "1em",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {MENU_ITEMS.map((item) => {
            return (
              <a
                style={{
                  margin: "1em",
                  fontSize: "1.5rem",
                  color: "white",
                  fontFamily: "Montserrat",
                  textDecoration: "None",
                }}
                href=""
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
