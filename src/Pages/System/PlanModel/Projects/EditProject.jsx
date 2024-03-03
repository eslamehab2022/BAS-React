import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { IoMdMore } from "react-icons/io";
import {
  FormControl,
  Button,
  IconButton,
  TextField,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";
import { FormModal } from "../components/FormModal";
import { IoMdArrowDropright } from "react-icons/io";

import UploadFile from "../components/UploadFile";
import CustomModal from "../../../../Components/Modals/CustomModal";
import { ModalTitle } from "../components/ModalTitle";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { InputLabel } from "../components/InputLabel";
import TextEditor from "../../Plans/components/TextEditor";
import { useParams,useNavigate } from "react-router-dom";
import SystemControler from "../../../../Components/System/SystemControler/SystemControler";
import CustomSelect from "../components/CustomSelect";
import { CiSearch } from "react-icons/ci";
import { ProjectNames, Supervisors } from "../consts";
import MultipleSelect from "../../Plans/components/MultipleSelect";
import myAxiosInstance, { myAxiosJson } from "../../../../helper/https";
import { useForm } from "react-hook-form";

import { useGetPlan } from "../../../../hooks/fetchers/Plans";
import { convertDateFormat } from "../../../../helper/utils";
export default function EditProject() {
  const {projectId} = useParams();
  const {data: plan} = useGetPlan(projectId);
  console.log("GetProject: ",plan);
  const navigate = useNavigate();
  const [supervisors, setSupervisors] = useState([]);
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
        // console.log("data: ", data?.data?.request);
        setProjects(data?.data?.request);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    myAxiosJson("user/manager")
      .then((data) => {
        // console.log(data?.data?.allUsers);
        setSupervisors(data?.data?.allUsers);
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
      .patch(`plan/${plan._id}`, formdata)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
    <div className="bg-[#1E1E2D] mb-2 p-5 border rounded-[19px] text-white !border-[#EFAA20] h-full">
      <div className="my-3">
        <ModalTitle title={" تعديل مشروع "} />
      </div>

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
            <input
              type="date"
              className="px-2 h-9 border-none text-white bg-[#2B2B40] rounded-[7px] outline-none"
              id="endDate"
              {...register("endDate")}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="deliveryDate" label={"تاريخ الاستلام"} />
            <input
              type="date"
              className="px-2 h-9 border-none text-white bg-[#2B2B40] rounded-[7px] outline-none"
              id="deliveryDate"
              {...register("deliveryDate")}
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
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="w-[140px] h-[30px] border !border-[#EFAA20] bg-[#EFAA20] hover:bg-[#2B2B40] hover:text-white transition-colors rounded-[6px] text-[#1E1E2D] text-[15px] font-medium"
        >
          حفظ
        </button>
      </div>
    </form>
    </div>
    </>
  );
}
