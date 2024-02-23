import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
// import FormHelperText from "@mui/material/FormHelperText";
import { InputLabel } from "../../../Pages/System/PlanModel/components/InputLabel";
import { useForm } from "react-hook-form";
import myAxiosInstance from "../../../helper/https";
export default function UpdateModal({
  title,
  show,
  handleClose,
  onSave,
  setData,
  id,
  data
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: data.name,
      descraption: data.descraption
    }
  });
  
  const onSubmit = (data) => {
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("descraption", data.descraption)
    // formData.append("image", image)
    // formData.append("image", fileInput.current.files[0], "/C:/Users/assets/analysis-img.png.png");
    // console.log({...data,"image":fileInput.current.files[0]});
    setData(formData)


    // myAxiosInstance.post("clause",formData)
    // .then((data) =>{
    //   console.log(data);
    // })
    // .catch((err) => console.log(err))
  handleClose()

    // console.log(data?.name);
    // console.log(data?.descraption);
    // Call API or perform other actions with form data
  };
  return (
    <Modal
      centered
      contentClassName="bg-[#1E1E2D] border !max-w-[700px] !border-[#EFAA20] !rounded-[20px] text-white"
      show={show}
      onHide={handleClose}
      size="lg"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header className="!justify-between border-none">
          <div className=""></div>
          <Modal.Title className="text-xl text-[#EFAA20] border !border-[#EFAA20] p-2 rounded-[5px] font-medium ">
            {title}
          </Modal.Title>
          <Button
            className="p-0 bg-transparent hover:bg-transparent"
            onClick={handleClose}
          >
            <img src="/Rejected.png" alt="" />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <FormControl fullWidth className="mb-3">
            <InputLabel size={18} label={"اسم البند"} className={"mb-3"} />
            <input
              className="w-full bg-[#161622] py-3 px-2 rounded-[7px] outline-none"
              type="text"
              placeholder="ادخل الاسم"
              {...register("name", {
                required: true,
                minLength: 5,
                maxLength: 200,
              })}
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            />
            {errors.name && errors.name.type === "required" && (
              <span className="text-red-500">This field is required</span>
            )}
            {errors.name && errors.name.type === "minLength" && (
              <span className="text-red-500">
                Name must be at least 5 characters long
              </span>
            )}
            {errors.name && errors.name.type === "maxLength" && (
              <span className="text-red-500">
                Name cannot exceed 200 characters
              </span>
            )}
          </FormControl>
          <FormControl fullWidth className="mb-3">
            <InputLabel size={18} label={"الوصف"} className={"mb-3"} />
            <textarea
              className="w-full bg-[#161622] py-3 px-2 rounded-[7px] outline-none"
              rows={5}
              placeholder="ادخل وصف البند"
              {...register("descraption", { minLength: 5, maxLength: 5000 })}
              // value={desc}
              // onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </FormControl>
          {/* <FormControl fullWidth className="mb-3">
          <InputLabel size={18} label={"ارفاق صورة"} className={"mb-3"} />
          <label className="bg-[#161622] flex justify-center items-center rounded-[7px] py-5">
            <input type="file" 
            // {...register('images')} 
            // onChange={(e)=> setImage(e.target.files[0])}
            ref={fileInput}
            multiple className="hidden" 
            // onChange={(e)=> setImage(e.target.files[0])} 
            />
            <img src="/upload-icon.svg" alt="upload" />
          </label>
        </FormControl> */}
        </Modal.Body>
        <Modal.Footer className="border-none">
          <Button
            type="submit"
            className="mx-auto py-1 px-14 font-semibold text-[15px] border !border-[#EFAA20] text-[#2B2B40] hover:text-white bg-[#EFAA20] hover:bg-[#2B2B40]"
          >
            حفظ
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
