/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaArrowLeft } from "react-icons/fa";
import { MENU_ITEMS, MENU_ITEMS_DIV } from "../constant";
import {
  menuPageLayout,
  backBtnLayout,
  backBtnStyle,
  menuContentLayout,
  individualLayout,
} from "../styles/menu.styles";

export function Menu(props: any) {
  return (
    <>
      <div style={menuPageLayout}>
        <div style={backBtnLayout}>
          <FaArrowLeft
            className="Animate-Menu-Name"
            style={backBtnStyle}
            onClick={() => props.setOpenMenu(false)}
          />
        </div>
        <div style={menuContentLayout}>
          {MENU_ITEMS.map((item: string, idx: number) => {
            return (
              <a
                className="Animate-Menu-Name"
                style={individualLayout}
                href={MENU_ITEMS_DIV[idx]}
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
