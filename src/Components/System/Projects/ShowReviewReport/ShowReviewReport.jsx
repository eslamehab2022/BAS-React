import { Button, Form, Image, Modal } from "react-bootstrap";
import { UseInput } from "../../../../hooks";
import "./showReviewReport.css";
import { useContext, useState } from "react";
import SaveButton from "../../../SaveButton";
import { AddReportType } from "../../../../Context/AddReport";
import { showAddUpdateUser } from "../../../../Context/CheckAddUpdateUserVisability";
import Pdf from "../../../Pdf";
import PdfImage from "../../../PdfImage";
import EditReviewReport from "../EditReviewReport/EditReviewReport";
import DeleteModal from "../../../../Pages/System/Settings/RemoveModal";
import DownloadButton from "../../../Buttons/DownloadButton";

const ShowReviewReport = ({ setShowReport }) => {
  const searchProject = UseInput("", "");
  const { setReportType } = useContext(AddReportType);
  const { showAddUserModel, setShowAddUserModel } =
    useContext(showAddUpdateUser);
  const [openPdf, setOpenPdf] = useState(false);
  const [deleteReport, setDeleteReport] = useState(false);
  const [confrimDeleteReport, setConfrimDeleteReport] = useState(false);
  const [editReport, setEditReport] = useState(false);

  const handleDeleteReport = () => {
    // after ensuring that the report has been deleted
    setDeleteReport(false);
    setConfrimDeleteReport(true);
  };

  return (
    <>
      {/* {deleteReport && (
        <Modal
          className="submitSystemPoper"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setDeleteReport(false)}
          show={deleteReport}
        >
          <Modal.Body className="d-flex align-items-center">
            <div className="d-flex w-75 flex-column mx-auto mt-3 justify-content-center align-items-center ">
              {
                <p className="text-white" style={{ fontSize: "30px" }}>
                  {" "}
                  هل انت متاكد من حذف هذا المستخدم{" "}
                </p>
              }
              <div className="d-flex justify-content-center mt-3 gap-3">
                <Button
                  onClick={() => {
                    handleDeleteReport();
                  }}
                  className="Delete-button"
                >
                  نعم
                </Button>

                <Button
                  onClick={() => {
                    setDeleteReport(false);
                  }}
                  className="No-Delete"
                >
                  لا
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
      {confrimDeleteReport && (
        <Modal
          className="submitSystemPoper"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setConfrimDeleteReport(false)}
          show={confrimDeleteReport}
        >
          <Modal.Body>
            <div className="d-flex justify-content-center w-100">
              {" "}
              <img
                src={`${process.env.PUBLIC_URL + "/correct.gif"}`}
                width={120}
                height={120}
                className="my-3"
                color="#E1B67C"
              />
            </div>

            <div className="d-flex w-75 flex-column mx-auto mt-3 justify-content-center align-items-center ">
              {
                <p className="text-white mb-3" style={{ fontSize: "30px" }}>
                  {" "}
                  تم حذف المستخدم بنجاح{" "}
                </p>
              }
              <Button
                onClick={() => {
                  setConfrimDeleteReport(false);
                }}
                className="sumbmitAddUpdateUser"
              >
                حفظ
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      )} */}

      <DeleteModal
        title={"التاكيد"}
        show={deleteReport}
        handleClose={handleDeleteReport}
      />
      {editReport && (
        <EditReviewReport
          editReport={editReport}
          setEditReport={setEditReport}
        />
      )}

      <div className="showProjectComponent px-2">
        <div className=" fieldBorder mb-4 p-3">
          <div className="row">
            <div className="col-md-6 mb-3">
              <p className="text-white">
                اسم المالك :<span className="main-text"> BSA</span>
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <DownloadButton>تصدير CSV </DownloadButton>
              <DownloadButton> تصدير Excel </DownloadButton>
            </div>

            <div className="col-md-6 mb-3">
              <p className="text-white">
                نوع المشروع :{" "}
                <span className="main-text"> الاشراف على التنفيذ</span>
              </p>
            </div>
            <div className="col-md-6 mb-3 ">
              <div className="d-flex align-items-center gap-3 ">
                <img
                  src={`${process.env.PUBLIC_URL + "/icons/delete.png"}`}
                  onClick={() => {
                    setDeleteReport(true);
                  }}
                  alt="delete icon "
                  className="action-buttons  "
                />

                <img
                  src={`${process.env.PUBLIC_URL + "/icons/edit.png"}`}
                  onClick={() => {
                    setEditReport(true);
                  }}
                  alt="edit icon"
                  className="action-buttons  "
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <p className="text-white">
                اسم المشروع :{" "}
                <span className="main-text">مطاعم عشبه الليمون </span>
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p className="text-white">
                الامانة :{" "}
                <span className="main-text"> امانه منطقه الرياض </span>
              </p>
            </div>
          </div>
        </div>
        <fieldset className=" fieldBorder mb-4 p-3">
          <legend className="text-center"> معلومات عامة </legend>
          <div className="row">
            <div className="col-md-6 mb-3">
              <p className="text-white">
                اسم المشروع :<span className="main-text"> BSA</span>
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p className="text-white">
                الامانه :{" "}
                <span className="main-text"> أمانة منطقة الرياض </span>
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p className="text-white">
                البلدية : <span className="main-text"> بلدية شمال الرياض </span>
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p className="text-white">
                الحي : <span className="main-text"> حي الملقا </span>
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p className="text-white">
                العنوان :{" "}
                <span className="main-text">
                  {" "}
                  الرياض – حي الملقا – تقاطع شارع الدهناء مع الأفضلي
                </span>
              </p>
            </div>
          </div>
        </fieldset>

        <fieldset className=" fieldBorder mb-4 p-3">
          <legend className="text-center"> معلومات التقرير </legend>
          <div className="row">
            <div className="col-md-6 mb-3">
              <p className="text-white">
                اسم المستفيد :
                <span className="main-text ms-3">مطاعم عشبة الليمون</span>
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p className="text-white">
                الأمانة :
                <span className="main-text ms-3">أمانة منطقة الرياض</span>
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p className="text-white">
                البلدية :
                <span className="main-text ms-3">بلدية شمال الرياض</span>
              </p>
            </div>

            <div className="col-md-6 mb-3">
              <p className="text-white">
                العنوان :
                <span className="main-text ms-3">
                  الرياض – حي الملقا – تقاطع شارع الدهناء مع الأفضلي
                </span>
              </p>
            </div>

            {/* <div className='col-md-6 mb-3'>
                                <Pdf PdfFile={process.env.PUBLIC_URL + "/example.pdf"} width={800} height={800} openPdf={openPdf} setOpenPdf={setOpenPdf} />
                            </div> */}
          </div>
        </fieldset>
        <fieldset className=" fieldBorder mb-4 p-3">
          <legend className="text-center"> تفاصيل التقرير </legend>
          <div className="row">
            <div className="col-md-12 mb-3">
              <p className="text-white">
                إسم التقرير :
                <span className="main-text ms-3">
                  تقرير فنى عن مطاعم عشبة الليمون
                </span>
              </p>
            </div>

            <div className="col-md-12 mb-3">
              <p className="text-white">
                إسم المستفيد :
                <span className="main-text ms-3">
                  فيصل عبد الله محمد المنصور
                </span>
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p className="text-white">
                رقم الرخصة :<span className="main-text ms-3">8233/1443</span>
              </p>
            </div>

            <div className="col-md-6 mb-3">
              <p className="text-white">
                تاريخ التقرير :
                <span className="main-text ms-3">15 -10 -2023</span>
              </p>
            </div>
            <div className="col-md-12 mb-3">
              <p className="text-white">
                نوع البناء :<span className="main-text ms-3">مسلح</span>
              </p>
            </div>
            <div className="col-md-12 mb-3">
              <p className="text-white">
                الوصف :<span className="main-text ms-3">مطعم وجبات سريعه</span>
              </p>
            </div>
            <div className="col-md-12 mb-3">
              <p className="text-white">
                الاستشاري المشرف :
                <span className="main-text ms-3">بدر عبدالمحسن بن سليمان</span>
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p className="text-white">
                مقاول البناء :
                <span className="main-text ms-3">شركه نمو للانشاءات</span>
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p className="text-white">
                المكتب المصمم :<span className="main-text ms-3">الاء عائض</span>
              </p>
            </div>
            <div className="col-md-12 mb-3">
              <Form.Group>
                <Form.Label>ملاحظات الموقع</Form.Label>
                <textarea
                  disabled
                  cols={5}
                  rows={5}
                  disable
                  className="form-control"
                />
              </Form.Group>
            </div>
          </div>
        </fieldset>
        <fieldset className=" fieldBorder mb-4 p-3">
          <legend className="text-center"> المرفقات </legend>
          <Pdf
            PdfFile={process.env.PUBLIC_URL + "/example.pdf"}
            width={800}
            height={800}
            openPdf={openPdf}
            setOpenPdf={setOpenPdf}
          />
          <div className="row">
            <div className="col-md-6 mb-3">
              <PdfImage
                openPdf={openPdf}
                setOpenPdf={setOpenPdf}
                text="صوره الموقع"
              />
            </div>
          </div>
        </fieldset>
        <fieldset className=" fieldBorder mb-4 p-3">
          <legend className="text-center"> ارفاق الملاحظات </legend>
          <div className="row">
            <div className="col-md-12 mb-3">
              <Form.Group>
                <Form.Label>التوصيات</Form.Label>
                <textarea disabled className="form-control" cols={5} rows={5} />
              </Form.Group>
            </div>

            <div className="col-md-12 mb-3">
              <Form.Group>
                <Form.Label>المخططات</Form.Label>
                <textarea cols={5} rows={5} className="form-control" disabled />
              </Form.Group>
            </div>
          </div>
        </fieldset>

        <div
          className="my-3"
          onClick={() => {
            setShowReport(false);
            setReportType(null);
          }}
        >
          <SaveButton />
        </div>
      </div>
    </>
  );
};

export default ShowReviewReport;
