import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { MenuItem } from "@mui/material";
import Select from "../../../FormHandler/Select";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TimePicker from "react-time-picker";
import FormDatePicker from "../../../FormDatePicker";
import AddAttachment from "../../AddAttachment";
import SaveButton from "../../../SaveButton";
import styles from "./AddUpdateReception.module.css";
import DeleteButton from "../../../DeleteButton";
import Progress from "../../../Progress";
import { FormModal } from "../../../../Pages/System/PlanModel/components/FormModal";
import { InputLabel } from "../../../../Pages/System/PlanModel/components/InputLabel";
import CustomSelect from "../../../../Pages/System/PlanModel/components/CustomSelect";
import { CiSearch } from "react-icons/ci";
import { ProjectNames } from "../../../../Pages/System/PlanModel/consts";
import TimePickerButton from "../../../TimePickerPage";
import myAxiosInstance from "../../../../helper/https";
import { useDeleteReception } from "../../../../hooks/fetchers/Receptions";

const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}

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
      className={`systemModal ${styles.ReciptionModal} scrollbar-none  overflow-y-scroll bg-black/50`}
      contentClassName="p-4 border !border-[#EFAA20]"
    >
      {children}
    </Modal>
  );
};

const AddUpdateReciption = ({
  editVisit,
  setEditVisit,
  ReciptionType,
  show,
  setShow,
  status,
  id = null,
}) => {
  const { mutate: deleteReciptionMutation } = useDeleteReception();

  const [addVisit, setAddVisit] = useState(true);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const handleEditvisit = (data) => {
    // console.log(data);
    setEditVisit(false);
  };
  const handleAddvisit = (data) => {
    // console.log(data);
    var formdata = new FormData();
    /**
   typeVisit = "1" => "employId" : 65d1bb70ab6f6075b95446d1 
    */
    // formdata.append("fileVist", fileInput.files[0], "logo.png");

    // if (status === "Exports") {
    //   formdata.append("typeVisit", "1");
    //   formdata.append("employId", "65d1bb70ab6f6075b95446d1");
    // } else if (status === "Imports") {
    //   formdata.append("typeVisit", "2");
    //   formdata.append("IdentityNumber", "12345678911");
    //   formdata.append("personType", "فردي");
    //   formdata.append("personVisit", "بدر");
    // }
    // formdata.append("phone", "+966505282277");
    // // formdata.append("phone", data.phone);
    // formdata.append("visitLocation", "السعودية");
    // // formdata.append("visitLocation", data.visitPlace);
    // // formdata.append("typeVisit", data.visitType.value === 'صادرة' ? "1" : data.visitType.value === 'واردة' ? "2" : null);
    // formdata.append("resoneVisit", "visitReason");
    // // formdata.append("resoneVisit", data.visitReason);
    // formdata.append("notes", "notes");
    // // formdata.append("notes", data.notes);
    // formdata.append("dateVist", "2025-07-25T14:34:50.600+00:00");
    // formdata.append("timeOutVist", "2025-07-13T14:34:50.600+00:00");
    // formdata.append("timeInVist", "2025-07-13T14:34:50.600+00:00");
    // // formdata.append("IdentityNumber", data.identity);

    // if(typeVisit === 1) {
    //   employeId is required
    //   }else if (typeVisit === 2) {
    //   IdentityNumber is required;
    //   personType is required;
    //   personVisit is required
    //   }
    if (data.visitType.value === "صادرة") {
      formdata.append("typeVisit", "1");
      formdata.append("employId", "65d1bb70ab6f6075b95446d1");
    } else if (data.visitType.value === "واردة") {
      formdata.append("typeVisit", "2");
      formdata.append("IdentityNumber", "12345678911");
      formdata.append("personVisit", data.personVisit);
      formdata.append("personType", data.personType);
    }
    // formdata.append("fileVist", fileInput.files[0], "image 47.png");
    formdata.append("phone", "+966505282277");
    formdata.append("visitLocation", data.visitLocation);
    // formdata.append("typeVisit", "2");
    formdata.append("resoneVisit", data.resoneVisit);
    formdata.append("dateVist", "2025-07-25T14:34:50.600+00:00");
    formdata.append("timeOutVist", "2025-07-13T14:34:50.600+00:00");
    formdata.append("timeInVist", "2025-07-13T14:34:50.600+00:00");
    formdata.append("notes", data.notes);
    // console.log(data);
    // myAxiosInstance
    //   .post("reception", formdata)
    //   .then((data) => {
    //     // console.log("reception data: ", data);
    //   })
    //   .catch((err) => {
    //     // console.log(err);
    //   });

    setShow(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        {/* // edit export */}
        {id && editVisit && status === "Exports" && (
          <EditExport show={editVisit} onHide={() => setEditVisit(false)} />
        )}
        {/* // edit import */}

        {id && editVisit && status === "Imports" && (
          <EditImport show={editVisit} onHide={() => setEditVisit(false)} />
        )}
        {/* // add export */}

        {!id && show && ReciptionType === "Exports" && (
          <AddExport show={show} onHide={() => setShow(false)} />
        )}
        {/* // add import */}

        {!id && show && ReciptionType === "Imports" && (
          <AddImport show={show} onHide={() => setShow(false)} />
        )}
      </div>
    </LocalizationProvider>
  );
};

export default AddUpdateReciption;

const AddImport = ({ show, onHide }) => {
  let [startMeeting, setStartMeeting] = useState(null);
  let [endMeeting, setEndMeeting] = useState(null);
  let [dateVist, setDateVist] = useState(null);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const [attachmentSrc, setAttachmentSrc] = useState([]);
  const [attachment, setAttachment] = useState(null);

  function updateImageDisplay(e) {
    const curFiles = e.target.files;
    if (curFiles?.length === 0) {
      return;
    } else {
      const selectedImages = Array.from(curFiles);
      const imagesArr = selectedImages.map((file) => {
        if (validFileType(file)) {
          return URL.createObjectURL(file);
        }
      });
      setAttachmentSrc((prevAttachment) => prevAttachment.concat(imagesArr));
      setAttachment(selectedImages);
    }
  }

  const onSubmit = (data) => {
    // console.log({ ...data, image: attachment,"dateVist": dateVist });

    const formData = new FormData();
    formData.append("resoneVisit", data.resoneVisit);
    formData.append("notes", data.notes);
    // formData.append("dateVist", dateVist);
    formData.append("resoneVisit", data.resoneVisit);
    formData.append("dateVist", "2025-07-25T14:34:50.600+00:00");
    formData.append("timeOutVist", "2025-07-13T14:34:50.600+00:00");
    formData.append("timeInVist", "2025-07-13T14:34:50.600+00:00");
    for (const file of attachment) {
      formData.append("fileVist", file);
    }
    onHide();
  };
  return (
    <ModalWrapper show={show} onHide={onHide}>
      <ModalHeader title={"اضافة زيارة واردة"} handleClose={onHide} />

      <Form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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
                selected={dateVist}
                placeholder="تاريخ الزيارة"
                onChange={(date) => setDateVist(date)}
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
        <FormGroupWrapper title={"المرفقات"}>
          <AttachmentSection onChange={updateImageDisplay} />
        </FormGroupWrapper>
        <div className="flex my-2  justify-center gap-4">
          <Button
            type="submit"
            className="mx-auto py-1 px-14 font-semibold text-[15px] border !border-[#EFAA20] text-[#2B2B40] hover:text-white bg-[#EFAA20] hover:bg-[#2B2B40]"
          >
            حفظ
          </Button>
        </div>
      </Form>
    </ModalWrapper>
  );
};

const AddExport = ({ show, onHide }) => {
  let [startMeeting, setStartMeeting] = useState(null);
  let [endMeeting, setEndMeeting] = useState(null);
  let [dateVist, setDateVist] = useState(null);
  const [selectedProjects, setSelectedProjects] = useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const [attachmentSrc, setAttachmentSrc] = useState([]);
  const [attachment, setAttachment] = useState(null);

  function updateImageDisplay(e) {
    const curFiles = e.target.files;
    if (curFiles?.length === 0) {
      return;
    } else {
      const selectedImages = Array.from(curFiles);
      const imagesArr = selectedImages.map((file) => {
        if (validFileType(file)) {
          return URL.createObjectURL(file);
        }
      });
      setAttachmentSrc((prevAttachment) => prevAttachment.concat(imagesArr));
      setAttachment(selectedImages);
    }
  }
  const onSubmit = (data) => {
    // console.log({ ...data, image: attachment });
    const formData = new FormData();
    formData.append("resoneVisit", data.resoneVisit);
    formData.append("notes", data.notes);
    for (const file of attachment) {
      formData.append("fileVist", file);
    }
    onHide();
  };
  return (
    <ModalWrapper show={show} onHide={onHide}>
      <ModalHeader title={"اضافة زيارة صادرة"} handleClose={onHide} />

      <Form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <FormGroupWrapper title={"معلومات الزيارة"}>
          <div className="grid grid-cols-3 gap-4 mb-3">
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

            <Form.Group className="col-span-2">
              <InputLabel id="username" label={"اسم الشخص"} />
              <CustomSelect>
                <MenuItem disabled value="">
                  <div className="w-full flex justify-between">
                    <span>بحث ...</span>
                    <CiSearch />
                  </div>
                </MenuItem>
                {ProjectNames.map((name, index) => (
                  <MenuItem
                    key={index}
                    value={name}
                    onClick={(e) => setSelectedProjects(name)}
                    // style={getStyles(name, selectedItem, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </CustomSelect>

              {/* <input
          className="form-control h-[37px]"
          placeholder="ادخل اسم الشخص"
          {...register("personName")}
        /> */}
            </Form.Group>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-3">
            <Controller
              name="identity"
              className="w-100"
              control={control}
              render={({ onChange, value, name, ref, field }) => (
                <Select
                  label="الهوية"
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
              <Form.Label>فئة الزائر</Form.Label>
              <input
                className="form-control h-[37px]"
                placeholder="   اكتب فئة الزائر  "
                {...register("personType")}
              />
            </Form.Group>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-3">
            <Form.Group>
              <InputLabel id="recieving-date" label={"تاريخ الزيارة"} />
              <DatePicker
                id="recieving-date"
                selected={dateVist}
                placeholder="تاريخ الزيارة"
                onChange={(date) => setDateVist(date)}
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
              {/* <Form.Label> تاريخ الزيارة</Form.Label> */}
              {/* <Controller
          control={control}
          name="date-input"
          render={({ field }) => (
            <FormDatePicker
              placeholderText="اختر"
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

              {/* <Controller
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
              {/* <Controller
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
        <FormGroupWrapper title={"المرفقات"}>
          <AttachmentSection onChange={updateImageDisplay} />
        </FormGroupWrapper>
        <div className="flex my-2  justify-center gap-4">
          <Button
            type="submit"
            className="mx-auto py-1 px-14 font-semibold text-[15px] border !border-[#EFAA20] text-[#2B2B40] hover:text-white bg-[#EFAA20] hover:bg-[#2B2B40]"
          >
            حفظ
          </Button>
        </div>
      </Form>
    </ModalWrapper>
  );
};

const EditExport = ({ show, onHide }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const [attachmentSrc, setAttachmentSrc] = useState([]);
  const [attachment, setAttachment] = useState(null);

  function updateImageDisplay(e) {
    const curFiles = e.target.files;
    if (curFiles?.length === 0) {
      return;
    } else {
      const selectedImages = Array.from(curFiles);
      const imagesArr = selectedImages.map((file) => {
        if (validFileType(file)) {
          return URL.createObjectURL(file);
        }
      });
      setAttachmentSrc((prevAttachment) => prevAttachment.concat(imagesArr));
      setAttachment(selectedImages);
    }
  }
  const onSubmit = (data) => {
    // console.log({ ...data, image: attachment });
    const formData = new FormData();
    formData.append("resoneVisit", data.resoneVisit);
    formData.append("notes", data.notes);
    for (const file of attachment) {
      formData.append("fileVist", file);
    }
    onHide();
  };
  return (
    <ModalWrapper show={show} onHide={onHide}>
      <ModalHeader title={"تعديل الزيارة الصادرة"} handleClose={onHide} />
      <Form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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
                  classNames={"border-0 "}
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
              <Form.Label> اسم الشخص</Form.Label>
              <input
                className="form-control h-[37px]"
                placeholder="ادخل اسم الشخص"
                {...register("personName")}
              />
            </Form.Group>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-3">
            <Controller
              name="identity"
              className="w-100"
              control={control}
              render={({ onChange, value, name, ref, field }) => (
                <Select
                  label="الهوية"
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
              <Form.Label>فئة الزائر</Form.Label>
              <input
                className="form-control h-[37px]"
                placeholder="   اكتب فئة الزائر  "
                {...register("personType")}
              />
            </Form.Group>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-3">
            <Form.Group>
              <Form.Label> تاريخ الزيارة</Form.Label>
              <Controller
                control={control}
                name="date-input"
                render={({ field }) => (
                  <FormDatePicker
                    placeholderText="اختر"
                    onChange={(date) => field.onChange(date)}
                    date={field.value}
                  />
                )}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> وقت الزياره من</Form.Label>
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
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> وقت الزياره الي</Form.Label>
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
              />
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
        <FormGroupWrapper title={"المرفقات"}>
          <AttachmentSection onChange={updateImageDisplay} />
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
  );
};

const EditImport = ({ show, onHide }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const [attachmentSrc, setAttachmentSrc] = useState([]);
  const [attachment, setAttachment] = useState(null);

  function updateImageDisplay(e) {
    const curFiles = e.target.files;
    if (curFiles?.length === 0) {
      return;
    } else {
      const selectedImages = Array.from(curFiles);
      const imagesArr = selectedImages.map((file) => {
        if (validFileType(file)) {
          return URL.createObjectURL(file);
        }
      });
      setAttachmentSrc((prevAttachment) => prevAttachment.concat(imagesArr));
      setAttachment(selectedImages);
    }
  }
  const onSubmit = (data) => {
    // console.log({ ...data, image: attachment });
    const formData = new FormData();
    formData.append("resoneVisit", data.resoneVisit);
    formData.append("notes", data.notes);
    for (const file of attachment) {
      formData.append("fileVist", file);
    }
    onHide();
  };
  return (
    <ModalWrapper show={show} onHide={onHide}>
      <ModalHeader title={"تعديل الزيارة الواردة"} handleClose={onHide} />
      <Form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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
          <div className="grid grid-cols-3 mb-3">
            <Form.Group>
              <Form.Label> مكان الزيارة</Form.Label>
              <input
                className="form-control h-[37px]"
                {...register("visitLocation")}
                placeholder="اكتب مكان الزياة"
              />
            </Form.Group>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-3">
            <Form.Group>
              <Form.Label> تاريخ الزيارة</Form.Label>
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
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> وقت الزياره من</Form.Label>
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
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> وقت الزياره الي</Form.Label>
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
              />
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
        <FormGroupWrapper title={"المرفقات"}>
          <AttachmentSection onChange={updateImageDisplay} />
        </FormGroupWrapper>
        <div className="flex my-2  justify-center gap-4">
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
  );
};

const AddIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M1 8H8M8 8H15M8 8V15M8 8V1"
        stroke="#EFAA20"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const AttachmentSection = ({ onChange }) => {
  return (
    <div className="">
      <label
        className={`addFileShape pointer my-1 bg-[#2B2B40] p-0  flex flex-col  items-center justfiy-center gap-2`}
      >
        <input type="file" multiple className="hidden" onChange={onChange} />
        <AddIcon />
        <p className="text-sm mx-auto text-white">اضافة جديدة</p>
      </label>
    </div>
  );
};
