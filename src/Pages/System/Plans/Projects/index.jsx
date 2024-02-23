import React, { useContext, useEffect, useState } from "react";
import SystemControler from "../../../../Components/System/SystemControler/SystemControler";
import { IconButton } from "@mui/material";
import { IoMdArrowDropright } from "react-icons/io";

import { Link, useNavigate } from "react-router-dom";
import { CustomNav } from "../../PlanModel/components/CustomNav";
import { CiSearch } from "react-icons/ci";
import CustomTable from "../../PlanModel/components/CustomTable";
import { ProjectContext } from "../../PlanModel/context/ProjectContext";
import { DataTable } from "../../PlanModel/Projects";

const columns = [
  { name: "م" },
  { name: "اسم المشروع" },
  { name: "نوع المشروع " },
  { name: "موقع المشروع" },
  { name: "نوع العميل" },
  { name: "تاريخ التسليم" },
  { name: "الحالة" },
  { name: "المسؤل" },
  { name: "عرض" },
];
const columns2 = [
  { name: "م" },
  { name: "اسم المهمه" },
  { name: "نوع المشروع " },
  { name: "تاريخ التسليم" },
  { name: "وقت التسليم" },
  { name: "الحالة" },
  { name: "المسؤل" },
  { name: "الموظفين" },
  { name: "قبول" },
  { name: "عرض" },
];

export default function PlansProjects() {
  const [fullWidthTable, setFullWidthTable] = useState(false);
  const navigate = useNavigate();
  const { projects, setProjects } = useContext(ProjectContext);
  const [serach, setSearch] = useState("");
  useEffect(() => {
    setProjects(DataTable);
  }, [serach]);
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
            <Link
              to={"/System/plans/projects/add-project"}
              className="bg-[#2B2B40] flex justify-center items-center text-white rounded-md h-[38px] w-[200px] text-base "
              //   onClick={() => setOpenModal(true)}
            >
              اضافه جديدة
            </Link>
          </div>
        }
      />
      <div className={`flex-1 flex gap-3`}>
        <div
          className={`${
            fullWidthTable ? "hidden" : "block"
          } py-4 px-2 w-[261px] bg-[#1E1E2D] rounded-[19px]`}
        >
          <p className="text-white">كل المهام</p>
          <div className="flex  justify-center flex-col">
            <CustomNav
              title={"المشاريع"}
              path={"/System/plans/projects"}
              data={DataTable}
              setData={setProjects}
              items={[
                { title: "كل المشاريع", search: "الكل" },
                { title: "مشاريع قيد التنفيذ", search: "قيد التنفيذ" },
                { title: "مشاريع معلقه", search: "معلقه" },
                { title: "مشاريع منتهيه", search: "منتهيه" },
              ]}
            />
            <CustomNav
              title={"المهام"}
              path={"/System/plans/tasks"}
              data={DataTable}
              setData={setProjects}
              items={[
                { title: "كل المهام", search: "الكل" },
                { title: "مهام قيد التنفيذ", search: "قيد التنفيذ" },
                { title: "مهام معلقه", search: "معلقه" },
                { title: "مهام منتهيه", search: "منتهيه" },
              ]}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 py-2">
            <div className="flex items-center gap-3 ">
              <IconButton
                onClick={() => setFullWidthTable(!fullWidthTable)}
                aria-label="toggle"
              >
                <MenuIcon />
              </IconButton>
              <p className="text-[#EFAA20] font-semibold text-xl">
                {" "}
                كل المشاريع{" "}
              </p>
            </div>
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
          </div>
          <CustomTable
            columns={columns}
            data={[
              ...projects?.filter((project) =>
                project.projectName.includes(serach)
              ),
            ]}
            className={
              " border-golden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#EFAA20] overflow-scroll "
            }
          />
        </div>
      </div>
    </div>
  );
}

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
  >
    <line x1="5" y1="0.5" x2="17" y2="0.5" stroke="#D59921" />
    <line x1="5" y1="11.5" x2="17" y2="11.5" stroke="#D59921" />
    <line x1="4.37121e-08" y1="1" x2="2.14286" y2="1" stroke="#D59921" />
    <line
      x1="4.37121e-08"
      y1="11.7148"
      x2="2.14286"
      y2="11.7148"
      stroke="#D59921"
    />
    <line y1="6.5" x2="17" y2="6.5" stroke="#D59921" />
    <line y1="15.5" x2="17" y2="15.5" stroke="#D59921" />
  </svg>
);
