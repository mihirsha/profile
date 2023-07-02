import { FaArrowLeft } from "react-icons/fa";

export function Menu(props: any) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100svh",
          width: "100vw",
          opacity: 1,
          backgroundColor: "black",
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
      </div>
    </>
  );
}
