import React from "react";
import "../style.css";
import { SearchComponent } from "../../../../Components/SearchComponent/SearchComponent";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

import InsideClientPieChart from "../../../../Components/System/Clients/InsideClientChart/InsideClientPieChart";
import InsideClientLineChart from "../../../../Components/System/Clients/InsideClientChart/InsideClientLineChart";
const InsideClients = () => {
  const Clients = [
    {
      id: 1,
      name: "سلطان عبد الله",
      type: "فردى",
      path: "/System/ClintDetails/1",
    },
    {
      id: 2,
      name: "فهد عبد الرحمن",
      type: "مستسمر",
      path: "/System/ClintDetails/2",
    },
    {
      id: 3,
      name: "سعود بن حمد",
      type: "شركة",
      path: "/System/ClintDetails/3",
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-4 all-clients-search-container">
        <SearchComponent />

        <div className="d-flex justify-content-between mt-4 w-100">
          <Link to={"/System/Allclients"} className="pointer">
            <p className=" text-white px-2">كل العملاء</p>
          </Link>
          <NavDropdown
            title={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
              >
                <path
                  d="M17 0H0L6.8 7.77417V13.1487L10.2 14.7923V7.77417L17 0Z"
                  fill="#D59921"
                />
              </svg>
            }
            className="fs-5 "
          >
            <NavDropdown.Item
              className="text-end d-flex justify-content-between  align-items-center"
              href="#action/3.2"
            >
              <span> فردي</span>
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-end d-flex justify-content-between align-items-center"
              href="#action/3.3"
            >
              <span> شركه</span>
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-end d-flex justify-content-between align-items-center"
              href="#action/3.3"
            >
              <span> تجاري</span>
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-end d-flex justify-content-between align-items-center"
              href="#action/3.3"
            >
              <span> مستثمر</span>
            </NavDropdown.Item>
          </NavDropdown>
        </div>

        <div className="all-clints-search-driver inside-Search"></div>
        {Clients.map(({ id, name, type, path }) => (
          <Link to={path} key={id}>
            <div className="border !border-transparent hover:!border-[#efaa2080] p-2 mb-1">
              <p className="text-white text-sm font-medium">{name}</p>
              <p className="text-[#FFFFFF4D] text-xs font-normal">{type}</p>
            </div>
          </Link>
        ))}
          
      </div>
      <div className="col-span-8     category-client-Component">
        <div className="insideChart p-4 h-100 d-flex  justify-content-between  align-items-center flex-column">
          <div className="AllRequestsPieChartContainer w-100  d-flex flex-column align-items-center justify-content-center">
            <p className="text-white" style={{ fontSize: "24px" }}>
              الداخلي
            </p>
            <InsideClientPieChart />
          </div>
          <div className="AllRequestsLineChartContainer w-100  d-flex align-items-center justify-content-center">
            <InsideClientLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideClients;
