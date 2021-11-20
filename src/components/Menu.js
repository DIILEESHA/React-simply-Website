import React from "react";
import  MenuList  from "../Helpers/MenuList";
import MenuItem from "./MenuItem";
import st from '../styles/MenuItem.css'
const Menu = () => {
  return (
      <div className="menu">
<h1 className="menuTitle">BEST CAR</h1>
    <div className="menuList">
      {MenuList.map((menuItem, key) => {
        return (
          <MenuItem
            key={key}
            name={menuItem.name}
            img={menuItem.img}
            title={menuItem.title}
          />
        );
      })}
    </div>
    </div>
  );
};

export default Menu;
