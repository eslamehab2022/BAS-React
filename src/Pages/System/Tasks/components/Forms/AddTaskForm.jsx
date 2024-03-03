import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSuccessfullModal from "../../../../../Components/Modals/hooks/useSuccessfullModal";
import myAxiosInstance, { myAxiosJson } from "../../../../../helper/https";
import { useNavigate } from "react-router-dom";
import { FormModal } from "../../../PlanModel/components/FormModal";
import {
  FormControl,
  Button,
  IconButton,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import { InputLabel } from "../../../PlanModel/components/InputLabel";
import TextEditor from "../../../Plans/components/TextEditor";
import UploadFile from "../../../PlanModel/components/UploadFile";
import { SaveButton } from "../../pages/AddPlan";
import SuccessfullModal from "../../../../../Components/Modals/SuccessfullModal";
import { useGetEmployees } from "../../hooks/useGetEmployees";

const mutateTasks = (data, onSuccess, onError) => {
  myAxiosInstance
    .post("task/admin", data)
    .then((data) => {
      console.log(data);
      onSuccess();
    })
    .catch((err) => {
      console.log(err);
      onError();
    });
};

const useGetSelectedProjects = () => {
    const [projects, setProjects] = useState([]);
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
    return ({
        projects
    })
}
const ErrorMessage = ({ message }) => {
    return <p className="text-red-500">{message}</p>;
  };
function AddTaskForm({isExist}) {
  const navigate = useNavigate();
  const {projects} = useGetSelectedProjects()
  const {
    showSuccess,
    showError,
    handleShowSuccess,
    handleShowError,
    handleCloseSuccess,
    handleCloseError,
  } = useSuccessfullModal();

  const [description, setDescription] = useState("");
  const [noteClient, setNoteClient] = useState("");
  const { supervisors } = useGetEmployees();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    var formdata = new FormData();


    
    formdata.append("isExisting", isExist);
    if(isExist === true){
        formdata.append("projectId", data.projectId);

    }else if (isExist === false){
        formdata.append("projectName", data.taskName);

    }



    formdata.append("description", description);

    formdata.append("startDate", data.startDate);
    formdata.append("endDate", data.endDate);
    formdata.append("startTime", data.startTime);
    formdata.append("endTime", data.endTime);
    for (let item of data.owner) {
      formdata.append("assignTo", item);
    }
    for (let item of data.fileTask) {
      formdata.append("fileTask", item);
    }
    mutateTasks(formdata, handleShowSuccess, handleShowError);
  };
  return (
    <Fragment>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        

{
isExist === true ? (<FormModal title={"بحث عن المشروع"}>
<div className="grid grid-cols-2">
  <FormControl fullWidth>
    <InputLabel id="projects" label={"اسم المشروع"} />
    <select
      {...register("projectId",{
        required: "يجب اختيار المشروع"
      })}
      className="px-2 h-9 border-none text-white bg-[#2B2B40] rounded-[7px] outline-none"
      id="projects"
    >
      <option></option>
      {projects?.map(({ _id, projectName }) => (
        <option value={_id}>{projectName}</option>
      ))}
    </select>
    {errors.projectId && (
                  <ErrorMessage message={errors.projectId.message} />
                )}
  </FormControl>
</div>
</FormModal>) :
isExist === false ? (<FormModal title={"اضافة مهمة جديدة"}>
<div className="grid grid-cols-2 gap-4">
  <FormControl fullWidth>
    <InputLabel id="new-project" label={"اسم مهمه جديد"} />
    <input
      type="text"
      className="px-2 h-9 border-none text-white bg-[#2B2B40] rounded-[7px] outline-none"
      id="project-type"
      {...register("taskName",{
        required: "يجب كتابة اسم المهمة",
        minLength: {
            value: 3,
            message: "لا يقل عن 3 حروف"
        }
      })}
    />
    {errors.taskName && (
                  <ErrorMessage message={errors.taskName.message} />
                )}
  </FormControl>
</div>
</FormModal>) :
null
}
        


        <FormModal title={"تفاصيل المهمة"}>
          <div className="grid grid-cols-2 gap-4 mb-3">
            <FormControl fullWidth>
              <InputLabel id="owner" label={"اسم الموظف"} />

              <select
                {...register("owner",{
                    required: "يجب اختيار المسئولين"
                  })}
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
              <input
                type="date"
                className="px-2 h-9 border-none text-white bg-[#2B2B40] rounded-[7px] outline-none"
                id="endDate"
                {...register("startDate")}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="deliveryDate" label={"تاريخ الاستلام"} />
              <input
                type="date"
                className="px-2 h-9 border-none text-white bg-[#2B2B40] rounded-[7px] outline-none"
                id="deliveryDate"
                {...register("endDate")}
              />
            </FormControl>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-3">
            <FormControl fullWidth>
              <InputLabel id="startTime" label={"وقت التسليم"} />
              <input
                type="time"
                className="px-2 h-9 border-none text-white bg-[#2B2B40] rounded-[7px] outline-none"
                id="startTime"
                {...register("startTime")}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="endTime" label={"وقت الاستلام"} />
              <input
                type="time"
                className="px-2 h-9 border-none text-white bg-[#2B2B40] rounded-[7px] outline-none"
                id="endTime"
                {...register("endTime")}
              />
            </FormControl>
          </div>
          <FormControl fullWidth>
            <InputLabel id="new-project-name" label={"وصف المهمة"} />
            <TextEditor
              setValue={setDescription}
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
            <UploadFile multiple {...register("fileTask")} />
          </div>
        </FormModal>
        <SaveButton />
        
      </form>
      <SuccessfullModal
        handleClose={() => {
          handleCloseSuccess();
          navigate("/System/tasks/tasks");
        }}
        message={"تمت اضافة المهمة بنجاح"}
        show={showSuccess}
      />
      <SuccessfullModal
        handleClose={() => {
          handleCloseError();
          //   navigate("/System/tasks/tasks");
        }}
        message={"حدث خطا ما"}
        show={showError}
        status="error"
      />
    </Fragment>
  );
}

export default AddTaskForm;
