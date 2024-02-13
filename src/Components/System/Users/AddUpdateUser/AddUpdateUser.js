import React, { useState } from "react";
import "./index.css";
import Input from "../../../FormHandler/Input";
import { UseInput, UseSelect } from "../../../../hooks";
import Select from "../../../FormHandler/Select";
import { Button, Form, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import { showAddUpdateUser } from "../../../../Context/CheckAddUpdateUserVisability";
import FormDatePicker from "../../../FormDatePicker";
import Image from "../../../Image";
import SaveButton from "../../../SaveButton";

const AddUpdateUser = ({ id = null, setOpenUpdateUser, setOpenModal }) => {
  console.log(id);

  const {
    showAddUserModel,
    setShowAddUserModel,
    showUpdateUserModel,
    setShowUpdateUserModel,
  } = useContext(showAddUpdateUser);
  const firstName = UseInput("", "text", true);
  const lastName = UseInput("", "text", true);
  const userName = UseInput("", "text", true);
  const userPassword = UseInput("", "password_optional");
  const rePassword = UseInput("", "", true);
  const gender = UseSelect(
    {
      value: "ذكر",
      label: "ذكر",
    },
    "Select",
    true
  );
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
    <div className="addUpdateUser overflow-y-auto scrollbar-none  P-4">
      {showSubmitPoper && (
        <Modal
          className="submitSystemPoper"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => SetShowSubmitPoper(false)}
          show={showSubmitPoper}
        >
          <Modal.Body>
            <div className="d-flex justify-content-center w-100">
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
                <p className="text-white" style={{ fontSize: "30px" }}>
                  تم اضافة مستخدم جديد بنجاح
                </p>
              ) : (
                <p className="text-white" style={{ fontSize: "30px" }}>
                  {" "}
                  تم تعديل بيانات المستخدم بنجاح
                </p>
              )}
              <Button
                type="submit"
                onClick={() => {
                  SetShowSubmitPoper(false);
                  if (id) {
                    setShowUpdateUserModel(false);
                    setOpenModal(false);
                    setOpenUpdateUser &&
                      setOpenUpdateUser({
                        id: null,
                      });
                  } else {
                    setShowAddUserModel(false);
                    setOpenModal(false);
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
        <h2 className="golden addupdateheader mt-3  mx-5 mb-1 ">إضافة جديدة</h2>
      ) : (
        <h2 className="golden addupdateheader mt-3    mx-5 mb-1   ">
          {" "}
          تعديل المستخدم
        </h2>
      )}

      <Form onSubmit={handleAddUpdateUser}>
        <fieldset className="golden-square  py-4 w-75 m-auto">
          {!id ? (
            <legend className="text-center text-white"> اضافة موظف جديد</legend>
          ) : (
            <legend className="text-center  text-white"> تعديل الموظف </legend>
          )}
          <div className="grid grid-cols-3 gap-4   mx-2 ">
            <div className=" d-flex justify-content-center  mb-2">
              <Input
                label="الاسم الاول"
                {...firstName.bind}
                placeholder="ادخل الاسم الاول"
              />
            </div>
            <div className="mb-2 d-flex justify-content-center">
              <Input
                label="الاسم  الاخير"
                {...lastName.bind}
                placeholder="ادخل الاسم الاخير"
              />
            </div>
            <div className="mb-2 d-flex justify-content-center">
              <Input
                label="الاسم  المستخدم "
                {...userName.bind}
                placeholder="ادخل اسم المستخدم"
              />
            </div>
            <div className="mb-2 d-flex justify-content-center">
              <Select
                label="النوع"
                options={genderOptions}
                {...gender.bind}
                placeholder="النوع"
              />
            </div>
            <div className="mb-2 d-flex justify-content-center">
              <Input
                label="البريد الالكتروني"
                {...email.bind}
                placeholder="ادخل البريد الالكتروني"
              />
            </div>
            <div className=" mb-2 d-flex justify-content-center">
              <Input
                label=" رقم الجوال"
                {...phone.bind}
                placeholder="ادخل رقم الجوال"
              />
            </div>
            <div className=" mb-2 d-flex justify-content-center">
              <Select
                label=" البلد "
                {...country.bind}
                options={countryOption}
                placeholder="  ادخل البلد"
              />
            </div>
            <div className=" mb-2 d-flex justify-content-center">
              <Input
                label=" المدينه "
                {...city.bind}
                placeholder="  ادخل المدينه"
              />
            </div>
            <div className=" mb-2 d-flex justify-content-center">
              <Input label="الحي " {...area.bind} placeholder="  ادخل الحي" />
            </div>
            <div className=" mb-2 d-flex justify-content-center">
              <Form.Group
                className="licenseDate-container"
                controlId="licenseDate"
              >
                <Form.Label className="d-flex gap-2 align-items-center">
                  تاريخ الميلاد
                </Form.Label>

                <DatePicker
                  selected={birthDate}
                  placeholderText=" ادخل تاريخ الميلاد "
                  onChange={(date) => setBirthDate(date)}
                  dateFormat="dd-MM-yyyy"
                  className="w-100 form-control"
                />
              </Form.Group>
            </div>
            <div className=" mb-2 d-flex justify-content-center">
              <Select
                label=" القسم "
                {...department.bind}
                options={departmentOption}
                placeholder="  ادخل القسم"
              />
            </div>
            <div className=" mb-2 d-flex justify-content-center">
              <Select
                label=" الصلاحية "
                {...role.bind}
                options={roleOption}
                placeholder="  اختار الصلاحية"
              />
            </div>
            <div className=" mb-2 d-flex justify-content-center">
              <Form.Group
                className="licenseDate-container"
                controlId="licenseDate"
              >
                <Form.Label className="d-flex gap-2 align-items-center">
                  بدا العمل في
                </Form.Label>

                <DatePicker
                  selected={startWork}
                  placeholderText=" اختار موعد بدا العمل  "
                  onChange={(date) => setStartWork(date)}
                  dateFormat="dd-MM-yyyy"
                  className="w-100 form-control"
                />
              </Form.Group>
            </div>
            <div className=" mb-2 d-flex justify-content-center">
              <Input
                label="رقم الهوية "
                {...instrumentNumber.bind}
                placeholder="  ادخل رقم الهوية"
              />
            </div>
            <div className=" mb-2 d-flex justify-content-center">
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
                  placeholderText={" ادخل تاريخ الهوية"}
                />
              </Form.Group>
            </div>
          </div>
        </fieldset>
        <fieldset className="small-golden-square  w-75 pt-2 pb-2 px-4   mt-3 mx-auto">
          <legend className="text-center">كلمة المرور</legend>
          <div className="flex justify-end">
            <Image
              className={"pointer"}
              src={"/icons/update.png"}
              alt={"update icon"}
            />
          </div>
          <div className="row mb-3">
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
        </fieldset>
        <div className="d-flex my-2 w-75 mx-auto mt-3 justify-content-end">
          <SaveButton onClick={() => setOpenModal(false)} />
        </div>
      </Form>
    </div>
  );
};

export default AddUpdateUser;
