import React from "react";
import Input from "../../../FormHandler/Input";
import { NavDropdown } from "react-bootstrap";
import "./index.css";
import { Link } from "react-router-dom";
import Image from "../../../Image";
import { SearchComponent } from '../../../SearchComponent/SearchComponent'

const SearchCountryUsers = () => {
  const users = Array.from({ length: 15 });
  return (
    <div>
      <div className="search-users  overflow-x-hidden overflow-y-scroll scrollbar-none">
        <div className="d-flex   justify-content-center">
          <SearchComponent /> 
        </div>

        <div className="d-flex w-100 align-items-center justify-content-between m-2">
          <p className="text-center  text-white">كل المستخدمين</p>
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
        {users.map((user, index) => (
          <Link to="/system/users/1" key={index}>
            <div className="tab !mb-3 flex  border !border-transparent hover:!border-[#efaa20] p-1 ">
              <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={process.env.PUBLIC_URL + "/People/habeeb.jpg"}
                alt="user img"
                className="object-cover"
              />
              </div>
              <div className="d-flex flex-column me-3 ">
                <h2 className=" name-header text-white         ">
              حبيب نصر
                </h2>
                <p className="main-text text-sm">habeeb@bsa.com</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchCountryUsers;
