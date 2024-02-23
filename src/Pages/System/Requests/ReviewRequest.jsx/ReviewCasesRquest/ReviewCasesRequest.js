import React, { useEffect, useMemo, useState } from "react";
import ConfirmPoper from "../../../../../Components/System/ConfirmPoper";
import EditDesignRequest from "../../../../../Components/System/Requests/EditRequest/EditDesignRequest";
import { useParams } from "react-router-dom";
import DesignRequestChart from "../../../../../Components/System/Requests/DesignRequestChart/DesignRequestChart";
import DataTableComponent from "../../../../../Components/DataTableComponent.jsx";
import ShowDesignRequest from "../../../../../Components/System/ShowRequest/ShowDesignRequest";
import "./index.css";
import DesignCasesChart from "../../../../../Components/System/Requests/DesignRequestChart/DesignCasesChart/DesignCasesChart";
import ShowReviewRequest from "../../../../../Components/System/ShowRequest/ShowReviewRequest";
import EditReviewRequest from "../../../../../Components/System/Requests/EditRequest/EditReviewRequest";
import { TableCell } from "../../../../../Components/Table/TableCell.jsx";
import { TableRow } from "../../../../../Components/Table/TableRow.jsx";
import CustomTable from "../../../../../Components/Table/index.jsx";
import { getReviewRequestsWithStatus } from "../../../../../helper/fetchers/Requests.jsx";
import { toast } from "react-toastify";
import Progress from "../../../../../Components/Progress.jsx";
import Image from "../../../../../Components/Image.jsx";
import moment from "moment";
const ReviewCasesRequest = () => {
  const [showProject, setShowProject] = useState(false);
  const [editRequest, setEditRequest] = useState(false);
  const [ConfirmUpdate, setConfirmUpdate] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [projectTypeAR, setProjectTypeAR] = useState("");
  const [chartColor, setChartColor] = useState("");
  const [status, setStatus] = useState();
  const { ReviewProjectType } = useParams();

  console.log(projectTypeAR);
  useMemo(() => {
    switch (ReviewProjectType) {
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
        setChartColor("#E40038 ");
        setStatus(2);

        break;
      default:
        break;
    }
  }, [ReviewProjectType]);

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
      selector: (row) => row.orderNumber,
    },
    {
      name: "  تاريخ الاستلام",
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
  const [id, setId] = useState(null);
  const [reviewRequests, setReviewRequests] = useState();
  const getReviewRequests = async () => {
    try {
      const { data } = await getReviewRequestsWithStatus(status);
      if (data?.success) {
        setReviewRequests(data?.request);
      } else {
        console.log("Data retrieval failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    getReviewRequests();
  }, [status]);
  useEffect(() => {
    getReviewRequests();
  }, [ReviewProjectType]);

  return (
    <div className=" p-3">
      {showProject ? (
        <div className="AllRequests-scroll  h-full scrollbar-none">
          <ShowReviewRequest
            ReviewProjectType={ReviewProjectType}
            setShowProject={setShowProject}
            id={id}
          />
        </div>
      ) : (
        <div className="AllRequests  h-full">
          <div className="ReviewCasesRequest  ">
            <div className="reviewChartContainer d-flex flex-column justify-content-center align-items-center">
              <p className="my-3 fs-4 text-white">{projectTypeAR}</p>
              <DesignCasesChart
                color={chartColor}
                projectType={projectTypeAR}
              />
            </div>

            <fieldset className="TableContainer  w-100 py-3 px-2 mx-auto mt-3">
              <legend className="text-center ">
                {projectType === "inProgress"
                  ? "طلبات قيد التنفيذ ( اشراف )"
                  : projectType === "pending"
                  ? "طلبات فى انتظار الموافقة ( اشراف )"
                  : projectType === "rejected"
                  ? "طلبات مرفوضة ( اشراف )"
                  : null}
              </legend>

              <div className="mt-3 !h-[400px] overflow-scroll scrollbar-none">
              

                {reviewRequests ? ( // Check if reviewRequests is not null or undefined
                  <CustomTable columns={columns} data={reviewRequests}>
                    {reviewRequests && reviewRequests.length > 0 // Check if reviewRequests has elements
                      ? reviewRequests.map(
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
                              <TableCell>اشراف علي التنفيذ</TableCell>
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
          <EditReviewRequest
            editRequest={editRequest}
            setEditRequest={setEditRequest}
            setConfirmPoper={setConfirmUpdate}
          />
        </div>
      )}
      {ConfirmUpdate && (
        <ConfirmPoper
          confirmPoper={ConfirmUpdate}
          setConfirmPoper={setConfirmUpdate}
          setEditRequest={setEditRequest}
          text={"تم تعديل الطلب فى المشاريع بنجاح  "}
        />
      )}
    </div>
  );
};

export default ReviewCasesRequest;
