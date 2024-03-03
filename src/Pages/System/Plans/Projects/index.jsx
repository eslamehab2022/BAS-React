import React, { useState } from "react";
import SystemControler from "../../../../Components/System/SystemControler/SystemControler";
import { IconButton } from "@mui/material";
import { IoMdArrowDropright } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CustomNav } from "../../PlanModel/components/CustomNav";
import { CiSearch } from "react-icons/ci";
import TasksTable from "./components/TasksTable";
import ProjectsTable from "./components/ProjectsTable";
import { CheckRole } from "../../../../helper/utils";
import { MenuPlansIcon } from "../../../../utiltis/Icons";
import useTableWidth from "../hooks/useTableWidth";
import { useProjectContext } from "../../PlanModel/context/ProjectContext";
import { useTaskContext } from "../../PlanModel/context/TaskContext";

export default function PlansProjects() {
  const { planType } = useParams();
  console.log("planType: ", planType);
  const { fullWidthTable, toggleFullWidth } = useTableWidth();

  return (
    <PageWrapper planType={planType}>
      <div className={`flex-1 flex gap-3`}>
        <SideBar fullWidth={fullWidthTable} />
        <div className="flex-1">
          <div className="grid grid-cols-2 py-2">
            <div className="flex items-center gap-3 ">
              <MenuIconButton onClick={toggleFullWidth} />
              <p className="text-[#EFAA20] font-semibold text-xl">
                {planType === "tasks"
                  ? "كل المهام"
                  : planType === "projects"
                  ? "كل المشاريع"
                  : null}
              </p>
            </div>
            <Search  />
          </div>

          {planType === "tasks" ? (
            <TasksTable />
          ) : planType === "projects" ? (
            <ProjectsTable />
          ) : null}
        </div>
      </div>
    </PageWrapper>
  );
}

const PageWrapper = ({ children, planType }) => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col">
      <SystemControler
        child={
          <div className="h-[88px] flex items-center">
            <IconButton
              onClick={() => {
                navigate(-1);
              }}
            >
              <IoMdArrowDropright color="white" fontSize={25} />
            </IconButton>
            {!CheckRole("موظف") && (
              <>
                {planType === "projects" ? (
                  <AddNewButton path={"/System/plans/projects/add-project"} />
                ) : planType === "tasks" ? (
                  <AddNewButton path={"/System/plans/tasks/add-task"} />
                ) : null}
              </>
            )}
          </div>
        }
      />
      {children}
    </div>
  );
};

const SideBar = ({ fullWidth }) => {
  const {filterProjects} = useProjectContext()
  const {filterTasks} = useTaskContext()
  return (
    <div
      className={`${
        fullWidth ? "hidden" : "block"
      } py-4 px-2 w-[261px] bg-[#1E1E2D] rounded-[19px]`}
    >
      <p className="text-white">كل المهام</p>
      <div className="flex  justify-center flex-col">
        {!CheckRole("موظف") && (
          <CustomNav
            title={"المشاريع"}
            path={"/System/plans/projects"}
            items={[
              { title: "كل المشاريع", onClick: () => {filterProjects()} },
              { title: "مشاريع قيد التنفيذ", onClick: () => {filterProjects("3")} },
              { title: "مشاريع معلقه", onClick: () => {filterProjects("4")} },
              { title: "مشاريع منتهيه", onClick: () => {filterProjects("0")} },
            ]}
          />
        )}

        <CustomNav
          title={"المهام"}
          path={"/System/plans/tasks"}
          items={[
            { title: "كل المهام", onClick: () => {filterTasks()} },
            { title: "مهام قيد التنفيذ", onClick: () => {filterTasks(1)} },
            { title: "مهام معلقه", onClick: () => {filterTasks(0)} },
            { title: "مهام منتهيه", onClick: () => {filterTasks(2)} },
          ]}
        />
      </div>
    </div>
  );
};

const AddNewButton = ({ path }) => {
  return (
    <Link
      to={path}
      className="bg-[#2B2B40] flex justify-center items-center text-white rounded-md h-[38px] w-[200px] text-base "
    >
      اضافه جديدة
    </Link>
  );
};

const MenuIconButton = ({ onClick }) => {
  return (
    <button onClick={onClick} aria-label="toggle" className="p-2">
      <MenuPlansIcon />
    </button>
  );
};


const Search = ({ ...props }) => {
  const [serach, setSearch] = useState("");
  return (
    <div
      dir="ltr"
      className="bg-[#2B2B40] px-3 py-2 rounded-[7.721px] flex items-center gap-2"
    >
      <CiSearch fontSize={20} fontWeight={500} />
      <input
        type="text"
        value={serach}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search...."
        className="w-full text-white bg-transparent text-start"
      />
    </div>
  );
};
