import React from "react";
import styles from "./AllProjects.module.css";
import SystemControler from "../../../../Components/System/SystemControler/SystemControler";
import AddUserButton from "../../../../Components/System/AddUserButton/AddUserButton";
import { AllCategories } from "../../../../Components/System/AllCategories/AllCategories";
import { useContext } from "react";
import { showAddUpdateUser } from "../../../../Context/CheckAddUpdateUserVisability";
import { Accordion } from "react-bootstrap";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import AddProject from "../../../../Components/System/Projects/AddProject/AddProject";
import { useState } from "react";
import EditProject from "../../../../Components/System/Projects/EditProject/EditProject";
import { AddReportType } from "../../../../Context/AddReport";
import AddReviewReport from "../../../../Components/System/Projects/AddReviewReport/AddReviewReport";
import { useEffect } from "react";
import AddUpdateDesignReport from "../../../../Components/System/Projects/AddDesignReport/AddUpdateDesignReport";
import NestedReportMangment from "../ReportManagement/NestedReportMangment/NestedReportMangment";

const AllProjects = () => {
  const { showAddUserModel, setShowAddUserModel } =
    useContext(showAddUpdateUser);
  const [editProject, setEditProject] = useState(false);
  const [ConfirmUpdate, setConfirmUpdate] = useState(false);
  const { reportType, setReportType } = useContext(AddReportType);
  const [active, setActive] = useState();
  // handling Add project
  const [view, setView] = useState(false);
  const { pathname } = useLocation();
  const pagePath = pathname.split("/System/Projects/Main")[1];

  const handleOpen = () => {
    setView(true);
    console.log(pagePath);
  };
  const handleClose = () => {
    setView(false);
  };

  return (
    <div>
      <SystemControler
        child={
          view ? (
            <p onClick={handleClose} className="pointer text-white">
              <svg
                className="mx-3"
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
              >
                <path
                  d="M8.52681 7.88703C8.7714 7.68698 8.7714 7.31302 8.52681 7.11297L0.816557 0.806657C0.490077 0.539626 2.88033e-07 0.771911 3.0647e-07 1.19369L8.57785e-07 13.8063C8.76222e-07 14.2281 0.490078 14.4604 0.816558 14.1933L8.52681 7.88703Z"
                  fill="white"
                />
              </svg>
              <span className="main-text">إضافة جديدة</span>
              {"  "}
              <span className="text-white"> / المشاريع </span>
            </p>
          ) : (
            <button onClick={handleOpen} className="add-user-button">
              {" "}
              إضافة جديدة
            </button>
          )
        }
      />
      {view && pagePath === "/ReportManagement/DesignReports" ? (
        <AddUpdateDesignReport handleClose={handleClose} />
      ) : view && pagePath === "/ReportManagement/ReviewReports" ? (
        <AddReviewReport handleClose={handleClose} />
      ) : view ? (
        <AddProject handleClose={handleClose} />
      ) : (
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3">
            <AllCategories
              child={
                <div className="d-flex  flex-column   align-items-center ">
                  <div className="mt-4 w-100">
                    <Link
                      className="!w-full pointer"
                      to={"/System/Projects/index"}
                    >
                      <p
                        onClick={() => {
                          setActive(null);
                        }}
                        className=" text-white "
                      >
                        كل المشاريع
                      </p>
                    </Link>
                  </div>

                  <div className="pointer !w-full mt-0">
                    {" "}
                    <div className="   d-flex  justify-content-center flex-column">
                      <Accordion defaultActiveKey={null}>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header
                            className={`  ${
                              active === 0 &&
                              " border border-1 rounded-md hover:!border-[transparent]  !border-[#EFAA20] "
                            }`}
                            onClick={() => {
                              setActive(0);
                            }}
                          >
                            <Link to={"System/Projects/Main/inProgress"}>
                              مشاريع قيد التنفيذ
                            </Link>

                            <MdKeyboardArrowDown size={20} />
                          </Accordion.Header>

                          <Accordion.Body>
                            <div className="tabs !w-full d-flex justify-content-center align-items-center flex-column">
                              <Link
                                className="!w-full pointer"
                                to={"System/Projects/Main/inProgress/Design"}
                              >
                                <div className="tab  text-end !w-full">
                                  تصميم
                                </div>
                              </Link>
                              <Link
                                className="!w-full pointer"
                                to={"System/Projects/Main/inProgress/Review"}
                              >
                                <div className="tab  text-end !w-full">
                                  الاشراف علي التنفيذ
                                </div>
                              </Link>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <Accordion defaultActiveKey={null}>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header
                            className={`  ${
                              active === 1 &&
                              " border border-1 rounded-md hover:!border-[transparent]  !border-[#EFAA20] "
                            }`}
                            onClick={() => {
                              setActive(1);
                            }}
                          >
                            <Link
                              className="!w-full !text-right pointer"
                              to={"System/Projects/Main/Waiting"}
                            >
                              {" "}
                              مشاريع معلقة{" "}
                            </Link>

                            <MdKeyboardArrowDown size={20} />
                          </Accordion.Header>

                          <Accordion.Body>
                            <div className="tabs !w-full d-flex justify-content-center align-items-center flex-column">
                              <Link
                                className="!w-full pointer"
                                to={"System/Projects/Main/Waiting/Design"}
                              >
                                <div className="tab  text-end !w-full">
                                  تصميم
                                </div>
                              </Link>
                              <Link
                                className="!w-full pointer"
                                to={"System/Projects/Main/Waiting/Review"}
                              >
                                <div className="tab  text-end !w-full">
                                  الاشراف علي التنفيذ
                                </div>
                              </Link>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <Accordion defaultActiveKey={null}>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header
                            className={`  ${
                              active === 2 &&
                              " border border-1 rounded-md hover:!border-[transparent]  !border-[#EFAA20] "
                            }`}
                            onClick={() => {
                              setActive(2);
                            }}
                          >
                            <Link
                              className="!w-full pointer  !text-right"
                              to={"System/Projects/Main/Done"}
                            >
                              {" "}
                              مشاريع منتهية{" "}
                            </Link>

                            <MdKeyboardArrowDown size={20} />
                          </Accordion.Header>

                          <Accordion.Body>
                            <div className="tabs !w-full d-flex justify-content-center align-items-center flex-column">
                              <Link
                                className="!w-full pointer"
                                to={"System/Projects/Main/Done/Design"}
                              >
                                <div className="tab  text-end !w-full">
                                  تصميم
                                </div>
                              </Link>
                              <Link
                                className="!w-full pointer"
                                to={"System/Projects/Main/Done/Review"}
                              >
                                <div className="tab  text-end !w-full">
                                  الاشراف علي التنفيذ
                                </div>
                              </Link>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <Accordion defaultActiveKey={null}>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header
                            className={`  ${
                              active === 3 &&
                              " border border-1 rounded-md hover:!border-[transparent]  !border-[#EFAA20] "
                            }`}
                            onClick={() => {
                              setActive(3);
                            }}
                          >
                            <div> ادارة التقارير </div>

                            <MdKeyboardArrowDown size={20} />
                          </Accordion.Header>

                          <Accordion.Body>
                            <div className="tabs !w-full d-flex justify-content-center align-items-center flex-column">
                              <Link
                                className="!w-full pointer"
                                to={
                                  "/System/Projects/Main/ReportManagement/DesignReports"
                                }
                              >
                                <div className="tab  text-end !w-full">
                                  تصميم
                                </div>
                              </Link>
                              <Link
                                className="!w-full pointer"
                                to={
                                  "/System/Projects/Main/ReportManagement/ReviewReports"
                                }
                              >
                                <div className="tab  text-end !w-full">
                                  الاشراف علي التنفيذ
                                </div>
                              </Link>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
          <div className="col-span-9">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProjects;
