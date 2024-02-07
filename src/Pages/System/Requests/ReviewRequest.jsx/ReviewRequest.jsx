import React, { useState } from "react";
import "./index.css";
import DataTableComponent from "../../../../Components/DataTableComponent.jsx";

import { Button } from "react-bootstrap";

import ConfirmPoper from "../../../../Components/System/ConfirmPoper";
import ReviewRequestChart from "../../../../Components/System/Requests/ReviewRequestChart/ReviewRequestChart";
import EditReviewRequest from "../../../../Components/System/Requests/EditRequest/EditReviewRequest";
import ShowReviewRequest from "../../../../Components/System/ShowRequest/ShowReviewRequest";
import Image from "../../../../Components/Image.jsx";
import { TableCell } from "../../../../Components/Table/TableCell.jsx";
import { TableRow } from "../../../../Components/Table/TableRow.jsx";
import CustomTable from "../../../../Components/Table/index.jsx";
const ReviewRequest = () => {
  const [showProject, setShowProject] = useState(false);
  const [editRequest, setEditRequest] = useState(false);
  const [ConfirmUpdate, setConfirmUpdate] = useState(false);
  const [ReviewProjectType, SetReviewProjectType] = useState("");

  const DesignProjects = Array.from({ length: 10 }).map((_, index) => {
    return {
      id: index + 1,
      ProjectName: "BSA",
      ProjectNumber: "53543",
      createdAt: "12-10-2023",
      ProjectType: "اشراف",
      enStatus: "inProgress",
      status: "قيد الا نتظار",
      display: (
        <Image
          src={process.env.PUBLIC_URL + "/icons/view.svg"}
          onClick={() => {
            setShowProject(true);
            SetReviewProjectType(DesignProjects[index]?.enStatus);
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
      name: "  تاريخ الاستلام",
      selector: (row) => row.createdAt,
    },
    {
      name: "  تاريخ التسليم",
      selector: (row) => row.createdAt,
    },
    {
      name: "نوع المشروع",
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
        <div className="AllRequests-scroll scrollbar-none">
          <ShowReviewRequest
            ReviewProjectType={ReviewProjectType}
            setShowProject={setShowProject}
          />
        </div>
      ) : (
        <div className="AllRequests">
          <div>
            <div className="reviewChartContainer d-flex justify-content-center align-items-center">
              <ReviewRequestChart />
            </div>

            <fieldset className="TableContainer py-3 px-2 mx-auto mt-3">
              <legend className="text-center">طلبات ( اشراف )</legend>

              <div className="mt-3 !h-[400px] overflow-scroll scrollbar-none">
                {/* <DataTableComponent
                  className={"!h-[400px]"}
                  columns={columns}
                  data={DesignProjects}
                /> */}
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
              </div>
            </fieldset>
          </div>
        </div>
      )}

      {editRequest && (
        <EditReviewRequest
          editRequest={editRequest}
          setEditRequest={setEditRequest}
          setConfirmPoper={setConfirmUpdate}
        />
      )}
      {ConfirmUpdate && (
        <ConfirmPoper
          confirmPoper={ConfirmUpdate}
          setConfirmPoper={setConfirmUpdate}
          setEditRequest={setEditRequest}
          text={"تم تعديل الطلب فى المشاريع بنجاح "}
        />
      )}
    </>
  );
};

export default ReviewRequest;
