// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Image from "../Image";
// import { FormControl, FormLabel } from "@mui/material";
// import { Form, useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// import { upgradePassword } from "../../helper/fetchers/Users";

// function UpdatePassword({ message, show, handleSave, id }) {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = async (data) => {
//     console.log(data);
//     // try {
//     //   const { data } = await upgradePassword(id,data);
//     //   if (data?.user) {
//     //     // setUser(data?.user);
//     //   } else {
//     //     cons ole.log("Data retrieval failed");
//     //   }
//     // } catch (error) {
//     //   toast.error(error?.response?.data?.message);
//     // }
//   };

//   return (
//     <>
//       <Modal
//         centered
//         contentClassName="bg-[#1E1E2D] border py-3 !max-w-[700px] !border-[#EFAA20] !rounded-[20.27px] text-white"
//         show={show}
//         size="lg"
//       >
//         <Modal.Header className=" py-2 flex !justify-start !rounded-[0px] border-none">
//           <p className="text-white text-[23px]  font-bold">تحديث كلمة المرور</p>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmit(onSubmit)}>
//             <div className="grid grid-cols-4 gap-5">
//               <Form.Group>
//                 <FormLabel className=" text-white !border-none ">
//                   ادخل الكود الوظيفى
//                 </FormLabel>
//                 <input
//                   {...register("employeCode", { required: true })}
//                   className="text-white form-control !bg-[#2B2B40] hover:!bg-[#2B2B40] focus:!bg-[#2B2B40] p-2 !border-none"
//                   placeholder="ادخل الكود الوظيفى"
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label className=" text-white !border-none ">
//                   ادخل كلمة المرور القديمة
//                 </Form.Label>
//                 <input
//                   {...register("oldPssword", { required: true })}
//                   className="text-white form-control !bg-[#2B2B40] hover:!bg-[#2B2B40] focus:!bg-[#2B2B40]  p-2 !border-none"
//                   placeholder="ادخل كلمة المرور  القديمة "
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label className=" text-white !border-none ">
//                   ادخل كلمة المرور
//                 </Form.Label>
//                 <input
//                   {...register("newPassword", { required: true })}
//                   className="text-white form-control !bg-[#2B2B40] hover:!bg-[#2B2B40] focus:!bg-[#2B2B40]  p-2 !border-none"
//                   placeholder="  ادخل  كلمة المرور  "
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label className=" text-white !border-none ">
//                   اعد ادخال كلمة المرور
//                 </Form.Label>
//                 <input
//                   {...register("cPassword", { required: true })}
//                   className="text-white form-control !bg-[#2B2B40] hover:!bg-[#2B2B40] focus:!bg-[#2B2B40]  p-2 !border-none"
//                   placeholder=" اعد ادخال  كلمة المرور  "
//                 />
//               </Form.Group>
//             </div>
//             <div className="border-none">
//               <Button
//                 className="mx-auto py-1 px-14 font-semibold text-[13px] text-white bg-[#EFAA20] hover:bg-[#EFAA20]"
//                 type="submit"
//               >
//                 تحديث
//               </Button>
//             </div>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }

// export default UpdatePassword;
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Image from "../Image";
import { FormControl, FormLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { upgradePassword } from "../../helper/fetchers/Users";
import Progress from "../Progress";

function UpdatePassword({
  message,
  show,
  setSuccsesfull,
  setMessage,
  handleSave,
  handleClose,
  id,
}) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = async (userData) => {
    try {
      const { data } = await upgradePassword(id, userData);

      if (data?.success) {
        handleClose();
        setSuccsesfull(true);
        setMessage("تم تحديث كلمة السر بنجاح");

        //
      } else {
        console.log("Data retrieval failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <>
      <Modal
        centered
        contentClassName="bg-[#1E1E2D] border py-3 !max-w-[800px] !border-[#EFAA20] !rounded-[20.27px] text-white"
        show={show}
        size="lg"
        onHide={handleClose}
      >
        <Modal.Header className=" py-2 flex !justify-start !rounded-[0px] border-none">
          <p className="text-white text-[23px]  font-bold">تحديث كلمة المرور</p>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-4 gap-3">
              <Form.Group>
                <Form.Label className=" text-white !border-none ">
                  ادخل الكود الوظيفى
                </Form.Label>
                <input
                  {...register("employeCode", { required: true })}
                  className="text-white form-control !bg-[#2B2B40] hover:!bg-[#2B2B40] focus:!bg-[#2B2B40] p-2 !border-none"
                  placeholder="ادخل الكود الوظيفى"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className=" text-white !border-none ">
                  ادخل كلمة المرور القديمة
                </Form.Label>
                <input
                  {...register("oldPssword", { required: true })}
                  className="text-white form-control !bg-[#2B2B40] hover:!bg-[#2B2B40] focus:!bg-[#2B2B40]  p-2 !border-none"
                  placeholder="ادخل كلمة المرور  القديمة "
                />

                <p></p>
              </Form.Group>
              <Form.Group>
                <Form.Label className=" text-white !border-none ">
                  ادخل كلمة المرور
                </Form.Label>
                <input
                  {...register("newPassword", {
                    required: true,
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                      message: "invalid password ",
                    },
                  })}
                  className="text-white form-control !bg-[#2B2B40] hover:!bg-[#2B2B40] focus:!bg-[#2B2B40]  p-2 !border-none"
                  placeholder="  ادخل  كلمة المرور  "
                />
                {errors.newPassword?.message && (
                  <p className="text-[#FF0000]">
                    {errors.newPassword?.message}{" "}
                  </p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label className=" text-white !border-none ">
                  اعد ادخال كلمة المرور
                </Form.Label>
                <input
                  {...register("cPassword", { required: true })}
                  className="text-white form-control !bg-[#2B2B40] hover:!bg-[#2B2B40] focus:!bg-[#2B2B40]  p-2 !border-none"
                  placeholder=" اعد ادخال  كلمة المرور  "
                />
              </Form.Group>
            </div>
            <div className="border-none my-3 flex !w-full justify-end">
              <Button
                className="mx-auto  py-1 px-14 font-semibold text-[13px] text-white bg-[#EFAA20] hover:bg-[#EFAA20]"
                type="submit"
              >
                {isSubmitting ? <Progress isSmall /> : "تحديث"}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdatePassword;
