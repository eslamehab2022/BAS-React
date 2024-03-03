import React from "react";
import { Sidebar } from "react-pro-sidebar";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { CustomNav } from "../../../PlanModel/components/CustomNav";
import { CheckRole } from "../../../../../helper/utils";

function TasksSidebar() {
  const tasksMenuCollapsed = useSelector(
    ({ tasksMenuCollapsed }) => tasksMenuCollapsed
  );
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Sidebar
      backgroundColor="transparent"
      rtl={true}
      rootStyles={{
        height: "100%",
        border: "none !important",
      }}
      collapsed={tasksMenuCollapsed}
      collapsedWidth={0}
    >
      <div className="p-2 bg-[#1E1E2D] rounded-2xl h-full">
        {!(CheckRole("موظف") || CheckRole("مدقق")) && (
          <CustomNav
            title={"المشاريع"}
            path={"/System/tasks/plans"}
            items={[
              { title: "مشاريع قيد التنفيذ" },
              { title: "مشاريع معلقه" },
              { title: "مشاريع منتهيه" },
            ]}
          />
        )}

        <CustomNav
          title={"المهام"}
          path={"/System/tasks/tasks"}
          items={[
            { title: "كل المهام" },
            { title: "مهام قيد التنفيذ" },
            { title: "مهام معلقه" },
            { title: "مهام منتهيه" },
          ]}
        />
        {CheckRole("مدقق") && (
          <CustomNav
            title={"المهام الخارجيه"}
            path={"/System/tasks/external-tasks"}
            items={[
              { title: "كل المهام" },
              { title: "مهام قيد التنفيذ" },
              { title: "مهام معلقه" },
              { title: "مهام منتهيه" },
            ]}
          />
        )}
      </div>
    </Sidebar>
  );
}

export default TasksSidebar;
