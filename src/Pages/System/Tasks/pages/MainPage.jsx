import React, { useEffect, useState } from "react";
import { CheckRole } from "../../../../helper/utils";
import {
  CompletedIcon,
  InProgressIcon,
  LatetIcon,
  ProjectsIcon,
  TasksIcon,
} from "../../../../utiltis/Icons";
import AllTasksLineChart from "../../Plans/Projects/AllTasksLineChart/AllTasksLineChart";
import { myAxiosJson } from "../../../../helper/https";
import { useNavigate } from "react-router-dom";
import style from "./PlansStyle.module.css";
import { useGetStatistics } from "../hooks/useGetStatistics";

function MainPage() {
  const navigate = useNavigate();
  const { statistics } = useGetStatistics();
  return (
    <div>
      <div className="border !border-[#efaa207f] rounded-[22px] px-3 mb-5">
        {/* <AllPlansPieChart /> */}
        <div className="container">
          {!CheckRole("موظف") && <ProjectsStatistics data={statistics} />}

          <TasksStatistics data={statistics} />
        </div>
      </div>
      <div className="h-[500px] border !border-[#efaa207f] mb-5">
        <AllTasksLineChart />
      </div>
    </div>
  );
}

export default MainPage;

const Card = ({ title, total, nested, icon }) => {
  return (
    <div
      className={`py-2 px-1 ${
        nested ? style.subCategoryCard : style.categoryCard
      }`}
    >
      <div className="d-flex justify-content-between    laptop:flex-row  tablet:flex-col mobile:flex-col w-90 h-100 align-items-center mx-2">
        <div>
          <p className="text-white text-bold laptop:text-xl  tablet:text-center tablet:text-sm mobile:text-sm">
            {title}
          </p>
        </div>
        <div className="d-flex flex-column">
          {icon}
          <p className="text-white laptop:text-xl  tablet:text-center text-xl tablet:text-sm mobile:text-sm">
            {total}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProjectsStatistics = ({ data }) => {
  return (
    <div className="row my-4">
      <div className="col-md-3">
        <Card
          title={"المشاريع"}
          total={data?.planCount}
          icon={<ProjectsIcon />}
        />
      </div>
      <div className="col-md-3">
        <Card
          title={"قيد التنفيذ"}
          total={data?.planStatistics?.IN_PROGRESS}
          icon={<InProgressIcon />}
          nested
        />
      </div>
      <div className="col-md-3">
        <Card
          title={"مكتملة"}
          total={data?.planStatistics?.DONE}
          icon={<CompletedIcon />}
          nested
        />
      </div>
      <div className="col-md-3">
        <Card
          title={"متأخره"}
          total={data?.planLateCount?.late}
          icon={<LatetIcon />}
          nested
        />
      </div>
    </div>
  );
};
const TasksStatistics = ({ data }) => {
  return (
    <div className="row my-4">
      <div className="col-md-3">
        <Card title={"المهام"} total={data?.tasksCount} icon={<TasksIcon />} />
      </div>
      <div className="col-md-3">
        <Card
          title={"قيد التنفيذ"}
          total={data?.taskStatistics?.IN_PROGRESS}
          icon={<InProgressIcon />}
          nested
        />
      </div>
      <div className="col-md-3">
        <Card
          title={"مكتملة"}
          total={data?.taskStatistics?.COMPLETED}
          icon={<CompletedIcon />}
          nested
        />
      </div>
      <div className="col-md-3">
        <Card
          title={"متأخره"}
          total={data?.taskLateCount?.late}
          icon={<LatetIcon />}
          nested
        />
      </div>
    </div>
  );
};
