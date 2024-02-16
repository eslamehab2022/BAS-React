import React from "react";
import styles from "./AddProject.module.css";

import UseInput from "../../../../hooks/UseInput";
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import SaveButton from "../../../SaveButton";
import Input from "../../../FormHandler/Input";
import "../AddProject.css";
import Select from "../../../FormHandler/Select";
import { useMemo } from "react";
import UseSelect from "../../../../hooks/UseSelect";
import DatePicker from "react-datepicker";
import { useContext } from "react";
import { showAddUpdateUser } from "../../../../Context/CheckAddUpdateUserVisability";
import AddAttachment from "../../AddAttachment";
const AddProject = ({ handleClose }) => {
  const projectName = UseInput("", "", true);
  const [attachment, setAttachment] = useState(null);
  const [openAddAttachemnt, setOpenAddAttachemnt] = useState(false);
  const [projectsNotes, setProjectsNotes] = useState(false);
  const { showAddUserModel, setShowAddUserModel } =
    useContext(showAddUpdateUser);

  // initialNumber

  // payment details

  let totalAmount = UseInput("", "positiveNumber", true);
  let paymentsNumber = UseInput("", "positiveNumber", true);
  let discountAmount = UseInput("", "", true);
  let initialNumber = UseInput("", "positiveNumber", true);
  let paymentType = UseSelect("", "Select", true);
  let paymentstatus = UseSelect("", "Select", true);
  let paymentNotes = UseInput("", "", true);
  const [paymentDate, setPaymentDate] = useState(null);
  const paymentTypeOptions = [
    {
      label: "مع العقد",
      value: "مع العقد",
    },
    {
      label: "مع اعتماد مخططات العمرانية",
      value: "مع اعتماد مخططات العمرانية",
    },
    {
      label: "مع انتهاء جميع المخططات",
      value: "مع انتهاء جميع المخططات",
    },
    {
      label: "مع إصدار الرخصة",
      value: "مع إصدار الرخصة",
    },
  ];
  const paymentStatusOptions = [
    {
      label: "تم الدفع",
      value: "تم الدفع",
    },
    {
      label: "لم يتم الدفع",
      value: "لم يتم الدفع",
    },
  ];

  let [remainingAmount, setRemainingAmount] = useState(" ");
  let [paymentVaildation, setPaymentVaildation] = useState(false);
  let [showNextPayment, setShowNextPayment] = useState(false);

  let handleStartPayment = (e) => {
    e.preventDefault();
    let updatedNumber =
      totalAmount.value -
      totalAmount.value * ((discountAmount.value || 0) / 100);
    updatedNumber -= initialNumber.value;
    setRemainingAmount(updatedNumber);
    console.log(remainingAmount);
    setShowNextPayment(true);
  };

  // chcking the values is here
  useMemo(() => {
    if (
      totalAmount.isValid &&
      totalAmount.value &&
      paymentsNumber.isValid &&
      paymentsNumber.value &&
      initialNumber.isValid &&
      initialNumber.value
    ) {
      setPaymentVaildation(true);
      console.log(true);
    } else {
      setPaymentVaildation(false);
      console.log(false);
    }
  }, [
    totalAmount.isValid &&
      totalAmount.value &&
      paymentsNumber.isValid &&
      paymentsNumber.value &&
      initialNumber.isValid &&
      initialNumber.value,
  ]);

  const handleAddProject = () => {
    /// after adddingProject
    setShowAddUserModel(false);
    handleClose();
  };

  return (
    <div className={` addproject AddProjectComponent p-5`}>
      {openAddAttachemnt && (
        <Modal
          className="submitSystemPoper"
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setOpenAddAttachemnt(false)}
          show={openAddAttachemnt}
        >
          <Modal.Body className="d-flex align-items-center">
            <img
              src={`${process.env.PUBLIC_URL}/chooseFile.png`}
              className="my-3"
              alt="choose file"
            />
            <Form.Group
              className={`${styles.inputbg}`}
              controlId="formBasicImage"
            >
              <Form.Control
                type="file"
                placeholder="ادخل اسم الملف  "
                name="imageFile"
                className={`${styles.chooseFile} text-white`}
                onChange={(e) => setAttachment(e.currentTarget.files[0])}
              />
            </Form.Group>
            <div
              className="my-3"
              onClick={() => {
                setOpenAddAttachemnt(false);
              }}
            >
              <SaveButton />
            </div>
          </Modal.Body>
        </Modal>
      )}

      <h2 className="golden text-xl">إضافة جديدة</h2>
      <fieldset className={`${styles.fieldBorder} p-3`}>
        <legend className="text-center">بحث عن الطلب</legend>
        <Input
          {...projectName.bind}
          label="البحث"
          placeholder="ابحث عن ...."
          className={`${styles.searchOrder}  w-25 p-2`}
        />
      </fieldset>
      {projectName.value && (
        <div className="addingDetails mt-4 ">
          <fieldset className={`${styles.fieldBorder} p-3`}>
            <legend className="text-center"> معلومات عامة </legend>
            <div className="row">
              <div className="col-md-6 mb-3">
                <p className="text-white">
                  اسم المالك :<span className="main-text"> BSA</span>
                </p>
              </div>
              <div className="col-md-6 mb-3">
                <p className="text-white">
                  نوع المشروع :{" "}
                  <span className="main-text"> الاشراف على التنفيذ</span>
                </p>
              </div>
              <div className="col-md-6 mb-3">
                <p className="text-white">
                  نوع العميل : <span className="main-text"> فردي </span>
                </p>
              </div>
            </div>
          </fieldset>

          <fieldset className={`${styles.fieldBorder} p-4 mt-4 `}>
            <legend className="text-center"> المرفقات </legend>
            <div className="row">
              <AddAttachment
                attachment={attachment}
                setAttachment={setAttachment}
              />
            </div>
          </fieldset>

          <fieldset className={`${styles.fieldBorder} p-3 mt-4 `}>
            <legend className="text-center"> ارفاق الملاحظات </legend>

            <p className="text-white">ملاحظات المشروع</p>
            <textarea
              onChange={(e) => {
                setProjectsNotes(e.target.value);
              }}
              className="form-control mt-3"
              placeholder="اكتب ملاحظات المشروع"
              rows={5}
            />
          </fieldset>
          <fieldset className={`${styles.fieldBorder} p-3 mt-4 `}>
            <legend className="text-center"> معلومات الدفع </legend>
            <Form onSubmit={handleStartPayment}>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <Input
                    {...totalAmount.bind}
                    mandatory
                    className={`${styles.searchOrder} w-100`}
                    label={"المبلغ الاجمالى"}
                  />
                </div>
                <div className="col-md-4 mb-4">
                  <Input
                    {...paymentsNumber.bind}
                    mandatory
                    className={`${styles.searchOrder} w-100`}
                    label={"عدد الدفعات المتفق عليها "}
                  />
                </div>
                <div className="col-md-4 mb-4">
                  <Input
                    {...discountAmount.bind}
                    className={`${styles.searchOrder} w-100`}
                    label={"قيمة الخصم "}
                  />
                </div>
                <div className="col-md-4 mb-4">
                  <Input
                    {...initialNumber.bind}
                    mandatory
                    className={`${styles.searchOrder} w-100`}
                    label={"القيمه الافتتاحية "}
                  />
                </div>
                <div
                  className={`col-md-4 ${
                    showNextPayment && "d-none"
                  }  d-flex align-items-center  mb-4`}
                >
                  <Button
                    onClick={() => {
                      setShowNextPayment(true);
                    }}
                    disabled={!paymentVaildation}
                    type="submit"
                    className={`bg-[#EFAA20]  confirmPayment w-50  `}
                  >
                    تأكيد
                  </Button>
                </div>
                {showNextPayment && (
                  <>
                    <div className="col-md-4 mb-4">
                      <Select
                        {...paymentType.bind}
                        options={paymentTypeOptions}
                        mandatory
                        className={`${styles.searchOrder} w-100`}
                        label={" نوع الدفعة    "}
                      />
                    </div>
                    <div className="col-md-4 mb-4">
                      <Form.Group
                        className="licenseDate-container "
                        controlId="licenseDate"
                      >
                        <Form.Label className="d-flex gap-2 align-items-center">
                          تاريخ الدفع
                        </Form.Label>

                        <DatePicker
                          selected={paymentDate}
                          placeholderText=" ادخل تاريخ الدفع "
                          onChange={(date) => setPaymentDate(date)}
                          dateFormat="dd-MM-yyyy"
                          className="w-100 form-control"
                        />
                      </Form.Group>
                    </div>

                    <div className="col-md-4 mb-4">
                      <Select
                        {...paymentstatus.bind}
                        options={paymentStatusOptions}
                        mandatory
                        className={`${styles.searchOrder} w-100`}
                        placeholder="اختار الحالة"
                        label={" الحالة"}
                      />
                    </div>
                    <div className="col-md-12 mb-4">
                      <Form.Group>
                        <Form.Label className="d-flex gap-2 align-items-center">
                          ملاحظات الدفع
                        </Form.Label>

                        <textarea
                          {...paymentNotes.bind}
                          placeholder="ملاحظات الدفع"
                          className="form-control"
                          rows={5}
                        />
                      </Form.Group>
                    </div>
                  </>
                )}
              </div>
            </Form>
          </fieldset>

          <div
            onClick={() => {
              handleAddProject();
            }}
            className="my-3 m-auto SaveButtonContainer   "
          >
            <SaveButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProject;
