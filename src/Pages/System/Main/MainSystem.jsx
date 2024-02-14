import React, { useEffect } from "react";
import Calendar from "react-calendar";
import SystemControler from "../../../Components/System/SystemControler/SystemControler";
import { Container, Image, NavDropdown } from "react-bootstrap";
import SystemLineChart from "../../../Components/System/Main/SystemLineChart";
import AllDeprtmentSlider from "../../../Components/System/Main/ِAllDeprtmentSLider";
import DataTableComponent from "../../../Components/DataTableComponent.jsx";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { QuickLinks, columns } from "../../../utiltis/consts.jsx";
import style from "./MainSystem.module.css";
import { TableCell } from "../../../Components/Table/TableCell.jsx";
import { TableRow } from "../../../Components/Table/TableRow.jsx";
import CustomTable from "../../../Components/Table/index.jsx";
import { useNavigate } from "react-router-dom";

export const MainSystem = () => {
  const navigate = useNavigate();
  // define cleander value
  const [cleanderValue, setCleanderValue] = useState(false);

  const { deprtmentType } = useParams();
  // const [deprtmentType,setDeprtmentType] = useState(false)

  // getting  Data for the table
  const getDeprtmentData = () => {
    //after getting right deprtment  Data we will make sure to push it in  the variabule
  };

  const tableData = Array.from({ length: 12 }).map((_, index) => {
    return {
      id: index + 1,
      clientName: "نايف عبد العزيز",
      PhoneNumber: "01112131415",
      ClientType: "فردي  ",
      email: "Ashrf@bsa.com",
      status: "قيد التنفيذ",
    };
  });

  return (
    <section className="!h-full w-full">
      <SystemControler
        child={
          <div>
            <h2 className="text-white text-2xl fw-bold">مرحباً بك بدر ... </h2>
            <p className="main-text text-xl">
              مرحباً بعودتك الي النظام الخاص بك
            </p>
          </div>
        }
      />
      <div className={` d-flex justify-center h-full w-full  `}>
        <div className={`${style.MainSystem} d-flex justify-center w-full  `}>
          <div className={`${style.mainBackground} `}></div>
          <Container className="position-absolute z-3">
            <div className=" grid descktop:grid-cols-2 laptop:grid-cols-5  gap-2 mx-auto">
              <div className=" laptop:col-span-2  ">
                <div className={`item   p-3  ${style.cardsBackground}`}>
                  <div className="row">
                    {QuickLinks.map(
                      ({ id, title, total, img, path }, index) => (
                        <div
                          onClick={() => navigate(path)}
                          className="col-md-6 mb-3 cursor-pointer"
                          key={id}
                        >
                          <div className={`   ${style.systemCard}`}>
                            <div className="d-flex justify-content-between    laptop:flex-row  tablet:flex-col mobile:flex-col w-90 h-100 align-items-center mx-2">
                              <div>
                                {" "}
                                <p className="text-white text-bold laptop:text-xl  tablet:text-center tablet:text-sm mobile:text-sm">
                                  {title}
                                </p>
                              </div>
                              <div className="d-flex flex-column">
                                <Image src={img} alt="orders" />
                                <p className="text-white laptop:text-xl  tablet:text-center text-xl tablet:text-sm mobile:text-sm">
                                  {total}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                    {/* <div className="col-md-6 mb-3">
                    <div className={` ${style.systemCard}`}>
                      <div className="d-flex justify-content-between  laptop:flex-row  tablet:flex-col mobile:flex-col w-90 h-100 align-items-center mx-2">
                        <div>
                          {" "}
                          <p className="text-white text-bold laptop:text-xl  tablet:text-center text-xl tablet:text-sm mobile:text-sm">
                            العملاء
                          </p>
                        </div>
                        <div className="d-flex flex-column">
                          <Image
                            src={`${
                              process.env.PUBLIC_URL + "/Main/clients.png"
                            }`}
                            alt="clients"
                          />

                          <p className="text-white laptop:text-xl  tablet:text-center text-xl tablet:text-sm mobile:text-sm">
                            100
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className={` ${style.systemCard}`}>
                      <div className="d-flex justify-content-between  laptop:flex-row  tablet:flex-col mobile:flex-col w-90 h-100 align-items-center mx-2">
                        <div>
                          {" "}
                          <p className="text-white text-bold laptop:text-xl  tablet:text-center text-xl tablet:text-sm mobile:text-sm">
                            المشاريع
                          </p>
                        </div>
                        <div className="d-flex flex-column">
                          <Image
                            src={`${
                              process.env.PUBLIC_URL + "/Main/projects.png"
                            }`}
                            alt="projects"
                          />

                          <p className="text-white laptop:text-xl  tablet:text-center text-xl tablet:text-sm mobile:text-sm">
                            100
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className={` ${style.systemCard}`}>
                      <div className="d-flex justify-content-between  laptop:flex-row  tablet:flex-col mobile:flex-col w-90 h-100 align-items-center mx-2">
                        <div>
                          {" "}
                          <p className="text-white text-bold laptop:text-xl  tablet:text-center text-xl tablet:text-sm mobile:text-sm">
                            المهام{" "}
                          </p>
                        </div>
                        <div className="d-flex justify-center align-items-center flex-column">
                          <Image
                            src={`${
                              process.env.PUBLIC_URL + "/Main/tasks.png"
                            }`}
                            alt="tasks"
                          />

                          <p className="text-white laptop:text-xl  tablet:text-center text-xl tablet:text-sm mobile:text-sm">
                            100
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>
              <div className=" laptop:col-span-3 ">
                <div className={`item  p-0  ${style.cardsBackground}`}>
                  <div
                    className={` systemLineChart flex justify-center  h-4/5  w-100 p-0 m-0  ${style.systemLineChart} align-items-center flex-column`}
                  >
                    <SystemLineChart />
                  </div>
                  <div className="w-90  mx-auto mt-1    overflow-x-auto">
                    {" "}
                    <AllDeprtmentSlider />
                  </div>
                </div>
              </div>
            </div>

            <div className="row mx-auto">
              <div className="col-lg-8 col-md-12 mb-2 mx-auto">
                <div
                  className={`${style.chooseDeprtmentContainer} text-white  chooseDeprtment`}
                >
                  <NavDropdown
                    style={{ width: "115px" }}
                    title={
                      <div
                        className={` ${style.chooseDeprtmentICons}   d-flex justify-content-between align-items-center pointer `}
                      >
                        <p className="text-sm">اختر القسم</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M10.8333 6.66667C10.8333 7.1269 11.2064 7.5 11.6667 7.5C12.1269 7.5 12.5 7.1269 12.5 6.66667V5.83333H16.6667C17.1269 5.83333 17.5 5.46024 17.5 5C17.5 4.53976 17.1269 4.16667 16.6667 4.16667H12.5V3.33333C12.5 2.8731 12.1269 2.5 11.6667 2.5C11.2064 2.5 10.8333 2.8731 10.8333 3.33333V6.66667Z"
                            fill="white"
                          />
                          <path
                            d="M2.5 10C2.5 9.53976 2.8731 9.16667 3.33333 9.16667H4.58333C4.81345 9.16667 5 9.35321 5 9.58333V10.4167C5 10.6468 4.81345 10.8333 4.58333 10.8333H3.33333C2.8731 10.8333 2.5 10.4602 2.5 10Z"
                            fill="white"
                          />
                          <path
                            d="M7.5 7.5C7.03976 7.5 6.66667 7.8731 6.66667 8.33333V11.6667C6.66667 12.1269 7.03976 12.5 7.5 12.5C7.96024 12.5 8.33333 12.1269 8.33333 11.6667V10.8333H16.6667C17.1269 10.8333 17.5 10.4602 17.5 10C17.5 9.53976 17.1269 9.16667 16.6667 9.16667H8.33333V8.33333C8.33333 7.8731 7.96024 7.5 7.5 7.5Z"
                            fill="white"
                          />
                          <path
                            d="M2.5 5C2.5 4.53976 2.8731 4.16667 3.33333 4.16667H8.75C8.98012 4.16667 9.16667 4.35321 9.16667 4.58333V5.41667C9.16667 5.64679 8.98012 5.83333 8.75 5.83333H3.33333C2.8731 5.83333 2.5 5.46024 2.5 5Z"
                            fill="white"
                          />
                          <path
                            d="M12.5 13.3333C12.5 12.8731 12.8731 12.5 13.3333 12.5C13.7936 12.5 14.1667 12.8731 14.1667 13.3333V14.1667H16.6667C17.1269 14.1667 17.5 14.5398 17.5 15C17.5 15.4602 17.1269 15.8333 16.6667 15.8333H14.1667V16.6667C14.1667 17.1269 13.7936 17.5 13.3333 17.5C12.8731 17.5 12.5 17.1269 12.5 16.6667V13.3333Z"
                            fill="white"
                          />
                          <path
                            d="M2.5 15C2.5 14.5398 2.8731 14.1667 3.33333 14.1667H10.4167C10.6468 14.1667 10.8333 14.3532 10.8333 14.5833V15.4167C10.8333 15.6468 10.6468 15.8333 10.4167 15.8333H3.33333C2.8731 15.8333 2.5 15.4602 2.5 15Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    }
                    className="fs-5 "
                  >
                    <NavDropdown.Item
                      className="text-end  d-flex justify-content-between  align-items-center"
                      href="/System/index/clients"
                    >
                      <span> عملاء</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="text-end  d-flex justify-content-between align-items-center"
                      href="/System/index/users"
                    >
                      <span> مستخدمين</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="text-end  d-flex justify-content-between align-items-center"
                      href="/System/index/Requests"
                    >
                      <span> طلبات</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="text-end  d-flex justify-content-between align-items-center"
                      href="/System/index/Projects"
                    >
                      <span> مشاريع</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <div className="mt-3 !h-[243px] overflow-scroll scrollbar-none">
                    {/* <DataTableComponent
                    className={" !max-h-[243px]"}
                    columns={columns}
                    data={tableData}
                  /> */}
                    <CustomTable
                      bordered={false}
                      TableHeaderProps={{
                        className: "bg-[#7676764D]",
                      }}
                      TableHeadProps={{
                        className:
                          "text-end text-[10px] border-none !font-semibold p-1 text-white",
                      }}
                      columns={columns}
                      data={tableData}
                    >
                      {tableData && tableData.length > 0
                        ? tableData.map(
                            (
                              {
                                id,
                                clientName,
                                PhoneNumber,
                                ClientType,
                                email,
                                status,
                              },
                              index
                            ) => (
                              <TableRow
                                className={`my-2  border-y !border-[#616161]`}
                                key={index}
                              >
                                <TableCell
                                  cellClassName={"min-w-[10px]"}
                                  textColor="#ffffff7f"
                                >
                                  {id}
                                </TableCell>
                                <TableCell>{clientName}</TableCell>
                                <TableCell>{PhoneNumber}</TableCell>
                                <TableCell>{ClientType}</TableCell>
                                <TableCell>{email}</TableCell>
                                <TableCell>{status}</TableCell>
                              </TableRow>
                            )
                          )
                        : null}
                    </CustomTable>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12  mb-3 mx-auto   ">
                <div className={`    Main-cleander `}>
                  <Calendar value={cleanderValue} />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};
