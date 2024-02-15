import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import "./EditProject.css"
import style from "./EditProject.module.css"
import { useState } from 'react'
import SaveButton from '../../../SaveButton'
import { useMemo } from 'react'
import Select from '../../../FormHandler/Select'
import Input from '../../../FormHandler/Input'
import { UseInput, UseSelect } from '../../../../hooks'
import DatePicker from 'react-datepicker';
import { useContext } from 'react'
import { showAddUpdateUser } from '../../../../Context/CheckAddUpdateUserVisability'
import { addAccountType } from '../../../../Context/AddAccountaing'

const EditProject = ({ editProject, setEditProject, setConfirmUpdate }) => {
    const [attachment, setAttachment] = useState(null)
    const [openAddAttachemnt, setOpenAddAttachemnt] = useState(false)
    const [projectsNotes, setProjectsNotes] = useState(false)

    // payment details

    let totalAmount = UseInput('', "positiveNumber", true)
    let paymentsNumber = UseInput('', "positiveNumber", true)
    let discountAmount = UseInput('', "", true)
    let initialNumber = UseInput('', "positiveNumber", true)
    let paymentType = UseSelect('', "Select", true)
    let paymentstatus = UseSelect('', "Select", true)
    let paymentNotes = UseInput('', "", true)
    const [paymentDate, setPaymentDate] = useState(null)
    const paymentTypeOptions = [
        {
            label: "مع العقد",
            value: "مع العقد"
        },
        {
            label: "مع اعتماد مخططات العمرانية",
            value: "مع اعتماد مخططات العمرانية"
        },
        {
            label: "مع انتهاء جميع المخططات",
            value: "مع انتهاء جميع المخططات"
        },
        {
            label: "مع إصدار الرخصة",
            value: "مع إصدار الرخصة"
        }
    ]
    const paymentStatusOptions = [
        {
            label: "تم الدفع",
            value: "تم الدفع"
        },
        {
            label: "لم يتم الدفع",
            value: "لم يتم الدفع"
        },

    ]





    const getProjectDetails = async () => {


    }







    const handleEditProject = (e) => {
        /// after editing Project
        e.preventDefault()
        setEditProject(false)
        setConfirmUpdate(true)

    }



    return (
        <div>
            {editProject && <Modal
                size="lg"
                show={editProject}
                onHide={() => setEditProject(false)}
                aria-labelledby=" example-modal-sizes-title-lg"
                className='systemModal  editProject  '
            >


              

                <div className='p-1 mx-auto my-3 edit-header
         w-50'>

                    <p className='golden   text-center'>تعديل فى المشروع</p>

                </div>
                <fieldset className='fieldBorder  p-2 w-90 mx-auto  '>
                    <legend className='text-center' >المرفقات</legend>
                    <div className='row'>
                        <div className='col-md-3'>

                            <div className={`addFileShape pointer my-3 bg-[#2B2B40] p-0  d-flex flex-column align-items-center justfiy-content-center`}>
                                <div className={` pointer bg-[#2B2B40]   d-flex flex-column align-items-center justfiy-content-center`}>

                                    <div onClick={() => { setOpenAddAttachemnt(true) }}>

                                        <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M1 8H8M8 8H15M8 8V15M8 8V1" stroke="#EFAA20" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <p className="text-sm mx-auto text-white">اضافة جديدة</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </fieldset>
                <fieldset className={` fieldBorder  w-90 mx-auto p-3 mt-4 `}>
                    <legend className='text-center'>  ارفاق الملاحظات </legend>

                    <p className='text-white'>ملاحظات المشروع</p>
                    <textarea onChange={(e) => { setProjectsNotes(e.target.value) }} className='form-control mt-3' placeholder='اكتب ملاحظات المشروع' rows={5} />
                </fieldset>

                <fieldset className={` fieldBorder  w-90 mx-auto p-3 mt-4 `}>
                    <legend className='text-center'>  معلومات الدفع  </legend>
                    <Form onSubmit={handleEditProject} >
                        <div className='row'>



                            <div className='col-md-4 mb-4'>
                                <Input {...totalAmount.bind} mandatory className={`${style.searchOrder} w-100`} label={"المبلغ الاجمالى"} />
                            </div>
                            <div className='col-md-4 mb-4'>
                                <Input {...paymentsNumber.bind} mandatory className={`${style.searchOrder} w-100`} label={"عدد الدفعات المتفق عليها "} />

                            </div>
                            <div className='col-md-4 mb-4'>
                                <Input {...discountAmount.bind} className={`${style.searchOrder} w-100`} label={"قيمة الخصم "} />

                            </div>
                            <div className='col-md-4 mb-4'>
                                <Input {...initialNumber.bind} mandatory className={`${style.searchOrder} w-100`} label={"القيمه الافتتاحية "} />

                            </div>

                            <div className='col-md-4 mb-4'>
                                <Select {...paymentType.bind} options={paymentTypeOptions} mandatory className={`${style.searchOrder} w-100`} label={" نوع الدفعة    "} />

                            </div>
                            <div className='col-md-4 mb-4'>
                                <Form.Group className='licenseDate-container ' controlId="licenseDate">
                                    <Form.Label className="d-flex gap-2 align-items-center">
                                        تاريخ الدفع
                                    </Form.Label>

                                    <DatePicker

                                        selected={paymentDate}
                                        placeholderText=" ادخل تاريخ الدفع "
                                        onChange={date => setPaymentDate(date)}
                                        dateFormat="dd-MM-yyyy"
                                        className='w-100 form-control'
                                    />





                                </Form.Group>

                            </div>

                            <div className='col-md-4 mb-4'>
                                <Select {...paymentstatus.bind} options={paymentStatusOptions} mandatory className={`${style.searchOrder} w-100`} placeholder="اختار الحالة" label={" الحالة"} />

                            </div>
                            <div className='col-md-12 mb-4'>
                                <Form.Group>

                                    <Form.Label className="d-flex gap-2 align-items-center">
                                        ملاحظات الدفع
                                    </Form.Label>

                                    <textarea {...paymentNotes.bind} placeholder='ملاحظات الدفع' className='form-control' rows={5} />
                                </Form.Group>

                            </div>







                        </div>
                        <div className=' d-flex my-2 justify-content-center'>

                            <Button
                                type='submit'
                                className='sumbmitAddUpdateUser'>
                                حفظ
                            </Button>
                        </div>
                    </Form>



                </fieldset>




            </Modal>}





        </div>



    )
}

export default EditProject