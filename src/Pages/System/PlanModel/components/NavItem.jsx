import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { DataTable } from "../Projects";

export const NavItem = ({ title , onClick }) => {
  

  return (
    <div className="tab p-2 my-2 rounded-md bg-[#2B2B40] text-white/50 text-end w-100">
      <button
        type="button"
        onClick={onClick}
        className="w-full text-right"
      >
        {title}
      </button>
    </div>
  );
};
