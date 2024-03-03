
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { UseInput, UseCheckBox, UseMultiSelect, UseSelect } from '../../../../hooks'
import { Form } from 'react-bootstrap';
import Input from '../../../FormHandler/Input'
import Select from '../../../FormHandler/Select'
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





const ReviewStepTwo = (props) => {
    const { userData, setUserData } = useContext(multiStepContext)

    const clientType = UseSelect(
        userData?.clientType ? {
            value: userData?.clientType,
            label: userData?.clientType
        } : ""

        , "", true);
    const projectType = UseSelect(
        userData?.projectType ? {
            value: userData?.projectType,
            label: userData?.projectType
        } : ""


        , "", "Select");
    const email = UseInput(`${userData.email ? userData.email : ""}`, "email", true);
    const [phone, setPhone] = useState(`${userData?.phone ? userData.phone : ""}`)
    const [instrumentImage, setInstrumentImage] = useState(null);
    const taxCertificateNumber = UseInput(`${userData?.taxCertificateNumber ? userData.taxCertificateNumber : ""} `, "number", true)

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
    const projectTypeRoles = [
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
        if (clientType?.value.label && projectType?.value.label && instrumentImage?.name && email.value && email.isValid && phone) {
            const updatedUserData = {
                ...userData,
                instrumentImage: instrumentImage?.name,
                clientType: clientType.value.label,
                projectType: projectType.value.label,
                email: email.value,
                taxCertificateNumber:taxCertificateNumber.value,
                phone

            };
            setUserData(updatedUserData)
            signalParent(true)
            // console.log(userData)


        } else {
            signalParent(false)
            const updatedUserData = {
                ...userData,
                instrumentImage: instrumentImage?.name,
                clientType: clientType.value.label,
                projectType: projectType.value.label,
                email: email.value,
                taxCertificateNumber:taxCertificateNumber.value,
                phone


            };
            setUserData(updatedUserData)
            // console.log(userData)


        }
    }, [clientType?.value.label && projectType?.value.label && instrumentImage?.name && email.value && email.isValid && phone])
    useEffect(() => {
        signalParent(IsVaildState)
    }, [])

    return (
        <div className='review-step-two'>
            <Form className='row w-100 m-auto '>
                <div className="col-md-6 mb-4">
                    <Select label={" نوع العميل"} placeholder="ادخل نوع العميل .." {...clientType.bind} options={clientTypeRoles} mandatory />
                </div>
                <div className="col-md-6 mb-4">
                    <Select label={" نوع الهوية  "} placeholder="ادخل نوع الهوية .."   {...projectType.bind} options={projectTypeRoles} mandatory />

                </div>

                <div className='col-md-6 mb-4'>
                    <Form.Group controlId="formBasicImage">
                        <Form.Label className="d-flex gap-2 align-items-center">
                            صورة الهويه
                        </Form.Label>
                        <Form.Control
                            type="file"
                            required
                            placeholder="صورة الهويه"
                            name="imageFile"
                            onChange={(e) => setInstrumentImage(e.currentTarget.files[0])}
                        />
                    </Form.Group>
                </div>

                <div className="col-md-6 mb-4">
                    {/* <Input label={"رقم الجوال"} {...phone.bind} mandatory /> */}
                    <Form.Group className='w-100 h-100' controlId="formBasicImage">
                        <Form.Label className="d-flex gap-2 align-items-center">
                            رقم الجوال
                        </Form.Label>
                        <PhoneInput
                            defaultCountry="sa"
                            value={phone}

                            onChange={(phone) => setPhone(phone)}
                        />
                    </Form.Group>

                </div>

                <div className="col-md-6 mb-4">
                    <Input label={"البريد الالكتروني"} {...email.bind} mandatory />

                </div>
                <div className="col-md-6 mb-4">
                    <Input label={"رقم الشهادة الضربية"} {...taxCertificateNumber.bind} mandatory />






                </div>


            </Form>
        </div>
    )
}

export default ReviewStepTwo
