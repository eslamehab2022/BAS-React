
import { UseInput, UseSelect } from '../../../../hooks'
import { Button, Dropdown, DropdownButton, NavItem, Nav, NavDropdown } from 'react-bootstrap';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { MdMapsHomeWork } from "react-icons/md"
import { MdOutlineEngineering } from "react-icons/md"
import KSACites from "../../../KSACItes"
import Input from '../../../FormHandler/Input'
import Select from '../../../FormHandler/Select'
import { useNavigate } from "react-router-dom";

import { multiStepContext } from '../../../../Context/StepContext';
const DesignStepOne = (props) => {
    const { userData, setUserData } = useContext(multiStepContext)

    //define inupts

    const ownerName = UseInput(`${userData?.ownerName ? userData.ownerName : ""}`, "text", true);
    const buildingLocation = UseInput(`${userData?.buildingLocation ? userData.buildingLocation : ""}`, "text", true);
    const city = UseSelect(
        userData?.city ? {
            value: userData?.city,
            label: userData?.city
        } : ""



        , "", true);
    const Area = UseInput(`${userData?.Area ? userData.Area : ""}`, "text", true);
    const pieceNumber = UseInput(`${userData?.pieceNumber ? userData.pieceNumber : ""}`, "number", true);
    const ChartNumber = UseInput(`${userData?.ChartNumber ? userData.ChartNumber : ""}`, "ChartNumber", true);
    const [IsVaildState, setIsVaildState] = useState(false)
    const ProjectUse = UseSelect(
        userData?.subCategoryId ? {
            value: userData?.subCategoryId,
            label: userData?.subCategoryId
        } : ""

        , "Select", true);
    const serviceType = UseSelect(
        userData?.subServiceId ? {
            value: userData?.subServiceId,
            label: userData?.subServiceId
        } : ""

        , "Select", true);

    const serviceTypeRoles = [

        {
            label: " قرارات مساحيه",
            value: "قرارات مساحيه",
            options: [
                {
                    label: "قرار مساحي لكل الاغراض",
                    value: "قرار مساحي لكل الاغراض"
                },
                {
                    label: "قرار مساحي لغرض الدمج ",
                    value: "قرار مساحي لغرض الدمج "
                },

            ]
        },
        {
            label: "  رخص البناء",
            options: [
                {
                    label: "موفع جديد",
                    value: "موفع جديد"
                },

            ]
        },
    ];
























    const ProjectUseRoles = [
        {
            label: " سكني",
            options: [
                {
                    label: "سكني طبي",
                    value: "سكني طبي"
                },
                {
                    label: "سكني تجاري",
                    value: "سكني تجاري"
                },

            ]
        },
        {
            label: " تجاري",
            options: [
                {
                    label: "تجاري طبي",
                    value: "تجاري طبي"
                },
                {
                    label: "تجاري محلات",
                    value: "تجاري محلات"
                },

            ]
        },
    ];





    const signalParent = (isValid) => {
        setIsVaildState(isValid)
        props.signalIfValid(isValid)
    }


    useMemo(() => {
        if (ownerName.value && ownerName.isValid && buildingLocation.value && buildingLocation.isValid && city.value?.label && city.isValid && Area.value && Area.isValid && pieceNumber.value && pieceNumber.isValid && pieceNumber.value && pieceNumber.isValid && ChartNumber.value && ChartNumber.isValid && ProjectUse?.value.label && serviceType?.value.label) {
            // console.log("validation")
            const updatedUserData = {
                ...userData,
                ownerName: ownerName.value,
                buildingLocation: buildingLocation.value,
                city: city.value.label,
                Area: Area.value,
                pieceNumber: pieceNumber.value,
                ChartNumber: ChartNumber.value,
                categoryId: "سكني",
                subCategoryId: ProjectUse.value.label,
                serviceId: "تجاري",
                subServiceId: serviceType.value.label,



            };
            setUserData(updatedUserData)
            signalParent(true)

        } else {
            const updatedUserData = {
                ...userData,
                ownerName: ownerName.value,
                buildingLocation: buildingLocation.value,
                city: city.value.label,
                Area: Area.value,
                pieceNumber: pieceNumber.value,
                ChartNumber: ChartNumber.value,
                categoryId: "سكني",
                subCategoryId: ProjectUse.value.label,
                serviceId: "تجاري",
                subServiceId: serviceType.value.label,



            };
            setUserData(updatedUserData)
            signalParent(false)


        }
    }, [ownerName.value, ownerName.isValid, buildingLocation.value, buildingLocation.isValid, city.value?.label, city.isValid, Area.value, Area.isValid, pieceNumber.value, pieceNumber.isValid, pieceNumber.value, pieceNumber.isValid, ChartNumber.value, ChartNumber.isValid, ProjectUse?.value.label, serviceType?.value.label])




    useEffect(() => {
        signalParent(IsVaildState)
    }, [IsVaildState])
    return (
        <div className=" Design-Step-one">

            <Form className='row w-100 m-auto '>
                <div className=" col-md-4 mb-4">
                    <Input label={"اسم المالك"} {...ownerName.bind} mandatory />
                </div>
                <div className=" col-md-4 mb-4">
                    <Input label={" موقع المشروع "} {...buildingLocation.bind} mandatory />

                </div>
                <div className=" col-md-4 mb-4">
                    <Select label={" المدينة"}   {...city.bind} options={KSACites} mandatory />

                </div>

                <div className=" col-md-4 mb-4">
                    <Input label={" الحي"} {...Area.bind} mandatory />

                </div>

                <div className=" col-md-4 mb-4">
                    <Input label={" رقم القطعة"} {...pieceNumber.bind} mandatory />

                </div>

                <div className=" col-md-4 mb-4">
                    <Input label={" رقم المخطط"}   {...ChartNumber.bind} mandatory />
                </div>

                <div className="col-md-6 mb-4">

                    <Select name="project use " placeholder={"اختر..."} label={" استخدام المشروع"} {...ProjectUse.bind} className="w-100" options={ProjectUseRoles} />




                </div>
                <div className="col-md-6 mb-4">
                    <Select label={" نوع الخدمة"} {...serviceType.bind} options={serviceTypeRoles} mandatory />
                </div>

            </Form>



        </div>
    )
}

export default DesignStepOne
