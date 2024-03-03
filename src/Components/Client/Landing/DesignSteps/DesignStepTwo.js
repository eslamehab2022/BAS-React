import React, { useContext, useEffect, useMemo, useState } from 'react'
import Input from '../../../FormHandler/Input'
import Select from '../../../FormHandler/Select'
import { UseCheckBox, UseInput, UseMultiSelect, UseSelect } from '../../../../hooks';
import { Form, Image, InputGroup } from 'react-bootstrap';
import { multiStepContext } from '../../../../Context/StepContext';
import { PhoneInput } from 'react-international-phone';
import { PhoneNumberUtil } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

const DesignStepTwo = (props) => {
  const { userData, setUserData } = useContext(multiStepContext)

  const clientType = UseSelect(
    userData?.clientType ? {
      value: userData?.clientType,
      label: userData?.clientType
    } : ""

    , "Select");
  const identityType = UseSelect(
    userData?.projectType ? {
      value: userData?.projectType,
      label: userData?.projectType
    } : ""

    , "", "Select");
  const email = UseInput(`${userData?.email ? userData.email : ""}`, "email", true);
  const [phone, setPhone] = useState(`${userData?.phone ? userData.phone : ""}`)
  const checkPhoneValidation = isPhoneValid(phone);
  const taxCertificateNumber = UseInput(`${userData?.taxCertificateNumber ? userData.taxCertificateNumber : ""} `, "number", true)
  const [instrumentImage, setInstrumentImage] = useState();



  const clientTypeRoles = [
    {
      label: "فردي",
      value: "فردي"
    },
    {
      label: " شركه  او مؤسسة",
      value: " شركه  او مؤسسة "
    },
    {
      label: "حكومي",
      value: "حكومي"
    }, {
      label: "مستثمر",
      value: "مستثمر"
    },

  ]
  const identityTypeRoles = [
    {
      label: "سجل تجاري",
      value: "سجل تجاري",

    }, {
      label: "هوية",
      value: "هوية"
    }
  ]


  // define next vaildation
  const [IsVaildState, setIsVaildState] = useState(false)
  const signalParent = (isValid) => {
    setIsVaildState(isValid)
    props.signalIfValid(isValid)
  }

  useMemo(() => {
    if (clientType?.value.label && identityType?.value.label && instrumentImage?.name && email.value && email.isValid && phone && checkPhoneValidation) {
      const updatedUserData = {
        ...userData,
        instrumentImage: instrumentImage?.name,
        clientType: clientType.value.label,
        identityType: identityType.value.label,
        email: email.value,
        phone,
        taxCertificateNumber: taxCertificateNumber.value


      };
      setUserData(updatedUserData)

      // console.log(checkPhoneValidation)


      signalParent(true)
    } else {
      signalParent(false)
      const updatedUserData = {
        ...userData,
        instrumentImage: instrumentImage?.name,
        clientType: clientType.value.label,
        identityType: identityType.value.label,
        email: email.value,
        taxCertificateNumber: taxCertificateNumber.value,
        phone


      };
      setUserData(updatedUserData)

      // console.log(checkPhoneValidation)
    }

  }, [clientType?.value.label && identityType?.value.label && instrumentImage?.name && email.value && email.isValid && phone && checkPhoneValidation])

  useEffect(() => {

    signalParent(IsVaildState)


  }, [IsVaildState])


  return (
    <div>
      <Form className='row w-100 m-auto '>
        <div className="col-md-6 mb-4">
          <Select label={" نوع العميل"} {...clientType.bind} options={clientTypeRoles} mandatory />
        </div>
        <div className="col-md-6 mb-4">
          <Select label={" نوع الهوية  "} {...identityType.bind} options={identityTypeRoles} mandatory />

        </div>

        <div className='col-md-6 mb-4'>
          <Form.Group controlId="formBasicImage">
            <Form.Label className="d-flex gap-2 align-items-center">
              صورة الهويه
            </Form.Label>

            <Form.Control
              type="file"
              placeholder="صورة الهويه"
              name="imageFile"
              onChange={(e) => setInstrumentImage(e.currentTarget.files[0])}
            />


          </Form.Group>
        </div>

        <div className="col-md-6 mb-4">
          <Input label={"البريد الالكتروني"} {...email.bind} mandatory />

        </div>

        <div className="col-md-6 mb-4">

          <Form.Group controlId="formBasicImage">
            <Form.Label className="d-flex gap-2 align-items-center">
              رقم الجوال
            </Form.Label>
            <PhoneInput
              defaultCountry="sa"
              value={phone}
              className='w-100 h-100'
              onChange={(phone) => setPhone(phone)}
            />

          </Form.Group>






        </div>
        <div className="col-md-6 mb-4">
          <Input label={"رقم الشهادة الضربية"} {...taxCertificateNumber.bind} />






        </div>
      </Form >
    </div >
  )
}

export default DesignStepTwo
