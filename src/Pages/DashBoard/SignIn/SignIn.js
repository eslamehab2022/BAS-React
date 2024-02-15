import React, { useEffect, useState } from 'react'
import "./SignIn.css"
import { Dropdown, Form } from 'react-bootstrap'
import Input from '../../../Components/FormHandler/Input'
import Select from '../../../Components/FormHandler/Select'
import SubmitButton from '../../../Components/Client/Dashboard/SubmitButton/SubmitButton'
import { PhoneInput } from 'react-international-phone'
import KSACites from '../../../Components/KSACItes'
import { Link } from 'react-router-dom'
import LoginWithFacebook from '../../../Components/Client/Dashboard/lognWithSocial/LoginWithFacebook'
import LoginWithGoogle from '../../../Components/Client/Dashboard/lognWithSocial/LoginWithGoogle'
import Image from '../../../Components/Image'
const SignIn = () => {

    const [birthDate, setBirthDate] = useState(null)
    const [phone, setPhone] = useState("")
    const gender = [
        {
            label: "ذكر",
            value: "ذكر"
        },
        {
            label: "انثي",
            value: "انثي"
        }
    ]












    return <div className='signIn-container  row m-0  p-0  w-100 '>
        <div className='col-md-6   '>
            <div className='item position-relative'>
                <Dropdown className='position-absolute  end-5 top-0 pointer'>
                    <Dropdown.Toggle style={{ backgroundColor: "unset !important", borderColor: "unset" }} className='d-flex  check-lang align-items-center' id="dropdown-basic">
                        <div className=' saudiFlagicon-container px-2 align-items-sm-center   '>
                            <Image src='../saudiFlagicon.png' alt='saudiFlagicon logo' width={40} height={40} />

                        </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item className='d-flex justify-between mx-3 '>
                            <Image src="../saudi.png" className='ms-3 rounded' alt="saudi flag" width={30} height={20} />
                            <span >العربية (KSA)  </span>
                        </Dropdown.Item>
                        <Dropdown.Item className='d-flex justify-between mx-3 '>
                            <Image src="../usa.png" className='ms-3 rounded' alt="USA flag" width={30} height={20} />
                            <span>English (USA)</span>
                        </Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>

                <div className='mt-5 d-flex  logo-container justify-content-center'>
                    <Link to="/" >    <Image src='../logo.jpg' alt=' logo' width={350} height={180} /></Link>

                </div>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <h2 className='fs-2'> مرحباً مجدداً</h2>
                    <p className='main-text'> تسجيل دخول</p>
                </div>
                <div className='d-flex my-3 gap-4 mx-auto w-35 justify-content-between'>

                    <LoginWithFacebook />
                    <LoginWithGoogle />


                </div>

                <p className='text-center line-style position-relative my-5 ' style={{
                    color: "#878787",
                    width:"250px",
                    margin:"auto",
                    fontSize: "16px",
                    fontStyle: "normal",
                    lineHeight: " 14.5px",
                }}>او يمكنك التسجيل عبر البريد الالكتروني</p>
                <Form className='px-3 d-flex flex-column justify-content-center align-items-center   ' >
                    <div className='row   w-75 sm-w-100 m-auto'>
                        <div className='col-12 d-flex justify-content-center'>
                            <Input height='47px' width='400px' label={"البريد الالكتروني"} placeholder="habeebnasr4@gmail.com" className='mb-4' mandatory />
                        </div>
                        <div className='col-12 d-flex justify-content-center'>
                            <Input height='47px' width='400px' label={" كلمة المرور"} placeholder="اكتب كلمة المرور" className='mb-3' mandatory />
                        </div>

                        <div className='d-flex flex-col-sm align-items-sm-center   col-12 my-2 justify-content-evenly' >
                            <Link to="/Dashboard/ForgetPassword" ><p style={{ color: "#6A0411 !important" }} >  نسيت كلمة المرور ؟ </p></Link>
                            <div className='d-flex  '>
                                <p className='ms-2' style={{ fontSize: "18px" }}>ابقى متصلاً</p>
                                <label className="toggle-switch">
                                    <input type="checkbox" />
                                    <div className="toggle-switch-background">
                                        <div className="toggle-switch-handle"></div>
                                    </div>
                                </label>



                            </div>

                        </div>

                        <div className='mt-5 d-flex justify-content-center  '>
                            <SubmitButton className="mt-5" text={"تسجيل دخول"} />
                        </div>
                    </div>

                    <div className='d-flex justify-content-center mt-5   '>   <p style={{ fontSize: "18px" }}> ليس لديك حساب؟     <span style={{ color: "#6A0411" }}><Link to="/Dashboard/SignUp">سجل الان</Link ><span /></span></p></div>
                </Form>


            </div>
        </div>
        <div className='col-md-6 gif-bg p-0 m-0  '>
            <div className='item bg-initial-video position-relative h-100 p-0 m-0 w-100'>

                <div className='layer position-absolute top-0 bottom-0 end-0 start-0 d-flex justify-content-center align-items-center '>
                    <Image src='../movmentlogo.gif' alt='movment logo' width={400} height={250} />
                </div>
            </div>
        </div>


    </div>
}

export default SignIn