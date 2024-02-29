import React, { useContext, useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";

import { Checkbox } from "@mui/material";

import DatePicker from "react-datepicker";
import "./AddHoliday.css";
import AddAttachment from "../../AddAttachment";

import SaveButton from "../../../SaveButton";
import { AddHrType } from "../../../../Context/AddHr";
import Input from "../../../FormHandler/Input";
import { Controller, useForm } from "react-hook-form";
import { getAllUsers } from "../../../../helper/fetchers/Users";
import { toast } from "react-toastify";
import Progress from "../../../Progress";
import Select from "../../../FormHandler/Select";
import { createVaction } from "../../../../helper/fetchers/Vacations";
import SuccessfullModal from "../../../Modals/SuccessfullModal";
import { getAllVacationCategories } from "../../../../helper/fetchers/VacationCategory";
import { ErrorMessage } from "@hookform/error-message";

const AddHoliday = () => {
  // define context inputs
  const { openHr, setOpenHr, HrType, setHrType } = useContext(AddHrType);
  // define react hook form
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm();

  //getting default values
  const [users, setUsers] = useState(null);
  const [vactions, setVactions] = useState(null);

  const getUsers = async () => {
    try {
      const { data } = await getAllUsers();

      if (data?.allUsers) {
        let users = data?.allUsers?.map(function (user) {
          return { value: user._id, label: user.firstName };
        });
        setUsers(users);
      } else {
        console.log("Data retrieval failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const getvactionCategoryId = async () => {
    try {
      const { data } = await getAllVacationCategories();
      console.log(data);
      if (data?.vacations) {
        let vacations = data?.vacations?.map(function (vaction) {
          return { value: vaction._id, label: vaction.name };
        });
        setVactions(vacations);
      } else {
        console.log("Data retrieval failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  // handling submit event
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  const VacationType = [
    {
      value: 0,
      label: " بدون راتب ",
    },
    {
      value: 1,
      label: "براتب",
    },
    {
      value: 2,
      label: "اخري",
    },
  ];

  const VacationStatus = [
    {
      value: 2,
      label: "مقبولة ",
    },
    {
      value: 1,
      label: "  مرفوضة",
    },

    {
      value: 0,
      label: "معلقة",
    },
  ];

  const onSubmit = async (userData) => {
    console.log(userData);
    const formData = new FormData();
    formData.append("employeeId", userData.employeeId);
    formData.append("vactionType", userData.vactionType);
    formData.append("status", userData.status);
    formData.append("durationVaction", userData.durationVaction);
    formData.append("startDate", userData.startDate);
    formData.append("endDate", userData.endDate);
    formData.append("approvalManager", userData.approvalManager);
    formData.append("vactionCategoryId", userData.vactionCategoryId);
    formData.append("image", image);
    try {
      const { data } = await createVaction(formData);
      if (data?.success) {
        setSuccess(true);
      } else {
        console.log("Data retrieval failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getUsers();
    getvactionCategoryId();
  }, []);
  return (
    <div>
      {openHr && (
        <Modal
          className="systemModal addHoliday   "
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setOpenHr(false)}
          show={openHr}
        >
          <SuccessfullModal
            show={success}
            handleClose={() => {
              setSuccess(false);
              setOpenHr(false);
            }}
            message="تم اضافه اجازه جديدة بنجاح "
          />

          {users && vactions ? (
            <Modal.Body className=" p-2">
              <div className="edit-header p-1">
                <p className="text-white">طلب اجازة</p>
              </div>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="displayFieldSet my-2    p-3 w-90 mx-auto">
                  <legend className="text-center text-white">مخصصة الى </legend>
                  <div className="row">
                    <div className="col-md-6">
                      {/* { field, onChange, value, name, ref } */}

                      <Controller
                        rules={{
                          required: " من فضلك ادخل اسم الموظف",
                        }}
                        render={({ field, onChange, value, name, ref }) => (
                          <Select
                            label="اسم الموظف"
                            {...field}
                            ref={ref}
                            OptionbackgroundColor={"#414162"}
                            className="w-100"
                            value={users.find((c) => c.value === value)}
                            onChange={(val) => field.onChange(val.value)}
                            placeholder="اخترر"
                            options={users}
                          />
                        )}
                        name={`employeeId`}
                        control={control}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="employeeId"
                        render={({ message }) => (
                          <p className="text-[#FF0000]">{message}</p>
                        )}
                      />
                    </div>
                    <div className="col-md-6">
                      <Controller
                        rules={{
                          required: " من فضلك ادخل غرض الاجازة",
                        }}
                        render={({ field, onChange, value, name, ref }) => (
                          <Select
                            label="غرض الاجازة"
                            {...field}
                            ref={ref}
                            OptionbackgroundColor={"#414162"}
                            className="w-100"
                            value={vactions.find((c) => c.value === value)}
                            onChange={(val) => field.onChange(val.value)}
                            placeholder="اخترر"
                            options={vactions}
                          />
                        )}
                        name={`vactionCategoryId`}
                        control={control}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="vactionCategoryId"
                        render={({ message }) => (
                          <p className="text-[#FF0000]">{message}</p>
                        )}
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset className="displayFieldSet my-2    p-3 w-90 mx-auto">
                  <legend className="text-center text-white">
                    تفاصيل الاجازاة{" "}
                  </legend>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <Controller
                        rules={{
                          required: " من فضلك ادخل نوع الاجازة",
                        }}
                        render={({ field, onChange, value, name, ref }) => (
                          <Select
                            label="نوع الاجازة"
                            {...field}
                            {...field}
                            value={users.find((c) => c.value === value)}
                            onChange={(val) => field.onChange(val.value)}
                            ref={ref}
                            OptionbackgroundColor={"#414162"}
                            className="w-100"
                            placeholder="اخترر"
                            name={name}
                            options={VacationType}
                          />
                        )}
                        name={`vactionType`}
                        control={control}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="vactionType"
                        render={({ message }) => (
                          <p className="text-[#FF0000]">{message}</p>
                        )}
                      />
                    </div>
                    <div className="col-md-6  mb-4">
                      <Controller
                        rules={{
                          required: " من فضلك ادخل حالة الاجازة",
                        }}
                        render={({ field, onChange, value, name, ref }) => (
                          <Select
                            label=" حالة الاجازة"
                            {...field}
                            {...field}
                            value={users.find((c) => c.value === value)}
                            onChange={(val) => field.onChange(val.value)}
                            ref={ref}
                            OptionbackgroundColor={"#414162"}
                            className="w-100"
                            placeholder="اخترر"
                            name={name}
                            options={VacationStatus}
                          />
                        )}
                        name={`status`}
                        control={control}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="status"
                        render={({ message }) => (
                          <p className="text-[#FF0000]">{message}</p>
                        )}
                      />

                      {/* <Select
                        label=" حالة الاجازة"
                        placeholder="اختار حالة الاجازة"
                        OptionbackgroundColor={"#414162"}
                        options={VacationStatus}
                      /> */}
                    </div>
                    <div className="col-md-4  mb-4">
                      <input
                        placeholder="اكتب مدة الاجازة"
                        className="h-[37px] w-full form-control"
                        {...register("durationVaction", {
                          required: " من فضلك اكتب مدة الاجازة",
                        })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="durationVaction"
                        render={({ message }) => (
                          <p className="text-[#FF0000]">{message}</p>
                        )}
                      />
                    </div>
                    <div className="col-md-4   mb-4">
                      <Controller
                        control={control}
                        name="startDate"
                        rules={{
                          required: " من فضلك ادخل تاريخ بداية الاجازة",
                        }}
                        render={({ field }) => (
                          <DatePicker
                            onChange={(date) => field.onChange(date)}
                            selected={field.value}
                            placeholderText="من تاريخ"
                            dateFormat="dd-MM-yyyy"
                            className="w-100 form-control"
                          />
                        )}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="startDate"
                        render={({ message }) => (
                          <p className="text-[#FF0000]">{message}</p>
                        )}
                      />

                      {/* //   <DatePicker
                    //     selected={startVaction}
                    //     placeholderText="من تاريخ"
                    //     onChange={(date) => setStartVaction(date)}
                      
                    //   /> */}
                    </div>
                    <div className="col-md-4   mb-4">
                      <Controller
                        rules={{
                          required: " من فضلك ادخل تاريخ من  الاجازة",
                        }}
                        control={control}
                        name="endDate"
                        render={({ field }) => (
                          <DatePicker
                            onChange={(date) => field.onChange(date)}
                            selected={field.value}
                            placeholderText="الي تاريخ"
                            dateFormat="dd-MM-yyyy"
                            className="w-100 form-control"
                          />
                        )}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="endDate"
                        render={({ message }) => (
                          <p className="text-[#FF0000]">{message}</p>
                        )}
                      />

                      {/* <DatePicker
                        selected={endVaction}
                        placeholderText="الي تاريخ"
                        onChange={(date) => setEndVaction(date)}
                        dateFormat="dd-MM-yyyy"
                        className="w-100 form-control"
                      /> */}
                    </div>
                    =
                  </div>
                </fieldset>
                <fieldset className="displayFieldSet my-2    p-3 w-90 mx-auto">
                  <legend className="text-center text-white"> موجة الى </legend>
                  <div className="row">
                    <div className="col-md-8 mb-4">
                      <Controller
                        rules={{
                          required: " من فضلك ادخل   البيانات",
                        }}
                        render={({ field, onChange, value, name, ref }) => (
                          <Select
                            label="تعتمد من "
                            {...field}
                            {...field}
                            value={users.find((c) => c.value === value)}
                            onChange={(val) => field.onChange(val.value)}
                            ref={ref}
                            OptionbackgroundColor={"#414162"}
                            className="w-100"
                            placeholder="اخترر"
                            options={users}
                          />
                        )}
                        name={`approvalManager`}
                        control={control}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="approvalManager"
                        render={({ message }) => (
                          <p className="text-[#FF0000]">{message}</p>
                        )}
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset className="displayFieldSet my-2    p-3 w-90 mx-auto">
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <AddAttachment
                        attachment={image}
                        setAttachment={setImage}
                      />
                    </div>
                  </div>
                </fieldset>

                <div className="my-3">
                  <SaveButton
                    text={isSubmitting ? <Progress isSmall /> : "حفظ"}
                    type="submit"
                  />
                </div>
              </Form>
            </Modal.Body>
          ) : (
            <Progress />
          )}
        </Modal>
      )}
    </div>
  );
};

export default AddHoliday;
