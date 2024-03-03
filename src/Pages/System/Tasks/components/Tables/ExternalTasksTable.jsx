import React, { Fragment } from "react";
import { myAxiosJson } from "../../../../../helper/https";
import { useQuery } from "react-query";
import CustomTable from "../../../../../Components/Table";
import { TableRow } from "../../../../../Components/Table/TableRow";
import { TableCell } from "../../../../../Components/Table/TableCell";
import {
  convertDateFormat,
  convertTimeFormat,
  statusEnum,
} from "../../../../../helper/utils";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
const fetcher = () => myAxiosJson.get("task/audit/confirmed").then(data=> data?.data?.tasks);

const useGetAuditConfirmedTasks = () => {
  return useQuery("audit-tasks", fetcher);
};

const Status = ({ title, color }) => {
  return (
    <Fragment>
      <div
        className="inline-flex w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: color }}
      ></div>
      {title}
    </Fragment>
  );
};

const columns = [
  { name: "م" },
  { name: "اسم المهمة" },
  { name: "نوع المشروع " },
  { name: "تاريخ التسليم" },
  { name: "وقت التسليم" },
  { name: "الحالة" },
  { name: "المسؤل" },
  { name: "الموظفين" },
  { name: "قبول" },
  { name: "عرض" },
];

function ExternalTasksTable() {
  const {
    data: tasks,
    isLoading,
    isError,
    error,
  } = useGetAuditConfirmedTasks();
  console.log(tasks);
  return (
    <CustomTable columns={columns} data={tasks}>
      {tasks && tasks.length > 0
        ? tasks.map(
            (
              {
                _id,
                projectName,
                isLate,
                endDate,
                endTime,
                status,
                createdBy,
                isConfirm,
                isExisting,
                assignTo,
                planId,
              },
              index
            ) => (
              <TableRow
                className={`my-2 border !border-[#efaa207f] ${
                  index % 2 === 0 ? "bg-[#151521]" : ""
                }`}
                key={_id}
              >
                <TableCell textColor="#ffffff7f">{index + 1}</TableCell>
                <TableCell>{projectName || "--------"}</TableCell>
                <TableCell>
                  {isExisting
                    ? planId?.projectType &&
                      [undefined, "تصميم", "اشراف علي التنفيذ"][
                        planId?.projectType
                      ]
                    : "--------"}
                  {planId?.projectType
                    ? [undefined, "تصميم", "اشراف علي التنفيذ"][
                        planId?.projectType
                      ]
                    : "--------"}
                </TableCell>
                <TableCell>
                  {convertDateFormat(endDate) || "--------"}
                </TableCell>
                <TableCell>
                  {convertTimeFormat(endTime) || "--------"}
                </TableCell>
                {/* <TableCell>{["معلقة", "أولية", "نهائية"][parseInt(status)] || "--------"}</TableCell> */}

                <TableCell cellClassName="flex items-center  gap-1">
                  {
                        isLate ?  
                        <Status title={"متأخرة"} color={"#9E0C1E"} />
                         :
                         <Status title={statusEnum[[parseInt(status)]].title} color={statusEnum[[parseInt(status)]].color} />
                        }
                </TableCell>
                <TableCell>{createdBy?.userName || "--------"}</TableCell>
                <TableCell>
                  {assignTo
                    ? assignTo?.map((employee, index) => (
                        <p className="" key={index}>
                          {employee?.userName}
                        </p>
                      ))
                    : "--------"}
                </TableCell>
                <TableCell>
                  {isConfirm ? (
                    <div className="bg-[#19B159] py-1.5 px-2 rounded w-fit h-auto">
                      <FaCheck />
                    </div>
                  ) : (
                    "--------"
                  )}
                </TableCell>
                <TableCell>
                  <div className="mt-2 flex justify-between items-start gap-1 my-1">
                    <ShowButton id={_id} />
                    {/* <OptionsButton id={_id} /> */}
                  </div>
                </TableCell>
              </TableRow>
            )
          )
        : null}
    </CustomTable>
  );
}

const ShowButton = ({ id }) => {
  return (
    <Link to={`/System/tasks/show-task/${id}`} id={id} aria-label="show">
      <img src="/icons/view.png" alt="" className="w-full" />
    </Link>
  );
};

export default ExternalTasksTable;
