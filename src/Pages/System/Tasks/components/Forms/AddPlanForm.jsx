import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import {
  FormControl,
  Button,
  IconButton,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useSuccessfullModal from "../../../../../Components/Modals/hooks/useSuccessfullModal";
import SuccessfullModal from "../../../../../Components/Modals/SuccessfullModal";
import { SaveButton } from "../../pages/AddPlan";
import { Fragment, useEffect, useState } from "react";
import { FormModal } from "../../../PlanModel/components/FormModal";
import { InputLabel } from "../../../PlanModel/components/InputLabel";
import myAxiosInstance, { myAxiosJson } from "../../../../../helper/https";
import TextEditor from "../../../Plans/components/TextEditor";
import FormDatePicker from "../../../../../Components/FormDatePicker";
import { useGetSupervisors } from "../../hooks/useGetSupervisors";
import { useGetProjects } from "../../hooks/useGetProjects";
import UploadFile from "../../../PlanModel/components/UploadFile";



  const mutatePlans = (data, onSuccess, onError) => {
    myAxiosInstance
      .post("plan", data)
      .then((data) => {
        console.log(data);
        onSuccess();
      })
      .catch((err) => {
        console.log(err);
        onError();
      });
  };
const ErrorMessage = ({ message }) => {
  return <p className="text-red-500">{message}</p>;
};

const AddPlanForm = ({ isExist }) => {
    
  const navigate = useNavigate();
  const { projects } = useGetProjects();
  const { supervisors } = useGetSupervisors();
  const { showSuccess,showError, handleShowSuccess,handleShowError, handleCloseSuccess, handleCloseError } =
    useSuccessfullModal();
    const [planDescription, setPlanDescription] = useState("");
    const [noteClient, setNoteClient] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
/*

formdata.append("fileProject", fileInput.files[0], "Rectangle 8905 (6).png");
formdata.append("PaperProject", fileInput.files[0], "image 47.png");
formdata.append("deliveryDate", "2024-01-21T08:32:59.966+00:00");
formdata.append("endDate", "2025-03-21T08:32:59.966+00:00");
     */
var formdata = new FormData();
    formdata.append("isExist", isExist);
    if (isExist === true) {
      formdata.append("projectId", data.projectId);
    } else if (isExist === false) {
      formdata.append("projectName", data.projectName);
      formdata.append("projectType", parseInt(data.projectType));
    }
    formdata.append("noteClient", noteClient);
    formdata.append("planDescription", planDescription);
    formdata.append("startDate", startDate);
    formdata.append("endDate", endDate);
    for (let i = 0; i < data.owner.length; i++) {
        formdata.append(`assignTo[${i}]`, data.owner[i]);
      }
      for (let item of data.fileProject) {
        formdata.append("fileProject", item);
      }
      for (let item of data.PaperProject) {
        formdata.append("PaperProject", item);
      }
    console.log({...data,isExist,noteClient,planDescription,startDate,endDate});
    mutatePlans(formdata,handleShowSuccess,handleShowError)
  };
  return (
    <Fragment>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        {isExist === true ? (
          <FormModal title={"بحث عن المشروع"}>
            <div className="grid grid-cols-2">
              <FormControl fullWidth>
                <InputLabel id="projects" label={"اسم المشروع"} />
                <select
                  {...register("projectId", {
                    required: "يجب اختيار مشروع",
                  })}
                  className="px-2 h-9 border-none text-white bg-[#2B2B40] rounded-[7px] outline-none"
                  id="projects"
                >
                  <option disabled></option>
                  {projects?.map(({ _id, projectName }) => (
                    <option value={_id}>{projectName}</option>
                  ))}
                </select>
                {errors.projectId && (
                  <ErrorMessage message={errors.projectId.message} />
                )}
              </FormControl>
            </div>
          </FormModal>
        ) : isExist === false ? (
          <FormModal title={"اضافة مشروع جديد"}>
            <div className="grid grid-cols-2 gap-4">
              <FormControl fullWidth>
                <InputLabel id="new-project" label={"اسم مشروع جديد"} />
                <input
                  type="text"
                  className="px-2 h-9 border-none text-white bg-[#2B2B40] rounded-[7px] outline-none"
                  id="project-type"
                  {...register("projectName"
                  , {
                    required: "يجب كتابة اسم المشروع",
                    minLength: {
                        value: 3,
                        message: "لا يقل عن 3 حروف"
                    }
                  }
                  )}
                />
                {errors.projectName && (
                  <ErrorMessage message={errors.projectName.message} />
                )}
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="project-type" label={"نوع المشروع جديد"} />
                <select
                  {...register("projectType",{
                    required: "يجب اختيار نوع المشروع",
                  })}
                  className="px-2 h-9 border-none text-white bg-[#2B2B40] rounded-[7px] outline-none"
                  id="project-type"
                >
                  <option ></option>
                  <option value="1">تصميم</option>
                  <option value="2">اشراف علي التنفيذ</option>
                </select>
                {errors.projectType && (
                  <ErrorMessage message={errors.projectType.message} />
                )}
              </FormControl>
            </div>
          </FormModal>
        ) : null}


<FormModal title={"تفاصيل المهمة"}>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <FormControl fullWidth>
            <InputLabel id="owner" label={"اسم المسؤل"} />

            <select
              {...register("owner"
              ,{
                required: "يجب اختيار المسئولين"
              }
              )}
              className="px-2 border-none text-white bg-[#2B2B40] rounded-[7px] outline-none"
              id="owner"
              multiple
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
              {errors.owner && (
                  <ErrorMessage message={errors.owner.message} />
                )}

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
              date={startDate}
              placeholderText="تاريخ الاستلام"
              onChange={(date) => setStartDate(date)}
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

      <FormModal title={"ملفات المشروع"}>
          <div className="">
            <UploadFile multiple {...register("fileProject")} />
          </div>
        </FormModal>
      <FormModal title={"مرفقات المشروع"}>
          <div className="">
            <UploadFile multiple {...register("PaperProject")} />
          </div>
        </FormModal>


        <SaveButton />
        <DevTool control={control} />
      </form>
      <SuccessfullModal
        handleClose={() => {
          handleCloseSuccess();
          navigate("/System/tasks/plans");
        }}
        message={"تمت اضافة المشروع بنجاح"}
        show={showSuccess}
      />
      <SuccessfullModal
        handleClose={() => {
            handleCloseError();
        //   navigate("/System/tasks/plans");
        }}
        message={"حدث خطا ما"}
        show={showError}
        status="error"
      />
    </Fragment>
  );
};

export default AddPlanForm;
