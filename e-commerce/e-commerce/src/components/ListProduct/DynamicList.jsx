import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Brands from "./Brands";
import DynamicListItem from "./components/DynamicListItem";
import Ratings from "./Ratings";
import Prices from "./Prices";
import Product from "../Product/ProcductDetail";
import { useParams } from "react-router-dom";
const DynamicList = () => {
  const [data, setdatas] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:3001/products")
    .then((res) => res.json())
    .then((datas) => {
      setdatas(datas);
    });
  }, []);

  const [menu, setMenu] = useState([
    {
      name: " Appliances",
      subMenu: {
        active: false,
        sub: [
          {
            name: " Dishwashers",
            subMenu: {
              sub: [
                {
                  name: " Built-In Dishwashers",
                  value: "",
                },
              ],
            },
          },
          {
            name: "Fans",
            subMenu: {
              sub: [
                {
                  name: "Window Fans",
                },
              ],
            },
          },
          {
            name: " Cell Phone ",
            subMenu: {
              sub: [
                {
                  name: " Cell phone S",
                },
              ],
            },
          },
        ],
      },
    },

    {
      name: "Audio",
      subMenu: {
        active: false,
        sub: [
          {
            name: " Auxiliary Input Cables",
          },
          {
            name: " Cables & Chargers",
          },

          {
            name: "bb",
            subMenu: {
              sub: [
                {
                  name: "bb1",
                },
                {
                  name: "bb2",
                },
                {
                  name: "bbb",
                  subMenu: {
                    sub: [
                      {
                        name: "bbb1",
                      },
                      {
                        name: "bbb2",
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ]);

  const showList = (arr) => {
    return (
      <div>
        {arr.map((value, key) => {
          if (value.subMenu) {
            return (
              <div key={key}>
                <DynamicListItem
                  showList={(arr) => {
                    return showList(arr);
                  }}
                  value={value}
                />
              </div>
            );
          } else {
            return (
              <li key={key}>
                {/* <FontAwesomeIcon icon={faAngleRight} /> */}
                {value.name}
              </li>
            );
          }
        })}
      </div>
    );
  };

  function myRating() {}
  return (
    <div className="content-wrapper">
      <aside>
        <section>
          <div className="menu">
            <ul>{showList(menu)}</ul>
          </div>
        </section>
        <Brands />
        <div className="Ratings-title">
          <h3>Ratings</h3>
        </div>
        <Ratings rate={5} onclick="" />
        Up to 3<br />
        <Ratings rate={4} />
        Up to 10
        <br />
        <Ratings rate={3} />
        Up to 11
        <br />
        <Ratings rate={2} />
        Up to 6<br />
        <Ratings rate={1} />
        Up to 5<br />
        <Prices />
      </aside>

      <Product data={data} id={id} />
    </div>
  );
};

export default DynamicList;
