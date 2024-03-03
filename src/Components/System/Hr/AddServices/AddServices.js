import React, { useContext, useState } from 'react'
import { AddHrType } from '../../../../Context/AddHr'
import { Form, Modal } from 'react-bootstrap'
import SaveButton from '../../../SaveButton'
import Select from '../../../FormHandler/Select'
import FormDatePicker from '../../../FormDatePicker'
import AddAttachment from '../../AddAttachment'
import { UseInput, UseSelect } from '../../../../hooks'
import EmployeesManagment from '../../../../Pages/System/Hr/EmployeesManagment/EmployeesManagment'



const AddServices = () => {
    const { openHr, setOpenHr, HrType, setHrType } = useContext(AddHrType)
    const EmployeeName = UseInput('', '', true)
    const dependEmployee = UseInput('', '', true)
    const servicesType = UseSelect("", "")
    const [servicesDate, setServicesDate] = useState('')
    const [attachment, setAttachment] = useState('')
    const allUsers = [{
        value: "اسلام  ايهاب",
        label: "اسلام  ايهاب"
    }, {
        value: "حبيب محمد",
        label: "حبيب محمد"
    },


    ]

    const servicesTypeRoles = [
        {
            value: "بيان راتب  ",
            label: "بيان راتب  "
        }, {
            value: "طلب توظيف  ",
            label: " طلب توظيف"
        }, {
            value: "مخالصة ",
            label: "مخالصة"
        },
    ]

    const handleAddServices = () => {
        // after addServices
        // console.log("form submmited")
        setOpenHr(false)
    }


    return (
        <div>
            {openHr &&
                <Modal
                    className='systemModal addHoliday   '
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    onHide={() => setOpenHr(false)}
                    show={openHr}
                >


                    <Modal.Body className=' p-2'>

                        <div className='edit-header p-1'>


                            <p className='text-white'>طلب خدمة</p>
                        </div>



                        <fieldset className='displayFieldSet my-2    p-3 w-90 mx-auto'>

                            <legend className='text-center text-white'>مخصصة الى  </legend>
                            <div className='col-md-6'>
                                <Select label="اسم الموظف" {...EmployeeName.bind} OptionbackgroundColor={"#414162"} options={allUsers} />



                            </div>

                        </fieldset>
                        <fieldset className='displayFieldSet my-2    p-3 w-90 mx-auto'>
                            <legend className='text-center text-white'>
                                تفاصيل الاجازاة  </legend>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <Select label="نوع الخدمة" {...servicesType.bind} placeholder="اختار نوع الخدمة " OptionbackgroundColor={"#414162"} options={servicesTypeRoles} />

                                </div>
                                <div className='col-md-6'>
                                    <Form.Group>
                                        <Form.Label>
                                            اختار تاريخ الخدمة
                                        </Form.Label>
                                        <FormDatePicker
                                            placeholderText={'تاريخ الخدمة'}
                                            date={servicesDate}
                                            setDate={setServicesDate}
                                        />
                                    </Form.Group>


                                </div>


                            </div>





                        </fieldset>
                        <fieldset className='displayFieldSet my-2    p-3 w-90 mx-auto'>
                            <legend className='text-center text-white'>    موجة الى  </legend>
                            <Select label="تعتمد من " {...dependEmployee.bind} placeholder="اختر" className="w-50" OptionbackgroundColor={"#414162"} options={allUsers} />



                        </fieldset>
                        <fieldset className='displayFieldSet my-2    p-3 w-90 mx-auto'>

                            <div className='row'>
                                <AddAttachment attachment={attachment} setAttachment={setAttachment} />


                            </div>

                        </fieldset>



                        <div className='my-3' onClick={() => {
                            handleAddServices()
                        }} >

                            <SaveButton />
                        </div>



                    </Modal.Body>


                </Modal >
            }


        </div>
    )
}

export default AddServices
