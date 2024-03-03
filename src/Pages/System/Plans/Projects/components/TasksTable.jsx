import React, { Fragment } from 'react'
import { TableCell } from '../../../../../Components/Table/TableCell'
import { TableRow } from '../../../../../Components/Table/TableRow'
import CustomTable from '../../../../../Components/Table'
import { useGetAllTasks } from '../../../../../hooks/fetchers/Tasks';
import { statusEnum, convertDateFormat, convertTimeFormat } from '../../../../../helper/utils';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTaskContext } from '../../../PlanModel/context/TaskContext';

const columns2 = [
    { name: "م" },
    { name: "اسم المهمة" },
    { name: "نوع المشروع " },
    { name: "تاريخ التسليم" },
    { name: "وقت التسليم" },
    { name: "الحالة" },
    { name: "المسؤل" },
    { name: "الموظفين" },
    { name: "قبول" },
    { name: "عرض" },
  ];

function TasksTable() {
    const {tasks} = useTaskContext()
    console.log("useGetAllTasks: ",tasks);
  return (
    <>
    <CustomTable columns={columns2} data={tasks} >
    {tasks && tasks.length > 0
                ? tasks.map(
                    (
                      { _id,projectName, isLate, endDate,endTime, status,createdBy ,isConfirm, isExisting , assignTo ,planId },
                      index
                    ) => (
                      <TableRow
                        className={`my-2 border !border-[#efaa207f] ${
                          index % 2 === 0 ? "bg-[#151521]" : ""
                        }`}
                        key={_id}
                      >
                        <TableCell textColor="#ffffff7f">{index+1}</TableCell>
                        <TableCell>{ projectName || "--------"}</TableCell>
                        <TableCell>
                          {isExisting ? planId?.projectType && [undefined, "تصميم", "اشراف علي التنفيذ"][planId?.projectType]: "--------"}
                          { planId?.projectType ? [undefined, "تصميم", "اشراف علي التنفيذ"][planId?.projectType] : "--------"}</TableCell>
                        <TableCell>{convertDateFormat(endDate) || "--------"}</TableCell>
                        <TableCell>{convertTimeFormat(endTime) || "--------"}</TableCell>
                        {/* <TableCell>{["معلقة", "أولية", "نهائية"][parseInt(status)] || "--------"}</TableCell> */}
                        
                        <TableCell cellClassName="flex items-center  gap-1">
                        {
                        isLate ?  
                        <Status title={"متأخرة"} color={"#9E0C1E"} />
                         :
                         <Status title={statusEnum[[parseInt(status)]].title} color={statusEnum[[parseInt(status)]].color} />
                        }
                      
                      

                         
                        </TableCell>
                        <TableCell>{createdBy?.userName || "--------"}</TableCell>
                        <TableCell>{assignTo ? assignTo?.map((employee,index)=>(
                          <p className='' key={index}>{employee?.userName}</p>
                        )) : "--------"}</TableCell>
                        <TableCell>
                          {
                            isConfirm ? (<div className="bg-[#19B159] py-1.5 px-2 rounded w-fit h-auto">
                            <FaCheck />
                          </div>)
                          : "--------"
                          }
                          
                        </TableCell>
                        <TableCell>
                <div className="mt-2 flex justify-between items-start gap-1 my-1">
                  <ShowButton id={_id} />
                  {/* <OptionsButton id={_id} /> */}
                </div>
              </TableCell>
                      </TableRow>
                    )
                  )
                : null}
            </CustomTable>
    </>
  )
}

export default TasksTable

const Status = ({title , color}) => {
  return (<Fragment>
    <div className='inline-flex w-1.5 h-1.5 rounded-full' style={{backgroundColor: color}}></div> 
     {title}
    </Fragment>)
}

const ShowButton = ({ id }) => {
  return (
    <Link to={`/System/plans/show-task/${id}`} id={id} aria-label="show">
      <img src="/icons/view.png" alt="" className="w-full" />
    </Link>
  );
};
// const OptionsButton = ({ id }) => {
//   const itemId = id;
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [showDelete, setShowDelete] = useState(false);
//   const [showSuccessDelete, setShowSuccessDelete] = useState(false);

//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const handleCloseDelete = () => setShowDelete(false);
//   const handleCloseSuccessDelete = () => setShowSuccessDelete(false);
//   const handleShowDelete = () => {
//     setShowDelete(true);
//   };
//   const handleShowSuccessDelete = () => {
//     setShowSuccessDelete(true);
//   };
//   return (
//     <>
//       <IconButton
//         id="basic-button"
//         aria-controls={open ? "basic-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         onClick={handleClick}
//         aria-label="options"
//         sx={{ p: 0 }}
//       >
//         <IoMdMore color="#EFAA20" />
//       </IconButton>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           "aria-labelledby": "basic-button",
//           sx: {
//             borderRadius: "6px",
//             minWidth: "130px",
//             backgroundColor: "#FFFFFF",
//           },
//         }}
//       >
//         {OptionsData?.map(({ id, title, path, icon }) => (
//           <MenuItem
//             sx={{ px: "2px", borderBlock: "1px solid #aaaaaa76" }}
//             onClick={handleClose}
//             key={id}
//           >
//             <Link to={`${path}/${itemId}`} className="w-full">
//               <div className=" flex gap-2">
//                 <img src={icon} alt="" className="w-4 " />
//                 <p className="text-black text-sm font-normal">{title}</p>
//               </div>
//             </Link>
//           </MenuItem>
//         ))}
//         <MenuItem
//           sx={{ px: "2px", borderBlock: "1px solid #aaaaaa76" }}
//           onClick={handleClose}
//           key={id}
//         >
//           <div onClick={handleShowDelete} className=" flex gap-2">
//             <img src={"/menu-icons/delete-icon.svg"} alt="" className="w-4 " />
//             <p className="text-black text-sm font-normal">{"حذف"}</p>
//           </div>
//         </MenuItem>
//       </Menu>
//       <CustomModal
//         title={"التأكيد"}
//         message={"هل انت متأكد من الحذف"}
//         show={showDelete}
//         handleClose={handleCloseDelete}
//         handleSave={() => {
//           handleCloseDelete();
//           handleShowSuccessDelete();
//         }}
//       />
//       <SuccessfullModal
//         message={"تم حذف المشروع بنجاح"}
//         handleClose={handleCloseSuccessDelete}
//         show={showSuccessDelete}
//       />
//     </>
//   );
// };