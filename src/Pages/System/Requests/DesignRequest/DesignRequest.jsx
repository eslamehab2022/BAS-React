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
import { useEffect } from "react";
import { toast } from "react-toastify";
import { getRequestsWithProjectType } from "../../../../helper/fetchers/Requests.jsx";
import Progress from "../../../../Components/Progress.jsx";
import moment from "moment";
const DesignRequest = () => {
  const [showProject, setShowProject] = useState(false);
  const [editRequest, setEditRequest] = useState(false);
  const [ConfirmUpdate, setConfirmUpdate] = useState(false);
  const [DesignRequests, setDesignRequests] = useState();
  const [DesignProjectType, SetDesignProjectType] = useState("");
  const [id, setId] = useState(null);

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

  const getDesignRequests = async () => {
    try {
      const { data } = await getRequestsWithProjectType(1);
      if (data?.success) {
        setDesignRequests(data?.request);
      } else {
        console.log("Data retrieval failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    getDesignRequests();
  }, []);

  return (
    <>
      {showProject ? (
        <div className="AllRequests-scroll h-full scrollbar-none">
          <ShowDesignRequest
            DesignProjectType={DesignProjectType}
            setShowProject={setShowProject}
            id={id}
          />
        </div>
      ) : (
        <div className="AllRequests  h-full p-3">
          <div className="h-full  ">
            <div className="designChartContainer d-flex justify-content-center align-items-center">
              <DesignRequestChart />
            </div>

            <fieldset className="TableContainer  py-3 px-2 mx-auto mt-3">
              <legend className="text-center ">طلبات ( تصميم )</legend>

              <div className="mt-3 !h-[400px] overflow-scroll scrollbar-none ">
                {DesignRequests ? (
                  <CustomTable columns={columns} data={DesignRequests}>
                    {DesignRequests && DesignRequests.length > 0
                      ? DesignRequests.map(
                          (
                            {
                              _id,
                              projectName,
                              orderNumber,
                              createdAt,
                              projectType,
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
                              key={_id}
                            >
                              <TableCell textColor="#ffffff7f">
                                {index + 1}
                              </TableCell>
                              <TableCell>{projectName}</TableCell>
                              <TableCell>{orderNumber}</TableCell>
                              <TableCell>
                                {moment(createdAt).format("YYYY-MM-DD")}
                              </TableCell>
                              <TableCell>تصميم</TableCell>
                              <TableCell>
                                {status == 0
                                  ? "في الانتظار"
                                  : status == 1
                                  ? "قيد التنفيذ"
                                  : "مرفوضة"}
                              </TableCell>
                              <TableCell>
                                <Image
                                  src={
                                    process.env.PUBLIC_URL + "/icons/view.svg"
                                  }
                                  onClick={() => {
                                    setShowProject(true);
                                    SetDesignProjectType(
                                      DesignProjects[index]?.enStatus
                                    );
                                    setId(_id);
                                  }}
                                  className="display_project  rounded"
                                  alt=" display project"
                                />
                              </TableCell>
                              <TableCell>
                                <Image
                                  src={
                                    process.env.PUBLIC_URL + "/icons/edit.svg"
                                  }
                                  onClick={() => {
                                    setEditRequest(true);
                                    setId(_id);
                                  }}
                                  className=" edit_project  rounded"
                                  alt=" edit project"
                                />
                              </TableCell>
                            </TableRow>
                          )
                        )
                      : null}
                  </CustomTable>
                ) : (
                  <Progress />
                )}
              </div>
            </fieldset>
          </div>
        </div>
      )}

      <div className="AllRequests-scroll scrollbar-none">
        <EditDesignRequest
          editRequest={editRequest}
          id={id}
          setEditRequest={setEditRequest}
          setConfirmPoper={setConfirmUpdate}
          handleClose={() => {
            setEditRequest(false);
          }}
        />
      </div>

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
