import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { Grid, MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import styles from "./AddUpdateReception.module.css";
import { useContext, useState } from "react";
import SettingContext from "../../../../Context/SettingContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CustomSelect from "../../../../Pages/System/PlanModel/components/CustomSelect";
import { CiSearch } from "react-icons/ci";
import { FormModal } from "../../../../Pages/System/PlanModel/components/FormModal";
import AddAttachment from "../../AddAttachment";
import { ProjectNames } from "../../../../Pages/System/PlanModel/consts";
import TimePickerButton from "../../../TimePickerPage";
const FormGroupWrapper = ({ children, title }) => {
  return (
    <fieldset className="fieldBorder container   mx-auto  p-3 my-3">
      <legend className="text-center">{title}</legend>
      {children}
    </fieldset>
  );
};

const ModalHeader = ({ title, handleClose }) => {
  return (
    <Modal.Header className="border-none py-1 mb-2">
      <Modal.Title className="mx-auto border !border-[#EFAA20] rounded-[5px] p-2">
        <p className="text-[#EFAA20] font-semibold text-xl">{title}</p>
      </Modal.Title>
      <button onClick={handleClose}>
        <img src="/Rejected.svg" alt="close" />
      </button>
    </Modal.Header>
  );
};

const ModalWrapper = ({ children, show, onHide }) => {
  return (
    <Modal
      size="lg"
      show={show}
      onHide={onHide}
      aria-labelledby=" example-modal-sizes-title-lg"
      className={`systemModal ${styles.ReciptionModal} scrollbar-none  overflow-y-scroll bg-black/25`}
      contentClassName="px-4 py-2 border !border-[#EFAA20]"
    >
      {children}
    </Modal>
  );
};

export default function AddReception({ show, handleClose, status, id = null }) {

    let [startMeeting, setStartMeeting] = useState(null);
    let [endMeeting, setEndMeeting] = useState(null);
    const [attachment, setAttachment] = useState(false);
    let [recievingDate, setRecievingDate] = useState(null);









  const { ReciptionType, setReciptionType } = useContext(SettingContext);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const onSubmit = (data) => {
    // console.log(data);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ModalWrapper show={show} onHide={handleClose}>
        {ReciptionType === "Exports" ? (
          <ModalHeader handleClose={handleClose} title={"اضافة زيارة صادرة"} />
        ) : ReciptionType === "Imports" ? (
          <ModalHeader handleClose={handleClose} title={"اضافة زيارة واردة"} />
        ) : null}

        <Form
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          className="h-full overflow-y-scroll scrollbar-none"
        >
          <FormGroupWrapper title={"معلومات الزيارة"}>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <Controller
                    name="visitType"
                    className="w-100"
                    control={control}
                    render={({ onChange, value, name, ref, field }) => (
                      <Select
                        label="نوع الزيارة"
                        inputRef={ref}
                        placeholder="اختر.."
                        className="w-100"
                        classNames={"border-0"}
                        options={[
                          {
                            value: "واردة",
                            label: "واردة",
                          },
                          {
                            value: "صادرة",
                            label: "صادرة",
                          },
                        ]}
                        onChange={onChange}
                        {...field}
                        name={name}
                      />
                    )}
                  />

                  <Form.Group>
                    <Form.Label> اسم الموظف</Form.Label>
                    <input
                      className="form-control h-[37px]"
                      placeholder="اكتب اسم الموظف"
                      {...register("personVisit")}
                    />
                  </Form.Group>
                </div>
                <div className="grid grid-cols-3 mb-3 gap-4">
                  <Form.Group className="">
                    <Form.Label>رقم تعريفى</Form.Label>
                    <input
                      className="form-control h-[37px]"
                      {...register("IdentityNumber")}
                      // placeholder="اكتب مكان الزياة"
                    />
                  </Form.Group>
                </div>
                <div className="grid grid-cols-3 mb-3 gap-4">
                  <Form.Group className="col-span-2">
                    <Form.Label> مكان الزيارة</Form.Label>
                    <input
                      className="form-control h-[37px]"
                      {...register("visitLocation")}
                      placeholder="اكتب مكان الزياة"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>رقم الجوال</Form.Label>
                    <input
                      className="form-control h-[37px]"
                      // pattern phone:pattern(new RegExp(/^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/)),
                      {...register("phone")}
                      placeholder="ادخل رقم الجوال"
                    />
                  </Form.Group>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-3">
                  <Form.Group>
                    <InputLabel id="recieving-date" label={"تاريخ الزيارة"} />
                    <DatePicker
                      id="recieving-date"
                      selected={recievingDate}
                      placeholder="تاريخ الزيارة"
                      onChange={(date) => setRecievingDate(date)}
                      dateFormat="dd-MM-yyyy"
                      className="w-full bg-[#2B2B40] rounded-[7px]"
                      sx={{
                        "& fieldset": {
                          border: "none",
                        },
                        "& input": {
                          color: "white",
                        },
                        "& svg": {
                          color: "Rgba(255,255,255,0.5)",
                        },
                      }}
                    />
                    {/* <Form.Label> تاريخ الزيارة</Form.Label>
                  <Controller
                    control={control}
                    name="date-input"
                    render={({ field }) => (
                      <FormDatePicker
                        placeholderText="ادخل اسم الزيارة"
                        onChange={(date) => field.onChange(date)}
                        date={field.value}
                      />
                    )}
                  /> */}
                  </Form.Group>
                  <Form.Group>
                    <InputLabel id="recieving-date" label={"وقت الزياره من"} />
                    <TimePickerButton
                      value={startMeeting}
                      placeholder="اختر"
                      onChange={(time) => setStartMeeting(time)}
                      className="w-100 form-control !text-white"
                    />
                    {/* <Form.Label> وقت الزياره من</Form.Label>
                  <Controller
                    control={control}
                    name="startVisitTime"
                    render={({ field }) => (
                      <TimePicker
                        value={field.value}
                        placeholderText=""
                        onChange={(time) => field.onChange(time)}
                        className="w-100 form-control"
                      />
                    )}
                  /> */}
                  </Form.Group>
                  <Form.Group>
                    <InputLabel id="recieving-date" label={"وقت الزياره الي"} />

                    <TimePickerButton
                      value={endMeeting}
                      placeholder="اختر"
                      onChange={(time) => setEndMeeting(time)}
                      className="w-100 form-control !text-white"
                    />
                    {/* <Form.Label> وقت الزياره الي</Form.Label>
                  <Controller
                    control={control}
                    name="EndVisitTime"
                    render={({ field }) => (
                      <TimePicker
                        value={field.value}
                        placeholderText=""
                        onChange={(time) => field.onChange(time)}
                        className="w-100 form-control"
                      />
                    )}
                  /> */}
                  </Form.Group>
                </div>
              </FormGroupWrapper>
              <FormGroupWrapper title={"تفاصيل الزيارة"}>
                <Form.Group className="my-3">
                  <Form.Label>سبب الزيارة</Form.Label>
                  <textarea
                    cols={5}
                    rows={5}
                    {...register("resoneVisit")}
                    className="form-control"
                    placeholder="اكتب سبب الزيارة .................................."
                  />
                </Form.Group>
                <Form.Group className="my-3">
                  <Form.Label>ملاحظات </Form.Label>
                  <textarea
                    cols={5}
                    rows={5}
                    {...register("notes")}
                    className="form-control"
                    placeholder="اكتب  ملاحظات .................................."
                  />
                </Form.Group>
              </FormGroupWrapper>
              <FormGroupWrapper title={"تفاصيل الزيارة"}>
                <AddAttachment
                  attachment={attachment}
                  setAttachment={setAttachment}
                />
              </FormGroupWrapper>
              <div className="flex my-2  justify-center gap-4">
                {/* <DeleteButton /> */}
                <Button
                 
                  type="button"
                  className="mx-auto py-1 px-14 font-semibold text-[15px] border !border-[#BA0A0A] text-white hover:text-white bg-[#BA0A0A] hover:bg-[#2B2B40]"
                >
                  حذف
                </Button>
                <Button
                  type="submit"
                  className="mx-auto py-1 px-14 font-semibold text-[15px] border !border-[#EFAA20] text-[#2B2B40] hover:text-white bg-[#EFAA20] hover:bg-[#2B2B40]"
                >
                  حفظ
                </Button>
              </div>
        </Form>
      </ModalWrapper>
    </LocalizationProvider>
  );
}
