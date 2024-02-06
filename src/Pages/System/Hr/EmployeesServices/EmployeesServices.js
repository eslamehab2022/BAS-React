import React, { useContext, useEffect, useState } from "react";
import style from "./EmployeesServices.module.css";
import { SearchComponent } from "../../../../Components/SearchComponent/SearchComponent";
import Input from "../../../../Components/FormHandler/Input";
import "./EmployeesServices.css";
import DataTableComponent from "../../../../Components/DataTableComponent.jsx";
import { AddHrType } from "../../../../Context/AddHr.js";
import AddServices from "../../../../Components/System/Hr/AddServices/AddServices.js";
import Pdf from "../../../../Components/Pdf.jsx";
import ShowServicesComponent from "../../../../Components/System/Hr/ShowServicesComponent/ShowServicesComponent.jsx";
import { TableCell } from "../../../../Components/Table/TableCell.jsx";
import { TableRow } from "../../../../Components/Table/TableRow.jsx";
import CustomTable from "../../../../Components/Table/index.jsx";
const EmployeesServices = () => {
  const [showServices, setShowServices] = useState(false);

  const data = Array.from({ length: 2 }).map((_, index) => {
    return {
      id: 1,
      employeeName: " مروه ",
      employeeCode: "1234",
      ServicesType: "  طلب زياده ",
      servicesDate: "15-10-2024",
      display: (
        <div
          className=""
          onClick={() => {
            setShowServices(true);
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/icons/view.svg"}
            className="pointer"
            alt=""
          />
        </div>
      ),
      status: "مقبولة",
    };
  });

  const columns = [
    {
      name: "م",
      selector: (row) => row.id,
    },
    {
      name: "اسم الموظف",
      selector: (row) => row.employeeName,
    },
    {
      name: "الكود الوظيفي",
      selector: (row) => row.employeeCode,
    },
    {
      name: "نوع الخدمة",
      selector: (row) => row.ServicesType,
    },
    {
      name: "تاريخ الخدمة",
      selector: (row) => row.servicesDate,
    },

    {
      name: "عرض",
      selector: (row) => row.display,
    },
    {
      name: "الحاله",
      selector: (row) => row.status,
    },
  ];
  const { openHr, setOpenHr, HrType, setHrType } = useContext(AddHrType);
  // handle open services pdf files
  const [openPdf, setOpenPdf] = useState(false);

  useEffect(() => {
    setHrType("EmployeesServices");
  }, [openHr, HrType]);

  return (
    <div className="EmployeesServices">
      <Pdf
        PdfFile={process.env.PUBLIC_URL + "/example.pdf"}
        width={800}
        height={800}
        openPdf={openPdf}
        setOpenPdf={setOpenPdf}
      />

      <ShowServicesComponent
        showServices={showServices}
        setShowServices={setShowServices}
      />

      {openHr && HrType == "EmployeesServices" ? (
        <AddServices />
      ) : (
        <div className="row">
          <div className="col-md-3">
            <div className={`${style.servicesTypesContainer} `}>
              <SearchComponent />
              <p className="text-white mt-2">كل الخدمات</p>
              <div className="d-flex my-3 gap-3  border !border-transparent hover:!border-[#EFAA20] pointer">
                <div className={`${style.pdfbackground} `}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2650_24766)">
                      <path
                        d="M12.9842 15.7684H3.23463C3.04895 15.7684 2.89844 15.6178 2.89844 15.4322V0.975842C2.89844 0.790162 3.04895 0.639648 3.23463 0.639648H10.6309C10.7201 0.639648 10.8055 0.675083 10.8686 0.73812L13.222 3.09148C13.285 3.15451 13.3204 3.24004 13.3204 3.3292V7.36352C13.3204 7.5492 13.1699 7.69972 12.9842 7.69972C12.7986 7.69972 12.6481 7.5492 12.6481 7.36352V3.46845L10.4916 1.31204H3.57082V15.096H12.6481V13.415C12.6481 13.2294 12.7986 13.0788 12.9842 13.0788C13.1699 13.0788 13.3204 13.2294 13.3204 13.415V15.4322C13.3204 15.6178 13.1699 15.7684 12.9842 15.7684Z"
                        fill="white"
                      />
                      <path
                        d="M10.6246 17.7855H1.21119C1.02551 17.7855 0.875 17.635 0.875 17.4493V3.66539C0.875 3.47971 1.02551 3.3292 1.21119 3.3292H3.22836C3.41404 3.3292 3.56455 3.47971 3.56455 3.66539C3.56455 3.85107 3.41404 4.00158 3.22836 4.00158H1.54739V17.1131H10.2884V15.4322C10.2884 15.2465 10.439 15.096 10.6246 15.096C10.8103 15.096 10.9608 15.2465 10.9608 15.4322V17.4493C10.9608 17.635 10.8103 17.7855 10.6246 17.7855ZM12.978 3.66539H10.6246C10.439 3.66539 10.2884 3.51488 10.2884 3.3292V0.975842C10.2884 0.790162 10.439 0.639648 10.6246 0.639648C10.8103 0.639648 10.9608 0.790162 10.9608 0.975842V2.993H12.978C13.1636 2.993 13.3142 3.14352 13.3142 3.3292C13.3142 3.51488 13.1636 3.66539 12.978 3.66539Z"
                        fill="white"
                      />
                      <path
                        d="M17.016 13.7512H6.59401C6.40833 13.7512 6.25781 13.6007 6.25781 13.415V7.36354C6.25781 7.17786 6.40833 7.02734 6.59401 7.02734H17.016C17.2017 7.02734 17.3522 7.17786 17.3522 7.36354V13.415C17.3522 13.6007 17.2017 13.7512 17.016 13.7512ZM6.9302 13.0788H16.6798V7.69973H6.9302V13.0788Z"
                        fill="white"
                      />
                      <path
                        d="M7.93776 12.4064C7.75208 12.4064 7.60156 12.2558 7.60156 12.0702V8.70826C7.60156 8.52258 7.75208 8.37207 7.93776 8.37207H8.77824C9.42706 8.37207 9.95492 8.89993 9.95492 9.54875C9.95492 10.1976 9.42706 10.7254 8.77824 10.7254H8.27395V12.0702C8.27395 12.2558 8.12344 12.4064 7.93776 12.4064ZM8.27395 10.053H8.77824C9.05631 10.053 9.28253 9.82681 9.28253 9.54875C9.28253 9.27068 9.05631 9.04446 8.77824 9.04446H8.27395V10.053ZM11.535 12.4064H10.9635C10.7779 12.4064 10.6273 12.2558 10.6273 12.0702V8.70826C10.6273 8.52258 10.7779 8.37207 10.9635 8.37207H11.535C12.5176 8.37207 13.3169 9.1714 13.3169 10.1539V10.6246C13.3169 11.6071 12.5176 12.4064 11.535 12.4064ZM11.2997 11.734H11.535C12.1468 11.734 12.6445 11.2363 12.6445 10.6246V10.1539C12.6445 9.54216 12.1468 9.04446 11.535 9.04446H11.2997V11.734ZM14.3254 12.4064C14.1398 12.4064 13.9892 12.2558 13.9892 12.0702V8.70826C13.9892 8.52258 14.1398 8.37207 14.3254 8.37207H15.6702C15.8559 8.37207 16.0064 8.52258 16.0064 8.70826C16.0064 8.89394 15.8559 9.04446 15.6702 9.04446H14.6616V12.0702C14.6616 12.2558 14.5111 12.4064 14.3254 12.4064Z"
                        fill="white"
                      />
                      <path
                        d="M15.3366 10.7256H14.328C14.1424 10.7256 13.9918 10.5751 13.9918 10.3894C13.9918 10.2038 14.1424 10.0532 14.328 10.0532H15.3366C15.5222 10.0532 15.6728 10.2038 15.6728 10.3894C15.6728 10.5751 15.5222 10.7256 15.3366 10.7256ZM11.6384 6.3551H4.57838C4.3927 6.3551 4.24219 6.20459 4.24219 6.01891C4.24219 5.83323 4.3927 5.68271 4.57838 5.68271H11.6384C11.8241 5.68271 11.9746 5.83323 11.9746 6.01891C11.9746 6.20459 11.8241 6.3551 11.6384 6.3551ZM11.6384 5.01033H4.57838C4.3927 5.01033 4.24219 4.85981 4.24219 4.67413C4.24219 4.48845 4.3927 4.33794 4.57838 4.33794H11.6384C11.8241 4.33794 11.9746 4.48845 11.9746 4.67413C11.9746 4.85981 11.8241 5.01033 11.6384 5.01033ZM7.94032 3.66555H4.57838C4.3927 3.66555 4.24219 3.51504 4.24219 3.32936C4.24219 3.14368 4.3927 2.99316 4.57838 2.99316H7.94032C8.126 2.99316 8.27651 3.14368 8.27651 3.32936C8.27651 3.51504 8.126 3.66555 7.94032 3.66555Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2650_24766">
                        <rect
                          width="17.2131"
                          height="17.2131"
                          fill="white"
                          transform="translate(0.507812 0.606445)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-white">طلب اجازة</p>
              </div>
              <div className="d-flex my-3 gap-3  border !border-transparent hover:!border-[#EFAA20] pointer">
                <div className={`${style.pdfbackground} `}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2650_24766)">
                      <path
                        d="M12.9842 15.7684H3.23463C3.04895 15.7684 2.89844 15.6178 2.89844 15.4322V0.975842C2.89844 0.790162 3.04895 0.639648 3.23463 0.639648H10.6309C10.7201 0.639648 10.8055 0.675083 10.8686 0.73812L13.222 3.09148C13.285 3.15451 13.3204 3.24004 13.3204 3.3292V7.36352C13.3204 7.5492 13.1699 7.69972 12.9842 7.69972C12.7986 7.69972 12.6481 7.5492 12.6481 7.36352V3.46845L10.4916 1.31204H3.57082V15.096H12.6481V13.415C12.6481 13.2294 12.7986 13.0788 12.9842 13.0788C13.1699 13.0788 13.3204 13.2294 13.3204 13.415V15.4322C13.3204 15.6178 13.1699 15.7684 12.9842 15.7684Z"
                        fill="white"
                      />
                      <path
                        d="M10.6246 17.7855H1.21119C1.02551 17.7855 0.875 17.635 0.875 17.4493V3.66539C0.875 3.47971 1.02551 3.3292 1.21119 3.3292H3.22836C3.41404 3.3292 3.56455 3.47971 3.56455 3.66539C3.56455 3.85107 3.41404 4.00158 3.22836 4.00158H1.54739V17.1131H10.2884V15.4322C10.2884 15.2465 10.439 15.096 10.6246 15.096C10.8103 15.096 10.9608 15.2465 10.9608 15.4322V17.4493C10.9608 17.635 10.8103 17.7855 10.6246 17.7855ZM12.978 3.66539H10.6246C10.439 3.66539 10.2884 3.51488 10.2884 3.3292V0.975842C10.2884 0.790162 10.439 0.639648 10.6246 0.639648C10.8103 0.639648 10.9608 0.790162 10.9608 0.975842V2.993H12.978C13.1636 2.993 13.3142 3.14352 13.3142 3.3292C13.3142 3.51488 13.1636 3.66539 12.978 3.66539Z"
                        fill="white"
                      />
                      <path
                        d="M17.016 13.7512H6.59401C6.40833 13.7512 6.25781 13.6007 6.25781 13.415V7.36354C6.25781 7.17786 6.40833 7.02734 6.59401 7.02734H17.016C17.2017 7.02734 17.3522 7.17786 17.3522 7.36354V13.415C17.3522 13.6007 17.2017 13.7512 17.016 13.7512ZM6.9302 13.0788H16.6798V7.69973H6.9302V13.0788Z"
                        fill="white"
                      />
                      <path
                        d="M7.93776 12.4064C7.75208 12.4064 7.60156 12.2558 7.60156 12.0702V8.70826C7.60156 8.52258 7.75208 8.37207 7.93776 8.37207H8.77824C9.42706 8.37207 9.95492 8.89993 9.95492 9.54875C9.95492 10.1976 9.42706 10.7254 8.77824 10.7254H8.27395V12.0702C8.27395 12.2558 8.12344 12.4064 7.93776 12.4064ZM8.27395 10.053H8.77824C9.05631 10.053 9.28253 9.82681 9.28253 9.54875C9.28253 9.27068 9.05631 9.04446 8.77824 9.04446H8.27395V10.053ZM11.535 12.4064H10.9635C10.7779 12.4064 10.6273 12.2558 10.6273 12.0702V8.70826C10.6273 8.52258 10.7779 8.37207 10.9635 8.37207H11.535C12.5176 8.37207 13.3169 9.1714 13.3169 10.1539V10.6246C13.3169 11.6071 12.5176 12.4064 11.535 12.4064ZM11.2997 11.734H11.535C12.1468 11.734 12.6445 11.2363 12.6445 10.6246V10.1539C12.6445 9.54216 12.1468 9.04446 11.535 9.04446H11.2997V11.734ZM14.3254 12.4064C14.1398 12.4064 13.9892 12.2558 13.9892 12.0702V8.70826C13.9892 8.52258 14.1398 8.37207 14.3254 8.37207H15.6702C15.8559 8.37207 16.0064 8.52258 16.0064 8.70826C16.0064 8.89394 15.8559 9.04446 15.6702 9.04446H14.6616V12.0702C14.6616 12.2558 14.5111 12.4064 14.3254 12.4064Z"
                        fill="white"
                      />
                      <path
                        d="M15.3366 10.7256H14.328C14.1424 10.7256 13.9918 10.5751 13.9918 10.3894C13.9918 10.2038 14.1424 10.0532 14.328 10.0532H15.3366C15.5222 10.0532 15.6728 10.2038 15.6728 10.3894C15.6728 10.5751 15.5222 10.7256 15.3366 10.7256ZM11.6384 6.3551H4.57838C4.3927 6.3551 4.24219 6.20459 4.24219 6.01891C4.24219 5.83323 4.3927 5.68271 4.57838 5.68271H11.6384C11.8241 5.68271 11.9746 5.83323 11.9746 6.01891C11.9746 6.20459 11.8241 6.3551 11.6384 6.3551ZM11.6384 5.01033H4.57838C4.3927 5.01033 4.24219 4.85981 4.24219 4.67413C4.24219 4.48845 4.3927 4.33794 4.57838 4.33794H11.6384C11.8241 4.33794 11.9746 4.48845 11.9746 4.67413C11.9746 4.85981 11.8241 5.01033 11.6384 5.01033ZM7.94032 3.66555H4.57838C4.3927 3.66555 4.24219 3.51504 4.24219 3.32936C4.24219 3.14368 4.3927 2.99316 4.57838 2.99316H7.94032C8.126 2.99316 8.27651 3.14368 8.27651 3.32936C8.27651 3.51504 8.126 3.66555 7.94032 3.66555Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2650_24766">
                        <rect
                          width="17.2131"
                          height="17.2131"
                          fill="white"
                          transform="translate(0.507812 0.606445)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-white"> طلب توظيف</p>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div
              className={`${style.allServcies} w-100 allServciesContainer p-4`}
            >
              <p className="text-white  text-xl">كل الخدمات المخصصة </p>
              <div className="d-flex gap-3 mt-3 w-100">
                <p className="text-white">بحث</p>
                <Input className="w-100" placeholder="اسم الموظف" />
              </div>
              <fieldset className={`${style.allServciesTable} mt-5`}>
                <legend className="text-center ">كل النماذج</legend>

                {/* <DataTableComponent data={data} columns={columns} /> */}
                <div className="mt-3 !h-[400px] overflow-scroll scrollbar-none">
                <CustomTable columns={columns} data={data}>
                  {data && data.length > 0
                    ? data.map(
                        (
                          {
                            id,
                            employeeName,
                            employeeCode,
                            ServicesType,
                            servicesDate,
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
                            <TableCell>{employeeName}</TableCell>
                            <TableCell>{employeeCode}</TableCell>
                            <TableCell>{ServicesType}</TableCell>
                            <TableCell>{servicesDate}</TableCell>
                            <TableCell>{status}</TableCell>
                            <TableCell>{display}</TableCell>
                          </TableRow>
                        )
                      )
                    : null}
                </CustomTable>
                </div>



              </fieldset>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeesServices;
