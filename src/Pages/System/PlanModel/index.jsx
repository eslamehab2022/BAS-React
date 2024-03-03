import React, { useContext, useEffect, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import DatePicker from "react-datepicker";
import {
  Box,
  Button,
  IconButton,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import { Accordion } from "react-bootstrap";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import SystemControler from "../../../Components/System/SystemControler/SystemControler";

import { DataTable } from "./Projects";
import { TableContext } from "./context/TableContext";
import { ProjectContext } from "./context/ProjectContext";
import { CustomNav } from "./components/CustomNav";
import { AddModal } from "./components/AddModal";














export default function PlanModel() {
  const {fullWidthTable,setFullWidthTable} = useContext(TableContext)
  const [openModal, setOpenModal] = useState(true);
  const [content, setContent] = useState(
    <IconButton onClick={() => navigate("/System/plans")}>
      <IoMdArrowDropright color="white" fontSize={25} />
    </IconButton>
  );
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    if (pathname === "/System/plans/projects") {
      setContent(
        <button
          className="bg-[#2B2B40] text-white rounded-md h-[38px] w-[200px] text-base "
          onClick={() => setOpenModal(true)}
        >
          اضافه جديدة
        </button>
      );
    } else if (pathname === "/System/plans/tasks") {
      setContent(
        <button
          className="bg-[#2B2B40] text-white rounded-md h-[38px] w-[200px] text-base "
          onClick={() => setOpenModal(true)}
        >
          اضافه جديدة
        </button>
      );
    } else {
      setContent();
    }
  }, [pathname]);
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "500px" }}>
      <SystemControler
        child={
          <div className="h-[88px] flex items-center">
            <IconButton
              onClick={() => {
                navigate("/System/plans");
                setOpenModal(false);
              }}
            >
              <IoMdArrowDropright color="white" fontSize={25} />
            </IconButton>
            {content}
          </div>
        }
      />

      <div className={`flex-1 grid grid-cols-4 gap-4`}>
      {!fullWidthTable ?  
      <div className="py-4 px-2  bg-[#1E1E2D] rounded-[19px]">
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
                { title: "كل المهام"},
                { title: "مهام قيد التنفيذ"},
                { title: "مهام معلقه"},
                { title: "مهام منتهيه"},
              ]}
            />
          </div>
        </div>:null}
        <div className={`p-2 ${fullWidthTable ? "col-span-4":"col-span-3"}  bg-[#1E1E2D] rounded-[19px]`}>
          {openModal ? <AddModal /> : <Outlet />}
        </div>
      </div>
    </Box>
  );
}
