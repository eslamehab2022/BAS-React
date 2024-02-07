import React from "react";
import { RiEdit2Line } from "react-icons/ri";
import { Button, Form, Modal, NavDropdown } from "react-bootstrap";
import IconButton from '@mui/material/IconButton';
import "./index.css";
import { useState } from "react";
import EditDesignRequest from "../Requests/EditRequest/EditDesignRequest";
import ConfirmPoper from "../ConfirmPoper";
import DeleteModal from "../../../Pages/System/Settings/RemoveModal";
import Image from "../../Image";
import CustomModal from "../../Modals/CustomModal";
import SuccessfullModal from "../../Modals/SuccessfullModal";
import CommentModel from "../../Modals/CommentModel";
import { IoMdMore } from "react-icons/io";
const ShowDesignRequest = ({ setShowProject, DesignProjectType }) => {
  const [showImg, setShowImg] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    `${process.env.PUBLIC_URL}/icons/show.png`
  );

  const [message, setMessage] = useState("");
  const [acceptRequest, setAcceptRequest] = useState(false);
  const [ConfirmAcceptRequest, setConfirmAcceptRequest] = useState(false);
  const [refuseRequest, setRefuseRequest] = useState(false);
  const [confirmRefuseRequest, setConfirmRefuseRequest] = useState(false);
  const [finishedRefuse, setFinishedRefuse] = useState(false);
  const [editRequest, setEditRequest] = useState(false);
  const [ConfirmUpdate, setConfirmUpdate] = useState(false);
  const [deleteRequest, setDeleteRequest] = useState(false);
  const handleAcceptRequest = () => {
    // after check accept request
    setAcceptRequest(false);
    setMessage("تم قبول الطلب بنجاح");

    setConfirmAcceptRequest(true);
  };
  const handleLeaveComment = () => {
    //confirm Refuse Request
    setConfirmRefuseRequest(false);
    setFinishedRefuse(true);
    setMessage("تم رفض الطلب بنجاح");
  };
  const handleRefuse = () => {
    setRefuseRequest(false);
    setConfirmRefuseRequest(true);
  };
  // const handleFinishRefuse = () => {
  //   setFinishedRefuse(false);
  //   setMessage("تم حذف الطلب بنجاح");
  //   setConfirmRefuseRequest(true);
  // };

  const handleDeleteRequest = () => {
    //after making sure that the request is deleted
    setDeleteRequest(false);
  };

  return (
    <div className="show-Design">
      {showImg && (
        <Modal
          size="lg"
          show={showImg}
          onHide={() => setShowImg(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          className="   showRequestImg"
        >
          <Image
            className="pointer w-100 h-100  instrutmentimg"
            src={imgSrc}
            alt="owner img"
          />
        </Modal>
      )}

      <CustomModal
        show={acceptRequest}
        title={"التاكيد"}
        handleClose={() => {
          setAcceptRequest(false);
        }}
        handleSave={handleAcceptRequest}
        message={"هل انت متاكد من قبول الطلب"}
      />
      <SuccessfullModal
        show={finishedRefuse || ConfirmAcceptRequest}
        message={message}
        handleClose={() => {
          setConfirmAcceptRequest(false);
          setConfirmRefuseRequest(false);
          setFinishedRefuse(false);
        }}
      />
      <CustomModal
        show={refuseRequest}
        title={"التاكيد"}
        handleClose={() => {
          setRefuseRequest(false);
        }}
        handleSave={handleRefuse}
        message={"هل انت متاكد من  انك تريد رفض الطلب"}
      />

      <CommentModel
        show={confirmRefuseRequest}
        message={"اترك سبب الرفض"}
        handleClose={() => {
          setConfirmRefuseRequest(false);
        }}
        handleSave={handleLeaveComment}
      />

      <DeleteModal
        title={"التاكيد"}
        show={deleteRequest}
        handleClose={handleDeleteRequest}
      />

      {editRequest && (
        <EditDesignRequest
          editRequest={editRequest}
          setEditRequest={setEditRequest}
          setConfirmPoper={setConfirmUpdate}
        />
      )}
      {ConfirmUpdate && (
        <ConfirmPoper
          confirmPoper={ConfirmUpdate}
          setConfirmPoper={setConfirmUpdate}
          setEditRequest={setEditRequest}
          text={"تم تعديل الطلب فى المشاريع بنجاح  "}
        />
      )}

      <div className="border-golden mb-4">
        {/* <div className="row px-2 py-3">
          <div className="col-md-6 mb-2">
            <p className="text-white flex gap-2">
              اسم المشروع : <span className="text-white/30">BSA</span>{" "}
            </p>
          </div>
          <div className="col-md-6   mb-2">
            <div className=" d-flex gap-3 justify-content-start ">
              <Button className="export-bg  ms-2 ">تصدير CSV </Button>
              <Button className="export-bg ms-2"> تصدير Excel </Button>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <p className="text-white flex gap-2">
              نوع المشروع : <span className="text-white/30">التصميم</span>{" "}
            </p>
          </div>
          <div className="col-md-6 mb-2">
            <p className="text-white">
              <p className="text-white">
                {" "}
                الحالة :
                {DesignProjectType === "inProgress" ? (
                  <span>قيد التنفيذ</span>
                ) : DesignProjectType === "pending" ? (
                  <span>فى انتظار الموافقة</span>
                ) : DesignProjectType === "rejected" ? (
                  <span>مرفوضة</span>
                ) : (
                  ""
                )}{" "}
              </p>
            </p>
          </div>
          <div className="col-md-6 mb-2">
            <p className="text-white flex gap-2">
              {" "}
              رقم الطلب : <span className="text-white/30"> 0123</span>{" "}
            </p>
          </div>

          <div className="col-md-6  mb-2">
            {DesignProjectType == "inProgress" ? (
              <div className="d-flex align-items-center  gap-3">
                

                <NavDropdown
                  title={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="16"
                      viewBox="0 0 4 16"
                      fill="none"
                    >
                      <path
                        d="M2 16C0.89543 16 0 15.1046 0 14C0 12.8954 0.89543 12 2 12C3.10457 12 4 12.8954 4 14C4 15.1046 3.10457 16 2 16ZM2 10C0.89543 10 0 9.10457 0 8C0 6.89543 0.89543 6 2 6C3.10457 6 4 6.89543 4 8C4 8.53043 3.78929 9.03914 3.41421 9.41421C3.03914 9.78929 2.53043 10 2 10ZM2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4Z"
                        fill="white"
                      />
                    </svg>
                  }
                  className="fs-5 "
                >
                  <NavDropdown.Item
                    className="text-end  d-flex justify-content-between  align-items-center"
                    href="#action/3.2"
                  >
                    <span> المشروع</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="text-end  d-flex justify-content-between align-items-center"
                    href="#action/3.3"
                  >
                    <span> العميل</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="text-end  d-flex justify-content-between align-items-center"
                    href="#action/3.3"
                  >
                    <span> الحسابات</span>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            ) : DesignProjectType === "pending" ? (
              <div className="d-flex gap-3">
                <Image
                  className="pointer confirm"
                  onClick={() => {
                    setAcceptRequest(true);
                  }}
                  src={process.env.PUBLIC_URL + "/icons/confirm.png"}
                />
                <Image
                  className="pointer declince"
                  onClick={() => {
                    setRefuseRequest(true);
                  }}
                  src={process.env.PUBLIC_URL + "/icons/declince.png"}
                />
              
              </div>
            ) : DesignProjectType === "rejected" ? (
              <div className="d-flex gap-3">
                <Image
                  className="pointer confirm"
                  onClick={() => {
                    setAcceptRequest(true);
                  }}
                  src={process.env.PUBLIC_URL + "/icons/confirm.png"}
                />



                <Image
                  className="pointer delete-icon"
                  onClick={() => {
                    setDeleteRequest(true);
                  }}
                  src={process.env.PUBLIC_URL + "/icons/deleteRequest.png"}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div> */}

        <div className="row p-4 justify-between">
          <div className="col-6 flex flex-col items-start gap-4">
            <p className="text-white flex gap-2">
              اسم المشروع : <span className="text-white/30">BSA</span>{" "}
            </p>
            <p className="text-white flex gap-2">
              نوع المشروع : <span className="text-white/30">التصميم</span>{" "}
            </p>
            <p className="text-white flex gap-2">
              {" "}
              رقم الطلب : <span className="text-white/30"> 0123</span>{" "}
            </p>
          </div>
          <div className="col-6 flex flex-col items-end gap-4">
          <div className="flex gap-2 justify-start">
              <button className="text-xs font-medium bg-[#D9D9D980] text-white py-1 px-3 rounded-[3px]">تصدير CSV </button>
              <button className="text-xs font-medium bg-[#D9D9D980] text-white py-1 px-3 rounded-[3px]"> تصدير Excel </button>
            </div>
            <div className="">
            <p className="text-white text-xl font-normal">
                
                الحالة :
                {DesignProjectType === "inProgress" ? (
                  <span>قيد التنفيذ</span>
                ) : DesignProjectType === "pending" ? (
                  <span>فى انتظار الموافقة</span>
                ) : DesignProjectType === "rejected" ? (
                  <span>مرفوضة</span>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="">
                <button onClick={()=> setEditRequest(true)} className="flex items-center gap-1 bg-[#19B159] rounded-[3px] text-white text-xs p-1">
                  تعديل
                  <RiEdit2Line/>
                  {/* <img src="/icons/edit.svg" alt="" className="filter invert" /> */}
                </button>
              </div>
              <div className="">
                {DesignProjectType == "inProgress" ? (
                  <div className="flex items-center gap-3">
                    

                    <NavDropdown
                      title={
                          <IoMdMore color="white" fontSize={25} />
                      }
                      className="fs-5 "
                    >
                      <NavDropdown.Item
                        className="text-end  d-flex justify-content-between  align-items-center"
                        href="#action/3.2"
                      >
                        <span> المشروع</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-end  d-flex justify-content-between align-items-center"
                        href="#action/3.3"
                      >
                        <span> العميل</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-end  d-flex justify-content-between align-items-center"
                        href="#action/3.3"
                      >
                        <span> الحسابات</span>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                ) : DesignProjectType === "pending" ? (
                  <div className="d-flex gap-3">
                    <Image
                      className="pointer confirm"
                      onClick={() => {
                        setAcceptRequest(true);
                      }}
                      src={process.env.PUBLIC_URL + "/icons/confirm.png"}
                    />
                    <Image
                      className="pointer declince"
                      onClick={() => {
                        setRefuseRequest(true);
                      }}
                      src={process.env.PUBLIC_URL + "/icons/declince.png"}
                    />
                  
                  </div>
                ) : DesignProjectType === "rejected" ? (
                  <div className="d-flex gap-3">
                    <Image
                      className="pointer confirm"
                      onClick={() => {
                        setAcceptRequest(true);
                      }}
                      src={process.env.PUBLIC_URL + "/icons/confirm.png"}
                    />



                    <Image
                      className="pointer delete-icon"
                      onClick={() => {
                        setDeleteRequest(true);
                      }}
                      src={process.env.PUBLIC_URL + "/icons/deleteRequest.png"}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
                  
            </div>
          </div>
        </div>
      </div>

      <div className="h-[600px] overflow-scroll scrollbar-none px-4">
      
      
      
      
      <fieldset className="border-golden my-4 p-4">
        <legend className="text-center">بيانات المشروع</legend>
        <div className="row px-2">
          <div className="col-md-6 mb-3">
            <p className="text-white flex gap-2">
              اسم المالك : <span className="text-white/30">BSA</span>
            </p>
          </div>
          <div className="col-md-6 mb-3">
            <p className="text-white flex gap-2">
              {" "}
              موقع المشروع : <span className="text-white/30">السعودية</span>
            </p>
          </div>
          <div className="col-md-6 mb-3">
            <p className="text-white flex gap-2">
              {" "}
              المدينة : <span className="text-white/30">السعودية</span>
            </p>
          </div>
          <div className="col-md-6 mb-3">
            <p className="text-white flex gap-2">
              {" "}
              الحي : <span className="text-white/30">السعودية</span>
            </p>
          </div>
          <div className="col-md-6 mb-3">
            <p className="text-white flex gap-2">
              {" "}
              رقم القطعة : <span className="text-white/30">___ </span>
            </p>
          </div>
          <div className="col-md-6 mb-3">
            <p className="text-white flex gap-2">
              {" "}
              رقم المخطط : <span className="text-white/30">___ </span>
            </p>
          </div>
          <div className="col-md-6 mb-3">
            <p className="text-white flex gap-2">
              {" "}
              نوع المشروع : <span className="text-white/30">التصميم </span>
            </p>
          </div>
        </div>
      </fieldset>
                  
      <fieldset className="border-golden my-4 p-4">
        <legend className="text-center">بيانات المالك</legend>
        <div className="row px-2">
          <div className="col-md-6 mt-3">
            <p className="text-white flex gap-2">
              {" "}
              نوع العميل : <span className="text-white/30">BSA</span>
            </p>
          </div>
          <div className="col-md-6 mt-3">
            <p className="text-white flex gap-2">
              {" "}
              رقم الشهادة الضربية : <span className="text-white/30"> ــــــــــ </span>
            </p>
          </div>
          <div className="col-md-6 mt-3">
            <p className="text-white flex gap-2">
              {" "}
              نوع الهوية : <span className="text-white/30"></span>
            </p>
          </div>
          <div className="col-md-6 mt-3">
            <p className="text-white flex gap-2">
              {" "}
              البريد الالكتروني : <span className="text-white/30"> </span>
            </p>
          </div>
          <div className="col-md-6 mt-3 mb-3">
            <Image
              className="pointer instrutmentimg "
              onClick={() => {
                setShowImg(true);
              }}
              src={imgSrc}
              alt="owner img"
            />

            <p className="text-white flex gap-2"> صورة الهوية </p>
          </div>

          <div className="col-md-6 mt-3">
            <p className="text-white flex gap-2">
              {" "}
              رقم الجوال : <span className="text-white/30"> </span>
            </p>
          </div>
        </div>
      </fieldset>


      <fieldset className="border-golden my-4 p-4">
        <legend className="text-center">بيانات الوكيل</legend>
        <div className="row px-2">
          <div className="col-md-6 mt-3">
            <p className="text-white flex gap-2">
              {" "}
              نوع العميل : <span className="text-white/30">BSA</span>
            </p>
          </div>
          <div className="col-md-6 mt-3">
            <p className="text-white flex gap-2">
              {" "}
              رقم الوكالة : <span className="text-white/30"> ــــــــــ </span>
            </p>
          </div>
          <div className="col-md-6 mt-3">
            <p className="text-white flex gap-2">
              {" "}
              اسم الصك : <span className="text-white/30"></span>
            </p>
          </div>
          <div className="col-md-6 mt-3">
            <p className="text-white flex gap-2">
              {" "}
              رقم الصك : <span className="text-white/30"> </span>
            </p>
          </div>
          <div className="col-md-6 mt-3 mb-3">
            <Image
              className="pointer instrutmentimg"
              onClick={() => {
                setShowImg(true);
              }}
              src={imgSrc}
              alt="owner img"
            />

            <p className="text-white"> صورة الصك </p>
          </div>

          <div className="col-md-6 mt-3 mb-3">
            <Image
              className="pointer instrutmentimg"
              onClick={() => {
                setShowImg(true);
              }}
              src={imgSrc}
              alt="owner img"
            />

            <p className="text-white"> صورة الوكالة </p>
          </div>
        </div>
      </fieldset>

      <div className="my-3 mx-2 d-flex justify-content-end">
        <button
          onClick={() => {
            setShowProject(false);
          }}
          className="bg-[#EFAA20] text-black transition-colors hover:bg-[#2B2B40] hover:!text-white border !border-[#EFAA20] py-1 px-5 rounded-[6px]"
        >
          موافق
        </button>
      </div>
      </div>
    </div>
  );
};
export default ShowDesignRequest;
