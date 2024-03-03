import React, { useContext, useEffect, useState } from "react";
import { AddHrType } from "../../../../Context/AddHr";
import { Form, Modal } from "react-bootstrap";
import SaveButton from "../../../SaveButton";
import Select from "../../../FormHandler/Select";
import AddAttachment from "../../AddAttachment";
import { UseInput, UseSelect } from "../../../../hooks";
import EmployeesManagment from "../../../../Pages/System/Hr/EmployeesManagment/EmployeesManagment";
import { getAllUsers } from "../../../../helper/fetchers/Users";
import { toast } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
import SuccessfullModal from "../../../Modals/SuccessfullModal";
import { ErrorMessage } from "@hookform/error-message";
import Progress from "../../../Progress";
import { getAllServicesHumans } from "../../../../helper/fetchers/servicesHuman";
import ReactDatePicker from "react-datepicker";
import { createHumanResuroesService } from "../../../../helper/fetchers/HumanResuros";

const AddServices = () => {
  const { openHr, setOpenHr, HrType, setHrType } = useContext(AddHrType);
  const EmployeeName = UseInput("", "", true);
  const dependEmployee = UseInput("", "", true);
  const servicesType = UseSelect("", "");
  const [servicesDate, setServicesDate] = useState("");
  const [image, setImage] = useState(null);
  // handle success
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm();
  const servicesTypeRoles = [
    {
      value: "بيان راتب  ",
      label: "بيان راتب  ",
    },
    {
      value: "طلب توظيف  ",
      label: " طلب توظيف",
    },
    {
      value: "مخالصة ",
      label: "مخالصة",
    },
  ];

  const [users, setUsers] = useState(null);
  const [servicesHumanID, setServicesHumanId] = useState(null);
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

  const gethumanServicesId = async () => {
    try {
      const { data } = await getAllServicesHumans();
      console.log(data);
      if (data?.services) {
        let services = data?.services?.map(function (services) {
          return { value: services._id, label: services.name };
        });

        setServicesHumanId(services);
      } else {
        console.log("Data retrieval failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const onSubmit = async (userData) => {
    console.log(userData);
    const formData = new FormData();
    formData.append("employId", userData.employId);
    formData.append("humanServicesId", userData.humanServicesId);
    formData.append("serviceDate", userData.serviceDate);
    formData.append("approvalManger", userData.approvalManger);
    formData.append("image", image);
    try {
      const { data } = await createHumanResuroesService(formData);
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
    gethumanServicesId();
  }, []);

  return (
    <Modal
      className="systemModal addHoliday   "
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      onHide={() => setOpenHr(false)}
      show={openHr}
    >
      <Modal.Body className=" p-2">
        <div className="edit-header p-1">
          <p className="text-white">طلب خدمة</p>
        </div>

        <SuccessfullModal
          show={success}
          handleClose={() => {
            setSuccess(false);
            setOpenHr(false);
          }}
          message="تم اضافه خدمة جديدة بنجاح "
        />

        {users && servicesHumanID ? (
          <Form className="w-90 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="displayFieldSet my-2    p-3 w-90 mx-auto">
              <legend className="text-center text-white">مخصصة الى </legend>
              <div className="col-md-6">
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
                  name={`employId`}
                  control={control}
                />
                <ErrorMessage
                  errors={errors}
                  name="employId"
                  render={({ message }) => (
                    <p className="text-[#FF0000]">{message}</p>
                  )}
                />
                {/* <Select
              label="اسم الموظف"
              {...EmployeeName.bind}
              OptionbackgroundColor={"#414162"}
              options={users}
            /> */}
              </div>
            </fieldset>
            <fieldset className="displayFieldSet my-2    p-3 w-90 mx-auto">
              <legend className="text-center text-white">
                تفاصيل الاجازاة{" "}
              </legend>
              <div className="row">
                <div className="col-md-6">
                  <Controller
                    rules={{
                      required: " من فضلك ادخل نوع الاجازة",
                    }}
                    render={({ field, onChange, value, name, ref }) => (
                      <Select
                        label="نوع الاجازة"
                        {...field}
                        ref={ref}
                        OptionbackgroundColor={"#414162"}
                        className="w-100"
                        value={servicesHumanID.find((c) => c.value === value)}
                        onChange={(val) => field.onChange(val.value)}
                        placeholder="اخترر"
                        options={servicesHumanID}
                      />
                    )}
                    name={`humanServicesId`}
                    control={control}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="humanServicesId"
                    render={({ message }) => (
                      <p className="text-[#FF0000]">{message}</p>
                    )}
                  />

                  {/* <Select
                    label="نوع الخدمة"
                    {...servicesType.bind}
                    placeholder="اختار نوع الخدمة "
                    OptionbackgroundColor={"#414162"}
                    options={servicesTypeRoles}
                  /> */}
                </div>
                <div className="col-md-6">
                  <Form.Group>
                    <Form.Label>اختار تاريخ الخدمة</Form.Label>
                    <Controller
                      control={control}
                      name="serviceDate"
                      rules={{
                        required: " من فضلك ادخل تاريخ  الخدمة",
                      }}
                      render={({ field }) => (
                        <ReactDatePicker
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
                      name="serviceDate"
                      render={({ message }) => (
                        <p className="text-[#FF0000]">{message}</p>
                      )}
                    />
                  </Form.Group>
                </div>
              </div>
            </fieldset>
            <fieldset className="displayFieldSet my-2    p-3 w-90 mx-auto">
              <legend className="text-center text-white"> موجة الى </legend>
              <div>
                <Controller
                  rules={{
                    required: " من فضلك ادخل اسم المدير",
                  }}
                  render={({ field, onChange, value, name, ref }) => (
                    <Select
                      label="اسم المدير"
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
                  name={`approvalManger`}
                  control={control}
                />
                <ErrorMessage
                  errors={errors}
                  name="approvalManger"
                  render={({ message }) => (
                    <p className="text-[#FF0000]">{message}</p>
                  )}
                />
              </div>
            </fieldset>
            <fieldset className="displayFieldSet my-2    p-3 w-90 mx-auto">
              <div className="row">
                <AddAttachment attachment={image} setAttachment={setImage} />
              </div>
            </fieldset>

            <div className="my-3">
              <SaveButton
                text={isSubmitting ? <Progress isSmall /> : "حفظ"}
                type="submit"
              />
            </div>
          </Form>
        ) : (
          <Progress />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default AddServices;
