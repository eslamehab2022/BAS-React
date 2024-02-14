import React, { useMemo, useState } from "react";
import "./index.css";
import SystemControler from "../../../../Components/System/SystemControler/SystemControler";
import AddUserButton from "../../../../Components/System/AddUserButton/AddUserButton";
import { AllCategories } from "../../../../Components/System/AllCategories/AllCategories";
import { Accordion } from "react-bootstrap";
import { Link, Outlet, useLocation } from "react-router-dom";

import { SearchComponent } from "../../../../Components/SearchComponent/SearchComponent";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useContext } from "react";
import { showAddUpdateUser } from "../../../../Context/CheckAddUpdateUserVisability";

import { multiStepContext } from "../../../../Context/StepContext";
import AddRequest from "../../../../Components/System/Requests/AddRequest/AddRequest";

const AllRequests = () => {
  const { showAddUserModel, setShowAddUserModel } =
    useContext(showAddUpdateUser);
  const { setUserData, showAddRequest, setShowAdddRequest } =
    useContext(multiStepContext);
  const [active, setActive] = useState();
  const [designCategories, setDesignCategories] = useState({
    inProgress: false,
    waiting: false,
    rejected: false,
  });
  const [reviewCategories, setReviewCategories] = useState({
    inProgress: false,
    waiting: false,
    rejected: false,
  });
  const [view, setView] = useState(false);
  const { pathname } = useLocation();
  const pagePath = pathname.split("/System/Requests/")[1];
  console.log(pagePath);

  const handleOpen = () => {
    setView(true);
  };
  const handleClose = () => {
    setView(false);
  };
  const { openDesignSteps, setOpenDesignSteps } = useContext(multiStepContext);
  const { openReviewSteps, setOpenReviewSteps } = useContext(multiStepContext);
  useMemo(() => {
    if (!openDesignSteps || !openReviewSteps) {
      console.log("component should be closed ");
      setView(false);
    }
  }, [openDesignSteps, openReviewSteps]);
  return (
    <div className="all-Requests h-100">
      <SystemControler
        child={
          view ? (
            <p
              onClick={() => {
                handleClose();
                setUserData([]);
              }}
              className="pointer text-white"
            >
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
              الطلبات / <span className="main-text">إضافة جديدة</span>
            </p>
          ) : (
            <button onClick={handleOpen} className="add-user-button">
              {" "}
              إضافة جديدة
            </button>
          )
        }
      />
      <div className="grid grid-cols-12 gap-2 h-full">
        <div className="col-span-3 !h-full">
          <AllCategories
            child={
              <div className="d-flex  flex-column   align-items-center ">
                <div className="mt-4 w-100">
                  <Link
                    className="w-full"
                    onClick={() => {
                      setActive(null);
                    }}
                    to={"/System/Requests/index"}
                  >
                    <p className=" text-white ">كل الطلبات</p>
                  </Link>
                </div>

                <div className="pointer !w-full mt-0">
                  {" "}
                  <div className="   d-flex  justify-content-center flex-column">
                    <Accordion defaultActiveKey={null}>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header
                          onClick={() => {
                            setActive(0);
                          }}
                          className={`  ${
                            active === 0 &&
                            " border border-1 rounded-md hover:!border-[transparent]  !border-[#EFAA20]  flex justify-between"
                          }`}
                        >
                          <Link
                            className="!w-full !text-right"
                            to={"System/Requests/Design"}
                          >
                            تصميم
                          </Link>

                          <MdKeyboardArrowDown size={20} />
                        </Accordion.Header>

                        <Accordion.Body>
                          <div className="tabs d-flex justify-content-center align-items-center flex-column">
                            <Link
                              className="w-full"
                              to={"System/Requests/Design/inProgress"}
                            >
                              <div
                                onClick={() => {
                                  setDesignCategories({
                                    inProgress: true,
                                    waiting: false,
                                    rejected: false,
                                  });
                                }}
                                className={`tab ${
                                  active === 0 &&
                                  designCategories.inProgress &&
                                  "border border-1 rounded-md hover:!border-[transparent]  !border-[#EFAA20] "
                                } text-end w-100`}
                              >
                                طلبات قيد التنفيذ
                              </div>
                            </Link>
                            <Link
                              className="w-full"
                              to={"System/Requests/Design/pending"}
                            >
                              <div
                                onClick={() => {
                                  setDesignCategories({
                                    inProgress: false,
                                    waiting: true,
                                    rejected: false,
                                  });
                                }}
                                className={`tab ${
                                  active === 0 &&
                                  designCategories.waiting &&
                                  "border border-1 rounded-md hover:!border-[transparent]  !border-[#EFAA20] "
                                } text-end w-100`}
                              >
                                طلبات في انتظار الموافقة
                              </div>
                            </Link>
                            <Link
                              className="w-full"
                              to={"System/Requests/Design/rejected"}
                            >
                              <div
                                onClick={() => {
                                  setDesignCategories({
                                    inProgress: false,
                                    waiting: false,
                                    rejected: true,
                                  });
                                }}
                                className={`tab ${
                                  active === 0 &&
                                  designCategories.rejected &&
                                  "border border-1 rounded-md hover:!border-[transparent]  !border-[#EFAA20] "
                                } text-end w-100`}
                              >
                                طلبات مرفوضة
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
                            className="!w-full !text-right"
                            to={"System/Requests/Review"}
                          >
                            {" "}
                            اشراف علي التنفيذ
                          </Link>

                          <MdKeyboardArrowDown size={20} />
                        </Accordion.Header>

                        <Accordion.Body>
                          <div className="tabs d-flex justify-content-center align-items-center flex-column">
                            <Link
                              className="w-full"
                              to={"System/Requests/Review/inProgress"}
                            >
                              <div
                                onClick={() => {
                                  setReviewCategories({
                                    inProgress: true,
                                    waiting: false,
                                    rejected: false,
                                  });
                                }}
                                className={`tab ${
                                  active === 1 &&
                                  reviewCategories.inProgress &&
                                  "border border-1 rounded-md hover:!border-[transparent]  !border-[#EFAA20] "
                                } text-end w-100`}
                              >
                                طلبات قيد التنفيذ
                              </div>
                            </Link>
                            <Link
                              className="w-full"
                              to={"System/Requests/Review/pending"}
                            >
                              <div
                                onClick={() => {
                                  setReviewCategories({
                                    inProgress: false,
                                    waiting: true,
                                    rejected: false,
                                  });
                                }}
                                className={`tab ${
                                  active === 1 &&
                                  reviewCategories.waiting &&
                                  "border border-1 rounded-md hover:!border-[transparent]  !border-[#EFAA20] "
                                } text-end w-100`}
                              >
                                طلبات في انتظار الموافقة
                              </div>
                            </Link>
                            <Link
                              className="w-full"
                              to={"System/Requests/Review/rejected"}
                            >
                              <div
                                onClick={() => {
                                  setReviewCategories({
                                    inProgress: false,
                                    waiting: false,
                                    rejected: true,
                                  });
                                }}
                                className={`tab ${
                                  active === 1 &&
                                  reviewCategories.rejected &&
                                  "border border-1 rounded-md hover:!border-[transparent]  !border-[#EFAA20] "
                                } text-end w-100`}
                              >
                                طلبات مرفوضة
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
        <div className="col-span-9 h-full">
          {view ? <AddRequest /> : <Outlet />}
        </div>
      </div>
    </div>
  );
};

export default AllRequests;
