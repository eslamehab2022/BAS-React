import React, { useContext } from "react";
import SystemControler from "../../../../Components/System/SystemControler/SystemControler";
import { AllCategories } from "../../../../Components/System/AllCategories/AllCategories";
import { Accordion, Button } from "react-bootstrap";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { AddHrType } from "../../../../Context/AddHr";
import { useState } from "react";

const HrIndex = () => {
  const { openHr, setOpenHr } = useContext(AddHrType);
  const [active, setActive] = useState();
  const [allEmployees, setAllEmplyees] = useState(false);
  return (
    <div>
      <SystemControler
        child={
          <Button
            className="add-user-button"
            onClick={() => {
              setOpenHr(true);
            }}
          >
            إضافة جديدة
          </Button>
        }
      />
      <div className="row">
        <div className="col-md-3">
          <AllCategories
            child={
              <>
                <Accordion className="!w-full" defaultActiveKey={null}>
                  <div className="py-3">
                    <h2 className="text-white text-center">الموارد البشرية</h2>
                  </div>

                  <Accordion.Item eventKey="0">
                    <Link to={"/System/Hr/EmployeesManagment"}>
                      <Accordion.Header
                        onClick={() => {
                          setActive(0);
                        }}
                        className={`   border  rounded-md hover:!border-[#EFAA20] ${
                          active === 0
                            ? " !border-[#EFAA20]  "
                            : "!border-transparent"
                        }      pointer`}
                      >
                        <p> إدارة الموظفين</p>

                        <MdKeyboardArrowDown size={20} />
                      </Accordion.Header>
                    </Link>
                    <Accordion.Body>
                      <div className="tabs d-flex justify-content-center align-items-center flex-column">
                        <Link to={"/System/Hr/Employees/Saudia"}>
                          <div className="w-100">
                            <div
                              onClick={() => {
                                setAllEmplyees(true);
                              }}
                              className={` tab  text-end w-100  border  rounded-md hover:!border-[#EFAA20] ${
                                active === 0 && allEmployees
                                  ? " !border-[#EFAA20]  "
                                  : "!border-transparent"
                              }      pointer`}
                            >
                              <span>كل الموظفين</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey={true}></Accordion>

                <div className="tabs d-flex justify-content-center align-items-center flex-column">
                  <div className="w-100"></div>
                  <div className="w-100">
                    <Link to={"/System/Hr/HolidayMangment"}>
                      <div 
                      onClick={() => {
                        setAllEmplyees(false);
                        setActive(1)
                      }}
                      className={` tab  text-end w-100  border  rounded-md hover:!border-[#EFAA20] ${
                        active === 1 
                          ? " !border-[#EFAA20]  "
                          : "!border-transparent"
                      }      pointer`}
                      
                      >
                        <span>إدارة الاجازات</span>
                      </div>
                    </Link>
                  </div>
                  <div className="w-100">
                    <Link to={"/System/Hr/EmployeesServices"}>
                      <div 
                        onClick={() => {
                            setAllEmplyees(false);
                            setActive(2)
                          }}
                          className={` tab  text-end w-100  border  rounded-md hover:!border-[#EFAA20] ${
                            active === 2 
                              ? " !border-[#EFAA20]  "
                              : "!border-transparent"
                          }      pointer`}
                          
                      
                      >
                        <span>خدمات الموظفين</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            }
          />
        </div>
        <div className="col-md-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HrIndex;
