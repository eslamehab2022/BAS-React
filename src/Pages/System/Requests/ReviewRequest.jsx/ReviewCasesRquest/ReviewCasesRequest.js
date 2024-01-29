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
const ReviewCasesRequest = () => {
  const [showProject, setShowProject] = useState(false);
  const [editRequest, setEditRequest] = useState(false);
  const [ConfirmUpdate, setConfirmUpdate] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [projectTypeAR, setProjectTypeAR] = useState("");
  const [chartColor, setChartColor] = useState("");

  const { ReviewProjectType } = useParams();
  const ReviewCasesProjects = Array.from({ length: 10 }).map((_, index) => {
    return {
      id: 1,
      ProjectName: "BSA",
      ProjectNumber: "53543",
      createdAt: "12-10-2023",
      ProjectType: "تصميم",
      status: projectType,
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
      edit: (
        <img
          src={process.env.PUBLIC_URL + "/edit.png"}
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
  console.log(projectTypeAR);
  useMemo(() => {
    switch (ReviewProjectType) {
      case "inProgress":
        setProjectType("inProgress");
        setProjectTypeAR("طلبات قيد التنفيذ");
        setChartColor("#4200FF");
        break;
      case "pending":
        setProjectType("pending");
        setProjectTypeAR("طلبات فى انتظار الموافقة");
        setChartColor("#D59921");

        break;
      case "rejected":
        setProjectType("rejected");
        setProjectTypeAR("طلبات مرفوضة");
        setChartColor("#E40038  ");

        break;
    }
  }, [ReviewProjectType]);

  const callDesignData = () => {};

  useEffect(() => {
    //call design case data
    callDesignData();
  }, []);

  return (
    <div className=" p-3">
      {showProject ? (
        <div className="AllRequests-scroll">
          <ShowReviewRequest
            ReviewProjectType={ReviewProjectType}
            setShowProject={setShowProject}
          />
        </div>
      ) : (
        <div className="AllRequests">
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

              <div className="py-3">
                <DataTableComponent
                  className={" !h-[400px]  "}
                  columns={columns}
                  data={ReviewCasesProjects}
                />
              </div>
            </fieldset>
          </div>
        </div>
      )}
    
        {editRequest && (
              <div className="AllRequests-scroll">
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
