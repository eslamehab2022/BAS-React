import React from 'react'
import MenuIconButton from '../components/MenuIconButton'
import { useSelector, useDispatch } from "react-redux";
import { toggleWidth } from '../slices/fullWidthSlice';
import { Search } from '../components/SearchInput';
import TasksTable from '../../Plans/Projects/components/TasksTable';
import ExternalTasksTable from '../components/Tables/ExternalTasksTable';

function ExternalTasksPage() {
    const dispatch = useDispatch();
  return (
    <div className="flex-1">
      <div className="grid grid-cols-2 py-2">
        <div className="flex items-center gap-3 ">
          <MenuIconButton onClick={() => dispatch(toggleWidth())} />
          <p className="text-[#EFAA20] font-semibold text-xl">كل المهام الخارجيه</p>
        </div>
        <Search />
      </div>
      <ExternalTasksTable />
    </div>
  )
}

export default ExternalTasksPage