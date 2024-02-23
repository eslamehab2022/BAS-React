import React, { useEffect, useMemo, useState } from "react";
import ConfirmPoper from "../../../../../Components/System/ConfirmPoper";
import EditDesignRequest from "../../../../../Components/System/Requests/EditRequest/EditDesignRequest";
import { useParams } from "react-router-dom";
import DesignRequestChart from "../../../../../Components/System/Requests/DesignRequestChart/DesignRequestChart";
import DataTableComponent from "../../../../../Components/DataTableComponent.jsx";
import ShowDesignRequest from "../../../../../Components/System/ShowRequest/ShowDesignRequest";
import "./index.css";
import DesignCasesChart from "../../../../../Components/System/Requests/DesignRequestChart/DesignCasesChart/DesignCasesChart";
import Image from "../../../../../Components/Image.jsx";
import { TableCell } from "../../../../../Components/Table/TableCell.jsx";
import { TableRow } from "../../../../../Components/Table/TableRow.jsx";
import CustomTable from "../../../../../Components/Table/index.jsx";
import {
  getDesignRequestsWithStatus,
  getRequestsWithStatus,
} from "../../../../../helper/fetchers/Requests.jsx";
import { toast } from "react-toastify";
import moment from "moment";
import Progress from "../../../../../Components/Progress.jsx";
const DesignCasesRequest = () => {
  const [showProject, setShowProject] = useState(false);
  const [editRequest, setEditRequest] = useState(false);
  const [ConfirmUpdate, setConfirmUpdate] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [status, setStatus] = useState();
  const [projectTypeAR, setProjectTypeAR] = useState("");
  const [chartColor, setChartColor] = useState("");
  const [designRequests, setDesignRequests] = useState();

  const DesignCasesProjects = Array.from({ length: 10 }).map((_, index) => {
    return {
      id: index + 1,
      ProjectName: "BSA",
      ProjectNumber: "53543",
      createdAt: "12-10-2023",
      ProjectType: "تصميم",
      status: projectType,
      display: (
        <Image
          src={process.env.PUBLIC_URL + "/icons/view.svg"}
          onClick={() => {
            setShowProject(true);
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
  const { DesignProjectType } = useParams();

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
      name: " تاريخ الانشاء",
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
  console.log(projectTypeAR);
  const [id, setId] = useState(null);
  const getDesignRequests = async () => {
    try {
      const { data } = await getDesignRequestsWithStatus(status);
      console.log("design requests based on status ");
      console.log(data);
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
    switch (DesignProjectType) {
      case "inProgress":
        setProjectType("inProgress");
        setProjectTypeAR("طلبات قيد التنفيذ");
        setChartColor("#4200FF");
        setStatus(1);

        break;
      case "pending":
        setProjectType("pending");
        setProjectTypeAR("طلبات فى انتظار الموافقة");
        setChartColor("#D59921");
        setStatus(0);

        break;

      case "rejected":
        setProjectType("rejected");
        setProjectTypeAR("طلبات مرفوضة");
        setChartColor("#E40038  ");
        setStatus(2);

        break;
      default:
        break;
    }
  }, [DesignProjectType]);
  useEffect(() => {
    getDesignRequests();
  }, [status, DesignProjectType]);

  return (
    <>
      {showProject ? (
        <div className="AllRequests-scroll  h-full scrollbar-none">
          <ShowDesignRequest
            DesignProjectType={DesignProjectType}
            setShowProject={setShowProject}
            id={id}
          />
        </div>
      ) : (
        <div className="AllRequests  h-full p-3">
          <div className="DesignCasesRequest  h-full ">
            <div className="designChartContainer d-flex flex-column justify-content-center align-items-center">
              <p className="my-3 fs-4 text-white">{projectTypeAR}</p>
              <DesignCasesChart
                color={chartColor}
                projectType={projectTypeAR}
              />
            </div>

            <fieldset className="TableContainer  w-100 py-3 px-2 mx-auto mt-3">
              <legend className="text-center ">
                {projectType === "inProgress"
                  ? "طلبات قيد التنفيذ ( تصميم )"
                  : projectType === "pending"
                  ? "طلبات فى انتظار الموافقة ( تصميم )"
                  : projectType === "confirm"
                  ? "طلبات منتهية ( تصميم )"
                  : projectType === "rejected"
                  ? "طلبات مرفوضة ( تصميم )"
                  : null}
              </legend>

              <div className="mt-3 !h-[400px] overflow-scroll scrollbar-none">
                {/* <DataTableComponent
                  
                  columns={columns}
                  data={DesignCasesProjects}
                /> */}
                {designRequests ? ( // Check if designRequests is not null or undefined
                  <CustomTable columns={columns} data={designRequests}>
                    {designRequests && designRequests.length > 0 // Check if designRequests has elements
                      ? designRequests.map(
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
                                  }}
                                  className=" edit_project  rounded"
                                  alt=" edit project"
                                />
                              </TableCell>
                            </TableRow>
                          )
                        )
                      : null}{" "}
                    {/* Render null if designRequests is empty */}
                  </CustomTable>
                ) : (
                  <Progress /> // Render Progress if designRequests is null or undefined
                )}
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
        <div>
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

export default DesignCasesRequest;
