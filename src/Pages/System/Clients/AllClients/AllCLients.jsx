import React, { useState } from "react";
import { AllCategories } from "../../../../Components/System/AllCategories/AllCategories";
import SystemControler from "../../../../Components/System/SystemControler/SystemControler";
import { SearchComponent } from "../../../../Components/SearchComponent/SearchComponent";
import { Accordion } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const AllCLients = () => {
  const [active, setActive] = useState();
  const [insideCategories, setInsideCategories] = useState({
    design: false,
    review: false,
  });
  const [OutsideCategories, setOutsideCategories] = useState({
    design: false,
    review: false,
  });

  console.log(active);
  return (
    <section className="h-full">
      <SystemControler />
      <div className="grid grid-cols-12 gap-2 h-full">
        <div className="col-span-3 h-full">
          <AllCategories
            child={
              <div className="d-flex  flex-column   align-items-center ">
                <div className="mt-4 w-100">
                  <Link
                    className="!w-full pointer "
                    to={"/System/Clients/index"}
                  >
                    <p className=" text-white ">كل العملاء</p>
                  </Link>
                </div>

                <div className="pointer w-full mt-0">
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
                            " border border-1 rounded-md hover:!border-[transparent]  !border-[#EFAA20] "
                          }`}
                        >
                          <Link
                            className="!w-full  !text-start"
                            to={"System/Clients/Inside"}
                          >
                            الداخلي
                          </Link>

                          <MdKeyboardArrowDown size={20} />
                        </Accordion.Header>

                        <Accordion.Body>
                          <div className="tabs d-flex justify-content-center align-items-center flex-column">
                            <Link
                              onClick={() => {
                                setInsideCategories({
                                  design: true,
                                  review: false,
                                });
                              }}
                              className="!w-full "
                              to={"System/Clients/Inside/Design"}
                            >
                              <div
                                className={`tab  ${
                                  active === 0 &&
                                  insideCategories.design &&
                                  " border border-1 rounded-md hover:!border-[transparent !border-[#EFAA20]"
                                } text-end w-100`}
                              >
                                تصميم
                              </div>
                            </Link>
                            <Link
                              onClick={() => {
                                setInsideCategories({
                                  design: false,
                                  review: true,
                                });
                              }}
                              className="!w-full text-start "
                              to={"System/Clients/Inside/Review"}
                            >
                              <div
                                className={`tab  ${
                                  active === 0 && insideCategories.review
                                    ? " border border-1 rounded-md hover:!border-[transparent !border-[#EFAA20]"
                                    : "!border-transparent"
                                } text-end w-100`}
                              >
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
                          onClick={() => {
                            setActive(1);
                          }}
                          className={`  w-full  ${
                            active === 1
                              ? " border border-1 rounded-md  hover:!border-[transparent]   !border-[#EFAA20] "
                              : "!border-transparent"
                          }`}
                        >
                          <Link
                            className="!w-full !text-start "
                            to={"System/Clients/Outside"}
                          >
                            الخارجي
                          </Link>

                          <MdKeyboardArrowDown size={20} />
                        </Accordion.Header>

                        <Accordion.Body>
                          <div className="tabs d-flex justify-content-center align-items-center flex-column">
                            <Link
                              onClick={() => {
                                setOutsideCategories({
                                  design: true,
                                  review: false,
                                });
                              }}
                              className="!w-full text-start "
                              to={"System/Clients/Outside/Design"}
                            >
                              <div
                                className={`tab  ${
                                  active === 1 && OutsideCategories.design
                                    ? " border border-1 rounded-md hover:!border-[transparent !border-[#EFAA20]"
                                    : "!border-transparent"
                                } text-end w-100`}
                              >
                                تصميم
                              </div>
                            </Link>
                            <Link
                              onClick={() => {
                                setOutsideCategories({
                                  design: false,
                                  review: true,
                                });
                              }}
                              className="!w-full text-start "
                              to={"System/Clients/Outside/Review"}
                            >
                              <div
                                className={`tab  ${
                                  active === 1 && OutsideCategories.review
                                    ? " border border-1 rounded-md hover:!border-[transparent !border-[#EFAA20]"
                                    : "!border-transparent"
                                } text-end w-100`}
                              >
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
        <div className="col-span-9 h-full ">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AllCLients;
