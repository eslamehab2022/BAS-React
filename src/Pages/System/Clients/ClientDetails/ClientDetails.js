import React, { useState } from "react";
import "./index.css";
import { SearchComponent } from "../../../../Components/SearchComponent/SearchComponent";
import { Link, useParams } from "react-router-dom";
import { Button, Modal, NavDropdown } from "react-bootstrap";
import { BsPerson, BsTelephone } from "react-icons/bs";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import moment from "moment/moment";
import DataTableComponent from "../../../../Components/DataTableComponent.jsx";

import ShowClientDetails from "../../../../Components/System/Clients/ShowClient/ShowClientDetails";
import CustomTable from "../../../../Components/Table/index.jsx";
import { TableRow } from "../../../../Components/Table/TableRow.jsx";
import { TableCell } from "../../../../Components/Table/TableCell.jsx";
import DownloadButton from "../../../../Components/Buttons/DownloadButton.jsx";

const ClientDetails = () => {
  const [showProject, setShowProject] = useState(false);
  const [showClient, setShowClinet] = useState(false);
  const ClientDetailsTable = Array.from({ length: 2 }).map((_, index) => {
    return {
      id: index+1,
      ProjectName: "BSA",
      ProjectNumber: "53543",
      projectType: "تصميم",
      DeliverDate: "12-10-2023",
      status: "قيد التنفيذ",
      display: (
        <img
          src={process.env.PUBLIC_URL + "/icons/view.png"}
          onClick={() => {
            setShowProject(true);
          }}
          className="display_project  rounded"
          alt=" display project"
        />
      ),
    };
  });
  const { id } = useParams();

  const columns = [
    {
      name: "م",
      selector: (row) => row.id,
    },
    {
      name: "اسم المشروع",
      selector: (row) => row.ProjectName,
    },
    {
      name: " رقم الطلب ",
      selector: (row) => row.ProjectNumber,
    },
    {
      name: "   نوع المشروع",
      selector: (row) => row.projectType,
    },
    {
      name: "تاريخ الاستلام  ",
      selector: (row) => row.DeliverDate,
    },

    {
      name: "    الحالة",
      selector: (row) => row.status,
    },
    {
      name: "    عرض",
      selector: (row) => row.display,
    },
  ];

  const [currentMonth, setCurrentMonth] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState("معلومات عامة");
  const [Montlyhwork, setMontlyhwork] = useState(new Date());
  console.log(Montlyhwork);
  return (
    <div className="row justify-content-around  ">
      <div className="col-md-3 all-clients-search-container">
        <SearchComponent background={"#161620 !important"} />

        <div className="d-flex justify-content-between mt-4 w-100">
          <p className=" text-white ">كل العملاء</p>

          <NavDropdown
            title={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
              >
                <path
                  d="M17 0H0L6.8 7.77417V13.1487L10.2 14.7923V7.77417L17 0Z"
                  fill="#D59921"
                />
              </svg>
            }
            className="fs-5 "
          >
            <NavDropdown.Item
              className="text-end  d-flex justify-content-between  align-items-center"
              href="#action/3.2"
            >
              <span> فردي</span>
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-end  d-flex justify-content-between align-items-center"
              href="#action/3.3"
            >
              <span> شركه</span>
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-end  d-flex justify-content-between align-items-center"
              href="#action/3.3"
            >
              <span> تجاري</span>
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-end  d-flex justify-content-between align-items-center"
              href="#action/3.3"
            >
              <span> مستثمر</span>
            </NavDropdown.Item>
          </NavDropdown>
        </div>

        <div className="all-clints-search-driver"></div>
        <Link to={"/System/ClintDetails/1"}>
          <div className="clintName">
            <p className="text-white mb-0">سلطان عبد الله</p>
            <p className="clint-type ">فردى</p>
          </div>
        </Link>
        <Link to={"/System/ClintDetails/2"}>
          <div className="clintName">
            <p className="text-white mb-0"> فهد عبد الرحمن</p>
            <p className="clint-type ">مستسمر</p>
          </div>
        </Link>
        <Link to={"/System/ClintDetails/3"}>
          <div className="clintName">
            <p className="text-white mb-0"> سعود بن حمد </p>
            <p className="clint-type ">شركة </p>
          </div>
        </Link>
      </div>
      <div className="col-md-8  p-3   client-details-Component">
        <div className="flex justify-end gap-2 ">
          <DownloadButton>تصدير CSV </DownloadButton>
          <DownloadButton> تصدير Excel </DownloadButton>
        </div>
        <div className="flex justify-end gap-2 ">
          <button className="mt-2 ms-5 flex justify-center gap-1 text-xs font-medium bg-[#9E0C1E] text-white w-20 py-1 rounded-[3px]">
            حذف
            <img src="/icons/delete.svg" alt=""/>
            </button>
        </div>
        <div className="d-flex flex-column gap-2">
          
            <div className="d-flex gap-2">
            <img src="/icons/clients/User.svg" alt=""/>
              <p className="text-white text-base font-semibold">سلطان عبد الله</p>
            </div>
            <div className="d-flex  gap-2">
            <img src="/icons/clients/type.svg" alt=""/>
              <p className="text-sm font-medium">فردي</p>
            </div>
            <div className="d-flex  gap-2">
            
            <img src="/icons/clients/phone.svg" alt=""/>

              <p className="text-sm font-medium">01123456789 </p>
            </div>
          </div>
        
        <div className="main-text choose-inf position-relative d-flex gap-3 mx-2 my-3">
          <p
            className={`genral-inf pb-2 ${
              employeeDetails == "معلومات عامة" && "inf-type"
            }`}
            onClick={() => {
              setEmployeeDetails("معلومات عامة");
            }}
          >
            معلومات عامة
          </p>
          <p
            className={`genral-inf ${
              employeeDetails == "مشاريع" && "inf-type"
            }`}
            onClick={() => {
              setEmployeeDetails("مشاريع");
            }}
          >
            {" "}
            مشاريع
          </p>
        </div>

        {employeeDetails == "معلومات عامة" ? (
          <div className="mx-2 ">
            <div className="clinte-details-square p-3">
              <p className="text-white mb-3">
                الاسم العميل : <span className="main-text">سلطان عبد الله</span>{" "}
              </p>
              <p className="text-white mb-3">
                {" "}
                نوع العميل : <span className="main-text">فردي</span>{" "}
              </p>
              <p className="text-white mb-3">
                {" "}
                البريد الأكترونى:{" "}
                <span className="main-text">Islam@bsa.com</span>{" "}
              </p>
              <p className="text-white mb-3">
                {" "}
                رقم الجوال: <span className="main-text">
                  {" "}
                  010123456789
                </span>{" "}
              </p>
              <p className="text-white mb-3">
                {" "}
                نوع الهوية :{" "}
                <span className="main-text"> ــــــــــــــــــ</span>{" "}
              </p>
              <p className="text-white mb-3">
                {" "}
                رقم الهوية :{" "}
                <span className="main-text"> ــــــــــــــــــ</span>{" "}
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="d-flex align-items-center">
              <svg
                onClick={() => {
                  setCurrentMonth(true);
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
              >
                <path
                  d="M17 0H0L6.8 7.77417V13.1487L10.2 14.7923V7.77417L17 0Z"
                  fill="#D59921"
                />
              </svg>
              <p className="text-white mx-4  my-2">الشهر الحالي</p>
              <svg
                onClick={() => {
                  setCurrentMonth(true);
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
              >
                <path
                  d="M7.11297 8.52681C7.31302 8.7714 7.68698 8.7714 7.88703 8.52681L14.1933 0.816558C14.4604 0.490078 14.2281 9.53674e-07 13.8063 9.53674e-07L1.19369 9.53674e-07C0.771909 9.53674e-07 0.539624 0.490078 0.806656 0.816558L7.11297 8.52681Z"
                  fill="white"
                />
              </svg>

              {currentMonth && (
                <Modal
                  className="current_month d-flex align-items-center"
                  size="md"
                  aria-labelledby="contained-modal-title-vcenter"
                  onHide={() => setCurrentMonth(false)}
                  show={currentMonth}
                >
                  <Modal.Body>
                    <Calendar
                      onChange={(e) => {
                        setMontlyhwork(moment(e).format("MM/DD/YYYY"));
                        setCurrentMonth(false);
                      }}
                      value={Montlyhwork}
                    />
                  </Modal.Body>
                </Modal>
              )}
            </div>

            <div className="mt-3 !h-[400px] overflow-scroll scrollbar-none">

              {/* <DataTableComponent
                className={" border-golden  w-100  datatableComponent"}
                columns={columns}
                data={ClientDetailsTable}
              /> */}
              <CustomTable columns={columns} data={ClientDetailsTable}>
                  {ClientDetailsTable && ClientDetailsTable.length > 0
                    ? ClientDetailsTable.map(
                        (
                          {
                            id,
                            ProjectName,
                            ProjectNumber,
                            projectType,
                            DeliverDate,
                            status,
                            display,
                          },
                          index
                        ) => (
                          <TableRow
                            className={`my-2 border !border-[#efaa207f] ${
                              index % 2 === 0 ? "bg-[#151521]" : ""
                            }`}
                            key={index}
                          >
                            <TableCell textColor="#ffffff7f">{id}</TableCell>
                            <TableCell>{ProjectName}</TableCell>
                            <TableCell>{ProjectNumber}</TableCell>
                            <TableCell>{projectType}</TableCell>
                            <TableCell>{DeliverDate}</TableCell>
                            <TableCell>{status}</TableCell>
                            <TableCell>{display}</TableCell>
                          </TableRow>
                        )
                      )
                    : null}
                </CustomTable>
            </div>

            {showProject && (
              <ShowClientDetails
                showProject={showProject}
                setShowProject={setShowProject}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientDetails;
