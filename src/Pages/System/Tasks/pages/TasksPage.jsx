import React, { useState } from "react";
import { toggleWidth } from "../slices/fullWidthSlice";
import { useDispatch } from "react-redux";
import TasksTable from "../../Plans/Projects/components/TasksTable";
import MenuIconButton from "../components/MenuIconButton";
import { Search } from "../components/SearchInput";
function TasksPage() {
  const dispatch = useDispatch();
  return (
    <div className="flex-1">
      <div className="grid grid-cols-2 py-2">
        <div className="flex items-center gap-3 ">
          <MenuIconButton onClick={() => dispatch(toggleWidth())} />
          <p className="text-[#EFAA20] font-semibold text-xl">كل المهام</p>
        </div>
        <Search />
      </div>
      <TasksTable />
    </div>
  );
}

export default TasksPage;


