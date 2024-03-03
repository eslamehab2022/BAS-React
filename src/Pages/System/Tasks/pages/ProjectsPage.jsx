import React, { useState } from 'react'
import { MenuPlansIcon } from '../../../../utiltis/Icons';
import { CiSearch } from 'react-icons/ci';
import { toggleWidth } from '../slices/fullWidthSlice';
import { useDispatch } from "react-redux";
import ProjectsTable from '../../Plans/Projects/components/ProjectsTable';
function ProjectsPage() {
  const dispatch = useDispatch();
  return (
    <div>
      
      <div className="flex-1">
          <div className="grid grid-cols-2 py-2">
            <div className="flex items-center gap-3 ">
              <MenuIconButton onClick={() => dispatch(toggleWidth())} />
              <p className="text-[#EFAA20] font-semibold text-xl">
              كل المشاريع
              </p>
            </div>
            <Search  />
          </div>
          <ProjectsTable />
        </div>
    </div>
  )
}

export default ProjectsPage
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