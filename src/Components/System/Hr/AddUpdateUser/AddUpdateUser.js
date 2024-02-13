import React, { useState } from "react";
import "./index.css";
import { MenuItem, FormControl } from "@mui/material";

import Input from "../../../FormHandler/Input";
import { UseInput, UseSelect } from "../../../../hooks";
import Select from "../../../FormHandler/Select";
import { Button, Form, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import { showAddUpdateUser } from "../../../../Context/CheckAddUpdateUserVisability";
import { AddHrType } from "../../../../Context/AddHr";
import FormDatePicker from "../../../FormDatePicker";
import AddAttachment from "../../AddAttachment";
import Image from "../../../Image";
import { InputLabel } from "../../../../Pages/System/PlanModel/components/InputLabel";
import CustomSelect from "../../../../Pages/System/PlanModel/components/CustomSelect";
import { CiSearch } from "react-icons/ci";

const AddUpdateUser = ({ id = null }) => {
  const { openHr, setOpenHr, HrType, setHrType } = useContext(AddHrType);
  const firstName = UseInput("", "text", true);
  const lastName = UseInput("", "text", true);
  const userName = UseInput("", "text", true);
  const userPassword = UseInput("", "password_optional");
  const rePassword = UseInput("", "", true);
  const oldPassword = UseInput("", "password_optional");
  const newPassword = UseInput("", "password_optional");
  const reNewPassword = UseInput("", "", true);
  const gender = UseSelect(
    {
      value: "ذكر",
      label: "ذكر",
    },
    "Select",
    true
  );
  const level = UseSelect("", "Select", true);
  const baseSalary = UseInput("", "", true);
  const increaseAmount = UseInput("", "", true);
  const [increaseStartDate, setIncreaseStartDate] = useState("");
  const [attachment, setAttachment] = useState("");

  const genderOptions = [
    {
      value: "ذكر",
      label: "ذكر",
    },
    {
      value: "انثي",
      label: "انثي",
    },
  ];
  const countryOption = [
    {
      value: "السعودية",
      label: "السعودية",
    },
    {
      value: "مصر",
      label: "مصر",
    },
  ];
  const departmentOption = [
    {
      value: "مدني",
      label: "مدني",
    },
    {
      value: " معماري",
      label: "معماري",
    },
    {
      value: "كهربا",
      label: "كهربا",
    },
    {
      value: "ميكانيكا",
      label: "ميكانيكا",
    },
    {
      value: "برمجة",
      label: "برمجة",
    },
  ];
  const roleOption = [
    {
      value: "مدير",
      label: "مدير",
    },
    {
      value: "مدير مكتب",
      label: "مدير مكتب",
    },
    {
      value: "مدير قسم",
      label: "مدير قسم",
    },
    {
      value: "موظف",
      label: "موظف",
    },
    {
      value: "محاسب",
      label: "محاسب",
    },
  ];
  const levelOption = [
    {
      value: "مبتدي",
      label: "مبتدي",
    },
    {
      value: "متوسط ",
      label: "متوسط ",
    },
    {
      value: " خبير",
      label: "خبير ",
    },
  ];
  const email = UseInput("", "email", true);
  const phone = UseInput("", "phone", true);
  const [startWork, setStartWork] = useState(null);
  const country = UseSelect(
    {
      value: "السعودية",
      label: "السعودية",
    },
    "Select"
  );
  const city = UseInput("", "text", true);
  const area = UseInput("", "text", true);
  const department = UseSelect(
    {
      value: "مدني",
      label: "مدني",
    },
    "Select"
  );
  const role = UseSelect(
    {
      value: "موظف",
      label: "موظف",
    },
    "Select"
  );

  const instrumentNumber = UseInput("", "number", true);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [instrumentDate, setInstrumentDate] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [showSubmitPoper, SetShowSubmitPoper] = useState(false);

  const handleAddUpdateUser = (e) => {
    e.preventDefault();
    if (id) {
      ///updateUSer

      //UpdatedUserSuccesfuly
      SetShowSubmitPoper(true);
    } else {
      //Adduser

      //UpdatedUserSuccesfuly
      SetShowSubmitPoper(true);
    }
  };

  return (
    <div className="bg-[#1E1E2D] rounded-[19px] border !border-[#EFAA20] max-h-[801px] overflow-y-auto p-2 scrollbar-none">
      {showSubmitPoper && (
        <Modal
          className="submitSystemPoper"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => SetShowSubmitPoper(false)}
          show={showSubmitPoper}
        >
          <Modal.Body>
            <div className="d-flex justify-content-center  w-100">
              {" "}
              <Image
                src={process.env.PUBLIC_URL + "/correct.gif"}
                width={120}
                height={120}
                className="my-3"
                color="#E1B67C"
              />
            </div>

            <div className="d-flex w-75 flex-column mx-auto mt-3 justify-content-center align-items-center ">
              {!id ? (
                <p className="text-white mb-4" style={{ fontSize: "30px" }}>
                  تم اضافة موظف جديد بنجاح
                </p>
              ) : (
                <p className="text-white" style={{ fontSize: "30px" }}>
                  {" "}
                  تم تعديل بيانات الموظف بنجاح
                </p>
              )}
              <Button
                type="submit"
                onClick={() => {
                  SetShowSubmitPoper(false);
                  if (id) {
                    setOpenHr(false);
                    setHrType(null);
                  } else {
                    setOpenHr(false);
                    setHrType(null);
                  }
                }}
                className="sumbmitAddUpdateUser"
              >
                حفظ
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      )}

      {!id ? (
        <h2 className="golden  my-3 addupdateheader   mx-5 mb-1 ">
          إضافة جديدة
        </h2>
      ) : (
        <h2 className="golden addupdateheader mt-3    mx-5 mb-1   ">
          {" "}
          تعديل المستخدم
        </h2>
      )}

      <Form onSubmit={handleAddUpdateUser}>
        <fieldset className="golden-square   p-4 w-90 m-auto">
          {!id ? (
            <legend className="text-center text-white"> اضافة موظف جديد</legend>
          ) : (
            <legend className="text-center  text-white"> تعديل الموظف </legend>
          )}
          <div className="grid  grid-cols-3 gap-4  ">
            <div className="  flex justify-center  mb-2">
              <Input
                label="الاسم الاول"
                {...firstName.bind}
                placeholder="ادخل الاسم الاول"
              />
            </div>
            <div className=" mb-2 flex justify-center">
              <Input
                label="الاسم  الاخير"
                {...lastName.bind}
                placeholder="ادخل الاسم الاخير"
              />
            </div>
            <div className=" mb-2 flex justify-center">
              <Input
                label="الاسم  المستخدم "
                {...userName.bind}
                placeholder="ادخل اسم المستخدم"
              />
            </div>
            <div className=" mb-2 flex justify-center">
              {/* <Select
                label="النوع"
                options={genderOptions}
                {...gender.bind}
                placeholder="النوع"
              /> */}

              <FormControl fullWidth>
                <InputLabel id="username" label={"النوع"} />
                <CustomSelect>
                  <MenuItem disabled value="">
                    <div className="w-full flex justify-between">
                      <span>بحث ...</span>
                      <CiSearch />
                    </div>
                  </MenuItem>
                  {genderOptions.map(({ label, value }, index) => (
                    <MenuItem
                      key={index}
                      value={value}
                      onClick={(e) => setSelectedGender(value)}
                      // style={getStyles(name, selectedItem, theme)}
                    >
                      {label}
                    </MenuItem>
                  ))}
                </CustomSelect>
              </FormControl>
            </div>
            <div className=" mb-2 flex justify-center">
              <Input
                label="البريد الالكتروني"
                {...email.bind}
                placeholder="ادخل البريد الالكتروني"
              />
            </div>
            <div className=" mb-2 flex justify-center">
              <Input
                label=" رقم الجوال"
                {...phone.bind}
                placeholder="ادخل رقم الجوال"
              />
            </div>
            <div className=" mb-2 flex justify-center">
              {/* <Select
                label=" البلد "
                {...country.bind}
                options={countryOption}
                placeholder="  ادخل البلد"
              /> */}
              <FormControl fullWidth>
                <InputLabel id="username" label={"البلد"} />
                <CustomSelect>
                  <MenuItem disabled value="">
                    <div className="w-full flex justify-between">
                      <span>بحث ...</span>
                      <CiSearch />
                    </div>
                  </MenuItem>
                  {countryOption.map(({ label, value }, index) => (
                    <MenuItem
                      key={index}
                      value={value}
                      onClick={(e) => setSelectedCountry(value)}
                      // style={getStyles(name, selectedItem, theme)}
                    >
                      {label}
                    </MenuItem>
                  ))}
                </CustomSelect>
              </FormControl>
            </div>
            <div className=" mb-2 flex justify-center">
              <Input
                label=" المدينه "
                {...city.bind}
                placeholder="  ادخل المدينه"
              />
            </div>
            <div className=" mb-2 flex justify-center">
              <Input label="الحي " {...area.bind} placeholder="  ادخل الحي" />
            </div>
            <div className="">
              <Form.Group
                className="licenseDate-container"
                controlId="licenseDate"
              >
                <Form.Label className="d-flex gap-2 align-items-center">
                  تاريخ الميلاد
                </Form.Label>

                <FormDatePicker
                  date={birthDate}
                  setDate={setBirthDate}
                  placeholderText={" ادخل تاريخ الميلاد "}
                />
              </Form.Group>
            </div>
            <div className=" mb-2 flex justify-center">
              {/* <Select
                label=" القسم "
                {...department.bind}
                options={departmentOption}
                placeholder="  ادخل القسم"
              /> */}
              <FormControl fullWidth>
                <InputLabel id="username" label={"القسم"} />
                <CustomSelect>
                  <MenuItem disabled value="">
                    <div className="w-full flex justify-between">
                      <span>بحث ...</span>
                      <CiSearch />
                    </div>
                  </MenuItem>
                  {departmentOption.map(({ label, value }, index) => (
                    <MenuItem
                      key={index}
                      value={value}
                      onClick={(e) => setSelectedDepartment(value)}
                      // style={getStyles(name, selectedItem, theme)}
                    >
                      {label}
                    </MenuItem>
                  ))}
                </CustomSelect>
              </FormControl>
            </div>
            <div className=" mb-2 flex justify-center">
              {/* <Select
                label=" الصلاحية "
                {...role.bind}
                options={roleOption}
                placeholder="  اختار الصلاحية"
              /> */}
              <FormControl fullWidth>
                <InputLabel id="username" label={"الصلاحية"} />
                <CustomSelect>
                  <MenuItem disabled value="">
                    <div className="w-full flex justify-between">
                      <span>بحث ...</span>
                      <CiSearch />
                    </div>
                  </MenuItem>
                  {roleOption.map(({ label, value }, index) => (
                    <MenuItem
                      key={index}
                      value={value}
                      onClick={(e) => setSelectedRole(value)}
                      // style={getStyles(name, selectedItem, theme)}
                    >
                      {label}
                    </MenuItem>
                  ))}
                </CustomSelect>
              </FormControl>
            </div>
            <div className=" mb-2 flex justify-center">
              {/* <Select
                label=" المستوى "
                {...level.bind}
                options={levelOption}
                placeholder="  اختار الصلاحية"
              /> */}
              <FormControl fullWidth>
                <InputLabel id="username" label={"المستوى"} />
                <CustomSelect>
                  <MenuItem disabled value="">
                    <div className="w-full flex justify-between">
                      <span>بحث ...</span>
                      <CiSearch />
                    </div>
                  </MenuItem>
                  {levelOption.map(({ label, value }, index) => (
                    <MenuItem
                      key={index}
                      value={value}
                      onClick={(e) => setSelectedLevel(value)}
                      // style={getStyles(name, selectedItem, theme)}
                    >
                      {label}
                    </MenuItem>
                  ))}
                </CustomSelect>
              </FormControl>
            </div>
            <div className="">
              <Form.Group
                className="licenseDate-container"
                controlId="licenseDate"
              >
                <Form.Label className="d-flex gap-2 align-items-center">
                  بدا العمل في
                </Form.Label>
                <FormDatePicker
                  date={startWork}
                  setDate={setStartWork}
                  placeholderText={" اختار موعد بدا العمل  "}
                />
              </Form.Group>
            </div>
            <div className=" mb-2 flex justify-center">
              <Input
                label="رقم الهوية "
                {...instrumentNumber.bind}
                placeholder="  ادخل رقم الهوية"
              />
            </div>
            <div className="">
              <Form.Group
                className="licenseDate-container"
                controlId="licenseDate"
              >
                <Form.Label className="d-flex gap-2 align-items-center">
                  تاريخ الهويه
                </Form.Label>

                <FormDatePicker
                  date={instrumentDate}
                  setDate={setInstrumentDate}
                  placeholderText={" ادخل تاريخ الهوية  "}
                />
              </Form.Group>
            </div>
          </div>
        </fieldset>
        <fieldset className="golden-square  w-90 p-4 px-4   mt-3 mx-auto">
          <legend className="text-center">كلمة المرور</legend>
          {id ? (
            <div className="row ">
              <div className="col-md-4 mb-2 ">
                <Input
                  label={" كلمه المرور القديمة"}
                  background="#2B2B40"
                  type="password"
                  {...oldPassword.bind}
                  placeholder=" ادخل كلمة المرور القديمة"
                />
              </div>
              <div className="col-md-4 mb-2 ">
                <Input
                  label={" كلمه المرور الجديدة"}
                  background="#2B2B40"
                  type="password"
                  {...newPassword.bind}
                  placeholder="ادخل كلمة المرور الجديدة"
                />
              </div>
              <div className="col-md-4 mb-2 ">
                <Input
                  label={" تاكيد كلمة المرور الجديدة"}
                  type="password"
                  {...reNewPassword.bind}
                  placeholder="اعد ادخال كلمة المرور "
                />
              </div>
            </div>
          ) : (
            <div className="row ">
              <div className="col-md-6 ">
                <Input
                  label={"كلمه المرور"}
                  background="#2B2B40"
                  type="password"
                  {...userPassword.bind}
                  placeholder="ادخل كلمة المرور"
                />
              </div>
              <div className="col-md-6 ">
                <Input
                  label={" تاكيد كلمة المرور"}
                  type="password"
                  {...rePassword.bind}
                  placeholder="اعد ادخال كلمة المرور"
                />
              </div>
            </div>
          )}
        </fieldset>

        <fieldset className="golden-square  w-90 p-4 px-4   mt-3 mx-auto">
          <legend className="text-center">معلومات حسابات</legend>
          <div className="row">
            <div className="col-md-4 col-sm-6 mb-2 d-flex justify-content-center">
              <Input
                label=" المرتب الاساسي "
                {...baseSalary.bind}
                placeholder=" ادخل المرتب الاساسي  "
              />
            </div>
            <div className="col-md-4 col-sm-6 mb-2 d-flex justify-content-center">
              <Input
                label=" نسبة الزيادة "
                {...increaseAmount.bind}
                placeholder=" ادخل نسبة الزيادة  "
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <Form.Group>
                <Form.Label>بداية من شهر</Form.Label>
                <FormDatePicker
                  date={increaseStartDate}
                  setDate={setIncreaseStartDate}
                  placeholderText={"ادخل التاريخ"}
                />
              </Form.Group>
            </div>
          </div>
        </fieldset>

        <fieldset className="golden-square  w-90 p-4 px-4   mt-3 mx-auto">
          <legend className="text-center"> التعينات</legend>
          <div className="row">
            <div className="col-md-6  mb-2">
              <Input
                label=" المسئول عن التوظيف  "
                className="w-100"
                {...baseSalary.bind}
                placeholder=" اكتب اسم المسوؤل عن التوظيف"
              />
            </div>
            <div className="col-md-12  mb-2">
              <Form.Group>
                <Form.Label>اسباب التعين</Form.Label>
                <textarea
                  className="form-control"
                  cols={5}
                  rows={5}
                  placeholder="ادخل اسباب التعين"
                />
              </Form.Group>
            </div>
          </div>
        </fieldset>

        {!id ? (
          <fieldset className="golden-square  w-90 p-4 px-4   mt-3 mx-auto">
            <legend className="text-center"> مرفقات الموظف</legend>
            <div className="row">
              <AddAttachment
                attachment={attachment}
                setAttachment={setAttachment}
              />
            </div>
          </fieldset>
        ) : (
          <fieldset className="golden-square  w-90 p-4 px-4   mt-3 mx-auto">
            <legend className="text-center"> مرفقات الموظف</legend>
            <div className="w-100 mb-3 d-flex  justify-end">
              <div>
                <div className="pointer d-flex justify-between px-3  bg-[#136D01] mx-auto  w-[98px] h-[25px] rounded">
                  <p className="text-white"> اضافة</p>
                  <span className="text-white">+</span>
                </div>
              </div>
            </div>
            <div className=" d-flex justify-between mx-auto adduserattchment  align-items-center   ">
              <div className="d-flex gap-3">
                <svg
                  className="ms-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                >
                  <g clip-path="url(#clip0_3203_34397)">
                    <path
                      d="M19.5218 23.7339H4.26062C3.96998 23.7339 3.73438 23.4982 3.73438 23.2076V0.578982C3.73438 0.288335 3.96998 0.0527344 4.26062 0.0527344H15.8381C15.9776 0.0527344 16.1115 0.108201 16.2102 0.206872L19.8939 3.8906C19.9926 3.98928 20.048 4.12315 20.048 4.26271V10.5777C20.048 10.8683 19.8124 11.1039 19.5218 11.1039C19.2312 11.1039 18.9955 10.8683 18.9955 10.5777V4.48069L15.62 1.10523H4.78687V22.6814H18.9955V20.0501C18.9955 19.7595 19.2312 19.5239 19.5218 19.5239C19.8124 19.5239 20.048 19.7595 20.048 20.0501V23.2076C20.048 23.4982 19.8124 23.7339 19.5218 23.7339Z"
                      fill="white"
                    />
                    <path
                      d="M15.8393 26.8913H1.10437C0.813726 26.8913 0.578125 26.6557 0.578125 26.3651V4.78896C0.578125 4.49831 0.813726 4.26271 1.10437 4.26271H4.26186C4.5525 4.26271 4.7881 4.49831 4.7881 4.78896C4.7881 5.07961 4.5525 5.31521 4.26186 5.31521H1.63062V25.8389H15.3131V23.2076C15.3131 22.917 15.5487 22.6814 15.8393 22.6814C16.1299 22.6814 16.3655 22.917 16.3655 23.2076V26.3651C16.3655 26.6557 16.1299 26.8913 15.8393 26.8913ZM19.523 4.78896H15.8393C15.5487 4.78896 15.3131 4.55336 15.3131 4.26271V0.578982C15.3131 0.288335 15.5487 0.0527344 15.8393 0.0527344C16.1299 0.0527344 16.3655 0.288335 16.3655 0.578982V3.73647H19.523C19.8136 3.73647 20.0493 3.97207 20.0493 4.26271C20.0493 4.55336 19.8136 4.78896 19.523 4.78896Z"
                      fill="white"
                    />
                    <path
                      d="M25.8399 20.5757H9.52625C9.2356 20.5757 9 20.3401 9 20.0495V10.577C9 10.2864 9.2356 10.0508 9.52625 10.0508H25.8399C26.1305 10.0508 26.3662 10.2864 26.3662 10.577V20.0495C26.3662 20.3401 26.1305 20.5757 25.8399 20.5757ZM10.0525 19.5232H25.3137V11.1033H10.0525V19.5232Z"
                      fill="white"
                    />
                    <path
                      d="M11.6278 18.4712C11.3372 18.4712 11.1016 18.2356 11.1016 17.945V12.6825C11.1016 12.3919 11.3372 12.1562 11.6278 12.1562H12.9434C13.959 12.1562 14.7853 12.9825 14.7853 13.9981C14.7853 15.0137 13.959 15.84 12.9434 15.84H12.1541V17.945C12.1541 18.2356 11.9185 18.4712 11.6278 18.4712ZM12.1541 14.7875H12.9434C13.3787 14.7875 13.7328 14.4334 13.7328 13.9981C13.7328 13.5629 13.3787 13.2087 12.9434 13.2087H12.1541V14.7875ZM17.2587 18.4712H16.364C16.0734 18.4712 15.8378 18.2356 15.8378 17.945V12.6825C15.8378 12.3919 16.0734 12.1562 16.364 12.1562H17.2587C18.7966 12.1562 20.0478 13.4075 20.0478 14.9454V15.6821C20.0478 17.2201 18.7966 18.4712 17.2587 18.4712ZM16.8903 17.4187H17.2587C18.2162 17.4187 18.9953 16.6397 18.9953 15.6821V14.9454C18.9953 13.9878 18.2162 13.2087 17.2587 13.2087H16.8903V17.4187ZM21.6265 18.4712C21.3359 18.4712 21.1003 18.2356 21.1003 17.945V12.6825C21.1003 12.3919 21.3359 12.1562 21.6265 12.1562H23.7315C24.0221 12.1562 24.2577 12.3919 24.2577 12.6825C24.2577 12.9731 24.0221 13.2087 23.7315 13.2087H22.1528V17.945C22.1528 18.2356 21.9171 18.4712 21.6265 18.4712Z"
                      fill="white"
                    />
                    <path
                      d="M23.2099 15.84H21.6312C21.3406 15.84 21.1049 15.6044 21.1049 15.3138C21.1049 15.0232 21.3406 14.7875 21.6312 14.7875H23.2099C23.5005 14.7875 23.7362 15.0232 23.7362 15.3138C23.7362 15.6044 23.5005 15.84 23.2099 15.84ZM17.4212 8.9988H6.37C6.07935 8.9988 5.84375 8.7632 5.84375 8.47255C5.84375 8.18191 6.07935 7.94631 6.37 7.94631H17.4212C17.7118 7.94631 17.9474 8.18191 17.9474 8.47255C17.9474 8.7632 17.7118 8.9988 17.4212 8.9988ZM17.4212 6.89381H6.37C6.07935 6.89381 5.84375 6.65821 5.84375 6.36757C5.84375 6.07692 6.07935 5.84132 6.37 5.84132H17.4212C17.7118 5.84132 17.9474 6.07692 17.9474 6.36757C17.9474 6.65821 17.7118 6.89381 17.4212 6.89381ZM11.6325 4.78882H6.37C6.07935 4.78882 5.84375 4.55322 5.84375 4.26258C5.84375 3.97193 6.07935 3.73633 6.37 3.73633H11.6325C11.9231 3.73633 12.1587 3.97193 12.1587 4.26258C12.1587 4.55322 11.9231 4.78882 11.6325 4.78882Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3203_34397">
                      <rect width="26.9439" height="26.9439" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-white">Cv</p>
              </div>

              <div className="d-flex justify-between me-2 gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="25"
                  viewBox="0 0 22 25"
                  fill="none"
                >
                  <rect width="22" height="25" rx="3" fill="#9E0C1E" />
                  <path
                    d="M15.3559 10.1838L15.1222 17.2586C15.1022 17.8645 14.847 18.4388 14.4106 18.8596C13.9742 19.2804 13.391 19.5146 12.7847 19.5124H8.34367C7.73782 19.5146 7.15495 19.2807 6.71861 18.8604C6.28227 18.4401 6.02676 17.8664 6.00626 17.2609L5.77251 10.1838C5.7674 10.0288 5.82406 9.87815 5.93003 9.76495C6.036 9.65175 6.1826 9.58528 6.33758 9.58016C6.49256 9.57505 6.64323 9.63171 6.75643 9.73768C6.86964 9.84365 6.93611 9.99025 6.94122 10.1452L7.17496 17.2217C7.1866 17.5238 7.31485 17.8097 7.53278 18.0192C7.7507 18.2287 8.04135 18.3457 8.34367 18.3455H12.7847C13.0875 18.3457 13.3784 18.2284 13.5964 18.0184C13.8144 17.8083 13.9424 17.5219 13.9535 17.2194L14.1872 10.1452C14.1923 9.99025 14.2588 9.84365 14.372 9.73768C14.4852 9.63171 14.6359 9.57505 14.7908 9.58016C14.9458 9.58528 15.0924 9.65175 15.1984 9.76495C15.3044 9.87815 15.361 10.0288 15.3559 10.1838ZM16.129 7.82944C16.129 7.98442 16.0674 8.13305 15.9578 8.24264C15.8483 8.35223 15.6996 8.41379 15.5446 8.41379H5.58435C5.42937 8.41379 5.28074 8.35223 5.17115 8.24264C5.06157 8.13305 5 7.98442 5 7.82944C5 7.67446 5.06157 7.52583 5.17115 7.41624C5.28074 7.30665 5.42937 7.24509 5.58435 7.24509H7.39585C7.581 7.24559 7.75971 7.17718 7.89721 7.05319C8.03471 6.92919 8.12115 6.75847 8.13973 6.57425C8.18285 6.14211 8.38531 5.74151 8.70766 5.45049C9.03001 5.15947 9.44915 4.99888 9.88344 5.00001H11.245C11.6793 4.99888 12.0984 5.15947 12.4208 5.45049C12.7431 5.74151 12.9456 6.14211 12.9887 6.57425C13.0073 6.75847 13.0937 6.92919 13.2312 7.05319C13.3687 7.17718 13.5474 7.24559 13.7326 7.24509H15.5441C15.699 7.24509 15.8477 7.30665 15.9573 7.41624C16.0668 7.52583 16.1284 7.67446 16.1284 7.82944H16.129ZM9.15416 7.24509H11.9754C11.8986 7.06963 11.8484 6.88372 11.8264 6.69346C11.8119 6.54942 11.7445 6.41588 11.6372 6.31872C11.5299 6.22156 11.3903 6.16769 11.2456 6.16754H9.88402C9.73926 6.16769 9.5997 6.22156 9.49239 6.31872C9.38508 6.41588 9.31765 6.54942 9.30317 6.69346C9.28099 6.88375 9.23115 7.06966 9.15416 7.24509ZM9.74261 16.0986V11.1229C9.74261 10.9679 9.68104 10.8192 9.57145 10.7097C9.46187 10.6001 9.31323 10.5385 9.15825 10.5385C9.00327 10.5385 8.85464 10.6001 8.74505 10.7097C8.63547 10.8192 8.5739 10.9679 8.5739 11.1229V16.101C8.5739 16.2559 8.63547 16.4046 8.74505 16.5142C8.85464 16.6237 9.00327 16.6853 9.15825 16.6853C9.31323 16.6853 9.46187 16.6237 9.57145 16.5142C9.68104 16.4046 9.74261 16.2559 9.74261 16.101V16.0986ZM12.5557 16.0986V11.1229C12.5557 10.9679 12.4941 10.8192 12.3845 10.7097C12.2749 10.6001 12.1263 10.5385 11.9713 10.5385C11.8163 10.5385 11.6677 10.6001 11.5581 10.7097C11.4485 10.8192 11.387 10.9679 11.387 11.1229V16.101C11.387 16.2559 11.4485 16.4046 11.5581 16.5142C11.6677 16.6237 11.8163 16.6853 11.9713 16.6853C12.1263 16.6853 12.2749 16.6237 12.3845 16.5142C12.4941 16.4046 12.5557 16.2559 12.5557 16.101V16.0986Z"
                    fill="white"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="25"
                  viewBox="0 0 22 25"
                  fill="none"
                >
                  <rect width="22" height="25" rx="3" fill="#136D01" />
                  <path
                    d="M16.45 13.6C16.3041 13.6 16.1642 13.6579 16.0611 13.7611C15.9579 13.8642 15.9 14.0041 15.9 14.15V16.35C15.9 16.4959 15.8421 16.6358 15.7389 16.7389C15.6358 16.8421 15.4959 16.9 15.35 16.9H7.65C7.50413 16.9 7.36424 16.8421 7.26109 16.7389C7.15795 16.6358 7.1 16.4959 7.1 16.35V14.15C7.1 14.0041 7.04205 13.8642 6.93891 13.7611C6.83576 13.6579 6.69587 13.6 6.55 13.6C6.40413 13.6 6.26424 13.6579 6.16109 13.7611C6.05795 13.8642 6 14.0041 6 14.15V16.35C6 16.7876 6.17384 17.2073 6.48327 17.5167C6.79271 17.8262 7.21239 18 7.65 18H15.35C15.7876 18 16.2073 17.8262 16.5167 17.5167C16.8262 17.2073 17 16.7876 17 16.35V14.15C17 14.0041 16.9421 13.8642 16.8389 13.7611C16.7358 13.6579 16.5959 13.6 16.45 13.6ZM11.1095 14.5405C11.1618 14.5906 11.2235 14.6298 11.291 14.656C11.3568 14.6851 11.428 14.7001 11.5 14.7001C11.572 14.7001 11.6432 14.6851 11.709 14.656C11.7765 14.6298 11.8382 14.5906 11.8905 14.5405L14.0905 12.3405C14.1941 12.2369 14.2523 12.0965 14.2523 11.95C14.2523 11.8035 14.1941 11.6631 14.0905 11.5595C13.9869 11.4559 13.8465 11.3977 13.7 11.3977C13.5535 11.3977 13.4131 11.4559 13.3095 11.5595L12.05 12.8245V7.55C12.05 7.40413 11.9921 7.26424 11.8889 7.16109C11.7858 7.05795 11.6459 7 11.5 7C11.3541 7 11.2142 7.05795 11.1111 7.16109C11.0079 7.26424 10.95 7.40413 10.95 7.55V12.8245L9.6905 11.5595C9.63922 11.5082 9.57834 11.4675 9.51134 11.4398C9.44434 11.412 9.37252 11.3977 9.3 11.3977C9.22748 11.3977 9.15567 11.412 9.08866 11.4398C9.02166 11.4675 8.96078 11.5082 8.9095 11.5595C8.85822 11.6108 8.81754 11.6717 8.78979 11.7387C8.76203 11.8057 8.74775 11.8775 8.74775 11.95C8.74775 12.0225 8.76203 12.0943 8.78979 12.1613C8.81754 12.2283 8.85822 12.2892 8.9095 12.3405L11.1095 14.5405Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </fieldset>
        )}

        <div className="d-flex w-75 mx-auto my-3 justify-content-end">
          <button
            type="submit"
            className="bg-[#EFAA20] text-[#1E1E2D] hover:bg-[#2B2B40] hover:text-white border !border-[#EFAA20] py-1 px-6 rounded-[6px]"
          >
            حفظ
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AddUpdateUser;
