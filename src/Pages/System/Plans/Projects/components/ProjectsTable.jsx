import React, { useState } from "react";
import { TableCell } from "../../../../../Components/Table/TableCell";
import { TableRow } from "../../../../../Components/Table/TableRow";
import CustomTable from "../../../../../Components/Table";
import { convertDateFormat } from "../../../../../helper/utils";
import { Link } from "react-router-dom";
import SuccessfullModal from "../../../../../Components/Modals/SuccessfullModal";
import CustomModal from "../../../../../Components/Modals/CustomModal";
import { IoMdMore } from "react-icons/io";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useGetAllPlans } from "../../../../../hooks/fetchers/Plans";
import { useProjectContext } from "../../../PlanModel/context/ProjectContext";

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
const ShowButton = ({ id }) => {
  return (
    <Link to={`/System/plans/show-project/${id}`} id={id} aria-label="show">
      <img src="/icons/view.png" alt="" className="w-full" />
    </Link>
  );
};
function ProjectsTable() {
  // const { data } = useGetAllPlans();
  const {projects} = useProjectContext()
  console.log("getAllPlans: ",projects);
  return (
    <CustomTable columns={columns} data={projects}>
      {projects && projects.length > 0
        ? projects.map(({ _id,projectName, projectId, deliveryDate, status , isExist , assignTo }, index) => (
            <TableRow
              className={`my-2 border !border-[#efaa207f] ${
                index % 2 === 0 ? "bg-[#151521]" : ""
              }`}
              key={_id}
            >
              {/* <TableCell textColor="#ffffff7f">{id}</TableCell> */}
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                
                {isExist === true ?  projectId?.requestId?.projectName
              :   projectName
              }
                </TableCell>
              <TableCell>
                {projectId?.requestId?.projectType === 1
                  ? "تصميم"
                  : projectId?.requestId?.projectType === 2
                  ? "اشراف علي التنفيذ"
                  : "--------"}
              </TableCell>
              <TableCell>{projectId?.requestId?.buildingLocation || "--------"}</TableCell>
              <TableCell>
                {projectId?.requestId?.clientType === 1
                  ? "حكومي أو مستثمر"
                  : projectId?.requestId?.clientType === 2
                  ? "شركة أو مؤسسة"
                  : projectId?.requestId?.clientType === 3
                  ? "فردي"
                  : "--------"}
              </TableCell>
              <TableCell>{convertDateFormat(deliveryDate) || "--------"}</TableCell>
              <TableCell>
                {["منتهية", "مرفوضة", "متوقفة", "قيد التنفيذ", "معلقة"][parseInt(status)] || "--------"}
                
              </TableCell>
              {/* <TableCell>{projectId?.requestId?.ownerName || "--------"}</TableCell> */}
              <TableCell>
                <div className="flex flex-col justify-center items-center">

                {
                  assignTo?.map((manager)=>(<p>
                  {manager?.firstName + " " + manager?.lastName}
                  
                    </p>))
                }
                </div>
              </TableCell>
              <TableCell>
                <div className="mt-2 flex justify-between items-start gap-1 my-1">
                  <ShowButton id={_id} />
                  {/* <OptionsButton id={_id} /> */}
                </div>
              </TableCell>
            </TableRow>
          ))
        : null}
    </CustomTable>
  );
}

export default ProjectsTable;

const OptionsData = [
  {
    id: 1,
    title: "عرض",
    icon: "/menu-icons/view-icon.svg",
    path: "/System/plans/show-project",
  },
  {
    id: 2,
    title: "تعديل",
    icon: "/menu-icons/edit-icon.svg",
    path: "/System/plans/edit-project",
  },
];

const OptionsButton = ({ id }) => {
  const itemId = id;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showDelete, setShowDelete] = useState(false);
  const [showSuccessDelete, setShowSuccessDelete] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseDelete = () => setShowDelete(false);
  const handleCloseSuccessDelete = () => setShowSuccessDelete(false);
  const handleShowDelete = () => {
    setShowDelete(true);
  };
  const handleShowSuccessDelete = () => {
    setShowSuccessDelete(true);
  };
  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        aria-label="options"
        sx={{ p: 0 }}
      >
        <IoMdMore color="#EFAA20" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          sx: {
            borderRadius: "6px",
            minWidth: "130px",
            backgroundColor: "#FFFFFF",
          },
        }}
      >
        {OptionsData?.map(({ id, title, path, icon }) => (
          <MenuItem
            sx={{ px: "2px", borderBlock: "1px solid #aaaaaa76" }}
            onClick={handleClose}
            key={id}
          >
            <Link to={`${path}/${itemId}`} className="w-full">
              <div className=" flex gap-2">
                <img src={icon} alt="" className="w-4 " />
                <p className="text-black text-sm font-normal">{title}</p>
              </div>
            </Link>
          </MenuItem>
        ))}
        <MenuItem
          sx={{ px: "2px", borderBlock: "1px solid #aaaaaa76" }}
          onClick={handleClose}
          key={id}
        >
          <div onClick={handleShowDelete} className=" flex gap-2">
            <img src={"/menu-icons/delete-icon.svg"} alt="" className="w-4 " />
            <p className="text-black text-sm font-normal">{"حذف"}</p>
          </div>
        </MenuItem>
      </Menu>
      <CustomModal
        title={"التأكيد"}
        message={"هل انت متأكد من الحذف"}
        show={showDelete}
        handleClose={handleCloseDelete}
        handleSave={() => {
          handleCloseDelete();
          handleShowSuccessDelete();
        }}
      />
      <SuccessfullModal
        message={"تم حذف المشروع بنجاح"}
        handleClose={handleCloseSuccessDelete}
        show={showSuccessDelete}
      />
    </>
  );
};
