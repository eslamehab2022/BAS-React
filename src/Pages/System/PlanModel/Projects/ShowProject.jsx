import React, { useState } from "react";
import { IoMdMore } from "react-icons/io";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { FormModal } from "../components/FormModal";
import UploadFile from "../components/UploadFile";
import CustomModal from "../../../../Components/Modals/CustomModal";
import { IoMdArrowDropright } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import SystemControler from "../../../../Components/System/SystemControler/SystemControler";
import SuccessfullModal from "../../../../Components/Modals/SuccessfullModal";
import CommentModel from "../../../../Components/Modals/CommentModel";
import { useGetProject } from "../../../../hooks/fetchers/Projects";
import { useGetPlan } from "../../../../hooks/fetchers/Plans";
import { CheckRole, convertDateFormat } from "../../../../helper/utils";
import { myAxiosJson } from "../../../../helper/https";
import Cookies from "js-cookie";
import {
  CalcIcon,
  DeleteIcon,
  DowloadIcon,
  EditIcon,
  FaCheck,
  PeopleIcon,
  RefuseIcon,
  StoppingIcon,
} from "../../../../utiltis/Icons";
import useSuccessfullModal from "../../../../Components/Modals/hooks/useSuccessfullModal";
import useCustomModal from "../../../../Components/Modals/hooks/useCustomModal";
import useCommentModel from "../../../../Components/Modals/hooks/useCommentModel";
import PreviewImage from "../../../../Components/Modals/PreviewImage";
export default function ShowProject() {
  const { projectId } = useParams();
  const { data } = useGetPlan(projectId);
  console.log("GetProject: ", data);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log("event: ", event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <PageWrapper>
      <div className="border rounded-[19px] text-white !border-[#EFAA20] h-full">
        <div className="flex justify-between p-4 border rounded-[19px] !border-[#EFAA20]">
          <div className="flex flex-col justify-center gap-4">
            <p className="font-normal text-lg">
              انشآت بواسطة :{" "}
              <span className="me-1 text-white/20">
                {data?.projectId?.requestId?.ownerName}
              </span>
            </p>
            <p className="font-normal text-lg">
              نوع المشروع :{" "}
              <span className="me-1 text-white/20">
                {
                  [undefined, "تصميم", "اشراف علي التنفيذ"][
                    data?.projectId?.requestId?.projectType
                  ]
                }
              </span>
            </p>
            <p className="font-normal text-lg">
              نوع العميل :{" "}
              <span className="me-1 text-white/20">
                {
                  [undefined, "حكومي أو مستثمر", "شركة أو مؤسسة", "فردي"][
                    data?.projectId?.requestId?.clientType
                  ]
                }
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <p className="font-normal text-lg">
              الحالة :{" "}
              <span>
                {
                  ["معلقة", "قيد التنفيذ", "مرفوضة", "متوقفة", "منتهية"][
                    data?.status
                  ]
                }
              </span>
            </p>

            <div className="flex items-center gap-2">
              {CheckRole("مدير") ? (
                <>
                  <RefuseProject id={projectId} />
                  <StopProject id={projectId} />
                  <DeleteProject id={projectId} />

                  <button
                    onClick={() =>
                      navigate(`/System/plans/edit-project/${data?._id}`)
                    }
                    className="bg-[#19B159] rounded-[3px] flex justify-center items-center w-6 h-6"
                  >
                    <EditIcon />
                  </button>
                </>
              ) : (
                <AcceptProject id={projectId} />
              )}

              <button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className=""
              >
                <IoMdMore fontSize={25} />
              </button>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                  sx: {
                    backgroundColor: "white",
                    position: "relative",
                  },
                  // className: "before:absolute before:border-8 before:bg-red-200 before:top-0 before:left-0"
                }}
              >
                <MenuItem
                  sx={{
                    color: "black !important",
                    boxShadow: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
                    display: "flex",
                    gap: 1,
                  }}
                  onClick={handleClose}
                >
                  <DowloadIcon />
                  الطلب
                </MenuItem>
                <MenuItem
                  sx={{
                    my: 1,
                    color: "black !important",
                    boxShadow: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
                    display: "flex",
                    gap: 1,
                  }}
                  onClick={handleClose}
                >
                  <PeopleIcon />
                  العميل
                </MenuItem>
                <MenuItem
                  sx={{
                    color: "black !important",
                    boxShadow: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
                    display: "flex",
                    gap: 1,
                  }}
                  onClick={handleClose}
                >
                  <CalcIcon />
                  الحسابات
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4 h-[700px] overflow-scroll scrollbar-none">
          <FormModal title={"بيانات المشروع"}>
            <div className="grid grid-cols-2 gap-4">
              <p className="font-normal text-lg">
                اسم المشروع :{" "}
                <span className="me-1 text-white/20">
                  {data?.projectId?.requestId?.projectName}
                </span>
              </p>
              <p className="font-normal text-lg">
                المدينة :{" "}
                <span className="me-1 text-white/20">
                  {data?.projectId?.requestId?.city}
                </span>
              </p>
              <p className="font-normal text-lg">
                موقع المشروع :{" "}
                <span className="me-1 text-white/20">
                  {data?.projectId?.requestId?.buildingLocation}
                </span>
              </p>
            </div>
          </FormModal>
          <FormModal title={" المسؤلين"}>
            <p className="font-semibold text-base mb-3">المشرف العام :</p>

            <div className="grid grid-cols-2 gap-5">
              {data?.assignTo?.map((item) => (
                <>
                  <div className="bg-[#414162] p-2 rounded-[7px] flex gap-2">
                    <div className=" rounded-full w-8 h-8">
                      <img
                        src="/icons/avatar.png"
                        alt=""
                        className="w-full object-fill"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-xs">{item?.firstName}</p>
                      <p className="font-medium text-xs text-[#D59921]">
                        {item?.role + " - " + item?.country}
                      </p>
                    </div>
                  </div>
                </>
              ))}
              {/* <div className="bg-[#414162] p-2 rounded-[7px] flex gap-2">
                <div className=" rounded-full w-8 h-8">
                  <img
                    src="/icons/avatar.png"
                    alt=""
                    className="w-full object-fill"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-medium text-xs">م.اشرف</p>
                  <p className="font-medium text-xs text-[#D59921]">
                    مدير مكتب - مصر
                  </p>
                </div>
              </div> */}
            </div>
          </FormModal>
          <FormModal title={"تفاصيل المهمه"}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <p className="font-normal text-lg">
                تاريخ الاستلام :{" "}
                <span className="me-1 text-white/20">
                  {" "}
                  {convertDateFormat(data?.endDate)}
                </span>
              </p>
              <p className="font-normal text-lg">
                تاريخ التسليم :
                <span className="me-1 text-white/20">
                  {" "}
                  {convertDateFormat(data?.deliveryDate)}
                </span>
              </p>
            </div>
            <div className="">
              <p className="text-base font-normal mb-2">وصف المهمه</p>
              <p className="border !border-[#D59921] h-44 p-2 text-white/50">
                {data?.notesProject}
              </p>
            </div>
          </FormModal>
          <FormModal title={"ملاحظات العميل"}>
            <div className="">
              <p className="text-base font-normal mb-2">ملاحظات العميل</p>
              <p className="border !border-[#D59921] h-44 p-2 text-white/50">
                {data?.notesClinte}
              </p>
            </div>
          </FormModal>
          <FormModal title={"ملفات المشروع"}>
            <div className="flex gap-3">
              <FileList/>
            </div>
          </FormModal>
          <FormModal title={"المرفقات"}>
            <div className="flex gap-3">
            <FileItem/>
            </div>
          </FormModal>
        </div>
      </div>
    </PageWrapper>
  );
}

const FileList = ({data})=>{

return <>
{data?.map(({},index)=>(
  <FileItem src  key={index}/>
))}
</>
}
const FileItem = ({src}) => {
  const [open, setOpen] = useState(false);
  return (<PreviewImage
    imgSrc={src}
    onClose={()=>{setOpen(!open)}}
    showImg={open}
    />)
}

const PageWrapper = ({ children }) => {
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
      {children}
    </>
  );
};

const AcceptProject = ({ id }) => {
  const {
    handleShow: handleShowAccept,
    handleClose: handleCloseAccept,
    show: showAccept,
  } = useCustomModal();
  const {
    handleShowSuccess: handleShowSuccessAccept,
    handleCloseSuccess: handleCloseSuccessAccept,
    showSuccess: showSuccessAccept,
  } = useSuccessfullModal();
  return (
    <>
      <button
        onClick={handleShowAccept}
        className="bg-[#19B159] rounded-[3px] flex justify-center items-center px-2 h-6"
      >
        <FaCheck />
        قبول
      </button>
      <CustomModal
        title={"التأكيد"}
        message={"هل انت متأكد من القبول"}
        show={showAccept}
        handleClose={handleCloseAccept}
        handleSave={() => {
          myAxiosJson
            .patch(`plan/confirm/${id}`)
            .then((res) => {
              console.log(res);
              handleShowSuccessAccept();
            })
            .catch((err) => {
              console.log(err);
            });
          handleCloseAccept();
        }}
      />
      <SuccessfullModal
        message={"تم قبول المشروع بنجاح"}
        handleClose={handleCloseSuccessAccept}
        show={showSuccessAccept}
      />
    </>
  );
};
const DeleteProject = ({ id }) => {
  const {
    handleShow: handleShowDelete,
    handleClose: handleCloseDelete,
    show: showDelete,
  } = useCustomModal();
  const {
    handleShowSuccess: handleShowSuccessDelete,
    handleCloseSuccess: handleCloseSuccessDelete,
    showSuccess: showSuccessDelete,
  } = useSuccessfullModal();
  const handleDelete = (id, cb) => {
    myAxiosJson
      .delete(`plan/${id}`)
      .then((data) => {
        cb();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <button
        onClick={handleShowDelete}
        className="bg-[#E40038] rounded-[3px] flex  justify-center items-center w-6 h-6"
      >
        <DeleteIcon />
      </button>
      <CustomModal
        title={"التأكيد"}
        message={"هل انت متأكد من الحذف"}
        show={showDelete}
        handleClose={handleCloseDelete}
        handleSave={() => {
          handleCloseDelete();

          handleDelete(id, handleShowSuccessDelete);
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

const StopProject = ({ id }) => {
  const [stopComment, setStopComment] = useState("");
  const {
    handleShow: handleShowStop,
    handleClose: handleCloseStop,
    show: showStop,
  } = useCustomModal();
  const {
    handleShowSuccess: handleShowSuccessStop,
    handleCloseSuccess: handleCloseSuccessStop,
    showSuccess: showSuccessStop,
  } = useSuccessfullModal();
  const {
    handleShowComment: handleShowCommentStop,
    handleCloseComment: handleCloseCommentStop,
    showComment: showCommentStop,
  } = useCommentModel();
  return (
    <>
      <button
        onClick={handleShowStop}
        className="bg-[#EFAA20] rounded-[3px] text-[11px] flex gap-1 justify-center items-center h-6 p-2"
      >
        توقف
        <StoppingIcon />
      </button>

      <CustomModal
        title={"التأكيد"}
        message={"هل انت متأكد من توقف هذا المشروع"}
        show={showStop}
        handleClose={handleCloseStop}
        handleSave={() => {
          handleCloseStop();
          handleShowCommentStop();
        }}
      />

      <CommentModel
        message={"اترك تعليقاً ...."}
        show={showCommentStop}
        setComment={setStopComment}
        handleClose={handleCloseCommentStop}
        handleSave={() => {
          console.log({ reasonStopped: stopComment });
          myAxiosJson
            .patch(`plan/stoped/${id}`, {
              reasonStopped: stopComment,
            })
            .then((res) => {
              console.log(res);
              handleShowSuccessStop();
            })
            .catch((err) => {
              console.log(err);
            });
          handleCloseCommentStop();
        }}
      />

      <SuccessfullModal
        message={"تم توقف المشروع بنجاح"}
        handleClose={handleCloseSuccessStop}
        show={showSuccessStop}
      />
    </>
  );
};

const RefuseProject = ({ id }) => {
  const {
    handleShow: handleShowRefuse,
    handleClose: handleCloseRefuse,
    show: showRefuse,
  } = useCustomModal();

  const {
    handleShowSuccess: handleShowSuccessRefuse,
    handleCloseSuccess: handleCloseSuccessRefuse,
    showSuccess: showSuccessRefuse,
  } = useSuccessfullModal();

  const {
    handleShowComment: handleShowCommentRefuse,
    handleCloseComment: handleCloseCommentRefuse,
    showComment: showCommentRefuse,
  } = useCommentModel();

  const [refuseComment, setRefuseComment] = useState("");
  return (
    <>
      <button
        onClick={handleShowRefuse}
        className="bg-[#EFAA20] rounded-[3px] text-[11px] flex gap-1 justify-center items-center h-6 p-2"
      >
        رفض
        <RefuseIcon />
      </button>

      <CustomModal
        title={"التأكيد"}
        message={"هل انت متأكد من رفض هذا المشروع"}
        show={showRefuse}
        handleClose={handleCloseRefuse}
        handleSave={() => {
          handleCloseRefuse();
          handleShowCommentRefuse();
        }}
      />
      <CommentModel
        message={"اترك تعليقاً ...."}
        show={showCommentRefuse}
        handleClose={handleCloseCommentRefuse}
        setComment={setRefuseComment}
        handleSave={() => {
          console.log({ reasoneRjected: refuseComment });
          myAxiosJson
            .patch(`plan/reject/${id}`, {
              reasoneRjected: refuseComment,
            })
            .then((res) => {
              console.log(res);
              handleShowSuccessRefuse();
            })
            .catch((err) => {
              console.log(err);
            });
          handleCloseCommentRefuse();
        }}
      />
      <SuccessfullModal
        message={"تم رفض المشروع بنجاح"}
        handleClose={handleCloseSuccessRefuse}
        show={showSuccessRefuse}
      />
    </>
  );
};
