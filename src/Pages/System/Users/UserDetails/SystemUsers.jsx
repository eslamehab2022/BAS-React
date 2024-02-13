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
  const [employeeDetails, setEmployeeDetails] = useState("aboutEmpolyee");

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
                  <p className="text-[#D59921] mb-5 font-medium">
                    مدير قسم / البرمجة
                  </p>
                  <div className="flex gap-3">
                    <DownloadButton>تصدير CSV </DownloadButton>
                    <DownloadButton> تصدير Excel </DownloadButton>
                  </div>
                </div>
                <div className="d-flex justify-content-between w-100 px-3">
                  <div className="tab d-flex   ">
                    <Image
                      src={`${process.env.PUBLIC_URL + "/People/islam.jpg"}`}
                      alt="user Image "
                      className="user-Personal  "
                    />
                    <div className="flex flex-col gap-2 me-3 ">
                      <h2 className="name-header"> اسلام</h2>
                      <p className="main-text">islam@bsa.com</p>
                      <p className="name-header">01023456789</p>
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

              <div className="choose-inf main-text relative flex px-3 mb-3">
                <p
                  className={`genral-inf text-center border-b-2 flex-1 py-3 ${
                    employeeDetails === "aboutEmpolyee" ? "inf-type !border-[#D59921]": "!border-white/30"
                  }`}
                  onClick={() => {
                    setEmployeeDetails("aboutEmpolyee");
                  }}
                >
                  {" "}
                  عن الموظف
                </p>
                <p
                  className={`genral-inf text-center border-b-2 flex-1 py-3 ${
                    employeeDetails === "ProfessinollInformation" ? "inf-type !border-[#D59921]": "!border-white/30"
                  }`}
                  onClick={() => {
                    setEmployeeDetails("ProfessinollInformation");
                  }}
                >
                  معلومات مهنية
                </p>
                <p
                  className={`genral-inf text-center border-b-2  flex-1 py-3 ${
                    employeeDetails === "AccountaingInformation" ? "inf-type !border-[#D59921]": "!border-white/30"
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
