import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { UseInput, UseMultiSelect, UseSelect } from '../../../../hooks';

import { Form } from 'react-bootstrap';
import KSACites from "../../../KSACItes"
import Input from '../../../FormHandler/Input'
import Select from '../../../FormHandler/Select'
import { multiStepContext } from '../../../../Context/StepContext';


export default function ReviewStepOne(props) {
    const {userData, setUserData}= useContext(multiStepContext)
    const ownerName = UseInput(`${userData?.ownerName ? userData.ownerName : ""}`, "text", true);
    const buildingLocation = UseInput(`${userData?.buildingLocation ? userData.buildingLocation : ""}`, "text", true);
    const city = UseSelect(
        userData?.city ?{
            value: userData?.city,
            label: userData?.city
        } :""
        
        
        
        ,"Select", true);
    const Area = UseInput(`${userData?.Area ? userData.Area : ""}`, "text", true);
    const pieceNumber = UseInput(`${userData?.pieceNumber ? userData.pieceNumber : ""}`, "number", true);
    const ChartNumber = UseInput(`${userData?.ChartNumber ? userData.ChartNumber : ""}`, "ChartNumber", true);
    const [IsVaildState, setIsVaildState] = useState(false)
    const signalParent = (isValid) => {
        setIsVaildState(isValid)
        props.signalIfValid(isValid)
    }

    useMemo(() => {
        if (ownerName.value && ownerName.isValid && buildingLocation.value && buildingLocation.isValid && city.value?.label && city.isValid && Area.value && Area.isValid && pieceNumber.value && pieceNumber.isValid && pieceNumber.value && pieceNumber.isValid && ChartNumber.value && ChartNumber.isValid) {
            const updatedUserData = {
                ...userData,
                ownerName: ownerName.value,
                buildingLocation: buildingLocation.value,
                city: city.value.label,
                Area: Area.value,
                pieceNumber: pieceNumber.value,
                ChartNumber: ChartNumber.value,


            };
            setUserData(updatedUserData)
            // console.log("vaild")
            // console.log(userData)
            signalParent(true)
        } else {
            const updatedUserData = {
                ...userData,
                ownerName: ownerName.value,
                buildingLocation: buildingLocation.value,
                city: city.value.label,
                Area: Area.value,
                pieceNumber: pieceNumber.value,
                ChartNumber: ChartNumber.value



            };
            setUserData(updatedUserData)
            // console.log(userData)
            signalParent(false)



        }
    }, [ownerName.value, ownerName.isValid, buildingLocation.value, buildingLocation.isValid, city.value.label, city.isValid, Area.value, Area.isValid, pieceNumber.value, pieceNumber.isValid, pieceNumber.value, pieceNumber.isValid, ChartNumber.value, ChartNumber.isValid])
    useEffect(() => {
        signalParent(IsVaildState)
    }, [IsVaildState])


    return (
        <div>
            <Form className='row w-100 m-auto '>
                <div className="  col-md-6 mb-4">
                    <Input label={"اسم المالك"}

                        {...ownerName.bind} mandatory

                    />

                </div>
                <div className="  col-md-6 mb-4">
                    <Input label={" موقع المشروع "}  {...buildingLocation.bind} mandatory />

                </div>
                <div className="  col-md-6 mb-4">
                    <Select label={" المدينة"} options={KSACites}    {...city.bind} mandatory />

                </div>

                <div className="  col-md-6 mb-4">
                    <Input label={" الحي"}    {...Area.bind} mandatory />

                </div>

                <div className="  col-md-6 mb-4">
                    <Input label={" رقم القطعة"}    {...pieceNumber.bind} mandatory />

                </div>

                <div className="  col-md-6 mb-4">
                    <Input label={" رقم المخطط"}  {...ChartNumber.bind} mandatory />
                </div>


            </Form>
        </div>
    )
}


