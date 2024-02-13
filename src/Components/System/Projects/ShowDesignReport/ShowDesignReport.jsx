import { Button, Form, Modal } from "react-bootstrap";
import { UseInput } from "../../../../hooks";
import styles from "./ShowDesignReport.module.css";
import { useContext, useState } from "react";
import SaveButton from "../../../SaveButton";
import { AddReportType } from "../../../../Context/AddReport";
import { showAddUpdateUser } from "../../../../Context/CheckAddUpdateUserVisability";
import Pdf from "../../../Pdf";
import PdfImage from "../../../PdfImage";
import EditReviewReport from "../EditReviewReport/EditReviewReport";
import DataTableComponent from "../../../DataTableComponent";
import Image from "../../../Image";
import DeleteModal from "../../../../Pages/System/Settings/RemoveModal";
import DownloadButton from "../../../Buttons/DownloadButton";
import CustomTable from "../../../Table";
import { TableRow } from "../../../Table/TableRow";
import { TableCell } from "../../../Table/TableCell";

const ShowDesignReport = ({ setShowReport }) => {
  const searchProject = UseInput("", "");
  const { setReportType } = useContext(AddReportType);
  const { showAddUserModel, setShowAddUserModel } =
    useContext(showAddUpdateUser);
  const [openPdf, setOpenPdf] = useState(false);
  const [deleteReport, setDeleteReport] = useState(false);
  const [confrimDeleteReport, setConfrimDeleteReport] = useState(false);
  const [editReport, setEditReport] = useState(false);
  const [openNotes, setOpenNotes] = useState(false);
  const handleDeleteReport = () => {
    // after ensuring that the report has been deleted
    setDeleteReport(false);
    setConfrimDeleteReport(true);
  };

  const areaColumns = [
    {
      id: "م",
      selector: (row) => row.id,
    },
    {
      name: "الاسم",
      selector: (row) => row.Name,
    },
    {
      name: "  الادوار حسب الرخصة",
      selector: (row) => row.rolesDueTolisence,
    },
    {
      name: "   الاستخدام ",
      selector: (row) => row.usage,
    },
    {
      name: "  الرخصة",
      selector: (row) => row.lisence,
    },
    {
      name: "  عدد الوحدات",
      selector: (row) => row.lisenceUnitesNumber,
    },
    {
      name: "   الطبيعة",
      selector: (row) => row.nature,
    },
    {
      name: "  عدد الوحدات",
      selector: (row) => row.natureUnitesNumber,
    },
    {
      name: "   القرق",
      selector: (row) => row.difference,
    },
    {
      name: " ملاحظات",
      selector: (row) => row.notes,
    },
  ];
  const areaData = Array.from({ length: 2 }).map((_, index) => {
    return {
      id: index +1,
      Name: " محمد",
      rolesDueTolisence: " قبو 2",
      usage: " مع العقد",
      lisence: 34545,
      lisenceUnitesNumber: 2,
      nature: 54535,
      natureUnitesNumber: 5,
      difference: 0.0,
      notes: (
        <div
          className="pointer"
          onClick={() => {
            setOpenNotes(true);
          }}
        >
          <Image
            src={"/icons/view.png"}
            alt="view image "
            width={30}
            height={30}
          />
        </div>
      ),
    };
  });
  const bouncesColumns = [
    {
      id: "م",
      selector: (row) => row.id,
    },
    {
      name: "    المجاورين",
      selector: (row) => row.neighbors,
    },
    {
      name: "   الطول ",
      selector: (row) => row.height,
    },
    {
      name: "  الرخصة",
      selector: (row) => row.lisence,
    },
    {
      name: " المخطط",
      selector: (row) => row.chart,
    },
    {
      name: "الطبيعة",
      selector: (row) => row.nature,
    },
  ];
  const bounceData = Array.from({ length: 2 }).map((_, index) => {
    return {
      id: index + 1,
      name: " قبو 2",
      height: " 250Cm ",
      lisence: 34545,
      chart: 54535,
      nature: 0.0,
    };
  });

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
              <Image
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

      {openNotes && (
        <Modal
          className="submitSystemPoper"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setOpenNotes(false)}
          show={openNotes}
        >
          <Modal.Body>
            <div>
              <Form.Control
                as="textarea"
                className="bg-[#1B1B29] hover:bg-[#1B1B29] "
                placeholder="ملاحظات"
                cols={5}
                rows={5}
              />
            </div>
            <div className="d-flex w-75 flex-column mx-auto mt-3 justify-content-center align-items-center ">
              <Button
                onClick={() => {
                  setOpenNotes(false);
                }}
                className="sumbmitAddUpdateUser"
              >
                حفظ
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      )}

      <div className="showProjectComponent px-2 scrollbar-none">
        <div className=" fieldBorder mb-4 p-3">
          <div className="row">
            <div className="col-md-6 mb-3">
              <p className="text-white">
                اسم المالك :<span className="main-text"> BSA</span>
              </p>
            </div>
            <div className="col-md-6 mb-3 flex gap-1">
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
                <Image
                  src={process.env.PUBLIC_URL + "/icons/delete.png"}
                  onClick={() => {
                    setDeleteReport(true);
                  }}
                  alt="delete icon "
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
          </div>
        </div>
        <fieldset className=" fieldBorder mb-4 p-3">
          <legend className="text-center"> معلومات عامة </legend>
          <div className="row">
            <div className="col-md-6 mb-3">
              <p className="text-white">
                نوع العميل :<span className="main-text">شركه</span>
              </p>
            </div>

            <div className="col-md-6 mb-3">
              <p className="text-white">
                العنوان :{" "}
                <span className="main-text"> الرياض – حي الملقا </span>
              </p>
            </div>
          </div>
        </fieldset>

        <fieldset className=" fieldBorder mb-4 p-3">
          <legend className="text-center"> معلومات التقرير </legend>
          <div className="row">
            <div className="col-md-6 mb-3">
              <p className="text-white">
                اسم المشروع :
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
                الحي :<span className="main-text ms-3">خي الملقا</span>
              </p>
            </div>

            <div className="col-md-6 mb-3">
              <p className="text-white">
                العنوان :
                <span className="main-text ms-3">الرياض - خي الملقا</span>
              </p>
            </div>
          </div>
        </fieldset>
        <fieldset className=" fieldBorder mb-4 p-3">
          <legend className="text-center"> تفاصيل التقرير </legend>
          <div className="row">
            <div className="col-md-12 mb-3">
              <p className="text-white">
                رقم الرخصة :
                <span className="main-text ms-3">
                  تقرير فنى عن مطاعم عشبة الليمون
                </span>
              </p>
            </div>

            <div className="col-md-12 mb-3">
              <p className="text-white">
                تاريخ التقرير :
                <span className="main-text ms-3">
                  فيصل عبد الله محمد المنصور
                </span>
              </p>
            </div>
            <div className="col-md-12 mb-3">
              <p className="text-white">
                رقم الهوية :<span className="main-text ms-3">8233/1443</span>
              </p>
            </div>

            <div className="col-md-12 mb-3">
              <p className="text-white">
                رقم المقاطعة :
                <span className="main-text ms-3">15 -10 -2023</span>
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p className="text-white">
                رقم الرخصة :<span className="main-text ms-3">15-10-2023</span>
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p className="text-white">
                مساحة الأرض :
                <span className="main-text ms-3">مسلح +حديد بارد</span>
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p className="text-white">
                المخطط التنظيمي :
                <span className="main-text ms-3">مطعم وجبات سريعه</span>
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p className="text-white">
                اسم الشارع :
                <span className="main-text ms-3">بدر عبدالمحسن</span>
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p className="text-white">
                نوع التقرير :
                <span className="main-text ms-3">شركة نمو للانشاءات</span>
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p className="text-white">
                اسم الحي :<span className="main-text ms-3">الاء عائض</span>
              </p>
            </div>

            <div className="col-md-6 mb-3">
              <p className="text-white">
                مكون البناء :<span className="main-text ms-3">حسب الرخصة</span>
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p className="text-white">
                الاستخدام :<span className="main-text ms-3">حسب الرخصة</span>
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p className="text-white">
                التطابق :<span className="main-text ms-3">حسب الرخصة</span>
              </p>
            </div>
            <div className="col-md-6 mb-3">
              <p className="text-white">
                الاختلافات :<span className="main-text ms-3">حسب الرخصة</span>
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
          <legend className="text-center">البنود</legend>

          <div className="flex w-75 mb-4   justify-between">
            <div classNam="flex  flex-nowrap   ">
              <p className="text-white">البند:</p>
              <span>مطابقة المساحة حسب الرخصة</span>
            </div>
            <div classNam="flex  flex-nowrap   ">
              <p className="text-white">المطابقة:</p>
              <span>مطابقة المساحة حسب الرخصة</span>
            </div>
          </div>

          <div className="flex w-75    justify-between">
            <div classNam="flex  flex-nowrap   ">
              <p className="text-white">البند:</p>
              <span>مطابقة المساحة حسب الرخصة</span>
            </div>
            <div classNam="flex  flex-nowrap   ">
              <p className="text-white">المطابقة:</p>
              <span>مطابقة المساحة حسب الرخصة</span>
            </div>
          </div>
        </fieldset>

        <fieldset className=" fieldBorder mb-4 p-3">
          <legend className="text-center">المساحات</legend>

          <CustomTable columns={areaColumns} data={areaData}>
              {areaData && areaData.length > 0
                ? areaData.map(
                    (
                      {
                        id,
                        Name,
                        rolesDueTolisence,
                        usage,
                        lisence,
                        lisenceUnitesNumber,
                        nature,
                        natureUnitesNumber,
                        difference,
                        notes
                      },
                      index
                    ) => (
                      <TableRow
                        className={`my-2 border !border-[#efaa207f] ${
                          index % 2 === 0 ? "bg-[#151521]" : ""
                        }`}
                        key={index}
                      >
                        <TableCell textColor="#ffffff7f">{id}</TableCell>
                        <TableCell>{Name}</TableCell>
                        <TableCell>{rolesDueTolisence}</TableCell>
                        <TableCell>{usage}</TableCell>
                        <TableCell>{lisence}</TableCell>
                        <TableCell>{lisenceUnitesNumber}</TableCell>
                        <TableCell>{nature}</TableCell>
                        <TableCell>{natureUnitesNumber}</TableCell>
                        <TableCell>{difference}</TableCell>
                        <TableCell>{notes}</TableCell>
                      </TableRow>
                    )
                  )
                : null}
            </CustomTable>




        </fieldset>
        <fieldset className=" fieldBorder mb-4 p-3">
          <legend className="text-center">الارتدادات</legend>

          
<CustomTable columns={bouncesColumns} data={bounceData}>
              {bounceData && bounceData.length > 0
                ? bounceData.map(
                    (
                      {
                        id,
                        name,
                        height,
                        lisence,
                        chart,
                        nature,
                      },
                      index
                    ) => (
                      <TableRow
                        className={`my-2 border !border-[#efaa207f] ${
                          index % 2 === 0 ? "bg-[#151521]" : ""
                        }`}
                        key={index}
                      >
                        <TableCell textColor="#ffffff7f">{id}</TableCell>
                        <TableCell>{name}</TableCell>
                        <TableCell>{height}</TableCell>
                        <TableCell>{lisence}</TableCell>
                        <TableCell>{chart}</TableCell>
                        <TableCell>{nature}</TableCell>
                      </TableRow>
                    )
                  )
                : null}
            </CustomTable>














          <Form.Group>
            <Form.Label>ملاحظات</Form.Label>
            <textarea cols={5} rows={5} className="form-control"></textarea>
          </Form.Group>
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

export default ShowDesignReport;
