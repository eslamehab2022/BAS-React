import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { ModalTitle } from "../../PlanModel/components/ModalTitle";
import { FormModal } from "../../PlanModel/components/FormModal";
import { InputLabel } from "../../PlanModel/components/InputLabel";
import CustomSelect from "../../PlanModel/components/CustomSelect";
import { CiSearch } from "react-icons/ci";
import { ProjectNames, Supervisors } from "../../PlanModel/consts";
import TextEditor from "../components/TextEditor";
import MultipleSelect from "../components/MultipleSelect";

export default function AddProject() {
  const [selected, setSelected] = useState([]);
  const [newProjectName, setNewProjectName] = useState("");
  const [selectedProjectName, setSelectedProjectName] = useState("");
  const [show, setShow] = useState(false);
  let [recievedDate, setRecievedDate] = useState(null);
  let [recievingDate, setRecievingDate] = useState(null);
  const navigate = useNavigate();
console.log("selected: ",selected);
  return (
    <>
      <SystemControler
        child={
          <IconButton
            onClick={() => {
              navigate(-1);
            }}
          >
            <IoMdArrowDropright color="white" fontSize={25} />
          </IconButton>
        }
      />

      <div className=" bg-[#1E1E2D] p-3 border !border-[#EFAA20] rounded-[27px] min-h-screen">
        <div className="py-3">
          <ModalTitle title={"إضافة مشروع جديد"} />
        </div>
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
                      {Supervisors?.map(({id,name,position,location,img},index) => (
                        <MenuItem
                        onClick={()=> {
                          
                          setSelected(prev => [...prev,{id,name}])
                        }}
                        key={id}
                        disabled={selected?.map(selected=> selected.id).includes(id)}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                              <img src={img} alt={""} title={name} className="w-full" />
                            </div>
                            <div className="">
                              <div className="">
                                <p className="text-white">{name}</p>
                                <p className="text-[#D59921]">{position} / {location}  </p>
                              </div>
                            </div>
                          </div>
                          
                        </MenuItem>
                      ))}
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
                  <InputLabel id="new-project-name" label={"تاريخ التسليم"} />
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
      </div>
    </>
  );
}
