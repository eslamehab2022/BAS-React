

import React, { useEffect, useState } from "react";
import SystemControler from "../../../../Components/System/SystemControler/SystemControler";
import { SearchComponent } from "../../../../Components/SearchComponent/SearchComponent";
import { NavDropdown } from "react-bootstrap";
import { egypetUsers, saudiaUsers } from "../Chatconsts";
import Image from "../../../../Components/Image";
import { Link, Outlet, useLocation, useSearchParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

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
const ConnectedBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const NotConnectedBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#FF0000",
    color: "#FF0000",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ChatIndex = () => {
  const [country, setCountry] = useState(0);
  let [usersStatus, setUsersSatus] = useSearchParams("");
  usersStatus = String(usersStatus)?.slice(0, -1);
  const [filtredUsers, setFiltredUsers] = useState(null);

  useEffect(() => {
    // Filter users based on the selected country and status
    const filterUsers = () => {
      if (country === 0) {
        // If Saudi Arabia is selected
        setFiltredUsers(
          saudiaUsers.filter((user) => user.status === usersStatus)
        );
      } else if (country === 1) {
        // If Egypt is selected
        setFiltredUsers(
          egypetUsers.filter((user) => user.status === usersStatus)
        );
      }
    };

    filterUsers();
  }, [country, usersStatus]);



  return (
    <div>
      <SystemControler />
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-[#1E1E2D] h-[801px] p-2 rounded-[19px]">
          <p className="text-white mt-2 text-[15px]">كل المستخدمين</p>
          <div
            onClick={() => {
              setCountry(0);
            }}
            className={`country pointer p-2 my-3 border border-transparent hover:!border-[#EFAA20] bg-[#2B2B40] w-full h-[38px] rounded-md ${
              country === 0 ? " !border-[#EFAA20]" : "!border-transparent"
            }`}
          >
            <p className="text-[#FFFFFF]"> السعودية</p>
          </div>
          <div
            onClick={() => {
              setCountry(1);
            }}
            className={`country pointer p-2 my-3 border border-transparent hover:!border-[#EFAA20] bg-[#2B2B40] w-full h-[38px] rounded-md ${
              country === 1
                ? " border !border-[#EFAA20]"
                : "!border-transparent"
            }`}
          >
            <p className="text-[#FFFFFF]"> مصر</p>
          </div>
        </div>
        <div className="bg-[#1E1E2D] p-2 h-[801px] rounded-[19px] overflow-x-hidden overflow-y-auto scrollbar-none !scrollbar-track-[transparent] !scrollbar-thin !scrollbar-thumb-[#D9D9D9]">
          <SearchComponent className={"!w-3/4 mx-auto"} />
          <div className="my-2 flex justify-between">
            <p
              onClick={() => {
                setUsersSatus("");
              }}
              className="text-white pointer text-[14px]"
            >
              كل المستخدمين
            </p>
            <NavDropdown
              title={<SatusIcon />}
              className="fs-5 status"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item
                onClick={() => {
                  setUsersSatus("connected");
                }}
                className="text-end d-flex justify-content-between align-items-center"
              >
                <span> متصل</span>
                <div className="connected" />
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setUsersSatus("notConnected");
                }}
                className="text-end d-flex justify-content-between align-items-center"
              >
                <span>غير متصل</span>
                <div className="not-connected " />
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          {usersStatus === "" ? (
            <>
              {(country ? egypetUsers : saudiaUsers).map((user, index) => (
                <Link
                  to={`/System/chat/${user.country}/${
                    user.id
                  }`}
                  className="my-2 p-2 pointer flex border !border-transparent hover:!border-[#EFAA20] gap-3 mx-2"
                  key={user.id}
                >
                  <Stack direction="row" spacing={2}>
                    {user.status === "connected" ? (
                      <ConnectedBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        variant="dot"
                      >
                        <Avatar alt="Remy Sharp" src={user.img} />
                      </ConnectedBadge>
                    ) : (
                      <NotConnectedBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        variant="dot"
                      >
                        <Avatar alt="Remy Sharp" src={user.img} />
                      </NotConnectedBadge>
                    )}
                  </Stack>
                  <div className="flex flex-col">
                    <p className="text-white">{user.name}</p>
                    <span className="text-[#565674] text-[14px]">
                      {user.email}
                    </span>
                  </div>
                </Link>
              ))}
            </>
          ) : (
            <>
              {filtredUsers && filtredUsers.length > 0 ? (
                filtredUsers.map((user, index) => (
                  <Link
                    to={`/System/chat/${user.country}/${
                      user.id
                    }`}
                    className="my-2 p-2 pointer flex border !border-transparent hover:!border-[#EFAA20] gap-3 mx-2"
                    key={user.id}
                  >
                    <Stack direction="row" spacing={2}>
                      {user.status === "connected" ? (
                        <ConnectedBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar alt="Remy Sharp" src={user.img} />
                        </ConnectedBadge>
                      ) : (
                        <NotConnectedBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar alt="Remy Sharp" src={user.img} />
                        </NotConnectedBadge>
                      )}
                    </Stack>
                    <div className="flex flex-col">
                      <p className="text-white">{user.name}</p>
                      <span className="text-[#565674] text-[14px]">
                        {user.email}
                      </span>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-white text-center">
                  لا يوجد مستخدمين مطابقين
                </p>
              )}
            </>
          )}
  
        </div>
        <div className="col-span-2 bg-[#1E1E2D] h-[801px] rounded-[19px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ChatIndex;
