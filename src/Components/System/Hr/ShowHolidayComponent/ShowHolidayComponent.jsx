import React from 'react'
import { Modal } from 'react-bootstrap'

import "./ShowHolidayComponent.css"
import { Checkbox } from '@mui/material'
import SaveButton from '../../../SaveButton'


const ShowHolidayComponent = ({ ShowHoliday, setShowHoliday }) => {
    return (
        <div>
            {ShowHoliday &&
                <Modal
                    className='systemModal'
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    onHide={() => setShowHoliday(false)}
                    show={ShowHoliday}
                >


                    <Modal.Body className=' p-2'>

                        <div className='edit-header p-1'>


                            <p className='text-white'>طلب اجازة</p>
                        </div>

                        <fieldset className='displayFieldSet my-2    p-3 w-90 mx-auto'>
                            <legend className='text-center text-white'>مخصصة الى  </legend>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <p className='text-white'> اسم الموظف :
                                        <span className='main-text p-2'>
                                            حبيب

                                        </span>
                                    </p>
                                </div>
                                <div className='col-md-6'>
                                    <p className='text-white'> الكود الوظيفى :

                                        <span className='main-text p-2'>
                                            1234
                                        </span>
                                    </p>
                                </div>
                            </div>

                        </fieldset>
                        <fieldset className='displayFieldSet my-2    p-3 w-90 mx-auto'>
                            <legend className='text-center text-white'>
                                تفاصيل الاجازاة  </legend>
                            <div className='row'>
                                <div className='col-md-12 mb-4'>
                                    <p className='text-white'> نوع الاجازة  :
                                        <span className='main-text p-2'>
                                            :  مرضي

                                        </span>
                                    </p>
                                </div>
                                <div className='col-md-4  mb-4'>
                                    <p className='text-white'> الكود الوظيفى :

                                        <span className='main-text p-2'>
                                            1234
                                        </span>
                                    </p>
                                </div>
                                <div className='col-md-4  mb-4'>
                                    <p className='text-white'> الكود الوظيفى :

                                        <span className='main-text p-2'>
                                            1234
                                        </span>
                                    </p>
                                </div>
                                <div className='col-md-4  mb-4'>
                                    <p className='text-white'> الكود الوظيفى :

                                        <span className='main-text p-2'>
                                            1234
                                        </span>
                                    </p>
                                </div>
                                <div className='col-md-4  mb-4'>
                                    <p className='text-white'>
                                        <Checkbox className='text-white' />

                                        <span className='main-text p-2'>
                                            اجازة مستحقة
                                        </span>
                                    </p>
                                </div>

                            </div>

                        </fieldset>
                        <fieldset className='displayFieldSet my-2    p-3 w-90 mx-auto'>
                            <legend className='text-center text-white'>    موجة الى  </legend>
                            <div className='row'>
                                <div className='col-md-6 mb-4'>
                                    <p className='text-white'> تعتمد من :
                                        <span className='main-text p-2'>
                                            اسلام ايهاب

                                        </span>
                                    </p>
                                </div>
                                <div className='col-md-6  mb-4'>
                                    <p className='text-white'> الكود الوظيفى :

                                        <span className='main-text p-2'>
                                            1234
                                        </span>
                                    </p>
                                </div>

                            </div>

                        </fieldset>
                        <fieldset className='displayFieldSet my-2    p-3 w-90 mx-auto'>

                            <div className='row'>
                                <div className='col-md-12 mb-4'>

                                    <div className='w-[93px] pointer h-[61px]'>
                                        <div className="w-[93px] h-[61px] rounded-lg d-flex justify-content-center  align-items-center bg-[#151521]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <g clipPath="url(#clip0_2532_26139)">
                                                    <path d="M21.7422 26.4258H4.75C4.42639 26.4258 4.16406 26.1634 4.16406 25.8398V0.644531C4.16406 0.320918 4.42639 0.0585938 4.75 0.0585938H17.6406C17.796 0.0585938 17.945 0.120352 18.0549 0.230215L22.1565 4.33178C22.2664 4.44164 22.3281 4.5907 22.3281 4.74609V11.7773C22.3281 12.101 22.0657 12.3633 21.7422 12.3633C21.4186 12.3633 21.1562 12.101 21.1562 11.7773V4.98879L17.3979 1.23047H5.33594V25.2539H21.1562V22.3242C21.1562 22.0007 21.4186 21.7383 21.7422 21.7383C22.0657 21.7383 22.3281 22.0007 22.3281 22.3242V25.8398C22.3281 26.1634 22.0657 26.4258 21.7422 26.4258Z" fill="white" />
                                                    <path d="M17.6406 29.9414H1.23438C0.910762 29.9414 0.648438 29.679 0.648438 29.3555V5.33203C0.648438 5.00842 0.910762 4.74609 1.23438 4.74609H4.75C5.07361 4.74609 5.33594 5.00842 5.33594 5.33203C5.33594 5.65564 5.07361 5.91797 4.75 5.91797H1.82031V28.7695H17.0547V25.8398C17.0547 25.5163 17.3171 25.2539 17.6406 25.2539C17.9642 25.2539 18.2266 25.5163 18.2266 25.8398V29.3555C18.2266 29.679 17.9642 29.9414 17.6406 29.9414ZM21.7422 5.33203H17.6406C17.3171 5.33203 17.0547 5.06971 17.0547 4.74609V0.644531C17.0547 0.320918 17.3171 0.0585938 17.6406 0.0585938C17.9642 0.0585938 18.2266 0.320918 18.2266 0.644531V4.16016H21.7422C22.0657 4.16016 22.3281 4.42248 22.3281 4.74609C22.3281 5.06971 22.0657 5.33203 21.7422 5.33203Z" fill="white" />
                                                    <path d="M28.7734 22.9102H10.6094C10.2858 22.9102 10.0234 22.6478 10.0234 22.3242V11.7773C10.0234 11.4537 10.2858 11.1914 10.6094 11.1914H28.7734C29.097 11.1914 29.3594 11.4537 29.3594 11.7773V22.3242C29.3594 22.6478 29.097 22.9102 28.7734 22.9102ZM11.1953 21.7383H28.1875V12.3633H11.1953V21.7383Z" fill="white" />
                                                    <path d="M12.9531 20.5664C12.6295 20.5664 12.3672 20.304 12.3672 19.9805V14.1211C12.3672 13.7975 12.6295 13.5352 12.9531 13.5352H14.418C15.5488 13.5352 16.4688 14.4551 16.4688 15.5859C16.4688 16.7167 15.5488 17.6367 14.418 17.6367H13.5391V19.9805C13.5391 20.304 13.2767 20.5664 12.9531 20.5664ZM13.5391 16.4648H14.418C14.9026 16.4648 15.2969 16.0706 15.2969 15.5859C15.2969 15.1013 14.9026 14.707 14.418 14.707H13.5391V16.4648ZM19.2227 20.5664H18.2266C17.903 20.5664 17.6406 20.304 17.6406 19.9805V14.1211C17.6406 13.7975 17.903 13.5352 18.2266 13.5352H19.2227C20.9351 13.5352 22.3281 14.9283 22.3281 16.6406V17.4609C22.3281 19.1733 20.9351 20.5664 19.2227 20.5664ZM18.8125 19.3945H19.2227C20.2888 19.3945 21.1563 18.5271 21.1563 17.4609V16.6406C21.1563 15.5745 20.2888 14.707 19.2227 14.707H18.8125V19.3945ZM24.0859 20.5664C23.7624 20.5664 23.5 20.304 23.5 19.9805V14.1211C23.5 13.7975 23.7624 13.5352 24.0859 13.5352H26.4297C26.7532 13.5352 27.0156 13.7975 27.0156 14.1211C27.0156 14.4447 26.7532 14.707 26.4297 14.707H24.6719V19.9805C24.6719 20.304 24.4095 20.5664 24.0859 20.5664Z" fill="white" />
                                                    <path d="M25.8438 17.6367H24.0859C23.7624 17.6367 23.5 17.3743 23.5 17.0508C23.5 16.7272 23.7624 16.4648 24.0859 16.4648H25.8438C26.1673 16.4648 26.4297 16.7272 26.4297 17.0508C26.4297 17.3743 26.1673 17.6367 25.8438 17.6367ZM19.3984 10.0195H7.09375C6.77014 10.0195 6.50781 9.75721 6.50781 9.43359C6.50781 9.10998 6.77014 8.84766 7.09375 8.84766H19.3984C19.722 8.84766 19.9844 9.10998 19.9844 9.43359C19.9844 9.75721 19.722 10.0195 19.3984 10.0195ZM19.3984 7.67578H7.09375C6.77014 7.67578 6.50781 7.41346 6.50781 7.08984C6.50781 6.76623 6.77014 6.50391 7.09375 6.50391H19.3984C19.722 6.50391 19.9844 6.76623 19.9844 7.08984C19.9844 7.41346 19.722 7.67578 19.3984 7.67578ZM12.9531 5.33203H7.09375C6.77014 5.33203 6.50781 5.06971 6.50781 4.74609C6.50781 4.42248 6.77014 4.16016 7.09375 4.16016H12.9531C13.2767 4.16016 13.5391 4.42248 13.5391 4.74609C13.5391 5.06971 13.2767 5.33203 12.9531 5.33203Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2532_26139">
                                                        <rect width="30" height="30" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <p className='text-white text-center '>طلب اجازة</p>
                                    </div>

                                </div>


                            </div>

                        </fieldset>



                        <div className='my-3' onClick={() => { setShowHoliday(false) }}>

                            <SaveButton />
                        </div>


                    </Modal.Body>


                </Modal >
            }

        </div>
    )
}

export default ShowHolidayComponent