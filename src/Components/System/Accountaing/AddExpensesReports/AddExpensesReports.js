import React, { useContext } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import style from './AddExpensesReports.module.css';

import { useParams } from 'react-router-dom';
import Input from '../../../FormHandler/Input';
import Select from '../../../FormHandler/Select';
import { useState } from 'react';
import DatePicker from "react-datepicker"
import SaveButton from '../../../SaveButton';
import { addAccountType } from '../../../../Context/AddAccountaing';
import { UseInput, UseSelect } from '../../../../hooks';
import AddAttachment from '../../AddAttachment';

const AddExpensesReports = () => {
    const { accountaingType, setAccountaingType, openAddAccountant, setOpenAddAccountant } = useContext(addAccountType)




    // define variabules
    const clauseName = UseSelect("", "")
    const [description, setDescription] = useState('')
    const [deliverDate, setDeliverDate] = useState('')
    const amount = UseInput("", "", true)
    const totalAmount = UseInput("", "", true)
    const finalAmount = UseInput("", "", true)
    const [attachment, setAttachment] = useState(null)


    // console.log(attachment)
    const clauseOptions = [{
        label: "اساسيه",
        value: " اساسيه"
    }, {
        label: "ايجارات",
        value: " ايجارات"
    }]


    const handleAddExpenses = () => {
        setOpenAddAccountant(false)
    }


    return (
        <div className={`AddExpensesReports p-3`}>





            <p className='text-xl  my-3 golden'>إضافة  مصاريف جديدة</p>
            <fieldset className={`${style.description} mt-3`}>
                <legend className='text-center'>الوصف</legend>
                <div className='row p-3'>
                    <div className='col-md-6 mb-4'>
                        <Select {...clauseName.bind} OptionbackgroundColor={"#2B2B40"} options={clauseOptions} placeholder="اختار البند" label="1- البند" />

                    </div>
                    <div className='col-md-12 mb-4'>
                        <Form.Group>
                            <Form.Label>

                                الوصف
                            </Form.Label>
                            <textarea onChange={(e) => { setDescription(e.target.value) }} className='form-control' placeholder='اكتب الوصف المرفق ...' rows={5} cols={30} />


                        </Form.Group>

                    </div>
                    <div className='col-md-6   mb-4'>

                        <Form.Group className='d-flex flex-column'>
                            <Form.Label>
                                تاريخ الاستحقاق
                            </Form.Label>
                            <DatePicker

                                selected={deliverDate}
                                placeholderText=" ادخل تاريخ الرخصة "
                                onChange={date => setDeliverDate(date)}
                                dateFormat="dd-MM-yyyy"
                                className='w-100 form-control'
                            />

                        </Form.Group>


                    </div>
                    <div className='col-md-4 mb-4'>
                        <Input {...amount.bind} placeholder={"ادخل المبلغ"} label={"المبلغ"} />

                    </div>
                    <div className='col-md-6 mb-4'>
                        <Input {...totalAmount.bind} className='w-100' placeholder={"1000"} label={"اجمالى المبلغ"} />

                    </div>
                    <div className='col-md-6 mb-4'>
                        <Input {...finalAmount.bind} placeholder={""} label={"  اجمالى المبلغ كتابة"} />

                    </div>

                </div>

            </fieldset>
            <fieldset className={`${style.Attachment} mt-4 p-2`}>
                <legend className='text-center'>الملف المرفق    </legend>
                <AddAttachment attachment={attachment} setAttachment={setAttachment} />

            </fieldset>
            <div className='d-flex my-5 w-90  justify-content-end'>
                <Button
                    onClick={() => {
                        handleAddExpenses()

                    }}

                    className='sumbmitAddUpdateUser'>حفظ</Button>
            </div>

        </div>
    )
}

export default AddExpensesReports