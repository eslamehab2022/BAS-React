import React, { useState } from "react";
import "./index.css";
import DesignRequestChart from "../../../../Components/System/Requests/DesignRequestChart/DesignRequestChart";
import DataTableComponent from "../../../../Components/DataTableComponent.jsx";

import { Button } from "react-bootstrap";
import ShowDesignRequest from "../../../../Components/System/ShowRequest/ShowDesignRequest";
import EditDesignRequest from "../../../../Components/System/Requests/EditRequest/EditDesignRequest";
import ConfirmPoper from "../../../../Components/System/ConfirmPoper";
import Image from "../../../../Components/Image.jsx";
import CustomTable from "../../../../Components/Table/index.jsx";
import { TableRow } from "../../../../Components/Table/TableRow.jsx";
import { TableCell } from "../../../../Components/Table/TableCell.jsx";
const DesignRequest = () => {
  const [showProject, setShowProject] = useState(false);
  const [editRequest, setEditRequest] = useState(false);
  const [ConfirmUpdate, setConfirmUpdate] = useState(false);
  const [DesignProjectType, SetDesignProjectType] = useState("");

  const DesignProjects = Array.from({ length: 10 }).map((_, index) => {
    return {
      id: index + 1,
      ProjectName: "BSA",
      ProjectNumber: "53543",
      createdAt: "12-10-2023",
      ProjectType: "تصميم",
      status: "قيد الا نتظار",
      enStatus: "inProgress",
      display: (
        <Image
          src={process.env.PUBLIC_URL + "/icons/view.svg"}
          onClick={() => {
            setShowProject(true);
            SetDesignProjectType(DesignProjects[index]?.enStatus);
          }}
          className="display_project  rounded"
          alt=" display project"
        />
      ),
      edit: (
        <Image
          src={process.env.PUBLIC_URL + "/icons/edit.svg"}
          onClick={() => {
            setEditRequest(true);
          }}
          className=" edit_project  rounded"
          alt=" edit project"
        />
      ),
    };
  });

  console.log(DesignProjectType);

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
      name: "  تاريخ الانشاء",
      selector: (row) => row.createdAt,
    },

    {
      name: "   نوع المشروع",
      selector: (row) => row.ProjectType,
    },
    {
      name: "    الحالة",
      selector: (row) => row.status,
    },
    {
      name: "    عرض",
      selector: (row) => row.display,
    },
    {
      name: "    تعديل",
      selector: (row) => row.edit,
    },
  ];

  return (
    <>
      {showProject ? (
        <div className="AllRequests-scroll h-[600] scrollbar-none">
          
          <ShowDesignRequest
            DesignProjectType={DesignProjectType}
            setShowProject={setShowProject}
          />
        </div>
      ) : (
        <div className="AllRequests p-3">
          <div className="  ">
            <div className="designChartContainer d-flex justify-content-center align-items-center">
              <DesignRequestChart />
            </div>

            <fieldset className="TableContainer  py-3 px-2 mx-auto mt-3">
              <legend className="text-center ">طلبات ( تصميم )</legend>

              <div className="mt-3 !h-[400px] overflow-scroll scrollbar-none ">
                <CustomTable columns={columns} data={DesignProjects}>
                  {DesignProjects && DesignProjects.length > 0
                    ? DesignProjects.map(
                        (
                          {
                            id,
                            ProjectName,
                            ProjectNumber,
                            createdAt,
                            ProjectType,
                            status,
                            enStatus,
                            display,
                            edit,
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
                            <TableCell>{createdAt}</TableCell>
                            <TableCell>{ProjectType}</TableCell>
                            <TableCell>{status}</TableCell>
                            <TableCell>{display}</TableCell>
                            <TableCell>{edit}</TableCell>
                          </TableRow>
                        )
                      )
                    : null}
                </CustomTable>
                {/* <DataTableComponent
                  className={"!h-[400px]"}
                  columns={columns}
                  data={DesignProjects}
                /> */}
              </div>
            </fieldset>
          </div>
        </div>
      )}
      {editRequest && (
        <div className="AllRequests-scroll scrollbar-none">
          <EditDesignRequest
            editRequest={editRequest}
            setEditRequest={setEditRequest}
            setConfirmPoper={setConfirmUpdate}
          />
        </div>
      )}
      {ConfirmUpdate && (
        <div className="AllRequests-scroll scrollbar-none">
          <ConfirmPoper
            confirmPoper={ConfirmUpdate}
            setConfirmPoper={setConfirmUpdate}
            setEditRequest={setEditRequest}
            text={"تم تعديل الطلب فى المشاريع بنجاح  "}
          />
        </div>
      )}
    </>
  );
};

export default DesignRequest;
