import React, { useEffect, useState } from "react";
import AllPlansPieChart from "../../../Components/System/Plans/AllPlansPieChart/AllPlansPieChart";
import { useQuery } from "react-query";
import { CustomNav } from "../PlanModel/components/CustomNav";
import SystemControler from "../../../Components/System/SystemControler/SystemControler";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { CheckRole } from "../../../helper/utils";
import Image from "../../../Components/Image";
import { QuickLinks } from "../../../utiltis/consts";
import style from "./PlansStyle.module.css";
import {
  CompletedIcon,
  InProgressIcon,
  LatetIcon,
  ProjectsIcon,
  TasksIcon,
} from "../../../utiltis/Icons";
import { useGetAllPlans } from "../../../hooks/fetchers/Plans";
import { useGetAllTasks } from "../../../hooks/fetchers/Tasks";
import AllTasksLineChart from "./Projects/AllTasksLineChart/AllTasksLineChart";
import { myAxiosJson } from "../../../helper/https";
export default function Plans() {
  const [statistics,setStatistics] = useState([])
  const navigate = useNavigate();
  useEffect(()=>{
    myAxiosJson('statics/tasks')
  .then(data=> {
    console.log(data?.data);
    setStatistics(data?.data);
  })
  },[])
  console.log("statistics         :",statistics);
  return (
    <>
      <SystemControler
        child={
          <IconButton
            onClick={() => {
              navigate(-1);
            }}
          >
            <IoMdArrowDropright color="white" fontSize={25} />
          </IconButton>
        }
      />
      <div className={`flex-1 grid grid-cols-12 gap-2`}>
        <div className="col-span-3 py-4 px-2  bg-[#1E1E2D] rounded-[19px]">
          <p className="text-white">كل المهام</p>
          <div className="flex  justify-center flex-col">
            {!CheckRole("موظف") && (
              <>
                <CustomNav
                  title={"المشاريع"}
                  path={"/System/plans/projects"}
                  items={[
                    { title: "مشاريع قيد التنفيذ" },
                    { title: "مشاريع معلقه" },
                    { title: "مشاريع منتهيه"},
                  ]}
                />
              </>
            )}

            <CustomNav
              title={"المهام"}
              path={"/System/plans/tasks"}
              items={[
                { title: "كل المهام"},
                { title: "مهام قيد التنفيذ"},
                { title: "مهام معلقه"},
                { title: "مهام منتهيه"},
              ]}
            />
          </div>
        </div>
        <div className="col-span-9 bg-[#1E1E2D] rounded-[22px]">
          <div className="border !border-[#efaa207f] rounded-[22px] px-3 mb-5">
            {/* <AllPlansPieChart /> */}
            <div className="container">
              {!CheckRole("موظف") && 
              <ProjectsStatistics data={statistics} />}

              <TasksStatistics data={statistics} />
            </div>
          </div>
          <div className="h-[500px] border !border-[#efaa207f] mb-5">
            <AllTasksLineChart/>
          </div>
        </div>
      </div>
    </>
  );
}

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

const ProjectsStatistics = ({data}) => {
  
  return (
    <div className="row my-4">
      <div className="col-md-3">
        <Card title={"المشاريع"} total={data?.planCount} icon={<ProjectsIcon />} />
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
        <Card title={"مكتملة"} total={data?.planStatistics?.DONE} icon={<CompletedIcon />} nested />
      </div>
      <div className="col-md-3">
        <Card title={"متأخره"} total={data?.planLateCount?.late} icon={<LatetIcon />} nested />
      </div>
    </div>
  );
};
const TasksStatistics = ({data}) => {
  
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
        <Card title={"مكتملة"} total={data?.taskStatistics?.COMPLETED} icon={<CompletedIcon />} nested />
      </div>
      <div className="col-md-3">
        <Card title={"متأخره"} total={data?.taskLateCount?.late} icon={<LatetIcon />} nested />
      </div>
    </div>
  );
};

const useGetStatistics = ()=>{
  const {data: statistics} = useQuery("statistics", myAxiosJson('statics/tasks'))
  console.log("statics: ",statistics);
  return statistics
}