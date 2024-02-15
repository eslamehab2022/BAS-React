import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  Box,
  Button,
  IconButton,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";

import { CiSearch } from "react-icons/ci";
import { Accordion } from "react-bootstrap";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useState } from "react";
import { InputLabel } from "./InputLabel";
import { FormModal } from "./FormModal";
import { ModalTitle } from "./ModalTitle";
import CustomSelect from "./CustomSelect";
import { ProjectNames } from "../consts";
export const AddModal = () => {
  let [recievedDate, setRecievedDate] = useState(null);
  let [recievingDate, setRecievingDate] = useState(null);
  const [show, setShow] = useState(false);
  const [formType, setFormType] = useState(0);
  const [newProjectName, setNewProjectName] = useState("");
  const [searchProjectName, setSearchProjectName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {}, []);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="p-3 border !border-[#EFAA20] rounded-[27px]">
        <ModalTitle title={"إضافة مشروع جديد"} />
        <div className="flex flex-col gap-4 ">
          <FormModal title={"بحث عن المشروع"}>
            <div className="grid grid-cols-12 justify-between">
              {formType != 2 ? (
                <div className="col-span-5">
                  <InputLabel id="new-project-name" label={"اسم المشروع"} />
                  
                  <CustomSelect>
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
                </div>
              ) : null}
              {formType != 2 ? <div className="col-span-2"></div> : null}
              {formType != 1 ? (
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
              ) : null}
            </div>
          </FormModal>

          <div className={`flex justify-end py-3 ${show ? "hidden" : ""}`}>
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
          </div>
          {show ? (
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
          ) : null}
        </div>
      </div>
    </LocalizationProvider>
  );
};
