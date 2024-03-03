import React, { useContext, useEffect, useMemo, useState } from 'react'
import { UseInput, UseCheckBox, UseMultiSelect, UseSelect } from '../../../../hooks'
import { Form, Image, agencyAttachments } from 'react-bootstrap';
import Input from '../../../FormHandler/Input'
import Select from '../../../FormHandler/Select'
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from "react-datepicker"
import es from 'date-fns/locale/es';
import { MdOutlineDateRange } from "react-icons/md"
import { multiStepContext } from '../../../../Context/StepContext'; 
import Progress from '../../../Progress';
const ReviewStepThree = (props) => {
    const {Submitted, userData, setUserData ,submitReview   } = useContext(multiStepContext)

    //define variabules 
    const licenseNumber = UseInput(`${userData.licenseNumber ? userData.licenseNumber : ""}`, "number", true);
    const licenseDeed = UseInput(`${userData.licenseDeed ? userData.licenseDeed : ""}`, "number", true);
    const [licenseDate, setlicenseDate] = useState(null)
    const [licenseAttachments, setlicenseAttachments] = useState(null);
    const [notes, setNotes] = useState("")

    //checking for submit button 
    const [userDataVaild, setUserDataVaild] = useState(false)
    const [IsVaildState, setIsVaildState] = useState(false)

    const signalParent = (isValid) => {
        setIsVaildState(isValid)
        props.signalIfValid(isValid)
    }


    useMemo(() => {
        if (licenseNumber.isValid && licenseNumber.value && licenseDeed.isValid && licenseDeed.value && licenseDate && licenseAttachments?.name) {
            // console.log("vaild")
            signalParent(true)
            const updatedUserData = {
                ...userData,
                licenseNumber: licenseNumber?.value,
                licenseDeed: licenseDeed?.value,
                licenseDate: licenseDate?.value,
                licenseAttachments: licenseAttachments?.name,
                notes: notes?.value,


            };
            setUserData(updatedUserData)
            setUserDataVaild(true)

        } else {
            const updatedUserData = {
                ...userData,
                licenseNumber: licenseNumber?.value,
                licenseDeed: licenseDeed?.value,
                licenseDate: licenseDate?.value,
                licenseAttachments: licenseAttachments?.name,
                notes: notes?.value,


            };
            setUserData(updatedUserData)
            signalParent(false)
            setUserDataVaild(false)


        }
    }, [licenseNumber.isValid && licenseNumber.value && licenseDeed.isValid && licenseDeed.value && licenseDate && licenseAttachments?.name])
    useEffect(() => {
        signalParent(IsVaildState)
    }, [])

    // console.log(licenseDate)
    return (
        <div className='step-three'>
            <Form className='row w-100 m-auto '>
                <div className="col-md-6 mb-4">
                    <Input placeholder="ادخل رقم الرخصة" label={" رقم الرخصة "} {...licenseNumber.bind} mandatory />
                </div>
                <div className="col-md-6 mb-4">
                    <Input placeholder="ادخل سند الرخصة" label={" سند الرخصة  "} {...licenseDeed.bind} mandatory />
                </div>

                <div className='col-md-6  mb-4'>
                    <div>
                        <Form.Group className='licenseDate-container' controlId="licenseDate">
                            <Form.Label className="d-flex gap-2 align-items-center">
                                تاريخ الرخصة
                            </Form.Label>

                            <DatePicker

                                selected={licenseDate}
                                placeholderText=" ادخل تاريخ الرخصة "
                                onChange={date => setlicenseDate(date)}
                                dateFormat="dd-MM-yyyy"
                                className='w-100 form-control'
                            />





                        </Form.Group>
                    </div>

                </div>



                <div className='col-md-6 mb-4'>
                    <Form.Group controlId="formBasicImage">
                        <Form.Label className="d-flex gap-2 align-items-center">
                            تحميل المستندات

                        </Form.Label>
                        <Form.Control
                            type="file"
                            placeholder=" تحمبل المستندات"
                            name="imageFile"
                            height="100px"
                            onChange={(e) => setlicenseAttachments(e.currentTarget.files[0])}
                        />
                    </Form.Group>
                </div>
                <div className='col-md-6 mb-4'>
                    <Form.Label className="d-flex gap-2 align-items-center">
                        ملاحظاتك

                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="ادخل ملاحظاتك ..."
                        style={{ height: '100px' }}
                        onChange={(e) => setNotes(e.target.value)}


                    />
                </div>
                <div className='col-md-6 d-flex justify-content-center flex-column    mb-1'>
                    <button disabled={!userDataVaild} onClick={(e) => {
                        e.preventDefault()
                        submitReview()
                        
                    }} className='   submit-poper border-0  '> {Submitted ? <Progress isSmall /> : "تاكيد الطلب"} </button>
                </div>


            </Form>
        </div>
    )
}

export default ReviewStepThree
