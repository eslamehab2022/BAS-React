import React, { useEffect, useMemo, useState } from "react";
import Input from "../../../FormHandler/Input";
import { useContext } from "react";
import { multiStepContext } from "../../../../Context/StepContext";
import { UseInput, UseSelect } from "../../../../hooks";
import KSACites from "../../../KSACItes";
import { Form, FormGroup } from "react-bootstrap";
import ReactSelectAsync from "react-select/async";
import { toast } from "react-toastify";
import { getAllCategories } from "../../../../helper/fetchers/Categories";
import { Data } from "@react-google-maps/api";

import { FormControl, MenuItem } from "@mui/material";
import { InputLabel } from "../../../../Pages/System/PlanModel/components/InputLabel";
import { Category } from "@mui/icons-material";
import Select from "../../../FormHandler/Select";
import { getAllServices } from "../../../../helper/fetchers/Services";
export const AddProjectStepOne = (props) => {
  // context inputs

  // const { pagePath } = props;
  const {
    userData,
    setUserData,
    selectProjectType,
    setSelectedProjectType,
    
  } = useContext(multiStepContext);
  //define inupts

  const ownerName = UseInput(
    `${userData?.ownerName ? userData.ownerName : ""}`,
    "text",
    true
  );
  const projectName = UseInput(
    `${userData?.projectName ? userData.projectName : ""}`,
    "text",
    true
  );
  const buildingLocation = UseInput(
    `${userData?.buildingLocation ? userData.buildingLocation : ""}`,
    "text",
    true
  );
  const city = UseSelect(
    userData?.city
      ? {
          value: userData?.city,
          label: userData?.city,
        }
      : "",
    "",
    true
  );
  const area = UseInput(`${userData?.area ? userData.area : ""}`, "text", true);
  const pieceNumber = UseInput(
    `${userData?.pieceNumber ? userData.pieceNumber : ""}`,
    "pieceNumber",
    true
  );
  const chartNumber = UseInput(
    `${userData?.chartNumber ? userData.chartNumber : ""}`,
    "chartNumber",
    true
  );
  const [projectCategory, setProjectCategory] = useState();
  const [projectServices, setProjectServices] = useState();
  const [categoryId, setCategoryId] = useState();
  const [subcategoryId, setSubcategoryId] = useState();

  const handleCategories = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const selectedCategoryId = selectedOption.getAttribute("categoryId");
    const selectedSubcategoryId = e.target.value;

    setCategoryId(selectedCategoryId);
    setSubcategoryId(selectedSubcategoryId);
  };
  const [servicesId, setServiceId] = useState();
  const [subservicesId, setsubServicesId] = useState();
  const handleServices = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const selctedServicesId = selectedOption.getAttribute("servicesId");
    const selectedSubservices = e.target.value;
    setServiceId(selctedServicesId);
    setsubServicesId(selectedSubservices);
    console.log(servicesId);
    console.log(setsubServicesId);
  };
  const [projectType, setProjectType] = useState(
    userData.projectType
      ? {
          value: userData?.projectType,
          label: userData?.projectType,
        }
      : ""
  );
  //Check vaildation

  const [IsVaildState, setIsVaildState] = useState(false);
  const signalParent = (isValid) => {
    setIsVaildState(isValid);
    props.signalIfValid(isValid);
  };

  // checking Design Vaildation
  useMemo(() => {
    if (
      ownerName.value &&
      ownerName.isValid &&
      projectName.value &&
      projectName.isValid &&
      buildingLocation.value &&
      buildingLocation.isValid &&
      city.value?.label &&
      area.value &&
      area.isValid &&
      pieceNumber.value &&
      pieceNumber.isValid &&
      chartNumber.value &&
      chartNumber.isValid &&
      projectType === 1 &&
      categoryId &&
      subcategoryId &&
      servicesId &&
      subservicesId
    ) {
      console.log("valid");
      const updatedUserData = {
        ownerName: ownerName?.value,
        buildingLocation: buildingLocation?.value,
        city: city?.value?.label,
        area: area?.value,
        pieceNumber: pieceNumber?.value,
        chartNumber: chartNumber?.value,
        projectType,
        categoryId,
        subcategoryId,
        servicesId,
        subservicesId,
        projectName: projectName.value,
      };

      setUserData(updatedUserData);
      signalParent(true);
    } else {
      console.log("not valid");

      const updatedUserData = {
        ownerName: ownerName.value,
        buildingLocation: buildingLocation.value,
        city: city?.value?.label,
        area: area?.value,
        pieceNumber: pieceNumber?.value,
        chartNumber: chartNumber?.value,
        projectType,
        categoryId,
        subcategoryId,
        servicesId,
        subservicesId,
        projectName: projectName.value,
      };
      setUserData(updatedUserData);
      signalParent(false);
    }
  }, [
    ownerName.value,
    ownerName.isValid,
    buildingLocation.value,
    buildingLocation.isValid,
    city.value?.label,
    city.isValid,
    area.value,
    area.isValid,
    pieceNumber.value,
    pieceNumber.isValid,
    pieceNumber.value,
    pieceNumber.isValid,
    chartNumber.value,
    chartNumber.isValid,
    categoryId,
    subcategoryId,
    servicesId,
    subservicesId,
    projectName.value,
    projectType,
    ,
  ]);

  // checking review Vaildation
  useMemo(() => {
    if (
      ownerName.value &&
      ownerName.isValid &&
      buildingLocation.value &&
      buildingLocation.isValid &&
      city.value?.label &&
      city.isValid &&
      area.value &&
      area.isValid &&
      pieceNumber.value &&
      pieceNumber.isValid &&
      chartNumber.value &&
      chartNumber.isValid &&
      projectName.value &&
      projectName.isValid &&
      projectType === 2
    ) {
      console.log("validation");
      const updatedUserData = {
        ownerName: ownerName.value,
        projectName: projectName.value,
        buildingLocation: buildingLocation.value,
        city: city?.value.label,
        area: area.value,
        pieceNumber: pieceNumber.value,
        chartNumber: chartNumber.value,
        projectType,
      };
      setUserData(updatedUserData);
      signalParent(true);
    } else {
      console.log("not vaild");
      const updatedUserData = {
        ...userData,
        ownerName: ownerName.value,
        buildingLocation: buildingLocation.value,
        city: city.value.label,
        area: area.value,
        pieceNumber: pieceNumber.value,
        chartNumber: chartNumber.value,
        projectType,
        projectName: projectName.value,
      };
      setUserData(updatedUserData);
      signalParent(false);
    }
  }, [
    ownerName.value,
    ownerName.isValid,
    projectName.value,
    projectName.isValid,
    buildingLocation.value,
    buildingLocation.isValid,
    city.value?.label,
    city.isValid,
    area.value,
    area.isValid,
    pieceNumber.value,
    pieceNumber.isValid,
    chartNumber.value,
    chartNumber.isValid,
    projectType,
  ]);
  const getCategories = async () => {
    try {
      const { data } = await getAllCategories();
      console.log(data);
      if (data?.sucsses) {
        setProjectCategory(data.category);
      } else {
        console.log("Data retrieval failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const getServices = async () => {
    try {
      const { data } = await getAllServices();
      if (data?.success) {
        setProjectServices(data.services);
      } else {
        console.log("Data retrieval failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    signalParent(IsVaildState);
  }, [IsVaildState]);
  useEffect(() => {
    getCategories();
    getServices();
  }, []);
  useEffect(() => {
    console.log(userData);
  }, []);

  return (
    <fieldset className="addProjectStep mx-auto">
      <legend className="text-center">اضافة بيانات المشروع </legend>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <div className="row      p-3">
          <div className=" col-md-6 mb-4">
            <Input
              placeholder=" اخل اسم المالك"
              className="w-100 h-[37px]"
              label={"اسم المالك"}
              {...ownerName.bind}
              mandatory
            />
          </div>
          <div className=" col-md-6 mb-4">
            <Input
              placeholder=" اخل اسم المشروع"
              className="w-100 h-[37px]"
              label={"اسم المشروع"}
              {...projectName.bind}
              mandatory
            />
          </div>
          <div className=" col-md-8 mb-4">
            <Input
              placeholder=" ادخل موقع المشروع  "
              label={" موقع المشروع "}
              {...buildingLocation.bind}
              className="h-[37px]"
              mandatory
            />
          </div>
          <div className=" col-md-4 mb-4">
            <Select
              label={" المدينة"}
              placeholder="اخل اسم المدينة"
              OptionbackgroundColor="#414162"
              {...city.bind}
              options={KSACites}
              mandatory
            />
          </div>

          <div className=" col-md-4    mb-4">
            <Input
              className="h-[37px]"
              placeholder="ادخل اسم الحى"
              label={" الحي"}
              {...area.bind}
              mandatory
            />
          </div>

          <div className=" col-md-4 mb-4">
            <Input
              className="h-[37px]"
              placeholder="اخل رقم القطعة"
              label={" رقم القطعة"}
              {...pieceNumber.bind}
              mandatory
            />
          </div>

          <div className=" col-md-4 mb-4">
            <Input
              className="h-[37px]"
              placeholder="اخل رقم المخطط"
              label={" رقم المخطط"}
              {...chartNumber.bind}
              mandatory
            />
          </div>
          <div className=" col-md-4 mb-4">
            <FormControl fullWidth>
              <Select
                label={"نوع المشروع"}
                options={[
                  {
                    value: 1,
                    label: "تصميم",
                  },
                  {
                    value: 2,
                    label: "الاشراف علي التنفيذ",
                  },
                ]}
                placeholder="اختر نوع المشروع"
                onChange={(e) => {
                  setSelectedProjectType(e.value);
                  setProjectType(e.value);
                }}
              />
            </FormControl>
          </div>
          {projectType === 1 ? (
            <>
              <div className=" col-md-4 mb-4">
                <FormGroup className="flex flex-col gap-3">
                  <Form.Label>استخدام المشروع</Form.Label>
                  <select
                    name="projectUse"
                    id="projectUse"
                    label="Grouping"
                    className="h-[37px] bg-[#2B2B40] text-white !border-transparent hover:!border-transparent focus:!border-transparent"
                    onChange={handleCategories}
                  >
                    {Array.isArray(projectCategory) &&
                    projectCategory.length > 0 ? (
                      projectCategory.map(({ name, _id, subcategories }) => (
                        <optgroup
                          key={_id}
                          id={_id}
                          className="bg-[#2B2B40] text-[#fff]"
                          label={name}
                        >
                          {subcategories.length > 0 &&
                            subcategories.map(({ _id, name, categoryId }) => (
                              <option
                                key={_id}
                                categoryId={categoryId}
                                value={_id}
                                className="h-[37px] px-2"
                              >
                                {name}
                              </option>
                            ))}
                        </optgroup>
                      ))
                    ) : (
                      <option value="">No Categories</option>
                    )}
                  </select>
                </FormGroup>
              </div>

              <div className=" col-md-4 mb-4">
                <FormGroup className="flex flex-col gap-3">
                  <Form.Label> نوع الخدمة</Form.Label>
                  <select
                    name="projectUse"
                    id="projectUse"
                    label="Grouping"
                    className="h-[37px] bg-[#2B2B40] text-white !border-transparent hover:!border-transparent focus:!border-transparent"
                    onChange={handleServices}
                  >
                    {Array.isArray(projectServices) &&
                    projectServices.length > 0 ? (
                      projectServices.map(({ name, _id, subservices }) => (
                        <optgroup
                          key={_id}
                          id={_id}
                          className="bg-[#2B2B40] text-[#fff]"
                          label={name}
                        >
                          {subservices.length > 0 &&
                            subservices.map(({ _id, name, serviceId }) => (
                              <option
                                key={_id}
                                servicesId={serviceId}
                                value={_id}
                                className="h-[37px] px-2"
                              >
                                {name}
                              </option>
                            ))}
                        </optgroup>
                      ))
                    ) : (
                      <option value="">No Services</option>
                    )}
                  </select>
                </FormGroup>
              </div>
            </>
          ) : null}
        </div>
      </FormControl>
    </fieldset>
  );
};
