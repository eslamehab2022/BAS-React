import React from "react";
import style from "./ShowExpensesDetials.module.css";
import { useParams } from "react-router-dom";
import { Button, Form, Modal } from "react-bootstrap";
import SaveButton from "../../../SaveButton";
import { useState } from "react";
import EditExpenses from "../EditExpenses/EditExpenses";
import DeleteModal from "../../../../Pages/System/Settings/RemoveModal";
import DownloadButton from "../../../Buttons/DownloadButton";

const ShowExpensesDetials = ({ setOpenDisplayDetials }) => {
  const { ExpensesType } = useParams();
  const [deletePoper, setDeletPoper] = useState(false);
  const [confirmDeletePoper, setConfirmDeletPoper] = useState(false);
  const [editExpenses, setEditExpenses] = useState(false);
  const handleDeleteRequest = () => {
    // after deleting revenues succefully
    setDeletPoper(false);
    setConfirmDeletPoper(true);
  };

  return (
    <div className="ShowExpensesDetials  ">
      {/* {confirmDeletePoper && (
        <Modal
          className="submitSystemPoper"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setConfirmDeletPoper(false)}
          show={confirmDeletePoper}
        >
          <Modal.Body>
            <div className="d-flex justify-content-center w-100">
              {" "}
              <Image
                src={process.env.PUBLIC_URL + "/correct.gif"}
                width={120}
                height={120}
                className=""
                color="#E1B67C"
              />
            </div>

            <div className="d-flex w-75 flex-column mx-auto mt-3 justify-content-center align-items-center ">
              {
                <p className="text-white my-3" style={{ fontSize: "30px" }}>
                  {" "}
                  تم الحذف بنجاح
                </p>
              }
              <Button
                onClick={() => {
                  setConfirmDeletPoper(false);
                }}
                className="sumbmitAddUpdateUser"
              >
                حفظ
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      )}

      {deletePoper && (
        <Modal
          className="submitSystemPoper"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setDeletPoper(false)}
          show={deletePoper}
        >
          <Modal.Body className="d-flex align-items-center">
            <div className="d-flex w-75 flex-column mx-auto mt-3 justify-content-center align-items-center ">
              {
                <p className="text-white" style={{ fontSize: "30px" }}>
                  {" "}
                  هل انت متاكد من الحذف{" "}
                </p>
              }
              <div className="d-flex justify-content-center mt-3 gap-3">
                <Button
                  onClick={() => {
                    setDeletPoper(false);
                    handleDeleteRequest();
                  }}
                  className="Delete-button"
                >
                  نعم
                </Button>

                <Button
                  onClick={() => {
                    setDeletPoper(false);
                  }}
                  className="No-Delete"
                >
                  لا
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )} */}
      <DeleteModal
        title={"التاكيد"}
        show={deletePoper}
        handleClose={handleDeleteRequest}
      />

      {editExpenses && (
        <EditExpenses
          editExpenses={editExpenses}
          setEditExpenses={setEditExpenses}
        />
      )}

      <div className={`${style.reportName} p-3`}>
        <div className="row">
          <div className="col-md-8 mb-2">
            {ExpensesType === "ExpensesReports" ? (
              <p className="text-white">
                اسم التقرير : <span>BSA</span>{" "}
              </p>
            ) : (
              <p className="text-white">
                اسم الصنف : <span>BSA</span>{" "}
              </p>
            )}
          </div>

          <div className="col-md-4 mb-2">
            <div className="d-flex gap-3 justify-content-start">
              <DownloadButton>تصدير CSV </DownloadButton>
              <DownloadButton>تصدير Excel </DownloadButton>
            </div>
          </div>
          <div className="col-md-9"></div>
          <div className="col-md-3">
            <div className="d-flex gap-2  mt-3 justify-content-start   ">
              <img
                className={`pointer ${style.actionIcon}`}
                onClick={() => {
                  setDeletPoper(true);
                }}
                src={process.env.PUBLIC_URL + "/icons/delete.png"}
              />

              <img
                className={`pointer ${style.actionIcon}`}
                onClick={() => {
                  setEditExpenses(true);
                }}
                src={process.env.PUBLIC_URL + "/icons/edit.png"}
              />
            </div>
          </div>
        </div>
      </div>
      <fieldset className={`${style.discription} w-90 mx-auto p-3`}>
        <legend className="text-center w-30">الوصف</legend>
        <Form.Label className="text-white">الوصف : </Form.Label>
        <textarea
          disabled
          placeholder="الوصف المرفق"
          cols={30}
          rows={5}
          className="form-control"
        />
        <div className="row mt-2">
          <div className="col-md-6">
            <p className="text-white">
              {ExpensesType === "ExpensesReports"
                ? " تاريخ الاستحقاق :"
                : " تاريخ الانشاء :"}

              <span className="main-text"> 2023-10-15</span>
            </p>
          </div>
          <div className="col-md-6">
            <p className="text-white">
              {ExpensesType === "ExpensesReports"
                ? "  المبلغ :"
                : "  كود الصنف :"}

              <span className="main-text"> 1230</span>
            </p>
          </div>
        </div>
      </fieldset>
      <fieldset className={`${style.attatchment}  w-90 mx-auto mt-3 p-3`}>
        <legend className="text-center w-30">الملف المرفق</legend>

        <div className="pdfbg">
          <img
            src={process.env.PUBLIC_URL + "/icons/Pdf.png"}
            alt="pdf"
            className="pdfImage"
          />
          <div
            style={{ borderRadius: "7px" }}
            className="bg-[#252538] d-flex justify-content-center "
          >
            {ExpensesType === "ExpensesReports" ? (
              <p className="text-white mx-auto   mt-2   "> المصروفات </p>
            ) : (
              <p className="text-white mx-auto   mt-2   "> الصنف </p>
            )}
          </div>
        </div>
      </fieldset>

      <div
        onClick={() => {
          setOpenDisplayDetials(false);
        }}
        className=" mt-4 w-[30]"
      >
        <SaveButton />
      </div>
    </div>
  );
};

export default ShowExpensesDetials;
