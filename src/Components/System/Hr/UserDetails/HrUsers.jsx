import React, { useContext, useEffect, useState } from "react";
import "./HrUsers.css";

import Select from "../../../FormHandler/Select";
import Input from "../../../FormHandler/Input";
import { Button, Modal, NavDropdown } from "react-bootstrap";
import Genralnformation from "../../Users/Genralnformation/Genralnformation";
import { AccountaingInformation } from "../../Users/AccountaingInformation/AccountaingInformation";

import { showAddUpdateUser } from "../../../../Context/CheckAddUpdateUserVisability";
import AddUpdateUser from "../../Users/AddUpdateUser/AddUpdateUser";
import AddUserButton from "../../AddUserButton/AddUserButton";
import { Link, useParams } from "react-router-dom";
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
import { deleteUserByID, getUserById } from "../../../../helper/fetchers/Users";
import { toast } from "react-toastify";
import Progress from "../../../Progress";
import { defaultImage } from "../../../../Config/Config";

const HrUsers = () => {
  const [employeeDetails, setEmployeeDetails] = useState("aboutEmpolyee");
  const [editUser, setEditUser] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [upgradeUser, setUpgradeUser] = useState(false);
  const [successfull, setSuccsesfull] = useState(false);
  const [message, setMessage] = useState("");
  const { id } = useParams();
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
  const handleDelete = async () => {
    try {
      const res = await deleteUserByID(id);
      console.log(res);

      if (res.status === 204) {
        setDeleteUser(false);
        setMessage("تم الحذف بنجاح ");
        setSuccsesfull(true);
      } else {
        console.log("Data retrieval failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };


  const [user, setUser] = useState(null);
  const getUserWithID = async () => {
    try {
      const { data } = await getUserById(id);
      console.log(data);

      if (data?.user) {
        setUser(data?.user);
      } else {
        console.log("Data retrieval failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getUserWithID();
  }, [id]);
  return (
    <div className="Users-component   w-100    text-white ">
      <CustomModal
        title="التاكيد"
        show={deleteUser}
        message={"هل انت متاكد من الحذف"}
        handleSave={handleDelete}
        handleClose={() => setDeleteUser(false)}
      />
      <UpdatePassword id={id} show={upgradeUser} 
       handleClose={()=> setUpgradeUser(false)}
       setSuccsesfull={setSuccsesfull}
       setMessage={setMessage}
      />
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
          <AddUpdateUser setOpenModal={setEditUser} id={id} />
        ) : (
          <div className="grid grid-cols-12 gap-2 ">
            <div className="col-span-4">
              <SearchUsers />
            </div>

            <div className="col-span-8">
              <div className="show-employee !scrollbar-none py-4 px-2 w-100 ">
                {user ? (
                  <>
                    <div className="show-employee-header  ">
                      <div className="d-flex justify-content-between">
                        <p className="golden"> {user.role} </p>
                        <div className="flex gap-3">
                          <DownloadButton>تصدير CSV </DownloadButton>
                          <DownloadButton> تصدير Excel </DownloadButton>
                        </div>
                      </div>
                      <div className="flex justify-between gap-3 ">
                        <div className="tab d-flex   ">
                          <Image
                            src={user.image ? user.image : defaultImage}
                            alt="user Image "
                            className="user-Personal  "
                          />
                          <div className="d-flex flex-column me-3 ">
                            <h2 className=" name-header     my-0    ">
                              {" "}
                              اسلام
                            </h2>
                            <p className="main-text  my-0   ">{user.email}</p>
                            <p className=" name-header my-0    ">
                              {user.phone}
                            </p>
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
                              src={`${
                                process.env.PUBLIC_URL + "/icons/edit.png"
                              }`}
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

                    <div className="main-text choose-inf relative flex px-3 my-3">
                      <p
                        className={`genral-inf flex-1 text-center py-2 border-b-2 ${
                          employeeDetails === "aboutEmpolyee"
                            ? "inf-type !border-[#D59921]"
                            : "!border-white/30"
                        }`}
                        onClick={() => {
                          setEmployeeDetails("aboutEmpolyee");
                        }}
                      >
                        {" "}
                        عن الموظف
                      </p>
                      <p
                        className={`genral-inf flex-1 text-center py-2 border-b-2 ${
                          employeeDetails === "ProfessinollInformation"
                            ? "inf-type !border-[#D59921]"
                            : "!border-white/30"
                        }`}
                        onClick={() => {
                          setEmployeeDetails("ProfessinollInformation");
                        }}
                      >
                        معلومات مهنية
                      </p>
                      <p
                        className={`genral-inf flex-1 text-center py-2 border-b-2 ${
                          employeeDetails === "AccountaingInformation"
                            ? "inf-type !border-[#D59921]"
                            : "!border-white/30"
                        }`}
                        onClick={() => {
                          setEmployeeDetails("AccountaingInformation");
                        }}
                      >
                        معلومات الراتب{" "}
                      </p>
                    </div>
                    {employeeDetails === "aboutEmpolyee" ? (
                      <Genralnformation user={user} />
                    ) : employeeDetails === "ProfessinollInformation" ? (
                      <ProfessinollInformation user={user} />
                    ) : (
                      <AccountaingInformation user={user} />
                    )}
                  </>
                ) : (
                  <Progress />
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
