import React, { useContext, useState } from "react";
import styles from "./MainProjects.module.css";
import "./MainProjects.css";
import DesignRequestChart from "../../../../Components/System/Requests/DesignRequestChart/DesignRequestChart";
import DataTableComponent from "../../../../Components/DataTableComponent.jsx";

import { Button } from "react-bootstrap";
import ConfirmPoper from "../../../../Components/System/ConfirmPoper";
import PieChart from "../../../../Components/pieChart";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ShowProjectComponent from "../../../../Components/System/Projects/ShowProjectComponent";
import EditProject from "../../../../Components/System/Projects/EditProject/EditProject";
import { AddReportType } from "../../../../Context/AddReport.js";
import Image from "../../../../Components/Image.jsx";
const NestedMainProjects = () => {
  const [showProject, setShowProject] = useState(false);
  const [editProject, setEditProject] = useState(false);
  const [ConfirmUpdate, setConfirmUpdate] = useState(false);

  const { reportType, setReportType } = useContext(AddReportType);

  // handle table data components
  const NestedMainProjectsdata = Array.from({ length: 3 }).map((_, index) => {
    return {
      id: 1,
      ProjectName: "BSA",
      ProjectNumber: "53543",
      ClientType: "فردي",
      createdAt: "19-1-2020",
      ProjectType: " تصميم",
      display: (
        <Image
          src={process.env.PUBLIC_URL + "/icons/view.png"}
          onClick={() => {
            setShowProject(true);
          }}
          className="display_project  rounded"
          alt=" display project"
        />
      ),
      edit: (
        <Image
          src={process.env.PUBLIC_URL + "/edit.png"}
          onClick={() => {
            setEditProject(true);
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
      name: "  نوع  العميل",
      selector: (row) => row.ClientType,
    },

    {
      name: "تاريخ الانشاء",
      selector: (row) => row.createdAt,
    },

    {
      name: "    عرض",
      selector: (row) => row.display,
    },
    {
      name: "  تعديل",
      selector: (row) => row.edit,
    },
  ];
  const { ProjectTime } = useParams();
  const { ProjectType } = useParams();
  console.log(ProjectTime);

  const getNestedColumns = () => {};

  // get all the main projects

  const getAllNestedData = () => {};
  useEffect(() => {
    getAllNestedData();
    setShowProject(false);

    setReportType("");
  }, [reportType]);

  return (
    <div className="AllRequests p-3">
      {!showProject ? (
        <div className=" NestedMainProjects  ">
          <div
            className={` ${styles.pieChartProjects} d-flex flex-column justify-content-center align-items-center`}
          >
            <p className="text-white">
              {" "}
              {ProjectType == "Design" ? "التصميم" : "الاشراف علي التنفيذ"}
            </p>
            <PieChart
              height={350}
              colors={["#EFAA20"]}
              series={[60]}
              labels={[
                ProjectType == "Design" ? "التصميم" : "الاشراف علي التنفيذ",
              ]}
            />
          </div>

          <fieldset className="TableContainer  py-3 px-2 mx-auto mt-3">
            <legend className="text-center ">كل المشاريع</legend>

            <div className="mt-3   ">
              <DataTableComponent
                className={"  !h-[400px]"}
                columns={columns}
                data={NestedMainProjectsdata}
              />
            </div>
          </fieldset>
        </div>
      ) : (
        <ShowProjectComponent
          showProject={showProject}
          setShowProject={setShowProject}
        />
      )}

      {editProject && (
        <EditProject
          editProject={editProject}
          setEditProject={setEditProject}
          setConfirmUpdate={setConfirmUpdate}
        />
      )}
      {ConfirmUpdate && (
        <ConfirmPoper
          confirmPoper={ConfirmUpdate}
          setConfirmPoper={setConfirmUpdate}
          setEditRequest={setEditProject}
          text={"تم تعديل الطلب فى المشاريع بنجاح  "}
        />
      )}
    </div>
  );
};
export default NestedMainProjects;
