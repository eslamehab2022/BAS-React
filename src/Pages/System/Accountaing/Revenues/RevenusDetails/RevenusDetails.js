import React, { useContext, useState } from "react";

import styles from "./RevenusDetails.module.css";
import PieChart from "../../../../../Components/pieChart";
import ColumnChart from "../../../../../Components/ColumnChart";
import { Image, Modal } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import DataTableComponent from "../../../../../Components/DataTableComponent.jsx";
import { useParams } from "react-router-dom";
import DisplayFinancialClaims from "../../../../../Components/System/Accountaing/DisplayFinancialClaims/DisplayFinancialClaims";
import { useEffect } from "react";
import Calendar from "react-calendar";
import { addAccountType } from "../../../../../Context/AddAccountaing";
import AddFinancialClaims from "../../../../../Components/System/Accountaing/AddFinancialClaims/AddFinancialClaims";
import AddInvoice from "../../../../../Components/System/Accountaing/AddInvoice/AddInvoice";
import { TableCell } from "../../../../../Components/Table/TableCell.jsx";
import { TableRow } from "../../../../../Components/Table/TableRow.jsx";
import CustomTable from "../../../../../Components/Table/index.jsx";

const RevenusDetails = () => {
  // handle Date
  const [DisplayRevenue, setDisplayRevenue] = useState(false);
  const [openCliam, setOpenClaim] = useState(false);
  const { RevenueType } = useParams();
  const [chooseDate, setChooseDate] = useState(false);
  const [cleanderValue, setCleanderValue] = useState(new Date());
  const columns = [
    {
      name: "م",
      selector: (row) => row.projectName,
    },
    {
      name: "اسم المشروع",
      selector: (row) => row.projectName,
    },
    {
      name: "رقم الطلب",
      selector: (row) => row.RequestNumber,
    },
    {
      name: "نوع المشروع",
      selector: (row) => row.ProjectType,
    },
    {
      name: "تاريخ الاستلام",
      selector: (row) => row.DeliverDate,
    },

    {
      name: "الكود",
      selector: (row) => row.code,
    },
    {
      name: "الحالة",
      selector: (row) => row.display,
    },
    {
      name: "عرض",
      selector: (row) => row.Claim,
    },
    {
      name: "المطالبة",
      selector: (row) => row.Invoice,
    },
  ];
  const data = Array.from({ length: 2 }).map((_, index) => {
    return {
      id: index+1,
      projectName: "Bsa",
      RequestNumber: "0123",
      ProjectType: "تصميم",
      DeliverDate: "12-10-2023",
      code: "546789",
      status: "لم يتم الدفع",
      display: (
        <img
          src={process.env.PUBLIC_URL + "/icons/view.svg"}
          alt=""
          onClick={() => {
            setDisplayRevenue(true);
          }}
          className="pointer"
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
        <div className="pointer">
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
  const handleCleanderValue = (e) => {
    setCleanderValue(e);
    setChooseDate(false);
  };
  const searchByDate = () => {};

  //   checkAccountaing
  const {
    accountaingType,
    setAccountaingType,
    openAddAccountant,
    setOpenAddAccountant,
  } = useContext(addAccountType);

  useEffect(() => {
    setAccountaingType(RevenueType);
    setDisplayRevenue(false);
    setOpenAddAccountant(false);
  }, [RevenueType]);

  return (
    <>
      {openAddAccountant && accountaingType === "FinancialClaims" ? (
        <AddFinancialClaims />
      ) : openAddAccountant && accountaingType === "Invoice" ? (
        <AddInvoice />
      ) : (
        <>
          {openCliam && (
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
          )}

          {chooseDate && (
            <Modal
              className=" InvoiceDate"
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              onHide={() => setChooseDate(false)}
              show={chooseDate}
            >
              <Modal.Body className="d-flex align-items-center">
                <Calendar
                  onChange={handleCleanderValue}
                  className={"bg-[#1E1E2D]"}
                  value={cleanderValue}
                />
              </Modal.Body>
            </Modal>
          )}

          {}

          {DisplayRevenue ? (
            <DisplayFinancialClaims
              RevenueType
              DisplayRevenue={DisplayRevenue}
              setDisplayRevenue={setDisplayRevenue}
            />
          ) : (
            <div className="d-flex flex-column justify-content-between gap-5">
              {RevenueType === "FinancialClaims" ? (
                <div className={`${styles.RevenuesPieChartContainer}   `}>
                  <p className="text-white text-start">كل المطالبات</p>
                  <PieChart
                    toolbaroffestX=""
                    toolbaroffestY=""
                    colors={["#03795D", "#E40038"]}
                    width={400}
                    labels={[" تم الدفع 60 ", "لم يتم الدفع 20 "]}
                    series={[6, 3]}
                  />
                </div>
              ) : (
                <div
                  className={`${styles.RevenuesPieChartContainer} invoicesContainer `}
                >
                  <p className="text-white  text-xl"> عدد الفواتير</p>

                  <div className="w-75 d-flex justify-content-between ">
                    <div className="d-flex gap-3">
                      <svg
                        onClick={() => {
                          setChooseDate(true);
                        }}
                        className="pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        fill="none"
                      >
                        <path
                          d="M17.4375 0.438965H0.4375L7.2375 8.21314V13.5877L10.6375 15.2313V8.21314L17.4375 0.438965Z"
                          fill="#D59921"
                        />
                      </svg>
                      <p className="text-white ">اجمالى عدد الاصناف :</p>
                    </div>
                    <div className="Treasury-container-numbers d-flex justify-content-center text-white">
                      <p>1000</p>
                    </div>
                  </div>
                </div>
              )}

              <fieldset className={`${styles.RevenuesColumnChartContainer}   `}>
                <legend className="text-white text-center">كل المطالبات</legend>

                  {/* <DataTableComponent
                    columns={columns}
                    data={data}
                    
                  /> */}
                <div className="mt-3 !h-[400px] overflow-scroll scrollbar-none">
<CustomTable columns={columns} data={data}>
                  {data && data.length > 0
                    ? data.map(
                        (
                          {
                            id,
                            projectName,
                            RequestNumber,
                            ProjectType,
                            DeliverDate,
                            code,
                            display,
                            Claim,
                            status,
                            
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
                            <TableCell>{projectName}</TableCell>
                            <TableCell>{RequestNumber}</TableCell>
                            <TableCell>{ProjectType}</TableCell>
                            <TableCell>{DeliverDate}</TableCell>
                            <TableCell>{code}</TableCell>
                            <TableCell>{status}</TableCell>
                            <TableCell>{display}</TableCell>
                            <TableCell>{Claim}</TableCell>
                            
                          </TableRow>
                        )
                      )
                    : null}
                </CustomTable>
                </div>
              </fieldset>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default RevenusDetails;
