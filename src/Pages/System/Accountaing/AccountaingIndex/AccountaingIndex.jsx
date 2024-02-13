import React, { useState } from "react";
import { AllCategories } from "../../../../Components/System/AllCategories/AllCategories";
import SystemControler from "../../../../Components/System/SystemControler/SystemControler";
import { Accordion, Button } from "react-bootstrap";
import { Checkbox } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import style from "./AccountaingIndex.module.css";
import "./accountaingStyle.css";
import { useContext } from "react";
import { addAccountType } from "../../../../Context/AddAccountaing";

const AccountaingIndex = () => {
  const {
    accountaingType,
    setAccountaingType,
    openAddAccountant,
    setOpenAddAccountant,
  } = useContext(addAccountType);
  const [active, setActive] = useState(null);
  const [RevenuesCategory, setRevenuesCategories] = useState({
    FinancialClaims: false,
    Invoice: false,
  });
  const [ExpensesCategory, setExpensesCategories] = useState({
    ExpensesReports: false,
    Items: false,
  });
  return (
    <div className="AccountaingIndex   ">
      <SystemControler
        child={
          <Button
            className="add-user-button"
            onClick={() => {
              setOpenAddAccountant(true);
            }}
          >
            إضافة جديدة
          </Button>
        }
      />
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-3">
          <AllCategories
            child={
              <div>
                <Link
                  onClick={() => {
                    setActive(null);
                  }}
                  to="/System/Accounating/index"
                >
                  {" "}
                  <h2 className="mx-2 text-white my-3">الخزينة</h2>
                </Link>
                <Accordion defaultActiveKey={null}>
                  <Accordion.Item eventKey="0">
                    <Link className="w-100" to={"/System/Accounating/Revenues"}>
                      <Accordion.Header
                        onClick={() => {
                          setActive(0);
                        }}
                        className={`w-full  border  pointer   flex justify-between  ${
                          active === 0
                            ? " !border-[#EFAA20] rounded-md hover:!border-transparent "
                            : "!border-transparent"
                        }  `}
                      >
                        <p> الايرادات</p>
                        <MdKeyboardArrowDown size={20} />
                      </Accordion.Header>
                    </Link>

                    <Accordion.Body>
                      <div className="tabs d-flex justify-content-center align-items-center flex-column">
                        <div className="w-100">
                          <Link
                            to={"System/Accounating/Revenues/FinancialClaims"}
                          >
                            <div
                              onClick={() => {
                                setRevenuesCategories({
                                  FinancialClaims: true,
                                  Invoice: false,
                                });
                              }}
                              className={`tab  text-end  w-full  border   pointer   flex justify-between  ${
                                active === 0 && RevenuesCategory.FinancialClaims
                                  ? " !border-[#EFAA20]  rounded-md hover:!border-transparent "
                                  : "!border-transparent"
                              }  `}
                            >
                              <span> المطالبة مالية</span>
                            </div>
                          </Link>
                        </div>
                        <div className="w-100">
                          <Link to={"System/Accounating/Revenues/Invoice"}>
                            <div
                              onClick={() => {
                                setRevenuesCategories({
                                  FinancialClaims: false,
                                  Invoice: true,
                                });
                              }}
                              className={`tab  text-end  w-full  border   pointer   flex justify-between  ${
                                active === 0 && RevenuesCategory.Invoice
                                  ? " !border-[#EFAA20]  rounded-md hover:!border-transparent "
                                  : "!border-transparent"
                              }  `}
                            >
                              <span>الفواتير</span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey={null}>
                  <Accordion.Item eventKey="0">
                    <Link to={"System/Accounating/Expenses"}>
                      <Accordion.Header
                        onClick={() => {
                          setActive(1);
                        }}
                        className={`  w-full  border   pointer   flex justify-between  ${
                          active === 1
                            ? " !border-[#EFAA20]  rounded-md hover:!border-transparent "
                            : "!border-transparent"
                        }  `}
                      >
                        <p>المصروفات </p>

                        <MdKeyboardArrowDown size={20} />
                      </Accordion.Header>
                    </Link>

                    <Accordion.Body>
                      <div className="tabs d-flex justify-content-center align-items-center flex-column">
                        <Link
                          to={"System/Accounating/Expenses/ExpensesReports"}
                        >
                          <div className="w-100">
                            <div
                              onClick={() => {
                                setExpensesCategories({
                                  ExpensesReports: true,
                                  Items: false,
                                });
                              }}
                              className={`tab  text-end  w-full  border   pointer   flex justify-between  ${
                                active === 1 && ExpensesCategory.ExpensesReports
                                  ? " !border-[#EFAA20]  rounded-md hover:!border-transparent "
                                  : "!border-transparent"
                              }  `}
                            >
                              <span> تقارير المصروفات</span>
                            </div>
                          </div>
                        </Link>

                        <Link to={"System/Accounating/Expenses/Items"}>
                          <div className="w-100">
                            <div
                              onClick={() => {
                                setExpensesCategories({
                                  ExpensesReports: false,
                                  Items: true,
                                });
                              }}
                              className={`tab  text-end  w-full  border   pointer   flex justify-between  ${
                                active === 1 && ExpensesCategory.Items
                                  ? " !border-[#EFAA20]  rounded-md hover:!border-transparent "
                                  : "!border-transparent"
                              }  `}
                            >
                              <span>الاصناف</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            }
          />
        </div>
        <div className="col-span-9">
          <div className={`${style.AccountaingIndexbg} yellow-scroll`}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountaingIndex;
