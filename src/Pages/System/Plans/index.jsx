import React from "react";
import AllPlansPieChart from "../../../Components/System/Plans/AllPlansPieChart/AllPlansPieChart";
import { CustomNav } from "../PlanModel/components/CustomNav";
import SystemControler from "../../../Components/System/SystemControler/SystemControler";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";

export default function Plans() {
  const navigate = useNavigate();
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
            <CustomNav
              title={"المشاريع"}
              path={"/System/plans/projects"}
              items={[
                { title: "مشاريع قيد التنفيذ", search: "قيد التنفيذ" },
                { title: "مشاريع معلقه", search: "معلقه" },
                { title: "مشاريع منتهيه", search: "منتهيه" },
              ]}
            />
            <CustomNav
              title={"المهام"}
              path={"/System/plans/tasks"}
              items={[
                { title: "مهمة 1" },
                { title: "مهمة 2" },
                { title: "مهمة 3" },
              ]}
            />
          </div>
        </div>
        <div className="col-span-9 bg-[#1E1E2D] rounded-[22px] ">
          <div className="mb-5 flex justify-center border !border-[#efaa207f] rounded-[22px]">
            <AllPlansPieChart />
          </div>
          <div className="h-[500px] border !border-[#efaa207f] mb-5"></div>
        </div>
      </div>
    </>
  );
}
