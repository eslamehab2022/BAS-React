import React, { useState } from "react";
import SystemControler from "../../../Components/System/SystemControler/SystemControler";
import { SearchComponent } from "../../../Components/SearchComponent/SearchComponent";
import { NavDropdown } from "react-bootstrap";
import { egypetUsers, saudiaUsers } from "./Chatconsts";
import Image from "../../../Components/Image";
import { Link, Outlet } from "react-router-dom";
const SatusIcon = () => {
  return (
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
  );
};
const ChatIndex = () => {
  const [country, setCountry] = useState(0);
  const [status, setStatus] = useState("");
  const selectedCountry = Boolean(country);
  const getUsersByStatus = (status) => {
    // fetch users by status
  };
  return (
    <div>
      <SystemControler />
      <div className="grid  grid-cols-4 gap-4">
        <div className=" bg-[#1E1E2D] h-[801px] p-4 rounded-[19px] ">
          <p className="text-white text-[15px]">كل المستخدمين</p>
          <div
            onClick={() => {
              setCountry(0);
            }}
            className={`country pointer p-2 my-3  border border-transparent hover:!border-[#EFAA20]  bg-[#2B2B40] w-full h-[38px] rounded-md ${
              country === 0 ? "  !border-[#EFAA20]" : "!border-transparent"
            }`}
          >
            <p className="text-[#FFFFFF]"> السعودية</p>
          </div>
          <div
            onClick={() => {
              setCountry(1);
            }}
            className={`country pointer p-2 my-3  border border-transparent hover:!border-[#EFAA20]  bg-[#2B2B40] w-full h-[38px] rounded-md ${
              country === 1
                ? " border !border-[#EFAA20]"
                : "!border-transparent"
            }`}
          >
            <p className="text-[#FFFFFF]"> مصر</p>
          </div>
        </div>
        <div className=" bg-[#1E1E2D] p-2 h-[801px] rounded-[19px] overflow-x-hidden overflow-y-auto scrollbar-none  !scrollbar-track-[transparent] !scrollbar-thin !scrollbar-thumb-[#D9D9D9] ">
          <SearchComponent className={"!w-3/4 mx-auto"} />
          <div className="my-2 flex justify-between">
            <p className="text-white text-[14px]">كل المستخدمين</p>
            <NavDropdown
              title={<SatusIcon />}
              className="fs-5 status"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item
                className="text-end  d-flex justify-content-between  align-items-center"
                onClick={() => {
                  setStatus("connected");
                }}
              >
                <span> متصل</span>
                <div className="connected" />
              </NavDropdown.Item>
              <NavDropdown.Item
                className="text-end  d-flex justify-content-between align-items-center"
                onClick={() => {
                  setStatus("notConnected");
                }}
              >
                <span>غير متصل</span>
                <div className="not-connected " />
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          {selectedCountry
            ? egypetUsers.map((user, index) => {
                return (
                  <Link
                    to={`/System/chat/egypet/${user.id}`}
                    className="my-2 p-2 pointer flex  border !border-transparent hover:!border-[#EFAA20] gap-3  mx-2"
                    key={user.id}
                  >
                    <Image
                      src={user.img}
                      alt="userimg"
                      className={"w-full h-[40px] rounded-[50%]"}
                    />

                    <div className="flex flex-col">
                      <p className="text-white">{user.name}</p>
                      <span className="text-[#565674] text-[14px]">
                        {user.email}
                      </span>
                    </div>
                  </Link>
                );
              })
            : saudiaUsers.map((user, index) => {
                return (
                  <Link
                    to={`/System/chat/saudia/${user.id}`}
                    className="my-2 p-2  pointer flex  border !border-transparent hover:!border-[#EFAA20] gap-3  mx-2"
                    key={user.id}
                  >
                    <Image
                      src={user.img}
                      alt="userimg"
                      className={
                        "w-full h-[40px] relative  rounded-[50%]"
                      }
                    />

                    <div className="flex flex-col">
                      <p className="text-white">{user.name}</p>
                      <span className="text-[#565674] text-[14px]">
                        {user.email}
                      </span>
                    </div>
                  </Link>
                );
              })}
        </div>
        <div className="col-span-2 bg-[#1E1E2D] h-[801px] rounded-[19px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ChatIndex;
