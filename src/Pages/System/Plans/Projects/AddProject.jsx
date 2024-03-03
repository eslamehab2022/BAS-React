import React, { useEffect, useState } from "react";
import SystemControler from "../../../../Components/System/SystemControler/SystemControler";

import {
  FormControl,
  Button,
  IconButton,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { ModalTitle } from "../../PlanModel/components/ModalTitle";
import { FormModal } from "../../PlanModel/components/FormModal";
import { InputLabel } from "../../PlanModel/components/InputLabel";
import CustomSelect from "../../PlanModel/components/CustomSelect";
import { CiSearch } from "react-icons/ci";
import { ProjectNames, Supervisors } from "../../PlanModel/consts";
import TextEditor from "../components/TextEditor";
import MultipleSelect from "../components/MultipleSelect";
import { useForm } from "react-hook-form";

import { DetectForm } from "./components/DetectForm";
import { PageWrapper } from "./components/PageWrapper";
import { SaveButton } from "./components/SaveButton";
import myAxiosInstance, { myAxiosJson } from "../../../../helper/https";
import FormDatePicker from "../../../../Components/FormDatePicker";
import SuccessfullModal from "../../../../Components/Modals/SuccessfullModal";
import useSuccessfullModal from "../../../../Components/Modals/hooks/useSuccessfullModal";
import {useNavigate} from "react-router-dom"
export default function AddProject() {
  const [isExist, setIsExist] = useState(null);
  return (
    <PageWrapper title={"إضافة مشروع جديد"}>
      {isExist === null && <DetectForm setIsExist={setIsExist} />}

      {isExist === true && <AddExistingProject />}

      {isExist === false && <AddNewProject />}
    </PageWrapper>
  );
}

const AddExistingProject = () => {
  const [endDate, setEndDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const {supervisors} = useGetSupervisors()
  const [projects, setProjects] = useState([]);
  const [planDescription, setPlanDescription] = useState("");
  const [noteClient, setNoteClient] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    myAxiosJson("request/select")
      .then((data) => {
        console.log("data: ", data?.data?.request);
        setProjects(data?.data?.request);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  const onSubmit = (data) => {
    /*

  "fileProject": ["file1.pdf", "file2.docx"],
  "PapersProject": ["paper1.pdf", "paper2.docx"],
     */
    console.log({
      ...data,
      planDescription: planDescription,
      noteClient: noteClient,
    });
    var formdata = new FormData();

    formdata.append("isExist", true);
    formdata.append("projectId", data.projectId);
    formdata.append("assignTo", [data.owner]);
    formdata.append("noteClient", noteClient);
    formdata.append("planDescription", planDescription);
    formdata.append("deliveryDate", data.deliveryDate);
    formdata.append("endDate", data.endDate);

    myAxiosInstance
      .post("plan", formdata)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
    >
      <FormModal title={"بحث عن المشروع"}>
        <div className="grid grid-cols-2">
          <FormControl fullWidth>
            <InputLabel id="projects" label={"اسم المشروع"} />
            <select
              {...register("projectId")}
              className="px-2 h-9 border-none text-white bg-[#2B2B40] rounded-[7px] outline-none"
              id="projects"
            >
              <option disabled></option>
              {projects?.map(({ _id, projectName }) => (
                <option value={_id}>{projectName}</option>
              ))}
            </select>
          </FormControl>
        </div>
      </FormModal>
      <FormModal title={"تفاصيل المهمة"}>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <FormControl fullWidth>
            <InputLabel id="owner" label={"اسم المسؤل"} />

            <select
              {...register("owner")}
              className="px-2 h-9 border-none text-white bg-[#2B2B40] rounded-[7px] outline-none"
              id="owner"
            >
              <option disabled></option>
              {supervisors?.map(
                ({ _id, firstName, lastName, position, location, img }) => (
                  <option value={_id} key={_id}>
                    {firstName} {lastName}
                  </option>
                )
              )}
            </select>

            {/* <MultipleSelect
                    placeholder={"اختار اسم المشرف"}
                    data={Supervisors}
                  >
                    {Supervisors?.map(
                      ({ id, name, position, location, img }, index) => (
                        <MenuItem
                          
                          key={id}
                          
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                              <img
                                src={img}
                                alt={""}
                                title={name}
                                className="w-full"
                              />
                            </div>
                            <div className="">
                              <div className="">
                                <p className="text-white">{name}</p>
                                <p className="text-[#D59921]">
                                  {position} / {location}{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </MenuItem>
                      )
                    )}
                  </MultipleSelect> */}
          </FormControl>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <FormControl fullWidth>
            <InputLabel id="endDate" label={"تاريخ التسليم"} />
            
            <FormDatePicker
                    date={endDate}
                    placeholderText="تاريخ التسليم"
                    onChange={(date) => setEndDate(date)}
                    className="w-50 form-control"
                  />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="deliveryDate" label={"تاريخ الاستلام"} />
            <FormDatePicker
                    date={deliveryDate}
                    placeholderText="تاريخ الاستلام"
                    onChange={(date) => setDeliveryDate(date)}
                    className="w-50 form-control"
                  />
          </FormControl>
        </div>
        <FormControl fullWidth>
          <InputLabel id="new-project-name" label={"تاريخ التسليم"} />
          <TextEditor
            setValue={setPlanDescription}
            placeholder={"اكتب ملاحظات .................................."}
          />
        </FormControl>
      </FormModal>
      <FormModal title={"ملاحظات العميل"}>
        <div className="">
          <InputLabel id="new-project-name" label={"ملاحظات العميل"} />
          <TextEditor
            setValue={setNoteClient}
            placeholder={"اكتب ملاحظات .................................."}
          />
        </div>
      </FormModal>
      <SaveButton />
    </form>
  );
};



const AddNewProject = () => {
  const navigate = useNavigate()
  const {showSuccess,handleShowSuccess,handleCloseSuccess} = useSuccessfullModal()
  const [endDate, setEndDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const {supervisors} = useGetSupervisors()
  const [planDescription, setPlanDescription] = useState("");
  const [noteClient, setNoteClient] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    /*

formdata.append("fileProject", fileInput.files[0], "Rectangle 8905 (6).png");
formdata.append("PaperProject", fileInput.files[0], "image 47.png");
formdata.append("deliveryDate", "2024-01-21T08:32:59.966+00:00");
formdata.append("endDate", "2025-03-21T08:32:59.966+00:00");
     */
    var formdata = new FormData();
    formdata.append("isExist", false);
    formdata.append("projectName", data.projectName);
    formdata.append("projectType", parseInt(data.projectType));
    formdata.append("noteClient", noteClient);
    formdata.append("planDescription", planDescription);
    formdata.append("startDate", deliveryDate);
    formdata.append("endDate", endDate);
    
    for(let i = 0; i <[data.owner].length; i++ ){
      formdata.append(`assignTo[${i}]`, [data.owner][i]);
    }
    mutatePlans(formdata,handleShowSuccess,()=>{})
    // myAxiosInstance
    //   .post("plan", formdata)
    //   .then((data) => {
    //     console.log(data);
    //     handleShowSuccess()

    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
    >
      <SuccessfullModal
      handleClose={()=>{
        handleCloseSuccess()
        navigate("/System/plans/projects")
      }}
      message={"تمت اضافة المشروع بنجاح"}
      show={showSuccess}
      />
      <FormModal title={"اضافة مشروع جديد"}>
        <div className="grid grid-cols-2 gap-4">
          <FormControl fullWidth>
            <InputLabel id="new-project" label={"اسم مشروع جديد"} />
            <input
              type="text"
              className="px-2 h-9 border-none text-white bg-[#2B2B40] rounded-[7px] outline-none"
              id="project-type"
              {...register("projectName")}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="project-type" label={"نوع المشروع جديد"} />
            <select
              {...register("projectType")}
              className="px-2 h-9 border-none text-white bg-[#2B2B40] rounded-[7px] outline-none"
              id="project-type"
            >
              <option disabled></option>
              <option value="1">تصميم</option>
              <option value="2">اشراف علي التنفيذ</option>
            </select>
          </FormControl>
        </div>
      </FormModal>

      <FormModal title={"تفاصيل المهمة"}>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <FormControl fullWidth>
            <InputLabel id="owner" label={"اسم المسؤل"} />

            <select
              {...register("owner")}
              className="px-2 border-none text-white bg-[#2B2B40] rounded-[7px] outline-none"
              id="owner"
              // multiple
            >
              <option disabled></option>
              {supervisors?.map(
                ({ _id, firstName, lastName, position, location, img }) => (
                  <option value={_id} key={_id}>
                    {firstName} {lastName}
                  </option>
                )
              )}
            </select>

            {/* <MultipleSelect
                    placeholder={"اختار اسم المشرف"}
                    data={Supervisors}
                  >
                    {Supervisors?.map(
                      ({ id, name, position, location, img }, index) => (
                        <MenuItem
                          
                          key={id}
                          
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                              <img
                                src={img}
                                alt={""}
                                title={name}
                                className="w-full"
                              />
                            </div>
                            <div className="">
                              <div className="">
                                <p className="text-white">{name}</p>
                                <p className="text-[#D59921]">
                                  {position} / {location}{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </MenuItem>
                      )
                    )}
                  </MultipleSelect> */}
          </FormControl>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <FormControl fullWidth>
            <InputLabel id="endDate" label={"تاريخ التسليم"} />
            
            <FormDatePicker
                    date={endDate}
                    placeholderText="تاريخ التسليم"
                    onChange={(date) => setEndDate(date)}
                    className="w-50 form-control"
                  />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="deliveryDate" label={"تاريخ الاستلام"} />
            
            <FormDatePicker
                    date={deliveryDate}
                    placeholderText="تاريخ الاستلام"
                    onChange={(date) => setDeliveryDate(date)}
                    className="w-50 form-control"
                  />
          </FormControl>
        </div>
        <FormControl fullWidth>
          <InputLabel id="new-project-name" label={"وصف المشروع"} />
          <TextEditor
            setValue={setPlanDescription}
            placeholder={"اكتب ملاحظات .................................."}
          />
        </FormControl>
      </FormModal>
      <FormModal title={"ملاحظات العميل"}>
        <div className="">
          <InputLabel id="new-project-name" label={"ملاحظات العميل"} />
          <TextEditor
            setValue={setNoteClient}
            placeholder={"اكتب ملاحظات .................................."}
          />
        </div>
      </FormModal>
      <SaveButton />
    </form>
  );
};


const useGetSupervisors = () => {
  const [supervisors, setSupervisors] = useState([]);
  useEffect(() => {
    myAxiosJson("user/manager")
      .then((data) => {
        console.log(data?.data?.allUsers);
        setSupervisors(data?.data?.allUsers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return ({
    supervisors
  })
}

const mutatePlans = (data , onSuccess , onError) => {
  myAxiosInstance
  .post("plan", data)
  .then((data) => {
    console.log(data);
    onSuccess()

  })
  .catch((err) => {
    console.log(err);
    onError()
  });
}




















function AddProjectTest() {
  const [selected, setSelected] = useState([]);
  const [newProjectName, setNewProjectName] = useState("");
  const [selectedProjectName, setSelectedProjectName] = useState("");
  const [show, setShow] = useState(false);
  let [recievedDate, setRecievedDate] = useState(null);
  let [recievingDate, setRecievingDate] = useState(null);

  console.log("selected: ", selected);
  return (
    <PageWrapper>
      {!show && (
        <div className="flex flex-col gap-4 ">
          <FormModal title={"بحث عن المشروع"}>
            <div className="flex justify-between gap-5">
              <FormControl fullWidth>
                <InputLabel id="new-project-name" label={"اسم المشروع"} />

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
                      onClick={(e) => setSelectedProjectName(name)}
                      // style={getStyles(name, selectedItem, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </CustomSelect>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="new-project" label={"اسم مشروع جديد"} />
                <TextField
                  size="small"
                  id="new-project"
                  value={newProjectName}
                  placeholder="ادخل اسم المشروع الجديد"
                  variant="outlined"
                  onChange={(e) => {
                    setNewProjectName(e.target.value);
                  }}
                  sx={{
                    "& fieldset": {
                      border: "none",
                    },
                  }}
                  inputProps={{
                    sx: {
                      color: "white",
                      py: "10px",
                      // borderRadius:'7px',
                    },
                  }}
                  className=" text-white bg-[#2B2B40] rounded-[7px]"
                />
                {/* <input
                    
                    
                    
                    
                    
                  /> */}
              </FormControl>

              {/* {formType != 2 ? <div className="col-span-2"></div> : null} */}
              {/* {formType != 1 ? (
                <div className="col-span-5">
                  <InputLabel id="find-project" label={"اسم مشروع جديد"} />
                  <input
                    id="find-project"
                    type="text"
                    className="w-full text-white p-2 bg-[#2B2B40] rounded-[7px]"
                    placeholder="ادخل اسم المشروع الجديد"
                    value={newProjectName}
                    onChange={(e) => {
                      setNewProjectName(e.target.value);
                    }}
                  />
                </div>
              ) : null} */}
            </div>
          </FormModal>

          {/* <div className={`flex justify-end py-3 ${show ? "hidden" : ""}`}>
            <button
              onClick={() => {
                if (newProjectName) {
                  setFormType(1);
                } else {
                  setFormType(1);
                }
                setShow(true);
              }}
              className={`
              
              w-[140px] h-[30px] rounded-md  bg-[#EFAA20] text-[#1E1E2D] text-[15px] font-medium`}
            >
              التالى
            </button>
          </div> */}
          {/* {show ? (
            <div className="h-[500px] overflow-scroll scrollbar-none custom-scrollbar">
              <FormModal title={"تفاصيل المهمة"}>
                <div className="grid grid-cols-12 mb-5">
                  <div className="col-span-5">
                    <InputLabel id="new-project-name" label={"اسم المسؤل"} />
                    <input
                      id="new-project-name"
                      type="text"
                      className="w-full text-white p-2 bg-[#2B2B40] rounded-[7px]"
                      placeholder="اختار اسم المشرف"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 mb-5">
                  <div className="col-span-5">
                    <InputLabel id="recieving-date" label={"تاريخ التسليم"} />
                    <DatePicker
                      id="recieving-date"
                      selected={recievingDate}
                      placeholder="اضف تاريخ التسليم"
                      onChange={(date) => setRecievingDate(date)}
                      dateFormat="dd-MM-yyyy"
                      className="w-full text-white p-2 bg-[#2B2B40] rounded-[7px]"
                    />
                  </div>
                  <div className="col-span-2"></div>
                  <div className="col-span-5">
                    <InputLabel id="recieved-date" label={"تاريخ الاستلام"} />
                    <DatePicker
                      id="recieved-date"
                      selected={recievedDate}
                      placeholder="اضف تاريخ الاستلام"
                      onChange={(date) => setRecievedDate(date)}
                      dateFormat="dd-MM-yyyy"
                      className="w-full text-white p-2 bg-[#2B2B40] rounded-[7px]"
                    />
                  </div>
                </div>

                <div className="">
                  <InputLabel id="new-project-name" label={"تاريخ التسليم"} />
                  <CKEditor
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      console.log({ event, editor, data });
                    }}
                    editor={ClassicEditor}
                    config={{
                      placeholder:
                        "اكتب ملاحظات ..................................",
                      style: { color: "#FFF" },
                      minRows: 6,
                    }}
                    onBlur={(event, editor) => {
                      const data = editor.getData();
                      console.log({ event, editor, data });
                    }}
                  />
                </div>
              </FormModal>
              <FormModal title={"ملاحظات العميل"}>
                <div className="">
                  <InputLabel id="new-project-name" label={"تاريخ التسليم"} />
                  <CKEditor
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      console.log({ event, editor, data });
                    }}
                    editor={ClassicEditor}
                    config={{
                      placeholder:
                        "اكتب ملاحظات ..................................",
                    }}
                    onBlur={(event, editor) => {
                      const data = editor.getData();
                      console.log({ event, editor, data });
                    }}
                  />
                </div>
              </FormModal>
              <FormModal title={"ملفات المشروع"}>
                <div className="flex gap-2">
                  <label
                    className={`border !border-[#D59921] !border-dashed max-w-fit rounded-[12.06px] pointer bg-[#2B2B40] py-4 px-2 flex flex-col items-center justfiy-center`}
                  >
                    <input type="file" className="hidden" />
                    <div>
                      <svg
                        className="m-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M1 8H8M8 8H15M8 8V15M8 8V1"
                          stroke="#EFAA20"
                          stroke-width="2"
                          stroke-linecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-sm mx-auto text-white">اضافة جديدة</p>
                    </div>
                  </label>
                </div>
              </FormModal>
              <FormModal title={"المرفقات"}>
                <div className="flex gap-2">
                  <label
                    className={`border !border-[#D59921] !border-dashed max-w-fit rounded-[12.06px] pointer bg-[#2B2B40] py-4 px-2 flex flex-col items-center justfiy-center`}
                  >
                    <input type="file" className="hidden" />
                    <div>
                      <svg
                        className="m-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M1 8H8M8 8H15M8 8V15M8 8V1"
                          stroke="#EFAA20"
                          stroke-width="2"
                          stroke-linecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-sm mx-auto text-white">اضافة جديدة</p>
                    </div>
                  </label>
                </div>
              </FormModal>
              <div className="flex justify-end mt-4">
                <button className="w-[140px] h-[30px]  bg-[#EFAA20] rounded-[6px] text-[#1E1E2D] text-[15px] font-medium">
                  حفظ
                </button>
              </div>
            </div>
          ) : null} */}
        </div>
      )}
      {!show && (
        <div className={`flex justify-end py-3 `}>
          <button
            onClick={() => setShow(true)}
            className={`
              
              w-[140px] h-[30px] rounded-md  bg-[#EFAA20] text-[#1E1E2D] text-[15px] font-medium`}
          >
            التالى
          </button>
        </div>
      )}

      {show ? (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="h-[500px] py-5 flex flex-col gap-5 overflow-scroll scrollbar-none custom-scrollbar">
            <FormModal title={"بحث عن المشروع"}>
              <div className="grid grid-cols-2 gap-5">
                {!newProjectName && (
                  <FormControl>
                    <InputLabel id="new-project-name" label={"اسم المشروع"} />

                    <CustomSelect defaultValue={"selectedProjectName"}>
                      <MenuItem disabled value="">
                        <div className="w-full flex justify-between">
                          <span>بحث ...</span>
                          <CiSearch />
                        </div>
                      </MenuItem>
                      {ProjectNames.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}

                          // style={getStyles(name, selectedItem, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </CustomSelect>
                  </FormControl>
                )}
                {newProjectName && (
                  <FormControl>
                    <InputLabel id="new-project" label={"اسم مشروع جديد"} />
                    <TextField
                      size="small"
                      id="new-project"
                      value={newProjectName}
                      placeholder="ادخل اسم المشروع الجديد"
                      variant="outlined"
                      onChange={(e) => {
                        setNewProjectName(e.target.value);
                      }}
                      sx={{
                        "& fieldset": {
                          border: "none",
                        },
                      }}
                      inputProps={{
                        sx: {
                          color: "white",
                          py: "10px",
                          // borderRadius:'7px',
                        },
                      }}
                      className=" text-white bg-[#2B2B40] rounded-[7px]"
                    />
                  </FormControl>
                )}
              </div>
            </FormModal>
            <FormModal title={"تفاصيل المهمة"}>
              <div className="grid grid-cols-12 mb-5">
                <div className="col-span-5">
                  <InputLabel id="new-project-name" label={"اسم المسؤل"} />
                  <MultipleSelect
                    placeholder={"اختار اسم المشرف"}
                    data={Supervisors}
                    selected={selected}
                    setSelected={setSelected}
                  >
                    {Supervisors?.map(
                      ({ id, name, position, location, img }, index) => (
                        <MenuItem
                          onClick={() => {
                            setSelected((prev) => [...prev, { id, name }]);
                          }}
                          key={id}
                          disabled={selected
                            ?.map((selected) => selected.id)
                            .includes(id)}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                              <img
                                src={img}
                                alt={""}
                                title={name}
                                className="w-full"
                              />
                            </div>
                            <div className="">
                              <div className="">
                                <p className="text-white">{name}</p>
                                <p className="text-[#D59921]">
                                  {position} / {location}{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </MenuItem>
                      )
                    )}
                  </MultipleSelect>
                </div>
              </div>
              <div className="grid grid-cols-12 mb-5">
                <div className="col-span-5">
                  <InputLabel id="recieving-date" label={"تاريخ التسليم"} />
                  <DatePicker
                    id="recieving-date"
                    selected={recievingDate}
                    placeholder="اضف تاريخ التسليم"
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
                        color: "white",
                      },
                    }}
                  />
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-5">
                  <InputLabel id="recieved-date" label={"تاريخ الاستلام"} />
                  <DatePicker
                    id="recieved-date"
                    selected={recievedDate}
                    placeholder="اضف تاريخ الاستلام"
                    onChange={(date) => setRecievedDate(date)}
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
                        color: "white",
                      },
                    }}
                  />
                </div>
              </div>

              <div className="">
                <InputLabel id="new-project-name" label={"وصف المشروع"} />
                <TextEditor
                  placeholder={
                    "اكتب ملاحظات .................................."
                  }
                />
              </div>
            </FormModal>
            <FormModal title={"ملاحظات العميل"}>
              <div className="">
                <InputLabel id="new-project-name" label={"تاريخ التسليم"} />
                <TextEditor
                  placeholder={
                    "اكتب ملاحظات .................................."
                  }
                />
              </div>
            </FormModal>
            <FormModal title={"ملفات المشروع"}>
              <div className="flex gap-2">
                <label
                  className={`border !border-[#D59921] !border-dashed max-w-fit rounded-[12.06px] pointer bg-[#2B2B40] py-4 px-2 flex flex-col items-center justfiy-center`}
                >
                  <input type="file" className="hidden" />
                  <div>
                    <svg
                      className="m-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M1 8H8M8 8H15M8 8V15M8 8V1"
                        stroke="#EFAA20"
                        stroke-width="2"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-sm mx-auto text-white">اضافة جديدة</p>
                  </div>
                </label>
              </div>
            </FormModal>
            <FormModal title={"المرفقات"}>
              <div className="flex gap-2">
                <label
                  className={`border !border-[#D59921] !border-dashed max-w-fit rounded-[12.06px] pointer bg-[#2B2B40] py-4 px-2 flex flex-col items-center justfiy-center`}
                >
                  <input type="file" className="hidden" />
                  <div>
                    <svg
                      className="m-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M1 8H8M8 8H15M8 8V15M8 8V1"
                        stroke="#EFAA20"
                        stroke-width="2"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-sm mx-auto text-white">اضافة جديدة</p>
                  </div>
                </label>
              </div>
            </FormModal>
            <div className="flex justify-end mt-4">
              <Link to={"/System/plans/projects"}>
                <button className="w-[140px] h-[30px]  bg-[#EFAA20] rounded-[6px] text-[#1E1E2D] text-[15px] font-medium">
                  حفظ
                </button>
              </Link>
            </div>
          </div>
        </LocalizationProvider>
      ) : null}
    </PageWrapper>
  );
}
