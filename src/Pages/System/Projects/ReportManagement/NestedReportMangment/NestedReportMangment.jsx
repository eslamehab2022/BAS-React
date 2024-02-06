import React, { useContext, useEffect, useMemo, useState } from "react";
import PieChart from "../../../../../Components/pieChart";
import DataTableComponent from "../../../../../Components/DataTableComponent";
import { useParams } from "react-router-dom";
import "./NestedReportMangment.css";
import { AddReportType } from "../../../../../Context/AddReport";

import ShowReviewReport from "../../../../../Components/System/Projects/ShowReviewReport/ShowReviewReport";
import EditReviewReport from "../../../../../Components/System/Projects/EditReviewReport/EditReviewReport";
import AddUpdateDesignReport from "../../../../../Components/System/Projects/AddDesignReport/AddUpdateDesignReport";
import ShowDesignReport from "../../../../../Components/System/Projects/ShowDesignReport/ShowDesignReport";
import Image from "../../../../../Components/Image";
import { TableCell } from "../../../../../Components/Table/TableCell";
import { TableRow } from "../../../../../Components/Table/TableRow";
import CustomTable from "../../../../../Components/Table";

const NestedReportMangment = () => {
  const { openReport, setOpenReport, reportType, setReportType } =
    useContext(AddReportType);
  const [ShowAddUpdateDesignReport, setShowAddUpdateDesignReport] =
    useState(false);
  const [showReport, setShowReport] = useState(false);
  const [editReport, setEditReport] = useState(false);
  const [id, setId] = useState(null);

  const reportsData = Array.from({ length: 3 }).map((_, index) => {
    return {
      id: 1,
      ProjectName: "BSA",
      ProjectNumber: "53543",
      ClientType: "فردي",
      createdAt: "19-1-2020",
      ProjectType: " تصميم",
      display: (
        <Image
          src={process.env.PUBLIC_URL + "/icons/view.svg"}
          onClick={() => {
            setShowReport(true);
          }}
          className="display_project  rounded"
          alt=" display project"
        />
      ),
      edit: (
        <Image
          src={process.env.PUBLIC_URL + "/icons/edit.svg"}
          onClick={() => {
            setEditReport(true);
            setId(reportsData[index].id);
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
      name: "اسم التقرير",
      selector: (row) => row.ProjectName,
    },
    {
      name: " رقم الطلب ",
      selector: (row) => row.ProjectNumber,
    },
    {
      name: "تاريخ الانشاء",
      selector: (row) => row.createdAt,
    },
    {
      name: "نوع المشروع",
      selector: (row) => row.ClientType,
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
  const { projectType } = useParams();
  useMemo(() => {
    if (editReport && reportType === "DesignReports") {
      setShowAddUpdateDesignReport(true);
    } else {
      setShowAddUpdateDesignReport(false);
    }
  }, [editReport, reportType]);
  useEffect(() => {
    setReportType(projectType);

    return () => {
      // setReportType('')
    };
  }, [projectType]);
  return (
    <>
      {editReport && reportType == "ReviewReports" && (
        <EditReviewReport
          editReport={editReport}
          setEditReport={setEditReport}
        />
      )}
      {showReport && projectType === "ReviewReports" ? (
        <ShowReviewReport setShowReport={setShowReport} />
      ) : showReport && projectType === "DesignReports" ? (
        <ShowDesignReport setShowReport={setShowReport} />
      ) : (
        <>
          {editReport && reportType == "DesignReports" ? (
            <AddUpdateDesignReport
              setEditReport={setEditReport}
              setId={setId}
              id={id}
            />
          ) : (
            <div className="ReportManagement NestedReportMangment">
              <div className="AllRequestsPieChartContainer d-flex justify-center align-items-center w-100 ">
                <PieChart
                  colors={["#EFAA20", "#E40038"]}
                  width={500}
                  labels={[" التصميم 50 ", "الاشراف على التنفيذ 50 "]}
                  series={[7, 3]}
                />
              </div>
              <fieldset className="TableContainer   px-2 mx-auto mt-3">
                {projectType === "DesignReports" ? (
                  <legend className="text-center "> كل التقارير (تصميم)</legend>
                ) : (
                  <legend className="text-center ">
                    كل التقارير (اشراف علي التنفيذ)
                  </legend>
                )}

                  <div className="mt-3 !h-[400px] overflow-scroll scrollbar-none">
                    {/* <DataTableComponent
                      className={"  !h-[400px]"}
                      columns={columns}
                      data={reportsData}
                    /> */}
                    <CustomTable columns={columns} data={reportsData}>
                  {reportsData && reportsData.length > 0
                    ? reportsData.map(
                        (
                          {
                            id,
                            ProjectName,
                            ProjectNumber,
                            createdAt,
                            // ClientType,
                            ProjectType,
                            display,
                            edit
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
                            {/* <TableCell>{ClientType}</TableCell> */}
                            <TableCell>{createdAt}</TableCell>
                            <TableCell>{ProjectType}</TableCell>
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
          )}
        </>
      )}
    </>
  );
};

export default NestedReportMangment;
