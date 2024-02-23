import React from "react";
import { useContext, useEffect, useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import {
  UseInput,
  UseCheckBox,
  UseMultiSelect,
  UseSelect,
} from "../../../../hooks";
import { Button, Form, Image } from "react-bootstrap";
import Input from "../../../FormHandler/Input";
import Select from "../../../FormHandler/Select";
import { multiStepContext } from "../../../../Context/StepContext";
import Progress from "../../../Progress";
import ConfirmPoper from "../../ConfirmPoper";
import moment from "moment";
const AddProjectStepThree = (props) => {
  // Design Data
  // context variabules

  const {
    userData,
    setUserData,
    Submitted,
    selectProjectType,
    setSelectedProjectType,
    submitRequest,
  } = useContext(multiStepContext);

  const [userDataVaild, setUserDataVaild] = useState(false);
  //check project type

  // Design Data
  const agent = UseInput(
    `${userData.agent ? userData.agent : ""}`,
    "text",
    true
  );
  const agencyNumber = UseInput(
    `${userData.agencyNumber ? userData.agencyNumber : ""}`,
    "number",
    true
  );
  const [agencyAttachments, setAgencyAttachments] = useState(null);
  const [notes, setNotes] = useState();
  const instrumentNumber = UseInput(
    `${userData.instrumentNumber ? userData.instrumentNumber : ""}`,
    "number",
    true
  );
  const [instrument, setInstrument] = useState(null);
  const [idPhoto, setIdPhoto] = useState();
  console.log(notes);

  // check desing vaildation
  const [IsVaildState, setIsVaildState] = useState(false);

  const signalParent = (isValid) => {
    setIsVaildState(isValid);
    props.signalIfValid(isValid);
  };
  useMemo(() => {
    if (
      agent?.value &&
      agent?.isValid &&
      agencyNumber?.value &&
      agencyNumber?.isValid &&
      agencyAttachments &&
      instrumentNumber.value &&
      instrumentNumber.isValid &&
      selectProjectType === 1
    ) {
      const updatedUserData = {
        ...userData,
        agent: agent.value,
        agencyNumber: agencyNumber?.value,
        agencyAttachments,
        instrumentNumber: instrumentNumber?.value,
        notes,
      };
      setUserData(updatedUserData);
      setUserDataVaild(true);
      signalParent(true);


      console.log(userData);
    } else {
      const updatedUserData = {
        ...userData,
        agent: agent.value,
        agencyNumber: agencyNumber?.value,
        agencyAttachments,
        instrumentNumber: instrumentNumber?.value,
        notes,
      };

      setUserData(updatedUserData);
      setUserDataVaild(false);
      signalParent(false);
    }
    console.log(userDataVaild);
  }, [
    agent?.value &&
      agent?.isValid &&
      agencyNumber?.value &&
      agencyNumber?.isValid &&
      agencyAttachments &&
      instrumentNumber.value &&
      instrumentNumber.isValid,
      notes,
  ]);

  // Review Data
  const licenseNumber = UseInput(
    `${userData.licenseNumber ? userData.licenseNumber : ""}`,
    "number",
    true
  );
  const licenseDeed = UseInput(
    `${userData.licenseDeed ? userData.licenseDeed : ""}`,
    "licenseDeed",
    true
  );
  const [licenseDate, setlicenseDate] = useState(null);
  const [licenseAttachments, setlicenseAttachments] = useState();

  const [confirmSubmit, setConfirmSubmit] = useState(false);
  // check Review validation
  console.log(selectProjectType);
  useMemo(() => {
    if (
      licenseNumber.isValid &&
      licenseNumber.value &&
      licenseDeed.isValid &&
      licenseDeed.value &&
      licenseDate &&
      licenseAttachments &&
      selectProjectType === 2
    ) {
      signalParent(true);
      const updatedUserData = {
        ...userData,
        licenseNumber: licenseNumber?.value,
        licenseDeed: licenseDeed?.value,
        licenseDate: moment(licenseDate?.value).format("YYYY-MM-DD"),
        licenseAttachments,
        notes,
      };
      setUserData(updatedUserData);
      setUserDataVaild(true);
    } else {
      const updatedUserData = {
        ...userData,
        licenseNumber: licenseNumber?.value,
        licenseDeed: licenseDeed?.value,
        licenseDate: moment(licenseDate?.value).format("YYYY-MM-DD"),
        licenseAttachments,
        notes,
      };
      setUserData(updatedUserData);
      signalParent(false);
      setUserDataVaild(false);
    }
  }, [
    licenseNumber.isValid,
    licenseNumber.value,
    licenseDeed.isValid,
    licenseDeed.value,
    licenseDate,
    licenseAttachments,
    notes,
  ]);
  useEffect(() => {
    signalParent(IsVaildState);
  }, []);
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  useEffect(() => {
    signalParent(IsVaildState);
  }, [IsVaildState]);

  return (
    <fieldset className="addProjectStep step-three mx-auto">
      {selectProjectType === 1 ? (
        <legend className="text-center"> اضافة بيانات الوكالة </legend>
      ) : (
        <legend className="text-center">اضافة بيانات الرخصة </legend>
      )}

      {selectProjectType === 1 ? (
        <Form className=" row w-100 m-auto ">
          <div className="col-md-6 mb-4">
            <Input
              className="h-[37px]"
              label={" الوكيل "}
              {...agent.bind}
              mandatory
            />
          </div>
          <div className="col-md-6 mb-4">
            <Input
              className="h-[37px]"
              label={" رقم الوكيل "}
              {...agencyNumber.bind}
              mandatory
            />
          </div>

          <div className="col-md-6 mb-4">
            <Form.Group controlId="formBasicImage">
              <Form.Label className="d-flex gap-2 align-items-center">
                ارفاق الوكالة
              </Form.Label>
              <Form.Control
                type="file"
                placeholder="      ارفاق الوكالة "
                name="imageFile"
                onChange={(e) => setAgencyAttachments(e.currentTarget.files[0])}
              />
            </Form.Group>
          </div>

          <div className="col-md-6 mb-4">
            <Input
              className="h-[37px]"
              label={"رقم الصك"}
              {...instrumentNumber.bind}
              mandatory
            />
          </div>
          <div className="col-md-12 mb-4">
            <Form.Label className="d-flex gap-2 align-items-center">
              ملاحظاتك
            </Form.Label>
            <Form.Control
              as="textarea"
              multiple="multiple"
              placeholder="ادخل ملاحظاتك ..."
              style={{ height: "150px" }}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <div className="col-md-12 d-flex justify-content-end  align-items-end mb-4">
            <button
              disabled={!userDataVaild}
              onClick={submitRequest}
              className="  mt-4 sumbmitAddUpdateUser border-0 disabled "
            >
              {" "}
              {Submitted ? <Progress isSmall /> : " حفظ"}{" "}
            </button>
          </div>
        </Form>
      ) : (
        <Form className="row w-100 m-auto ">
          <div className="col-md-6 mb-4">
            <Input
              className="h-[37px]"
              placeholder="ادخل رقم الرخصة"
              label={" رقم الرخصة "}
              {...licenseNumber.bind}
              mandatory
            />
          </div>
          <div className="col-md-6 mb-4">
            <Input
              className="h-[37px]"
              placeholder="ادخل سند الرخصة"
              label={" سند الرخصة  "}
              {...licenseDeed.bind}
              mandatory
            />
          </div>

          <div className="col-md-6  mb-4">
            <div>
              <Form.Group
                className="licenseDate-container w-100"
                controlId="licenseDate"
              >
                <Form.Label className="d-flex gap-2 align-items-center">
                  تاريخ الرخصة
                </Form.Label>

                <DatePicker
                  selected={licenseDate}
                  placeholderText=" ادخل تاريخ الرخصة "
                  onChange={(date) => setlicenseDate(date)}
                  dateFormat="dd-MM-yyyy"
                  className="w-100 form-control"
                />
              </Form.Group>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <Form.Group controlId="formBasicImage">
              <Form.Label className="d-flex gap-2 align-items-center">
                تحميل المستندات
              </Form.Label>
              <Form.Control
                type="file"
                multiple="multiple"
                placeholder=" تحمبل المستندات"
                name="imageFile"
                height="100px"
                onChange={(e) =>
                  setlicenseAttachments(e.currentTarget.files[0])
                }
              />
            </Form.Group>
          </div>

          <div className="col-md-12 mb-4">
            <Form.Label className="d-flex gap-2 align-items-center">
              ملاحظاتك
            </Form.Label>
            <Form.Control
              as="textarea"
              multiple="multiple"
              placeholder="ادخل ملاحظاتك ..."
              style={{ height: "150px" }}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <div className="col-md-12 d-flex justify-content-end  mb-4">
            <button
              disabled={!userDataVaild}
              onClick={submitRequest}
              className="  mt-4 sumbmitAddUpdateUser border-0 disabled "
            >
              {" "}
              {Submitted ? <Progress isSmall /> : " حفظ"}{" "}
            </button>
          </div>
        </Form>
      )}
    </fieldset>
  );
};

export default AddProjectStepThree;
