import React, { useEffect, useMemo, useState } from "react";
import "./index.css";
import { MenuItem, FormControl } from "@mui/material";

import Input from "../../../FormHandler/Input";
import { UseInput, UseSelect } from "../../../../hooks";
import Select from "../../../FormHandler/Select";
import { Button, Form, Modal } from "react-bootstrap";
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
import {
  addUser,
  getUserById,
  updateUser,
} from "../../../../helper/fetchers/Users";
import { toast } from "react-toastify";
import SuccessfullModal from "../../../Modals/SuccessfullModal";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Progress from "../../../Progress";
import { isValid } from "i18n-iso-countries";
import { useParams } from "react-router-dom";
import moment from "moment";

const DeltetIcon = () => {
  return (
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
  );
};
const AddUpdateUser = ({ id, setOpenModal }) => {
  const { openHr, setOpenHr, HrType, setHrType } = useContext(AddHrType);

  const [user, setUser] = useState(null);
  const firstName = UseInput("", "text", true);
  const lastName = UseInput("", "text", true);
  const userName = UseInput("", "userName", true);
  const password = UseInput("", "password", true);
  const cPassword = UseInput("", "password", true);
  const oldPassword = UseInput("", "password");
  const newPassword = UseInput("", "password");
  const reNewPassword = UseInput("", "", true);
  const basicSalary = UseInput("", "number", true);
  const city = UseInput("", "text", true);
  const district = UseInput("", "text", true);
  const increaseSalary = UseInput("", "", true);
  const [attachment, setAttachment] = useState();
  const email = UseInput("", "email", true);
  const phone = UseInput("", "phone", true);
  const idNumber = UseInput("", "idNumber", true);
  const recruitmentOfficer = UseInput("", "", true);
  const [startWork, setStartWork] = useState();
  const [gender, setGender] = useState();
  const [country, setCountry] = useState();
  const [department, setDepartment] = useState();
  const [level, setLevel] = useState();
  const [role, setRole] = useState();
  const [idDate, setIdDate] = useState();
  const [dateOfBirth, setBirthDate] = useState();
  const [recruitmentResone, setRecruitmentResone] = useState();
  const [image, setImage] = useState();
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const genderOptions = [
    {
      label: "ذكر",
      value: 1,
    },
    {
      label: "انثي",
      value: 2,
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
      value: "مدنى",
      label: "مدنى",
    },
    {
      value: "معمارى",
      label: "معمارى",
    },
    {
      value: "كهرباء",
      label: "كهرباء",
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
      value: "موظف",
      label: "موظف",
    },
    {
      value: "مدير",
      label: "مدير",
    },
    {
      value: "مدقق",
      label: "مدقق",
    },
    {
      value: "مدير المكتب",
      label: "مدير المكتب",
    },
    {
      value: "مدير قسم",
      label: "مدير قسم",
    },
    {
      value: "محاسب",
      label: "محاسب",
    },
    {
      value: "مواردبشرية",
      label: "مواردبشرية",
    },
    {
      value: "أدارى",
      label: "أدارى",
    },
  ];
  const levelOption = [
    {
      value: "مبتدئ",
      label: "مبتدئ",
    },
    {
      value: "متوسط",
      label: "متوسط",
    },
    {
      value: "خبير",
      label: "خبير",
    },
  ];

  console.log(role);
  console.log(department);

  const [isDataValid, setIsDataValid] = useState(false);
  // for add user
  useMemo(() => {
    if (
      !id &&
      firstName.isValid &&
      lastName.isValid &&
      userName.isValid &&
      password.isValid &&
      cPassword.isValid &&
      basicSalary.isValid &&
      city.isValid &&
      district.isValid &&
      increaseSalary.isValid &&
      email.isValid &&
      phone.isValid &&
      idNumber.isValid &&
      recruitmentOfficer.isValid &&
      recruitmentResone &&
      startWork &&
      department &&
      role &&
      attachment &&
      level &&
      country &&
      image &&
      gender
    ) {
      setIsDataValid(true);
    } else {
      setIsDataValid(false);
    }
  }, [
    id,
    firstName.isValid,
    lastName.isValid,
    userName.isValid,
    password.isValid,
    cPassword.isValid,
    basicSalary.isValid,
    city.isValid,
    district.isValid,
    increaseSalary.isValid,
    email.isValid,
    phone.isValid,
    idNumber.isValid,
    startWork,
    department,
    role,
    attachment,
    level,
    country,
    image,
    gender,
    recruitmentResone,
    recruitmentOfficer.value,
  ]);
  // for update user
  useMemo(() => {
    if (
      id &&
      firstName.isValid &&
      lastName.isValid &&
      userName.isValid &&
      basicSalary.isValid &&
      city.isValid &&
      district.isValid &&
      increaseSalary.isValid &&
      email.isValid &&
      phone.isValid &&
      idNumber.isValid &&
      recruitmentOfficer.isValid &&
      recruitmentResone &&
      startWork &&
      department &&
      role &&
      level &&
      country &&
      gender
    ) {
      setIsDataValid(true);
    }
  }, [
    id,
    firstName.isValid,
    lastName.isValid,
    userName.isValid,
    basicSalary.isValid,
    city.isValid,
    district.isValid,
    increaseSalary.isValid,
    email.isValid,
    phone.isValid,
    idNumber.isValid,
    startWork,
    department,
    role,
    level,
    country,
    gender,
    recruitmentResone,
    recruitmentOfficer.value,
  ]);
  // console.log(isDataValid);
  const handleAddUpdateUser = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData();
    // update
    if (id) {
      try {
        formData.append("userName", userName.value);
        formData.append("firstName", firstName.value);
        formData.append("lastName", lastName.value);
        formData.append("email", email.value);
        formData.append("gender", gender);
        formData.append("phone", phone.value);
        formData.append("role", role);
        formData.append("dateOfBirth", dateOfBirth);
        formData.append("startWork", startWork);
        formData.append("department", department);
        formData.append("level", level);
        formData.append("country", country);
        formData.append("city", city.value);
        formData.append("district", district.value);
        formData.append("idNumber", idNumber.value);
        formData.append("basicSalary", basicSalary.value);
        formData.append("increaseSalary", increaseSalary.value);
        formData.append("recruitmentResone", recruitmentResone);
        formData.append("recruitmentOfficer", recruitmentOfficer.value);
        const { data } = await updateUser(id, formData);
        console.log(data);
        if (data?.message === "updated Done") {
          setIsLoading(false);
          setSuccess(true);
          setMessage("تم تعديل موظف جديد بنجاح ");
        } else {
          console.log("Data retrieval failed");
          setIsLoading(false);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message);
        setIsLoading(false);
      }

      ///updateUSer
      //UpdatedUserSuccesfuly
    } else {
      // add
      try {
        formData.append("userName", userName.value);
        formData.append("firstName", firstName.value);
        formData.append("lastName", lastName.value);
        formData.append("email", email.value);
        formData.append("password", password.value);
        formData.append("cPassword", cPassword.value);
        formData.append("gender", gender);
        formData.append("phone", phone.value);
        formData.append("role", role);
        formData.append("dateOfBirth", dateOfBirth);
        formData.append("startWork", startWork);
        formData.append("department", department);
        formData.append("level", level);
        formData.append("country", country);
        formData.append("city", city.value);
        formData.append("district", district.value);
        formData.append("idNumber", idNumber.value);
        formData.append("idDate", idDate);
        formData.append("basicSalary", basicSalary.value);
        formData.append("increaseSalary", increaseSalary.value);
        formData.append("recruitmentResone", recruitmentResone);
        formData.append("recruitmentOfficer", recruitmentOfficer.value);
        formData.append("fileUser", attachment);
        formData.append("image", image);
        const { data } = await addUser(formData);
        console.log(data);
        if (data?.success) {
          setIsLoading(false);
          setSuccess(true);
          setMessage("تم اضافة موظف جديد بنجاح ");
        } else {
          console.log("Data retrieval failed");
          setIsLoading(false);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message);
        setIsLoading(false);
      }

      //UpdatedUserSuccesfuly
    }
  };

  const getUserWithID = async () => {
    if (id) {
      try {
        const { data } = await getUserById(id);
        console.log(data);

        if (data?.user) {
          firstName.changeValue(data.user.firstName);
          lastName.changeValue(data.user.lastName);
          userName.changeValue(data.user.userName);
          email.changeValue(data.user.email);
          phone.changeValue(data.user.phone);
          city.changeValue(data.user.city);
          district.changeValue(data.user.district);
          idNumber.changeValue(data.user.idNumber);
          basicSalary.changeValue(data.user.basicSalary);
          increaseSalary.changeValue(data.user.increaseSalary);
          recruitmentOfficer.changeValue(data.user.recruitmentOfficer);
          setStartWork(data.user.startWork);
          setGender(data.user.gender);
          setRole(data.user.role);
          setGender(data.user.gender);
          setCountry(data.user.country);
          setBirthDate(data.user.dateOfBirth);
          setDepartment(data.user.department);
          setLevel(data.user.level);
          setIdDate(data.user.idDate);
          setRecruitmentResone(data.user.recruitmentResone);
          setUser(data?.user);
        } else {
          console.log("Data retrieval failed");
        }
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  useEffect(() => {
    getUserWithID();
  }, [id]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="bg-[#1E1E2D] rounded-[19px] border !border-[#EFAA20] max-h-[801px] overflow-y-auto p-2 scrollbar-none">
        <SuccessfullModal
          message={message}
          show={success}
          handleClose={() => {
            setSuccess(false);
            setOpenHr(false);
            setOpenModal(false);
          }}
        />

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
              <legend className="text-center text-white">
                {" "}
                اضافة موظف جديد
              </legend>
            ) : (
              <legend className="text-center  text-white">
                {" "}
                تعديل الموظف{" "}
              </legend>
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
                <FormControl fullWidth>
                  <InputLabel label={"النوع"} />
                  <CustomSelect
                    placeholderValue={
                      user ? (user.gender == 1 ? "ذكر" : "انثي") : ""
                    }
                  >
                    <MenuItem disabled value="">
                      <div className="w-full flex justify-between">
                        <span>بحث ...</span>
                        <CiSearch />
                      </div>
                    </MenuItem>
                    {genderOptions.map(({ label, value }, index) => (
                      <MenuItem
                        key={index}
                        value={label}
                        onClick={(e) => setGender(value)}
                        // style={getStyles(name, selectedItem, theme)}
                      >
                        {label}
                      </MenuItem>
                    ))}
                  </CustomSelect>
                </FormControl>
              </div>

              {!id && (
                <div className=" mb-2 flex justify-center items-center">
                  {" "}
                  <FormControl fullWidth>
                    <InputLabel id="userImg" label={"صوره الموظف"} />
                    <Form.Control
                      type="file"
                      name="userImg"
                      multiple={false}
                      htmlFor="formFile"
                      className={`chooseFile text-white`}
                      onChange={(e) => setImage(e.currentTarget.files[0])}
                    />
                  </FormControl>
                </div>
              )}

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
                <FormControl fullWidth>
                  <InputLabel id="username" label={"البلد"} />
                  <CustomSelect placeholderValue={user ? user.country : ""}>
                    <MenuItem disabled value="">
                      <div className="w-full flex justify-between">
                        <span>بحث ...</span>
                        <CiSearch />
                      </div>
                    </MenuItem>
                    {countryOption.map(({ label, value }, index) => (
                      <MenuItem
                        key={index}
                        value={user ? user.country : ""}
                        onClick={(e) => setCountry(value)}
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
                <Input
                  label="الحي "
                  {...district.bind}
                  placeholder="  ادخل الحي"
                />
              </div>
              <div className="">
                <Form.Group
                  controlId="licenseDate !h-[40px]"
                  className="licenseDate-container"
                >
                  <Form.Label className=" flex gap-2 align-items-center">
                    تاريخ الميلاد
                  </Form.Label>

                  <DatePicker
                    id="dateOfBirth"
                    selected={dateOfBirth}
                    value={
                      user ? moment(user.dateOfBirth, "YYYY-MM-DD") : moment()
                    }
                    placeholder="اضف تاريخ الميلاد"
                    onChange={(date) => setBirthDate(date)}
                    dateFormat="dd-MM-yyyy"
                    inputProps={{ size: "small" }}
                    className="w-full text-white p-2 bg-[#2B2B40] rounded-[7px]"
                    sx={{
                      height: "37px",
                      "&  .MuiInputBase-root ": {
                        height: "20px",
                      },

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
                </Form.Group>
              </div>
              <div className=" mb-2 flex justify-center">
                <FormControl fullWidth>
                  <InputLabel label={"القسم"} />
                  <CustomSelect value={user ? user.department : ""}>
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
                        onClick={(e) => setDepartment(value)}
                      >
                        {label}
                      </MenuItem>
                    ))}
                  </CustomSelect>
                </FormControl>
              </div>
              <div className=" mb-2 flex justify-center">
                <FormControl fullWidth>
                  <InputLabel label={"الصلاحية"} />
                  <CustomSelect value={user ? user.role : ""}>
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
                        onClick={(e) => setRole(value)}
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
                  <InputLabel label={"المستوى"} />
                  <CustomSelect value={user ? user.level : ""}>
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
                        onClick={(e) => setLevel(value)}
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

                  <DatePicker
                    id="startWork"
                    selected={startWork}
                    value={
                      user ? moment(user.startWork, "YYYY-MM-DD") : moment()
                    }
                    placeholder={" اختار موعد بدا العمل  "}
                    onChange={(date) => setStartWork(date)}
                    dateFormat="dd-MM-yyyy"
                    className="w-full text-white p-2 bg-[#2B2B40] rounded-[7px]"
                    sx={{
                      height: "37px",
                      "&  .MuiInputBase-root ": {
                        height: "20px",
                      },

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
                  {/* <FormDatePicker
                    date={startWork}
                    setDate={setStartWork}
                    placeholderText={" اختار موعد بدا العمل  "}
                  /> */}
                </Form.Group>
              </div>
              <div className=" mb-2 flex justify-center">
                <Input
                  label="رقم الهوية "
                  {...idNumber.bind}
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
                  <DatePicker
                    value={user ? moment(user.idDate, "YYYY-MM-DD") : moment()}
                    id="idDate"
                    selected={idDate}
                    placeholder=" ادخل تاريخ الهوية  "
                    onChange={(date) => setIdDate(date)}
                    dateFormat="dd-MM-yyyy"
                    inputProps={{ size: "small" }}
                    className="w-full text-white p-2 bg-[#2B2B40] rounded-[7px]"
                    sx={{
                      height: "37px",
                      "&  .MuiInputBase-root ": {
                        height: "20px",
                      },

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
                  {/* <FormDatePicker
                    date={idDate}
                    setDate={setIdDate}
                    placeholderText={" ادخل تاريخ الهوية  "}
                  /> */}
                </Form.Group>
              </div>
            </div>
          </fieldset>
          {id ? (
            <></>
          ) : (
            // <fieldset className="golden-square w-90 p-4 px-4 mt-3 mx-auto">
            //   <legend className="text-center">كلمة المرور</legend>
            //   <div className="grid grid-cols-3 gap-4">
            //     <div>
            //       <Input
            //         label={" كلمه المرور القديمة"}
            //         background="#2B2B40"
            //         type="password"
            //         {...oldPassword.bind}
            //         placeholder=" ادخل كلمة المرور القديمة"
            //       />
            //     </div>
            //     <div>
            //       <Input
            //         label={" كلمه المرور الجديدة"}
            //         background="#2B2B40"
            //         type="password"
            //         {...newPassword.bind}
            //         placeholder="ادخل كلمة المرور الجديدة"
            //       />
            //     </div>
            //     <div>
            //       <Input
            //         label={" تاكيد كلمة المرور الجديدة"}
            //         type="password"
            //         {...reNewPassword.bind}
            //         placeholder="اعد ادخال كلمة المرور "
            //       />
            //     </div>
            //   </div>
            // </fieldset>
            <fieldset className="golden-square w-90 p-4 px-4 mt-3 mx-auto">
              <div className="row">
                <div className="col-md-6">
                  <Input
                    label={"كلمه المرور"}
                    background="#2B2B40"
                    type="password"
                    {...password.bind}
                    placeholder="ادخل كلمة المرور"
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    label={" تاكيد كلمة المرور"}
                    type="password"
                    {...cPassword.bind}
                    placeholder="اعد ادخال كلمة المرور"
                  />
                </div>
              </div>
            </fieldset>
          )}

          <fieldset className="golden-square  w-90 p-4 px-4   mt-3 mx-auto">
            <legend className="text-center">معلومات حسابات</legend>
            <div className="row">
              <div className="col-md-4 col-sm-6 mb-2 d-flex justify-content-center">
                <Input
                  label=" المرتب الاساسي "
                  {...basicSalary.bind}
                  placeholder=" ادخل المرتب الاساسي  "
                />
              </div>
              <div className="col-md-4 col-sm-6 mb-2 d-flex justify-content-center">
                <Input
                  label=" نسبة الزيادة "
                  {...increaseSalary.bind}
                  placeholder=" ادخل نسبة الزيادة  "
                />
              </div>
              {/* <div className="col-md-4 col-sm-6">
              <Form.Group>
                <Form.Label>بداية من شهر</Form.Label>
                <FormDatePicker
                  date={increaseStartDate}
                  setDate={setIncreaseStartDate}
                  placeholderText={"ادخل التاريخ"}
                />
              </Form.Group>
            </div> */}
            </div>
          </fieldset>

          <fieldset className="golden-square  w-90 p-4 px-4   mt-3 mx-auto">
            <legend className="text-center"> التعينات</legend>
            <div className="row">
              <div className="col-md-6  mb-2">
                <Input
                  label=" المسئول عن التوظيف  "
                  className="w-100"
                  {...recruitmentOfficer.bind}
                  placeholder=" اكتب اسم المسوؤل عن التوظيف"
                />
              </div>
              <div className="col-md-12  mb-2">
                <Form.Group>
                  <Form.Label>اسباب التعين</Form.Label>
                  <textarea
                    className="form-control"
                    cols={5}
                    defaultValue={user ? user.recruitmentResone : ""}
                    rows={5}
                    minLength={10}
                    onChange={(e) => {
                      setRecruitmentResone(e.target.value);
                    }}
                    placeholder="ادخل اسباب التعين"
                  />
                </Form.Group>
              </div>
            </div>
          </fieldset>

          {!id && (
            <fieldset className="golden-square  w-90 p-4 px-4   mt-3 mx-auto">
              <legend className="text-center"> مرفقات الموظف</legend>
              <div className="row">
                <AddAttachment
                  attachment={attachment}
                  setAttachment={setAttachment}
                />
              </div>
            </fieldset>
          )}

          <div className="d-flex w-75 mx-auto my-3 justify-content-end">
            <button
              disabled={!isDataValid}
              type="submit"
              className={`sumbmitAddUpdateUser ${
                !isDataValid ? "cursor-not-allowed" : ""
              } `}
            >
              {isLoading ? <Progress isSmall /> : "حفظ"}
            </button>
          </div>
        </Form>
      </div>
    </LocalizationProvider>
  );
};

export default AddUpdateUser;
