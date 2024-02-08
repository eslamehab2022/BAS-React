import React, { useContext, useState } from "react";
import "./SystemUsers.css";

import Select from "../../../../Components/FormHandler/Select";
import Input from "../../../../Components/FormHandler/Input";
import { Button, Modal, NavDropdown } from "react-bootstrap";
import Genralnformation from "../../../../Components/System/Users/Genralnformation/Genralnformation";
import { AccountaingInformation } from "../../../../Components/System/Users/AccountaingInformation/AccountaingInformation";

import { showAddUpdateUser } from "../../../../Context/CheckAddUpdateUserVisability";
import AddUpdateUser from "../../../../Components/System/Users/AddUpdateUser/AddUpdateUser";
import AddUserButton from "../../../../Components/System/AddUserButton/AddUserButton";
import { Link } from "react-router-dom";
import SystemControler from "../../../../Components/System/SystemControler/SystemControler";
import AllUserCategories from "../../../../Components/System/Users/AllUserCategories/AllUserCategories";
import SearchUsers from "../../../../Components/System/Users/SearchUsers/SearchUsers";
import ProfessinollInformation from "../../../../Components/System/Users/ProfessinollInformation/ProfessinollInformation";
import { AddHrType } from "../../../../Context/AddHr";
import Image from "../../../../Components/Image";
import DownloadButton from "../../../../Components/Buttons/DownloadButton";

const SystemUsers = () => {
  const [employeeDetails, setEmployeeDetails] = useState("عن الموظف");

  const handleGetUserDetails = () => {};

  const colourStyles = {
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "rgba(255, 255, 255, 0.50)",
      };
    },
    control: (styles) => ({
      ...styles,
      backgroundColor: "#2B2B40",
      border: "unset",
      color: "rgba(255, 255, 255, 0.50);",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,

        color: "rgba(255, 255, 255, 0.50);",
        backgroundColor: "#2B2B40",
        border: "none ",
      };
    },
  };
  return (
    <div className="Users-component   w-100    text-white ">
      <div
        style={{
          border: "1px solid #EFAA20 !important",
        }}
      >
        <SystemControler />

        <div className="grid grid-cols-2 gap-3">
          <div className="">
            <div className="grid grid-cols-2 gap-3">
              <div className="">
                <AllUserCategories />
              </div>
              <div className="">
                <SearchUsers />
              </div>
            </div>
          </div>

          <div className="">
            <div className="show-employee py-4 px-2 w-100 scrollbar-none ">
              <div className="show-employee-header">
                <div className="d-flex justify-content-between">
                  <p className="text-[#D59921] mb-5 font-medium">مدير قسم / البرمجة</p>
                  <div className="flex gap-1">
                    <DownloadButton>تصدير CSV </DownloadButton>
                    <DownloadButton> تصدير Excel </DownloadButton>
                  </div>
                </div>
                <div className="d-flex justify-content-between w-100">
                  <div className="tab d-flex   ">
                    <Image
                      src={`${process.env.PUBLIC_URL + "/People/islam.jpg"}`}
                      alt="user Image "
                      className="user-Personal  "
                    />
                    <div className="d-flex flex-column me-3 ">
                      <h2 className=" name-header     my-0    "> اسلام</h2>
                      <p className="main-text  my-0   ">islam@bsa.com</p>
                      <p className=" name-header my-0    ">01023456789</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center ">
                    <Image
                      src={`${process.env.PUBLIC_URL + "/icons/more.png"}`}
                      alt="user Image "
                      className="action-buttons  "
                    />
                  </div>
                </div>
              </div>

              <div className="main-text choose-inf position-relative d-flex justify-content-between  my-3">
                <p
                  className={`genral-inf ${
                    employeeDetails === "عن الموظف" && "inf-type"
                  }`}
                  onClick={() => {
                    setEmployeeDetails("aboutEmpolyee");
                  }}
                >
                  {" "}
                  عن الموظف
                </p>
                <p
                  className={`genral-inf ${
                    employeeDetails === "ProfessinollInformation" && "inf-type"
                  }`}
                  onClick={() => {
                    setEmployeeDetails("ProfessinollInformation");
                  }}
                >
                  معلومات مهنية
                </p>
                <p
                  className={`genral-inf ${
                    employeeDetails === "AccountaingInformation" && "inf-type"
                  }`}
                  onClick={() => {
                    setEmployeeDetails("AccountaingInformation");
                  }}
                >
                  معلومات الراتب{" "}
                </p>
              </div>
              {employeeDetails === "aboutEmpolyee" ? (
                <Genralnformation />
              ) : employeeDetails === "ProfessinollInformation" ? (
                <ProfessinollInformation />
              ) : (
                <AccountaingInformation />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemUsers;
