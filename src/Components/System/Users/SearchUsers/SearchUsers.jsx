import React, { useEffect, useState } from "react";

import { NavDropdown } from "react-bootstrap";
import "./index.css";
import { SearchComponent } from "../../../SearchComponent/SearchComponent";
import Image from "../../../Image";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllUsers } from "../../../../helper/fetchers/Users";
import Progress from "../../../Progress";
import { defaultImage } from "../../../../Config/Config";
const SearchUsers = () => {
  const [users, setUsers] = useState();

  const getUsers = async () => {
    try {
      const { data } = await getAllUsers();
      console.log(data);
      if (data?.allUsers) {
        setUsers(data.allUsers);
      } else {
        console.log("Data retrieval failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="search-users scrollbar-none p-0">
      <div className="d-flex justify-content-between align-items-center m-2">
        <p className="text-center my-3 text-white   ">كل الموظفين</p>
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
          className="    fs-5 "
          id="collapsible-nav-dropdown"
        >
          <NavDropdown.Item
            className="text-end  d-flex justify-content-between  align-items-center"
            href="#action/3.2"
          >
            <span> متصل</span>
            <div className="connected" />
          </NavDropdown.Item>
          <NavDropdown.Item
            className="text-end  d-flex justify-content-between align-items-center"
            href="#action/3.3"
          >
            <span>غير متصل</span>
            <div className="not-connected " />
          </NavDropdown.Item>
        </NavDropdown>
      </div>
      {users ? (
        users.map(({ email, firstName, _id, image }, index) => (
          <Link
            to={`/System/Hr/Users/${_id}`}
            key={index}
            className="tab flex mb-1 p-2 border !border-transparent hover:!border-[#EFAA20]"
          >
            <Image
              src={image ? image : defaultImage}
              alt="user img "
              className="user-img  "
            />
            <div className="d-flex flex-column me-3 ">
              <h2 className="text-white text-base font-medium">{firstName} </h2>
              <p className="text-white/30 text-sm font-normal">{email}</p>
            </div>
          </Link>
        ))
      ) : (
        <Progress />
      )}
    </div>
  );
};

export default SearchUsers;
