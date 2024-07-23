import React from "react";
import MenuList from "./MenuList";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = React.useState(
    []
  );
  const handleToggleChildren = (getcurentlabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getcurentlabel]: !displayCurrentChildren[getcurentlabel],
    });

    console.log(displayCurrentChildren);
  };
  return (
    <>
      <li style={{ display: "grid", gap: "10px" }}>
        <p>{item.label}</p>
        <div style={{ display: "flex", gap: "10px" }}>
          {item && item.children && item.children.length ? (
            <span onClick={() => handleToggleChildren(item.label)}>
              {displayCurrentChildren[item.label] ? (
                <FaMinus color="grey" size={25} />
              ) : (
                <FaPlus color="white" size={25} />
              )}
            </span>
          ) : null}
        </div>
        {item &&
        item.children &&
        item.children.length > 0 &&
        displayCurrentChildren[item.label] ? (
          <MenuList key={item.children} list={item.children} />
        ) : null}
      </li>
    </>
  );
}

export default MenuItem;
