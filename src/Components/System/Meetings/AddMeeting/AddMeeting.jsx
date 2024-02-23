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
import { MenuItem } from "@mui/material";

import Input from "../../../FormHandler/Input";
import moment from "moment";
import Progress from "../../../Progress";
import ChooseDepartmentComponent from "../ChooseDepartmentComponent/ChooseDepartmentComponent";
import TimePickerButton from "../../../TimePickerPage";
import { FaCheck } from "react-icons/fa6";
import FormDatePicker from "../../../FormDatePicker";
import { useForm } from "react-hook-form";
import CustomSelect from "../../../../Pages/System/PlanModel/components/CustomSelect";
import { CiSearch } from "react-icons/ci";
import { InputLabel } from "../../../../Pages/System/PlanModel/components/InputLabel";
import myAxiosInstance, { myAxiosJson } from "../../../../helper/https";
export const AddMeeting = ({ view, setView }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedMeetingType, setSelectedMeetingType] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(0);
  const [Submitted, setSubmitted] = useState(false);
  const selectCountry = UseSelect("", "Select");
  const selectMeetingType = UseSelect("", "Select");
  let [chooseDepartment, setChooseDeprtmant] = useState(false);
  let [meetingDetails, setMeetingDetails] = useState(false);
  let [meetingDate, setMeetingDate] = useState(null);
  let [description, setDescription] = useState("");
  let [startMeeting, setStartMeeting] = useState(null);
  let [endMeeting, setEndMeeting] = useState(null);
  let [meetingPlace, setMeetingPlace] = useState("10:00");
  let meetingLink = UseInput("", "", false);
  // const currentDate = Date.now()
  // const Handeledmeeting = moment(meetingDate).format("DD-MM-YYYYThh:mma")

  const meetingCountries = [
    {
      value: "الكل", // 0
      label: "الكل",
    },
    {
      value: "السعودية", // 1
      label: "السعودية",
    },
    {
      value: "مصر", // 2
      label: "مصر",
    },
  ];
  const meetingType = [
    {
      value: "شامل", // 1
      label: "شامل",
    },
    {
      value: "مع قسم", // 2
      label: "مع قسم",
    },
  ];
  const handleAddMeeting = () => {};
  const onSubmit = (data) => {
    const DataSent = {
      meetingType: data.meetingType === "شامل" ?  1 : data.meetingType === "مع قسم" ?  2 : null,
      // descraption: description,
      country: data.country === "الكل" ?  0 : data.country === "السعودية" ?  1 : data.country === "مصر"? 2 : null,
      typeMeeting: selectedPlace, // 0 => offline , 1 => online
      startDate: meetingDate,
      // endDate: "2024-12-01",
      meetingLink: data.meetingLink,
      startTime: startMeeting,
      endTime: endMeeting,
    };
    /*
    {
    "meetingType" : 2,
   "descraption" : "this is ecent",
   "country" : 1,
   "typeMeeting" : 0, // 0 => offline , 1 => online
   "startDate" : "2023-12-01",
   "endDate" : "2024-12-01",
   "startTime" : "2024-12-01",
   "meetingLink": "",
   "endTime" : "2024-01-12",
    "employeId" : [{
        "_id" : "65d20292482491c1474c49c0"
    }]

}
     */
myAxiosJson.post("event", DataSent)
    .then(data => {
      console.log("event data: ",data);
    })
    .catch(err => {
      console.log(err);
    })

    // console.log("Submitted Data: ", DataSent);
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
        className="systemModal mettingModal"
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
          <Form
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data"
            className="row my-4 date-input border-golden w-100 mx-auto p-3"
          >
            <div className="col-md-12 mb-4">
              <div className="row">
                <div className="col-md-6">
                  {/* <Select
                    // className="w-50"
                    label="بلد الاجتماع"
                    OptionbackgroundColor="#2B2B40"
                    {...selectCountry.bind}
                    options={meetingCountries}
                    mandtory
                  /> */}
                  <InputLabel
                    size={18}
                    label={"بلد الاجتماع"}
                    className={"mb-3"}
                    mandatory
                  />
                  <CustomSelect
                    placeholderValue="اختار بلد الاجتماع"
                    {...register("country")}
                  >
                    {meetingCountries.map(({ label, value }, index) => (
                      <MenuItem key={index} value={value} onClick={() => {}}>
                        {label}
                      </MenuItem>
                    ))}
                  </CustomSelect>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <InputLabel
                size={18}
                label={"نوع الاجتماع"}
                className={"mb-3"}
                mandatory
              />

              <CustomSelect
                placeholderValue="اختار نوع الاجتماع"
                {...register("meetingType")}
              >
                {meetingType.map(({ label, value }, index) => (
                  <MenuItem
                    key={index}
                    value={value}
                    onClick={() => {
                      setSelectedMeetingType(value);
                    }}
                  >
                    {label}
                  </MenuItem>
                ))}
              </CustomSelect>
            </div>

            {selectedMeetingType === "مع قسم" && (
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
                    setDescription(data)
                    console.log({ event, editor, data });
                  }}
                  editor={ClassicEditor}
                  // data="<h2>تفاصيل الاجتماع</h2>"
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
                      setSelectedPlace(0);
                    }}
                    value="offline"
                    control={
                      <label
                        onClick={() => {
                          setMeetingPlace("offline");
                          setSelectedPlace(0);
                        }}
                        htmlFor="offline"
                        className={`w-5 h-5 rounded-[5px] bg-[#2B2B40] border ${
                          meetingPlace === "offline" ? "!border-[#EFAA20]" : ""
                        }`}
                      >
                        {selectedPlace == 0 ? <FaCheck /> : null}{" "}
                        <Radio id="offline" sx={{ display: "none" }} />
                      </label>
                    }
                    label="offline"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            {meetingPlace === "online" && (
              <div className="col-md-6 meetingLink flex flex-col  mb-4">
                <InputLabel
                    size={18}
                    label={"لينك الاجتماع "} 
                    className={"mb-3"}
                    mandatory
                  />
                <input 
                className="bg-[#2B2B40] text-white w-full outline-none p-2 rounded-[7px]"
                type="text"
                // {...meetingLink.bind}
                {...register("meetingLink")}
                />
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
                    label="وقت بدا الاجتماع "
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
                    label="وقت نهاية الاجتماع "
                    onChange={(time) => setEndMeeting(time)}
                    className="w-100 form-control !text-white"
                  />
                </Form.Group>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="submit"
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
