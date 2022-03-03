import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const DynamicListItem = (props) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div>
      <li>
        <FontAwesomeIcon
          icon={faAngleRight}
          style={{ cursor: "pointer" }}
          onClick={() => {
            setisOpen(!isOpen);
          }}
        />
        {props.value.name}
      </li>
      {isOpen && (
        <div style={{ marginLeft: "30px" }}>
          {props.showList(props.value.subMenu.sub)}
        </div>
      )}
    </div>
  );
};

export default DynamicListItem;
