import React, { useContext, useMemo, useState } from "react";

import SystemControler from "../../../../Components/System/SystemControler/SystemControler";
import AddUserButton from "../../../../Components/System/AddUserButton/AddUserButton";
import { Button, Container, Form, Image, Modal } from "react-bootstrap";
import { showAddUpdateUser } from "../../../../Context/CheckAddUpdateUserVisability";
import Select from "../../../../Components/FormHandler/Select";
import { UseInput, UseSelect } from "../../../../hooks";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Input from "../../../FormHandler/Input";
import moment from "moment";
import Progress from "../../../Progress";
import ChooseDepartmentComponent from "../ChooseDepartmentComponent/ChooseDepartmentComponent";
import TimePickerButton from "../../../TimePickerPage";
import { FaCheck } from "react-icons/fa6";
import FormDatePicker from "../../../FormDatePicker";
export const AddMeeting = ({ view, setView }) => {
  const [selectedPlace, setSelectedPlace] = useState(0);
  const [Submitted, setSubmitted] = useState(false);
  const selectCountry = UseSelect("", "Select");
  const selectMeetingType = UseSelect("", "Select");
  let [chooseDepartment, setChooseDeprtmant] = useState(false);
  let [meetingDetails, setMeetingDetails] = useState(false);
  let [meetingDate, setMeetingDate] = useState(null);
  let [startMeeting, setStartMeeting] = useState(null);
  let [endMeeting, setEndMeeting] = useState(null);
  let [meetingPlace, setMeetingPlace] = useState("10:00");
  let meetingLink = UseInput("", "", false);
  // const currentDate = Date.now()
  // const Handeledmeeting = moment(meetingDate).format("DD-MM-YYYYThh:mma")

  const meetingCountries = [
    {
      value: "الكل",
      label: "الكل",
    },
    {
      value: "السعودية",
      label: "السعودية",
    },
    {
      value: "مصر",
      label: "مصر",
    },
  ];
  const meetingType = [
    {
      value: "شامل",
      label: "شامل",
    },
    {
      value: "مع قسم",
      label: "مع قسم",
    },
  ];
  const handleAddMeeting = () => {
    setView(false);
  };

  return (
    <div>
      <ChooseDepartmentComponent
        chooseDepartment={chooseDepartment}
        setChooseDeprtmant={setChooseDeprtmant}
      />

      <Modal
        size="lg"
        show={view}
        onHide={() => setView(false)}
        aria-labelledby=" example-modal-sizes-title-lg"
        className="systemModal mettingModal   "
        contentClassName="scroll"
      >
        <Container>
          <div className="d-flex justify-content-between">
            <p className="text-xl text-white">اضافة اجتماع جديد</p>
            <Image
              src="/Rejected.png"
              alt="close modal button"
              className="pointer"
              onClick={() => {
                setView(false);
              }}
            />
          </div>
          <Form className="row my-4 date-input border-golden w-100 mx-auto p-3  ">
            <div className="col-md-12 mb-4">
              <Select
                className="w-50"
                label="بلد الاجتماع"
                OptionbackgroundColor="#2B2B40"
                {...selectCountry.bind}
                options={meetingCountries}
                mandtory
              />
            </div>
            <div className="col-md-6 mb-4">
              <Select
                OptionbackgroundColor="#2B2B40"
                label="نوع الاجتماع"
                {...selectMeetingType.bind}
                options={meetingType}
                mandtory
              />
            </div>

            {selectMeetingType.value.value === "مع قسم" && (
              <div className="col-md-6 d-flex align-items-end  justify-content-center mb-4">
                <Button
                  type="button"
                  className="w-100 ChooseDeprtmant  bg-[#2B2B40]"
                  onClick={() => {
                    setChooseDeprtmant(true);
                  }}
                >
                  اختار القسم{" "}
                </Button>
              </div>
            )}

            <div className="col-md-12 mb-4">
              <Form.Group>
                <Form.Label>الاجتماع عن</Form.Label>
                <CKEditor
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                  editor={ClassicEditor}
                  data="<h2>تفاصيل الاجتماع</h2>"
                  onBlur={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                ></CKEditor>
              </Form.Group>
            </div>
            <div className="col-md-6   mb-4">
              <FormControl>
                <FormLabel
                  className="text-white "
                  // id="demo-radio-buttons-group-label"
                >
                  {" "}
                  مكان الاجتماع
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  className="custom-radio"
                >
                  <FormControlLabel
                    onChange={(e) => {
                      setMeetingPlace(e.target.value);
                      setSelectedPlace(1);
                    }}
                    className="text-white mt-2 flex gap-3 "
                    value="online"
                    control={
                      <label
                        onClick={() => {
                          setMeetingPlace("online");
                          setSelectedPlace(1);
                        }}
                        htmlFor="online"
                        className={`w-5 h-5 rounded-[5px] bg-[#2B2B40] border ${
                          meetingPlace === "online" ? "!border-[#EFAA20]" : ""
                        }`}
                      >
                        {selectedPlace == 1 ? <FaCheck /> : null}{" "}
                        <Radio sx={{ display: "none" }} />
                      </label>
                    }
                    label="online"
                  />
                  <FormControlLabel
                    className="text-white flex gap-3 my-2"
                    onChange={(e) => {
                      setMeetingPlace(e.target.value);
                      setSelectedPlace(2);
                    }}
                    value="offline"
                    control={
                      <label
                        onClick={() => {
                          setMeetingPlace("offline");
                          setSelectedPlace(2);
                        }}
                        htmlFor="offline"
                        className={`w-5 h-5 rounded-[5px] bg-[#2B2B40] border ${
                          meetingPlace === "offline" ? "!border-[#EFAA20]" : ""
                        }`}
                      >
                        {selectedPlace == 2 ? <FaCheck /> : null}{" "}
                        <Radio id="offline" sx={{ display: "none" }} />
                      </label>
                    }
                    label="offline"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            {meetingPlace === "online" && (
              <div className="col-md-6 meetingLink d-flex align-items-center  justify-content-start mb-4">
                <Input label={" لينك الاجتماع "} {...meetingLink.bind} />
              </div>
            )}
            <div className="col-md-12  mb-4">
              <div className="!w-1/2">
                <Form.Group
                  className="licenseDate-container "
                  controlId="licenseDate"
                >
                  <Form.Label className="d-flex gap-2 align-items-center">
                    تاريخ الاجتماع
                  </Form.Label>

                  <FormDatePicker
                    date={meetingDate}
                    placeholderText=" ادخل تاريخ الاجتماع "
                    onChange={(date) => setMeetingDate(date)}
                    className="w-50 form-control"
                  />
                </Form.Group>
              </div>
            </div>
            <div dir="ltr" className="col-md-6  mb-2">
              <div>
                <Form.Group
                  className="licenseDate-container w-100"
                  controlId="licenseDate"
                >
                  <Form.Label className="d-flex gap-2 align-items-center">
                    توقيت بدا الاجتماع
                  </Form.Label>
                  <TimePickerButton
                    value={startMeeting}
                    label="   وقت بدا الاجتماع "
                    onChange={(time) => setStartMeeting(time)}
                    className="w-100 form-control "
                  />
                </Form.Group>
              </div>
            </div>
            <div dir="rtl" className="col-md-6  mb-2">
              <div>
                <Form.Group
                  className="licenseDate-container w-100"
                  controlId="licenseDate"
                >
                  <Form.Label className="d-flex gap-2 align-items-center">
                    توقيت نهاية الاجتماع
                  </Form.Label>
                  <TimePickerButton
                    value={endMeeting}
                    label="   وقت نهاية الاجتماع "
                    onChange={(time) => setEndMeeting(time)}
                    className="w-100 form-control !text-white"
                  />
                </Form.Group>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="button"
                onClick={(e) => {
                  handleAddMeeting();
                }}
                className="  mt-4 sumbmitAddUpdateUser border-0 disabled "
              >
                {" "}
                {/* {Submitted ? <Progress isSmall /> : " حفظ"}{" "} */}
                حفظ
              </button>
            </div>
          </Form>
        </Container>
      </Modal>
    </div>
  );
};
