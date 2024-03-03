import React, { Fragment } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import SystemControler from "../../../Components/System/SystemControler/SystemControler";
import { IconButton } from "@mui/material";
import { IoMdArrowDropright } from "react-icons/io";
import { Link, Outlet, useNavigate,useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleWidth } from "./slices/fullWidthSlice";
import TasksSidebar from "./components/Sidebar";
import { CheckRole } from "../../../helper/utils";
// const customization = {
//     backgroundColor:"transparent",
// }

export default function TasksModel() {

  const dispatch = useDispatch();

  return (
    <PageWrapper>
      <TasksSidebar />
      <div className="flex-1 overflow-y-scroll scrollbar-none">
        <Outlet />
      </div>
    </PageWrapper>
  );
}

const PageWrapper = ({ children }) => {
  const navigate = useNavigate();
  const {pathname} = useLocation()
  console.log(pathname);
  return (
    <Fragment>
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
                {pathname === "/System/tasks/plans" ? (
                  <AddNewButton path={"/System/tasks/plans/add-project"} />
                ) : pathname === "/System/tasks/tasks" ? (
                  <AddNewButton path={"/System/tasks/plans/add-task"} />
                ) : null}
              </>
            )}
          </div>
        }
      />
      <div className="h-full flex gap-3">{children}</div>
    </Fragment>
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