import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as stars } from "@fortawesome/free-regular-svg-icons";

const Ratings = ({ rate }) => {
  const renderStar = (rate) => {
    if (rate <= 5) {
      const arr = [];
      for (var i = 1; i <= rate; i++) {
        arr.push("1");
      }
      if (rate - Math.round(rate) !== 0) {
        arr.push("0.5");
      }
      const a = 5 - arr.length;
      if (a > 0) {
        for (var j = 0; j < a; j++) {
          arr.push("0");
        }
      }
      const list = arr.map((z, key) => {
        if (z === "1") return <FontAwesomeIcon icon={faStar} key={key} />;
        if (z === "0.5")
          return <FontAwesomeIcon icon={faStarHalfAlt} key={key} />;
        return <FontAwesomeIcon icon={stars} key={key} />;
      });
      return list;
    }
    return "";
  };
  return <span className="icon-star">
                {renderStar(rate)}
         </span>;
 
};

export default Ratings ;