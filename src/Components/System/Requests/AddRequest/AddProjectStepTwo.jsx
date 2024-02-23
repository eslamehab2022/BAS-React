import React, { useContext, useEffect, useMemo, useState } from "react";
import Input from "../../../FormHandler/Input";
import Select from "../../../FormHandler/Select";
import {
  UseCheckBox,
  UseInput,
  UseMultiSelect,
  UseSelect,
} from "../../../../hooks";
import { Form, Image, InputGroup } from "react-bootstrap";
import { multiStepContext } from "../../../../Context/StepContext";
import {
  PhoneInput,
  parseCountry,
  defaultCountries,
} from "react-international-phone";
import { PhoneNumberUtil } from "google-libphonenumber";
import { identity } from "@fullcalendar/core/internal";
const AddProjectStepTwo = (props) => {
  const { userData, setUserData } = useContext(multiStepContext);

  const phoneUtil = PhoneNumberUtil.getInstance();

  const isPhoneValid = (phone) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
      return false;
    }
  };

  const clientType = UseSelect(
    userData?.clientType
      ? {
          value: userData?.clientType,
          label: userData?.clientType,
        }
      : "",

    "Select"
  );
  const identityType = UseSelect(
    userData?.identityType
      ? {
          value: userData?.identityType,
          label: userData?.identityType,
        }
      : "",

    "",
    "Select"
  );
  const identityNumber = UseInput(
    `${userData?.identityNumber ? userData.identityNumber : ""}`,
    "identityNumber",
    true
  );

  const email = UseInput(
    `${userData?.email ? userData.email : ""}`,
    "email",
    true
  );
  const [phone, setPhone] = useState(
    `${userData?.phone ? userData.phone : ""}`
  );
  const checkPhoneValidation = isPhoneValid(phone);
  const taxNumber = UseInput(
    `${userData?.taxNumber ? userData.taxNumber : ""} `,
    "taxNumber",
    true
  );
  const [idPhoto, setIdPhoto] = useState();

  const clientTypeRoles = [
    {
      label: "فردي",
      value: 3,
    },
    {
      label: "شركه  او مؤسسة",
      value: 2,
    },
    {
      label: "حكومي او مستثمر",
      value: 1,
    },
  ];
  const identityTypeRoles = [
    {
      label: "تجاري",
      value: 2,
    },
    {
      label: "هوية",
      value: 1,
    },
  ];

  const countries = defaultCountries.filter((country) => {
    const { iso2 } = parseCountry(country);
    return ["sa"].includes(iso2);
  });

  //  vaildation

  const [IsVaildState, setIsVaildState] = useState(false);
  const signalParent = (isValid) => {
    setIsVaildState(isValid);
    props.signalIfValid(isValid);
  };

  useMemo(() => {
    if (
      clientType?.value.value &&
      identityType?.value.value &&
      email.value &&
      email.isValid &&
      identityNumber.isValid &&
      identityNumber.value &&
      idPhoto &&
      phone &&
      checkPhoneValidation
    ) {
      const updatedUserData = {
        ...userData,
        clientType: clientType.value.value,
        identityType: identityType.value.value,
        identityNumber: identityNumber.value,
        email: email.value,
        idPhoto,
        phone,
        taxNumber: taxNumber.value,
      };
      setUserData(updatedUserData);

      signalParent(true);
    } else {
      signalParent(false);
      const updatedUserData = {
        ...userData,
        clientType: clientType.value.value,
        identityType: identityType.value.vlaue,
        identityNumber: identityNumber.value,
        email: email.value,
        idPhoto,
        taxNumber: taxNumber.value,
        phone,
      };
      setUserData(updatedUserData);
    }
  }, [
    clientType?.value.label &&
      identityType?.value.label &&
      email.value &&
      idPhoto &&
      email.isValid &&
      checkPhoneValidation,
    identityType.value,
  ]);

  useEffect(() => {
    signalParent(IsVaildState);
  }, [IsVaildState]);
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <fieldset className="addProjectStep mx-auto">
      <legend className="text-center">اضافة بيانات المالك </legend>
      <Form className="row w-100 m-auto ">
        <div className="col-md-6 mb-4">
          <Select
            label={" نوع العميل"}
            placeholder="اختر..."
            OptionbackgroundColor="#414162"
            {...clientType.bind}
            options={clientTypeRoles}
            mandatory
          />
        </div>
        <div className="col-md-6 mb-4">
          <Select
            label={" نوع الهوية  "}
            placeholder="اختر..."
            OptionbackgroundColor="#414162"
            {...identityType.bind}
            options={identityTypeRoles}
            mandatory
          />
        </div>

        <div className="col-md-6 mb-4">
          <Input
            placeholder="ادخل البريد الالكتروني"
            label={"البريد الالكتروني"}
            {...email.bind}
            mandatory
          />
        </div>
        <div className="col-md-6 mb-4">
          <Input
            placeholder="ادخل  رقم الهوية"
            label={"رقم الهوية"}
            {...identityNumber.bind}
            mandatory
          />
        </div>

        <div className="col-md-6 mb-4">
          <Form.Group controlId="formBasicImage">
            <Form.Label className="d-flex gap-2 align-items-center">
              رقم الجوال
            </Form.Label>
            <PhoneInput
              defaultCountry="sa"
              value={phone}
              className="w-100 h-100"
              onChange={(phone) => setPhone(phone)}
              countries={countries}
            />
          </Form.Group>
        </div>
        <div className="col-md-6 mb-4">
          <Input
            placeholder="ادخل رقم الشهادة الضريبية"
            label={"رقم الشهادة الضربية"}
            {...taxNumber.bind}
          />
        </div>
        <div className="col-md-12 mb-4">
          <Form.Group controlId="formBasicImage">
            <Form.Label className="d-flex flex-column gap-2 ">
              <span> صورة الهويه</span>
            </Form.Label>

            <Form.Control
              type="file"
              multiple="multiple"
              width={100}
              height={100}
              className="choose-file-input"
              placeholder="صورة الهويه"
              name="imageFile"
              onChange={(e) => setIdPhoto(e.currentTarget.files[0])}
            />
          </Form.Group>
        </div>
      </Form>
    </fieldset>
  );
};

export default AddProjectStepTwo;
