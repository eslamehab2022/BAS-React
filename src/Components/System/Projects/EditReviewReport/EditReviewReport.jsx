
import { Form, Modal } from "react-bootstrap"
import { UseInput } from "../../../../hooks"
import "../AddProject.css"
import "./EditReviewReport.css"
import { useForm } from "react-hook-form"
import Input from "../../../FormHandler/Input"
import FormDatePicker from "../../../FormDatePicker"
import { useContext, useEffect, useState } from "react"
import AddAttachment from "../../AddAttachment"
import SaveButton from "../../../SaveButton"
import { AddReportType } from "../../../../Context/AddReport"
import { showAddUpdateUser } from "../../../../Context/CheckAddUpdateUserVisability"

const EditReviewReport = ({ editReport, setEditReport }) => {
    const searchProject = UseInput("", "")
    const { openReport, setOpenReport, reportType, setReportType } = useContext(AddReportType)
    const { showAddUserModel, setShowAddUserModel } = useContext(showAddUpdateUser)

    // handle addReviewReport 
    const [reportDate, setReportDate] = useState('')
    const [attachment, setAttachment] = useState('')
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const handleEditProject = (data) => {
        // console.log(data)
        // after adding a project
        setReportType('')
        setShowAddUserModel(false)
    }
    useEffect(() => {
        // console.log("edit report is open")
    }, [])
    return (
        <>
            {editReport && <Modal

                size="lg"
                show={editReport}
                onHide={() => setEditReport(false)}
                aria-labelledby=" example-modal-sizes-title-lg"
                className='systemModal  editProject  '
            >
                <div className="Editproject p-4">

                    <p className="text-xl text-[#EFAA20] ">
                        تعديل التقرير
                    </p>



                    <fieldset className=' fieldBorder mb-4 p-3'>
                        <legend className='text-center'> معلومات عامة </legend>
                        <div className='row'>
                            <div className='col-md-6 mb-3'>
                                <p className='text-white'>

                                    اسم المالك :<span className='main-text'> BSA</span>
                                </p>
                            </div>
                            <div className='col-md-6 mb-3'>
                                <p className='text-white'>

                                    نوع المشروع :  <span className='main-text'> الاشراف على التنفيذ</span>
                                </p>
                            </div>
                            <div className='col-md-6 mb-3'>
                                <p className='text-white'>

                                    نوع العميل :  <span className='main-text'>  فردي </span>
                                </p>
                            </div>
                            <div className='col-md-6 mb-3'>
                                <p className='text-white'>

                                    العنوان :  <span className='main-text'>   الرياض – حي الملقا </span>
                                </p>
                            </div>
                        </div>

                    </fieldset>
                    <fieldset className=' fieldBorder mb-4 p-3'>
                        <legend className='text-center'> معلومات التقرير </legend>
                        <div className='row'>
                            <div className='col-md-6 mb-3'>
                                <p className='text-white'>

                                    اسم المشروع :<span className='main-text'> BSA</span>
                                </p>
                            </div>
                            <div className='col-md-6 mb-3'>
                                <p className='text-white'>

                                    الامانه :  <span className='main-text'>  أمانة منطقة الرياض </span>
                                </p>
                            </div>
                            <div className='col-md-6 mb-3'>
                                <p className='text-white'>

                                    البلدية :  <span className='main-text'>   بلدية شمال الرياض </span>
                                </p>
                            </div>
                            <div className='col-md-6 mb-3'>
                                <p className='text-white'>

                                    الحي :  <span className='main-text'>    حي الملقا </span>
                                </p>
                            </div>
                            <div className='col-md-6 mb-3'>
                                <p className='text-white'>

                                    العنوان :  <span className='main-text'>     الرياض – حي الملقا – تقاطع شارع الدهناء مع الأفضلي
                                    </span>
                                </p>
                            </div>
                        </div>

                    </fieldset>
                    <Form onSubmit={handleSubmit(handleEditProject)}>
                        <fieldset className=' fieldBorder mb-4 p-3'>
                            <legend className='text-center'> تفاصيل التقرير  </legend>
                            <div className='row'>
                                <div className='col-md-4 mb-3'>
                                    <Form.Group>
                                        <Form.Label>
                                            اسم المستفيد
                                        </Form.Label>
                                        <input className="form-control"  {...register("beneficiaryName")} />


                                    </Form.Group>
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <Form.Group>
                                        <Form.Label>
                                            اسم التقرير
                                        </Form.Label>
                                        <input className="form-control"  {...register("reportName")} />


                                    </Form.Group>


                                </div>
                                <div className='col-md-4 mb-3'>
                                    <Form.Group>
                                        <Form.Label>
                                            رقم الرخصة
                                        </Form.Label>
                                        <input className="form-control"  {...register("licenseNumber")} />


                                    </Form.Group>


                                </div>
                                <div className='col-md-4 mb-3'>
                                    <Form.Group>
                                        <Form.Label>
                                            تاريخ التقرير
                                        </Form.Label>

                                        <FormDatePicker
                                            date={reportDate}
                                            setDate={setReportDate}
                                            placeholderText={"ادخل تاريخ التقرير"}


                                        />



                                    </Form.Group>


                                </div>
                                <div className='col-md-4 mb-3'>
                                    <Form.Group>
                                        <Form.Label>
                                            الوصف
                                        </Form.Label>
                                        <input className="form-control"  {...register("reportDate")} />


                                    </Form.Group>
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <Form.Group>
                                        <Form.Label>
                                            نوع البناء
                                        </Form.Label>
                                        <input className="form-control"  {...register("constructiontType")} />


                                    </Form.Group>
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <Form.Group>
                                        <Form.Label>
                                            الاستشاري المشرف
                                        </Form.Label>
                                        <input className="form-control"  {...register("supervisingConsultant")} />


                                    </Form.Group>
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <Form.Group>
                                        <Form.Label>
                                            عدد الادوار
                                        </Form.Label>
                                        <input className="form-control"  {...register("numberFloors")} />


                                    </Form.Group>
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <Form.Group>
                                        <Form.Label>
                                            مقاول البناء
                                        </Form.Label>
                                        <input className="form-control"  {...register("construction")} />


                                    </Form.Group>
                                </div>

                                <div className='col-md-4 mb-3'>
                                    <Form.Group>
                                        <Form.Label>
                                            مكتب المصمم
                                        </Form.Label>
                                        <input className="form-control"  {...register("designedOffice")} />


                                    </Form.Group>
                                </div>
                                <div className='col-md-12 mb-3'>
                                    <Form.Group>
                                        <Form.Label>
                                            ملاحظات الموقع
                                        </Form.Label>
                                        <textarea cols={5} rows={5} className="form-control"  {...register("siteNotes")} />


                                    </Form.Group>
                                </div>
                            </div>



                        </fieldset>
                        <fieldset className=' fieldBorder mb-4 p-3'>
                            <legend className='text-center'>  المرفقات </legend>
                            <div className='row'>
                                <div className='col-md-6 mb-3'>
                                    <AddAttachment attachment={attachment} setAttachment={setAttachment} />
                                </div>

                            </div>


                        </fieldset>
                        <fieldset className=' fieldBorder mb-4 p-3'>
                            <legend className='text-center'>  ارفاق الملاحظات </legend>
                            <div className='row'>

                                <div className='col-md-12 mb-3'>
                                    <Form.Group>
                                        <Form.Label>
                                            التوصيات
                                        </Form.Label>
                                        <textarea className="form-control"
                                            cols={5}
                                            rows={5}

                                            {...register("recommendation")} />


                                    </Form.Group>

                                </div>

                                <div className='col-md-12 mb-3'>
                                    <Form.Group>
                                        <Form.Label>
                                            المخططات
                                        </Form.Label>
                                        <textarea
                                            cols={5}
                                            rows={5}
                                            className="form-control"

                                            {...register("Charts")} />


                                    </Form.Group>

                                </div>
                            </div>


                        </fieldset>
                        <div
                        onClick={()=>{
                            setEditReport(false)
                        }}
                        >
                            <SaveButton />
                        </div>

                    </Form>




                </div>


            </Modal>}


        </>
    )
}

export default EditReviewReport
