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
import Image from "../../../../Components/Image.jsx";
import CustomModal from "../../../../Components/Modals/CustomModal.jsx";
import SuccessfullModal from "../../../../Components/Modals/SuccessfullModal.jsx";
import Pdf from "../../../../Components/Pdf.jsx";

const ClientDetails = () => {
  const [viewInvoice, setViewInvoice] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openDeleteSuccessModal, setOpenDeleteSuccessModal] = useState(false);
  const [openCliam, setOpenClaim] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showClient, setShowClinet] = useState(false);
  const ClientDetailsTable = Array.from({ length: 2 }).map((_, index) => {
    return {
      id: index + 1,
      ProjectName: "BSA",
      ProjectNumber: "53543",
      projectType: "تصميم",
      DeliverDate: "12-10-2023",
      status: "قيد التنفيذ",
      display: (
        <img
          src={process.env.PUBLIC_URL + "/icons/view.svg"}
          onClick={() => {
            setShowProject(true);
          }}
          className="display_project  rounded"
          alt=" display project"
        />
      ),
      Claim: (
        <div
          className="pointer"
          onClick={() => {
            setOpenClaim(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="21"
            viewBox="0 0 17 21"
            fill="none"
          >
            <path
              d="M14.6388 0H2.3611C1.7349 0 1.13434 0.251329 0.691551 0.698697C0.248758 1.14607 0 1.75283 0 2.3855V10.9733C0 11.0998 0.0497518 11.2212 0.13831 11.3107C0.226869 11.4001 0.34698 11.4504 0.472221 11.4504H3.77776V20.5153C3.77778 20.5995 3.79985 20.6822 3.84175 20.755C3.88364 20.8278 3.94386 20.8881 4.01628 20.9298C4.08871 20.9715 4.17076 20.993 4.25411 20.9923C4.33745 20.9916 4.41912 20.9686 4.49082 20.9256L6.58276 19.6565L8.21664 20.897C8.29838 20.9589 8.3978 20.9924 8.49997 20.9924C8.60215 20.9924 8.70156 20.9589 8.7833 20.897L10.3889 19.6756L12.0369 20.8731C12.1178 20.9328 12.2153 20.965 12.3155 20.965C12.4157 20.965 12.5132 20.9328 12.5941 20.8731L14.1902 19.6613L16.2822 20.9304C16.3543 20.9748 16.4369 20.9988 16.5214 21C16.6058 21.0011 16.689 20.9794 16.7624 20.937C16.8357 20.8946 16.8964 20.8331 16.9382 20.7589C16.98 20.6848 17.0013 20.6006 16.9999 20.5153V2.3855C16.9999 1.75283 16.7512 1.14607 16.3084 0.698697C15.8656 0.251329 15.265 0 14.6388 0ZM0.944441 10.4962V2.3855C0.944441 2.0059 1.0937 1.64184 1.35937 1.37342C1.62505 1.105 1.98538 0.9542 2.3611 0.9542C2.73682 0.9542 3.09716 1.105 3.36283 1.37342C3.62851 1.64184 3.77776 2.0059 3.77776 2.3855V10.4962H0.944441ZM16.0555 19.6708L14.4074 18.6737C14.3271 18.6255 14.2344 18.6026 14.1411 18.6077C14.0478 18.6127 13.958 18.6457 13.8833 18.7023L12.3108 19.8951L10.6627 18.6976C10.5819 18.6378 10.4843 18.6057 10.3841 18.6057C10.284 18.6057 10.1864 18.6378 10.1055 18.6976L8.49997 19.9189L6.89442 18.7023C6.81966 18.6457 6.72994 18.6127 6.63664 18.6077C6.54333 18.6026 6.45063 18.6255 6.37026 18.6737L4.72221 19.6708V2.3855C4.72498 1.8689 4.559 1.3658 4.24999 0.9542H14.6388C15.0146 0.9542 15.3749 1.105 15.6406 1.37342C15.9062 1.64184 16.0555 2.0059 16.0555 2.3855V19.6708ZM10.3889 2.8626C9.54828 2.8626 8.72659 3.11443 8.02769 3.58625C7.32878 4.05807 6.78405 4.72869 6.46238 5.5133C6.14071 6.29791 6.05654 7.16127 6.22053 7.9942C6.38452 8.82714 6.78929 9.59224 7.38366 10.1927C7.97803 10.7933 8.7353 11.2022 9.55972 11.3679C10.3841 11.5336 11.2387 11.4485 12.0153 11.1236C12.7918 10.7986 13.4556 10.2482 13.9226 9.54207C14.3896 8.83594 14.6388 8.00576 14.6388 7.1565C14.6388 6.01769 14.1911 4.92552 13.394 4.12026C12.597 3.31499 11.516 2.8626 10.3889 2.8626ZM10.3889 10.4962C9.73508 10.4962 9.09598 10.3003 8.55239 9.93336C8.0088 9.56639 7.58512 9.0448 7.33493 8.43455C7.08474 7.8243 7.01928 7.1528 7.14682 6.50496C7.27437 5.85712 7.58919 5.26204 8.05148 4.79498C8.51377 4.32791 9.10276 4.00984 9.74397 3.88097C10.3852 3.75211 11.0498 3.81825 11.6538 4.07102C12.2578 4.3238 12.7741 4.75185 13.1373 5.30106C13.5005 5.85028 13.6944 6.49597 13.6944 7.1565C13.6944 8.04225 13.3461 8.89171 12.7262 9.51803C12.1063 10.1443 11.2655 10.4962 10.3889 10.4962ZM10.8611 5.2481H11.8055V6.2023H9.91663V6.6794H11.3333C11.4585 6.6794 11.5786 6.72967 11.6672 6.81914C11.7558 6.90862 11.8055 7.02997 11.8055 7.1565V8.5878C11.8055 8.71434 11.7558 8.83569 11.6672 8.92516C11.5786 9.01464 11.4585 9.0649 11.3333 9.0649H10.8611V9.542H9.91663V9.0649H8.97219V8.1107H10.8611V7.6336H9.44441C9.31917 7.6336 9.19906 7.58334 9.1105 7.49386C9.02194 7.40439 8.97219 7.28304 8.97219 7.1565V5.7252C8.97219 5.59867 9.02194 5.47732 9.1105 5.38784C9.19906 5.29837 9.31917 5.2481 9.44441 5.2481H9.91663V4.771H10.8611V5.2481ZM6.13887 13.3588H14.6388V14.313H6.13887V13.3588ZM6.13887 16.2214H14.6388V17.1756H6.13887V16.2214Z"
              fill="white"
              fill-opacity="0.5"
            />
          </svg>
        </div>
      ),
      Invoice: (
        <div
          className="pointer"
          onClick={() => {
            setViewInvoice(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="21"
            viewBox="0 0 17 21"
            fill="none"
          >
            <path
              d="M14.6388 0H2.3611C1.7349 0 1.13434 0.251329 0.691551 0.698697C0.248758 1.14607 0 1.75283 0 2.3855V10.9733C0 11.0998 0.0497518 11.2212 0.13831 11.3107C0.226869 11.4001 0.34698 11.4504 0.472221 11.4504H3.77776V20.5153C3.77778 20.5995 3.79985 20.6822 3.84175 20.755C3.88364 20.8278 3.94386 20.8881 4.01628 20.9298C4.08871 20.9715 4.17076 20.993 4.25411 20.9923C4.33745 20.9916 4.41912 20.9686 4.49082 20.9256L6.58276 19.6565L8.21664 20.897C8.29838 20.9589 8.3978 20.9924 8.49997 20.9924C8.60215 20.9924 8.70156 20.9589 8.7833 20.897L10.3889 19.6756L12.0369 20.8731C12.1178 20.9328 12.2153 20.965 12.3155 20.965C12.4157 20.965 12.5132 20.9328 12.5941 20.8731L14.1902 19.6613L16.2822 20.9304C16.3543 20.9748 16.4369 20.9988 16.5214 21C16.6058 21.0011 16.689 20.9794 16.7624 20.937C16.8357 20.8946 16.8964 20.8331 16.9382 20.7589C16.98 20.6848 17.0013 20.6006 16.9999 20.5153V2.3855C16.9999 1.75283 16.7512 1.14607 16.3084 0.698697C15.8656 0.251329 15.265 0 14.6388 0ZM0.944441 10.4962V2.3855C0.944441 2.0059 1.0937 1.64184 1.35937 1.37342C1.62505 1.105 1.98538 0.9542 2.3611 0.9542C2.73682 0.9542 3.09716 1.105 3.36283 1.37342C3.62851 1.64184 3.77776 2.0059 3.77776 2.3855V10.4962H0.944441ZM16.0555 19.6708L14.4074 18.6737C14.3271 18.6255 14.2344 18.6026 14.1411 18.6077C14.0478 18.6127 13.958 18.6457 13.8833 18.7023L12.3108 19.8951L10.6627 18.6976C10.5819 18.6378 10.4843 18.6057 10.3841 18.6057C10.284 18.6057 10.1864 18.6378 10.1055 18.6976L8.49997 19.9189L6.89442 18.7023C6.81966 18.6457 6.72994 18.6127 6.63664 18.6077C6.54333 18.6026 6.45063 18.6255 6.37026 18.6737L4.72221 19.6708V2.3855C4.72498 1.8689 4.559 1.3658 4.24999 0.9542H14.6388C15.0146 0.9542 15.3749 1.105 15.6406 1.37342C15.9062 1.64184 16.0555 2.0059 16.0555 2.3855V19.6708ZM10.3889 2.8626C9.54828 2.8626 8.72659 3.11443 8.02769 3.58625C7.32878 4.05807 6.78405 4.72869 6.46238 5.5133C6.14071 6.29791 6.05654 7.16127 6.22053 7.9942C6.38452 8.82714 6.78929 9.59224 7.38366 10.1927C7.97803 10.7933 8.7353 11.2022 9.55972 11.3679C10.3841 11.5336 11.2387 11.4485 12.0153 11.1236C12.7918 10.7986 13.4556 10.2482 13.9226 9.54207C14.3896 8.83594 14.6388 8.00576 14.6388 7.1565C14.6388 6.01769 14.1911 4.92552 13.394 4.12026C12.597 3.31499 11.516 2.8626 10.3889 2.8626ZM10.3889 10.4962C9.73508 10.4962 9.09598 10.3003 8.55239 9.93336C8.0088 9.56639 7.58512 9.0448 7.33493 8.43455C7.08474 7.8243 7.01928 7.1528 7.14682 6.50496C7.27437 5.85712 7.58919 5.26204 8.05148 4.79498C8.51377 4.32791 9.10276 4.00984 9.74397 3.88097C10.3852 3.75211 11.0498 3.81825 11.6538 4.07102C12.2578 4.3238 12.7741 4.75185 13.1373 5.30106C13.5005 5.85028 13.6944 6.49597 13.6944 7.1565C13.6944 8.04225 13.3461 8.89171 12.7262 9.51803C12.1063 10.1443 11.2655 10.4962 10.3889 10.4962ZM10.8611 5.2481H11.8055V6.2023H9.91663V6.6794H11.3333C11.4585 6.6794 11.5786 6.72967 11.6672 6.81914C11.7558 6.90862 11.8055 7.02997 11.8055 7.1565V8.5878C11.8055 8.71434 11.7558 8.83569 11.6672 8.92516C11.5786 9.01464 11.4585 9.0649 11.3333 9.0649H10.8611V9.542H9.91663V9.0649H8.97219V8.1107H10.8611V7.6336H9.44441C9.31917 7.6336 9.19906 7.58334 9.1105 7.49386C9.02194 7.40439 8.97219 7.28304 8.97219 7.1565V5.7252C8.97219 5.59867 9.02194 5.47732 9.1105 5.38784C9.19906 5.29837 9.31917 5.2481 9.44441 5.2481H9.91663V4.771H10.8611V5.2481ZM6.13887 13.3588H14.6388V14.313H6.13887V13.3588ZM6.13887 16.2214H14.6388V17.1756H6.13887V16.2214Z"
              fill="white"
              fill-opacity="0.5"
            />
          </svg>
        </div>
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
      name: "عرض",
      selector: (row) => row.display,
    },
    {
      name: "المطالبة",
      selector: (row) => row.display,
    },
    {
      name: "الفاتورة",
      selector: (row) => row.display,
    },
  ];
  const Clients = [
    { id: 1, name: "سلطان عبد الله", type: "فردى" },
    { id: 2, name: "فهد عبد الرحمن", type: "مستسمر" },
    { id: 3, name: "سعود بن حمد", type: "شركة" },
  ];
  const [currentMonth, setCurrentMonth] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState("معلومات عامة");
  const [Montlyhwork, setMontlyhwork] = useState(new Date());
  console.log(Montlyhwork);
  return (
    <div className="grid grid-cols-12 gap-2 h-full ">
      <div className="col-span-4 all-clients-search-container">
        <SearchComponent />

        <div className="d-flex justify-content-between mt-4 w-100">
          <Link to={"/System/Allclients"} className="pointer">
            <p className=" text-white px-2">كل العملاء</p>
          </Link>
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
              className="text-end d-flex justify-content-between  align-items-center"
              href="#action/3.2"
            >
              <span> فردي</span>
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-end d-flex justify-content-between align-items-center"
              href="#action/3.3"
            >
              <span> شركه</span>
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-end d-flex justify-content-between align-items-center"
              href="#action/3.3"
            >
              <span> تجاري</span>
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-end d-flex justify-content-between align-items-center"
              href="#action/3.3"
            >
              <span> مستثمر</span>
            </NavDropdown.Item>
          </NavDropdown>
        </div>

        <div className="all-clints-search-driver inside-Search"></div>
        {Clients.map(({ id, name, type, path }) => (
          <Link to={path} key={id}>
            <div className="border !border-transparent hover:!border-[#efaa2080] p-2 mb-1">
              <p className="text-white text-sm font-medium">{name}</p>
              <p className="text-[#FFFFFF4D] text-xs font-normal">{type}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="col-span-8  p-3   bg-[#1E1E2D] rounded-[19px]">
        <div className="flex justify-end gap-2 ">
          <DownloadButton>تصدير CSV </DownloadButton>
          <DownloadButton> تصدير Excel </DownloadButton>
        </div>
        <div className="flex justify-end gap-2 ">
          <button
            onClick={() => setOpenDeleteModal(true)}
            className="mt-2 ms-5 flex justify-center gap-1 text-xs font-medium bg-[#9E0C1E] text-white w-20 py-1 rounded-[3px]"
          >
            حذف
            <img src="/icons/delete.svg" alt="" />
          </button>
        </div>
        <div className="d-flex flex-column gap-2">
          <div className="d-flex gap-2">
            <img src="/icons/clients/User.svg" alt="" />
            <p className="text-white text-base font-semibold">سلطان عبد الله</p>
          </div>
          <div className="d-flex  gap-2">
            <img src="/icons/clients/type.svg" alt="" />
            <p className="text-sm font-medium">فردي</p>
          </div>
          <div className="d-flex  gap-2">
            <img src="/icons/clients/phone.svg" alt="" />

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
                          Claim,
                          Invoice,
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
                          <TableCell>{Claim}</TableCell>
                          <TableCell>{Invoice}</TableCell>
                        </TableRow>
                      )
                    )
                  : null}
              </CustomTable>

              <Pdf
                PdfFile={`${process.env.PUBLIC_URL + "/example.pdf"}`}
                width={800}
                height={800}
                openPdf={openCliam}
                setOpenPdf={setOpenClaim}
              />
              <Pdf
                PdfFile={`${process.env.PUBLIC_URL + "/example.pdf"}`}
                width={800}
                height={800}
                openPdf={viewInvoice}
                setOpenPdf={setViewInvoice}
              />
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

      {/* {openCliam && (
            <Modal
              className="d-flex claimModal align-items-center jusify-content-center"
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              onHide={() => setOpenClaim(false)}
              show={openCliam}
            >
              <Modal.Body className="d-flex align-items-center">
                <Image
                  src={`${process.env.PUBLIC_URL + "/FinancalRequest.png"}`}
                  alt="FinancalRequest png"
                  width={650}
                  height={700}
                />
              </Modal.Body>
            </Modal>
          )} */}
      {/* {viewInvoice && (
            <Modal
              className="d-flex claimModal align-items-center jusify-content-center"
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              onHide={() => setViewInvoice(false)}
              show={viewInvoice}
            >
              <Modal.Body className="d-flex align-items-center">
                <Image
                  src={`${process.env.PUBLIC_URL + "/expenses.png"}`}
                  alt="FinancalRequest png"
                  width={650}
                  height={700}
                />
              </Modal.Body>
            </Modal>
          )} */}

      <CustomModal
        title="التاكيد"
        show={openDeleteModal}
        message={"هل انت متاكد من حذف المشروع"}
        handleSave={() => {
          setOpenDeleteModal(false);
          setOpenDeleteSuccessModal(true);
        }}
        handleClose={() => {
          setOpenDeleteModal(false);
        }}
      />
      <SuccessfullModal
        show={openDeleteSuccessModal}
        message={"تم الحذف بنجاح"}
        handleClose={() => {
          setOpenDeleteSuccessModal(false);
        }}
      />
    </div>
  );
};

export default ClientDetails;
