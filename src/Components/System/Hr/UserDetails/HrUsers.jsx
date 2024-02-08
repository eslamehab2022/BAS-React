import React, { useContext, useState } from "react";
import "./HrUsers.css";

import Select from "../../../FormHandler/Select";
import Input from "../../../FormHandler/Input";
import { Button, Modal, NavDropdown } from "react-bootstrap";
import Genralnformation from "../../Users/Genralnformation/Genralnformation";
import { AccountaingInformation } from "../../Users/AccountaingInformation/AccountaingInformation";

import { showAddUpdateUser } from "../../../../Context/CheckAddUpdateUserVisability";
import AddUpdateUser from "../../Users/AddUpdateUser/AddUpdateUser";
import AddUserButton from "../../AddUserButton/AddUserButton";
import { Link } from "react-router-dom";
import SystemControler from "../../SystemControler/SystemControler";
import AllUserCategories from "../../Users/AllUserCategories/AllUserCategories";
import SearchUsers from "../../Users/SearchUsers/SearchUsers";
import ProfessinollInformation from "../../Users/ProfessinollInformation/ProfessinollInformation";
import { AddHrType } from "../../../../Context/AddHr";
import Image from "../../../Image";
import CustomModal from "../../../Modals/CustomModal";
import SuccessfullModal from "../../../Modals/SuccessfullModal";
import UpdatePassword from "../../../Modals/UpdatePassword";
import DownloadButton from "../../../Buttons/DownloadButton";

const HrUsers = () => {
  const [employeeDetails, setEmployeeDetails] = useState("عن الموظف");
  const [editUser, setEditUser] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [upgradeUser, setUpgradeUser] = useState(false);
  const [successfull, setSuccsesfull] = useState(false);
  const [message, setMessage] = useState("");
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
  const handleDelete = (arr, id) => {
    // const filtedData = arr.filter((prev) => {
    //   return prev.id !== id;
    // });
    // return filtedData
    setDeleteUser(false);
    setMessage("تم الحذف بنجاح ");
    setSuccsesfull(true);
  };
  const handleUpgrade = () => {
    setUpgradeUser(false);
    setMessage("تم تحديث كلمة السر بنجاح");
    setSuccsesfull(true);
  };
  return (
    <div className="Users-component   w-100    text-white ">
      <CustomModal
        title="التاكيد"
        show={deleteUser}
        message={"هل انت متاكد من الحذف"}
        handleSave={handleDelete}
        handleClose={() => {
          setDeleteUser(false);
        }}
      />
      <UpdatePassword show={upgradeUser} handleSave={handleUpgrade} />
      <SuccessfullModal
        show={successfull}
        message={message}
        handleClose={() => {
          setSuccsesfull(false);
        }}
      />
      <div
        style={{
          border: "1px solid #EFAA20 !important",
        }}
      >
        {editUser ? (
          <AddUpdateUser setOpenModal={setEditUser} id={"12"} />
        ) : (
          <div className="row">
            <div className="col-md-3">
              <SearchUsers />
            </div>

            <div className="col-md-9">
              <div className="show-employee py-4 px-2 w-100 ">
                <div className="show-employee-header  ">
                  <div className="d-flex justify-content-between">
                    <p className="golden">مدير قسم / البرمجة</p>
                    <div>
                      <DownloadButton>تصدير CSV </DownloadButton>
                      <DownloadButton> تصدير Excel </DownloadButton>
                    </div>
                  </div>
                  <div className="flex justify-between gap-3 ">
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

                    <div className="flex gap-1">
                      <div className="d-flex align-items-center ">
                        <Image
                          onClick={() => {
                            setUpgradeUser(true);
                          }}
                          src={`${
                            process.env.PUBLIC_URL + "/icons/update.png"
                          }`}
                          alt="user Image "
                          className="action-buttons  "
                        />
                      </div>
                      <div className="d-flex align-items-center ">
                        <Image
                          onClick={() => {
                            setEditUser(true);
                          }}
                          src={`${process.env.PUBLIC_URL + "/icons/edit.png"}`}
                          alt="user Image "
                          className="action-buttons  "
                        />
                      </div>
                      <div className="d-flex align-items-center ">
                        <Image
                          onClick={() => {
                            setDeleteUser(true);
                          }}
                          src={`${
                            process.env.PUBLIC_URL + "/icons/delete.png"
                          }`}
                          alt="user Image "
                          className="action-buttons  "
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main-text choose-inf position-relative d-flex justify-content-between mx-5 my-3">
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
                      employeeDetails === "ProfessinollInformation" &&
                      "inf-type"
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
        )}
      </div>
    </div>
  );
};

export default HrUsers;
