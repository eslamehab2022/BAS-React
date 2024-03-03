import React, { useContext, useEffect, useMemo, useState } from 'react'

import { UseInput, UseCheckBox, UseMultiSelect, UseSelect } from '../../../../hooks'
import { Button, Form, Image } from 'react-bootstrap';
import Input from '../../../FormHandler/Input'
import Select from '../../../FormHandler/Select'
import { multiStepContext } from '../../../../Context/StepContext';
import Progress from '../../../Progress';

const DesignStepThree = (props) => {
  const { userData, setUserData, submitDesign, Submitted } = useContext(multiStepContext)

  const agent = UseInput(`${userData.agent ? userData.agent : ""}`, "text", true);
  const agencyNumber = UseInput(`${userData.agencyNumber ? userData.agencyNumber : ""}`, "number", true);
  const [agencyAttachments, setAgencyAttachments] = useState(null)
  const instrumentNumber = UseInput(`${userData.instrumentNumber ? userData.instrumentNumber : ""}`, "number", true);
  const [InstrumentAttachments, setInstrumentAttachments] = useState(null);

  const [userDataVaild, setUserDataVaild] = useState(false)

  const [IsVaildState, setIsVaildState] = useState(false)
  const signalParent = (isValid) => {
    setIsVaildState(isValid)
    props.signalIfValid(isValid)
  }

  // console.log(userData)

  useMemo(() => {
    if (agent?.value && agent?.isValid && agencyNumber?.value && agencyNumber?.isValid && agencyNumber?.value && agencyAttachments?.name && instrumentNumber.value && instrumentNumber.isValid && InstrumentAttachments?.name) {
      const updatedUserData = {
        ...userData,
        agent: agent.value,
        agencyNumber: agencyNumber?.value,
        agencyAttachments: agencyAttachments?.name,
        instrumentNumber: instrumentNumber?.value,
        InstrumentAttachments: InstrumentAttachments?.name,


      };
      setUserData(updatedUserData)
      setUserDataVaild(true)

      // console.log(userData)

    } else {

      const updatedUserData = {
        ...userData,
        agent: agent.value,
        agencyNumber: agencyNumber?.value,
        agencyAttachments: agencyAttachments?.name,
        instrumentNumber: instrumentNumber?.value,
        InstrumentAttachments: InstrumentAttachments?.name,


      };


      setUserData(updatedUserData)
      setUserDataVaild(false)
      signalParent(false)
    }
    // console.log(userDataVaild)
  }, [agent?.value && agent?.isValid && agencyNumber?.value && agencyNumber?.isValid && agencyNumber?.value && agencyAttachments?.name && instrumentNumber.value && instrumentNumber.isValid && InstrumentAttachments?.name])

  useEffect(() => {
    signalParent(IsVaildState)
  }, [IsVaildState])


  return (
    <div className='step-three'>
      <Form className=' row w-100 m-auto '>
        <div className="col-md-6 mb-4">
          <Input label={" الوكيل "} {...agent.bind} mandatory />
        </div>
        <div className="col-md-6 mb-4">
          <Input label={" رقم الوكيل "} {...agencyNumber.bind} mandatory />

        </div>

        <div className='col-md-6 mb-4'>
          <Form.Group controlId="formBasicImage">
            <Form.Label className="d-flex gap-2 align-items-center">
              ارفاق الوكالة
            </Form.Label>
            <Form.Control
              type="file"
              placeholder="صورة الهويه"
              name="imageFile"
              onChange={(e) => setAgencyAttachments(e.currentTarget.files[0])}
            />
          </Form.Group>
        </div>



        <div className="col-md-6 mb-4">
          <Input label={"رقم الصك"} {...instrumentNumber.bind} mandatory />

        </div>
        <div className='col-md-6 mb-4'>
          <Form.Group controlId="formBasicImage">
            <Form.Label className="d-flex gap-2 align-items-center">
              صورة الصك
            </Form.Label>
            <Form.Control
              type="file"
              placeholder="صورة الصك"
              name="imageFile"
              onChange={(e) => setInstrumentAttachments(e.currentTarget.files[0])}
            />
          </Form.Group>
        </div>
        <div className='col-md-6 mb-4'>
          <button disabled={!userDataVaild} onClick={(e) => {
            e.preventDefault()
            try {
              submitDesign()

            } catch (error) {
              // console.log(error)

            }



          }} className=' w-100 mt-4 submit-poper border-0 disabled '> {Submitted ? <Progress isSmall /> : "تاكيد الطلب"} </button>
        </div>

      </Form>

    </div>
  )
}

export default DesignStepThree
