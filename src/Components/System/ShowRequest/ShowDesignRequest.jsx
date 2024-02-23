// import React, { useEffect } from "react";
// import { RiEdit2Line } from "react-icons/ri";
// import { Button, Form, Modal, NavDropdown } from "react-bootstrap";
// import IconButton from "@mui/material/IconButton";
// import "./index.css";
// import { useState } from "react";
// import EditDesignRequest from "../Requests/EditRequest/EditDesignRequest";
// import ConfirmPoper from "../ConfirmPoper";
// import DeleteModal from "../../../Pages/System/Settings/RemoveModal";
// import Image from "../../Image";
// import CustomModal from "../../Modals/CustomModal";
// import SuccessfullModal from "../../Modals/SuccessfullModal";
// import CommentModel from "../../Modals/CommentModel";
// import { IoMdMore } from "react-icons/io";
// import DownloadButton from "../../Buttons/DownloadButton";
// import PreviewImage from "../../Modals/PreviewImage";
// import { getDesignRequestsWithid } from "../../../helper/fetchers/Requests";
// import { toast } from "react-toastify";
// import Progress from "../../Progress";
// const ShowDesignRequest = ({ setShowProject, DesignProjectType, id }) => {import React, { useEffect } from "react";
import { RiEdit2Line } from "react-icons/ri";
import { NavDropdown } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import "./index.css";
import { useEffect, useState } from "react";
import EditDesignRequest from "../Requests/EditRequest/EditDesignRequest";
import ConfirmPoper from "../ConfirmPoper";
import DeleteModal from "../../../Pages/System/Settings/RemoveModal";
import Image from "../../Image";
import CustomModal from "../../Modals/CustomModal";
import SuccessfullModal from "../../Modals/SuccessfullModal";
import CommentModel from "../../Modals/CommentModel";
import { IoMdMore } from "react-icons/io";
import DownloadButton from "../../Buttons/DownloadButton";
import PreviewImage from "../../Modals/PreviewImage";
import {
  AcceptRequestwithId,
  getDesignRequestsWithid,
  rejecetRequestwithId,
  softDeleteRequst,
} from "../../../helper/fetchers/Requests";
import { toast } from "react-toastify";
import Progress from "../../Progress";
import { staticImageSrc } from "../../../Config/Config";

const ShowDesignRequest = ({ setShowProject, DesignProjectType, id }) => {
  const [showImg, setShowImg] = useState(false);
  const [imgSrc, setImgSrc] = useState(`${process.env.PUBLIC_URL}/icons/show.png`);
  const [request, setRequest] = useState();

  const [message, setMessage] = useState("");
  const [acceptRequest, setAcceptRequest] = useState(false);
  const [ConfirmAcceptRequest, setConfirmAcceptRequest] = useState(false);
  const [refuseRequest, setRefuseRequest] = useState(false);
  const [confirmRefuseRequest, setConfirmRefuseRequest] = useState(false);
  const [finishedRefuse, setFinishedRefuse] = useState(false);
  const [editRequest, setEditRequest] = useState(false);
  const [ConfirmUpdate, setConfirmUpdate] = useState(false);
  const [deleteRequest, setDeleteRequest] = useState(false);
  const [comment, setComment] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleAcceptRequest = async () => {
    try {
      const { data } = await AcceptRequestwithId(id);
      if (data.success) {
        setAcceptRequest(false);
        setMessage("تم قبول الطلب بنجاح");
        setOpenSuccess(true);
        // setShowProject(false)
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleLeaveComment = async () => {
    try {
      const { data } = await rejecetRequestwithId(id, comment);
      if (data.success) {
        setConfirmRefuseRequest(false);
        setOpenSuccess(true);
        setMessage("تم رفض الطلب بنجاح");
        // setShowProject(false)
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleRefuse = () => {
    setRefuseRequest(false);
    setConfirmRefuseRequest(true);
  };

  const handleDeleteRequest = async () => {
    try {
      const { data } = await softDeleteRequst(id);
      if (data.status==204) {
        setDeleteRequest(false);
        setOpenSuccess(true);
        setMessage("تم حذف الطلب بنجاح");
      }
    } catch (error) {
      setDeleteRequest(false);
      toast.error(error?.response?.data?.message);
    }
  };

  const getRequestWithid = async () => {
    try {
      const { data } = await getDesignRequestsWithid(id);
      console.log(data);

      if (data?.request) {
        setRequest(data?.request);
      } else {
        console.log("Data retrieval failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getRequestWithid();
  }, [id]);

  return (
    <div className="show-Design">
      <PreviewImage
        onClose={() => setShowImg(false)}
        showImg={showImg}
        imgSrc={imgSrc}
      />

      <CustomModal
        show={acceptRequest}
        title={"التاكيد"}
        handleClose={() => {
          setAcceptRequest(false);
        }}
        handleSave={() => {
          handleAcceptRequest();
        }}
        message={"هل انت متاكد من قبول الطلب"}
      />
      <SuccessfullModal
        show={openSuccess}
        message={message}
        handleClose={() => {
          setOpenSuccess(false);
          setConfirmRefuseRequest(false);
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
        setComment={setComment}
        handleSave={handleLeaveComment}
      />

      <CustomModal
        show={deleteRequest}
        title={"التاكيد"}
        handleClose={() => {
          setDeleteRequest(false);
        }}
        handleSave={handleDeleteRequest}
        message={"هل انت متاكد من  انك تريد حذف الطلب"}
      />

      {editRequest && (
        <EditDesignRequest
          editRequest={editRequest}
          setEditRequest={setEditRequest}
          setConfirmPoper={setConfirmUpdate}
        />
      )}

      <div className="border-golden mb-4">
        {request ? (
          <>
            <div className="row p-4 justify-between">
              <div className="col-6 flex flex-col items-start gap-4">
                <p className="text-white flex gap-2">
                  اسم المشروع :{" "}
                  <span className="text-white/30">{request?.projectName}</span>{" "}
                </p>
                <p className="text-white flex gap-2">
                  نوع المشروع : <span className="text-white/30">التصميم</span>{" "}
                </p>
                <p className="text-white flex gap-2">
                  {" "}
                  رقم الطلب :{" "}
                  <span className="text-white/30">
                    {" "}
                    {request?.orderNumber}
                  </span>{" "}
                </p>
              </div>
              <div className="col-6 flex flex-col items-end gap-4">
                <div className="flex gap-2 justify-start">
                  <DownloadButton>تصدير CSV </DownloadButton>
                  <DownloadButton> تصدير Excel </DownloadButton>
                </div>
                <div className="">
                  <p className="text-white text-xl font-normal">
                    الحالة :
                    {request?.status == 0 ? (
                      <span>فى انتظار الموافقة</span>
                    ) : request?.status == 1 ? (
                      <span>قيد التنفيذ</span>
                    ) : request?.status == 2 ? (
                      <span>مرفوضة</span>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="">
                    <button
                      onClick={() => setEditRequest(true)}
                      className="flex items-center gap-1 bg-[#19B159] rounded-[3px] text-white text-xs p-1"
                    >
                      تعديل
                      <RiEdit2Line />
                    </button>
                  </div>
                  <div className="">
                    {request?.status == 0 ? (
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
                    ) : request?.status == 1 ? (
                      <div className="d-flex gap-3">
                        <Image
                          className="pointer delete-icon"
                          onClick={() => {
                            setDeleteRequest(true);
                          }}
                          src={
                            process.env.PUBLIC_URL + "/icons/deleteRequest.png"
                          }
                        />
                      </div>
                    ) : request?.status == 2 ? (
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
                          src={
                            process.env.PUBLIC_URL + "/icons/deleteRequest.png"
                          }
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Progress />
        )}
      </div>

      {request ? (
        <div className="h-[600px] overflow-scroll scrollbar-none px-4">
          <fieldset className="border-golden my-4 p-4">
            <legend className="text-center">بيانات المشروع</legend>
            <div className="row px-2">
              <div className="col-md-6 mb-3">
                <p className="text-white flex gap-2">
                  اسم المالك :{" "}
                  <span className="text-white/30">{request?.ownerName}</span>
                </p>
              </div>
              <div className="col-md-6 mb-3">
                <p className="text-white flex gap-2">
                  {" "}
                  موقع المشروع :{" "}
                  <span className="text-white/30">
                    {request?.buildingLocation}
                  </span>
                </p>
              </div>
              <div className="col-md-6 mb-3">
                <p className="text-white flex gap-2">
                  {" "}
                  المدينة :{" "}
                  <span className="text-white/30">{request?.city}</span>
                </p>
              </div>
              <div className="col-md-6 mb-3">
                <p className="text-white flex gap-2">
                  {" "}
                  الحي : <span className="text-white/30">{request?.area}</span>
                </p>
              </div>
              <div className="col-md-6 mb-3">
                <p className="text-white flex gap-2">
                  {" "}
                  رقم القطعة :{" "}
                  <span className="text-white/30">{request?.pieceNumber} </span>
                </p>
              </div>
              <div className="col-md-6 mb-3">
                <p className="text-white flex gap-2">
                  {" "}
                  رقم المخطط :{" "}
                  <span className="text-white/30">{request?.chartNumber} </span>
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
                  نوع العميل :{" "}
                  <span className="text-white/30">
                    {request?.clientType == 1
                      ? "حكومي أو مستثمر"
                      : request?.clientType == 2
                      ? "شركة او مؤسسة"
                      : "فردي"}
                  </span>
                </p>
              </div>
              <div className="col-md-6 mt-3">
                <p className="text-white flex gap-2">
                  {" "}
                  رقم الشهادة الضربية :{" "}
                  <span className="text-white/30"> {request?.taxNumber} </span>
                </p>
              </div>
              <div className="col-md-6 mt-3">
                <p className="text-white flex gap-2">
                  {" "}
                  نوع الهوية :{" "}
                  <span className="text-white/30">
                    {request?.identityType == 1 ? "هوية" : "تجاري"}{" "}
                  </span>
                </p>
              </div>
              <div className="col-md-6 mt-3">
                <p className="text-white flex gap-2">
                  {" "}
                  البريد الالكتروني :{" "}
                  <span className="text-white/30"> {request?.email} </span>
                </p>
              </div>

              <div className="col-md-6 mt-3 mb-3 flex gap-3  items-center">
                <p className="text-white flex gap-2"> صورة الهوية :</p>
                {request.idPhoto ? (
                  request.idPhoto.map((img, index) => (
                    <Image
                      key={index} // Adding a key prop for each mapped element is recommended
                      className="pointer instrutmentimg"
                      onClick={() => {
                        setShowImg(true);
                        setImgSrc(staticImageSrc + img);
                      }}
                      src={staticImageSrc + img}
                      alt="owner img"
                    />
                  ))
                ) : (
                  <Image
                    className="pointer instrutmentimg"
                    onClick={() => {
                      setShowImg(true);
                    }}
                    src={imgSrc}
                    alt="owner img"
                  />
                )}
              </div>

              <div className="col-md-6 mt-3">
                <p className="text-white flex gap-2">
                  {" "}
                  رقم الجوال :{" "}
                  <span className="text-white/30">{request?.phone} </span>
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
                  الوكيل :{" "}
                  <span className="text-white/30">{request?.agent}</span>
                </p>
              </div>
              <div className="col-md-6 mt-3">
                <p className="text-white flex gap-2">
                  {" "}
                  رقم الوكالة :{" "}
                  <span className="text-white/30">
                    {" "}
                    {request?.agencyNumber}{" "}
                  </span>
                </p>
              </div>
              <div className="col-md-6 mt-3 flex gap-3  items-center">
                <p className="text-white flex gap-2">مرفقات الوكالة : </p>
                {request.agencyAttachments ? (
                  request.agencyAttachments.map((img, index) => (
                    <Image
                      key={index} // Adding a key prop for each mapped element is recommended
                      className="pointer instrutmentimg"
                      onClick={() => {
                        setShowImg(true);
                        setImgSrc(staticImageSrc + img);
                      }}
                      src={staticImageSrc + img}
                      alt="owner img"
                    />
                  ))
                ) : (
                  <Image
                    className="pointer instrutmentimg"
                    onClick={() => {
                      setShowImg(true);
                    }}
                    src={imgSrc}
                    alt="owner img"
                  />
                )}
              </div>

              <div className="col-md-6 mt-3">
                <p className="text-white flex gap-2">
                  {" "}
                  رقم الصك :{" "}
                  <span className="text-white/30">
                    {" "}
                    {request?.instrumentNumber}
                  </span>
                </p>
              </div>
              <div className="col-md-12 mt-3">
                <p className="text-white flex gap-2">
                  {" "}
                  ملاحظات :{" "}
                  <span className="text-white/30"> {request?.notes}</span>
                </p>
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
      ) : (
        <Progress />
      )}
    </div>
  );
};

export default ShowDesignRequest;
