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
  const { userData, setUserData } = useContext(multiStepContext);
  const { pagePath } = props;
  const { checkProjectType, setCheckProjectType } =
    useContext(multiStepContext);
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
  const [projectType, setProjectType] = useState(
    userData.projectType ? userData.projectType : ""
  );

  const [projectCategory, setProjectCategory] = useState();
  const [projectServices, setProjectServices] = useState();

  const ProjectUse = UseSelect(
    userData?.subCategoryId
      ? {
          value: userData?.subCategoryId,
          label: userData?.subCategoryId,
        }
      : "",

    "Select",
    true
  );
  const serviceType = UseSelect(
    // userData?.subServiceId ? {
    //     value: userData?.subServiceId,
    //     label: userData?.subServiceId
    // } : ""

    "",
    "Select",
    true
  );

  const serviceTypeRoles = [
    {
      label: " قرارات مساحيه",
      value: "قرارات مساحيه",
      options: [
        {
          label: "قرار مساحي لكل الاغراض",
          value: "قرار مساحي لكل الاغراض",
        },
        {
          label: "قرار مساحي لغرض الدمج ",
          value: "قرار مساحي لغرض الدمج ",
        },
      ],
    },
    {
      label: "  رخص البناء",
      options: [
        {
          label: "موفع جديد",
          value: "موفع جديد",
        },
      ],
    },
  ];

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
      buildingLocation.value &&
      buildingLocation.isValid &&
      city.value?.label &&
      city.isValid &&
      area.value &&
      area.isValid &&
      pieceNumber.value &&
      pieceNumber.isValid &&
      pieceNumber.value &&
      pieceNumber.isValid &&
      chartNumber.value &&
      chartNumber.isValid &&
      ProjectUse.value.label &&
      ProjectUse.isValid &&
      serviceType.value.label &&
      serviceType.isValid &&
      projectName.value &&
      projectName.isValid &&
      projectType === "تصميم"
    ) {
      console.log("validation");
      const updatedUserData = {
        ...userData,
        ownerName: ownerName?.value,
        buildingLocation: buildingLocation?.value,
        city: city?.value?.label,
        area: area.value,
        pieceNumber: pieceNumber?.value,
        chartNumber: chartNumber?.value,
        projectType,
        categoryId: "سكني",
        subCategoryId: ProjectUse?.value.label,
        serviceId: "تجاري",
        projectName: projectName.value,
        subServiceId: serviceType?.value.label,
      };
      setUserData(updatedUserData);
      signalParent(true);
    } else {
      const updatedUserData = {
        ...userData,
        ownerName: ownerName.value,
        buildingLocation: buildingLocation.value,
        city: city?.value.label,
        area: area?.value,
        pieceNumber: pieceNumber?.value,
        chartNumber: chartNumber?.value,
        projectType,
        categoryId: "سكني",
        subCategoryId: ProjectUse?.value.label,
        serviceId: "تجاري",
        subServiceId: serviceType?.value.label,
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
    ProjectUse?.value.label,
    serviceType?.value.label,
    projectName.value,
    projectType.value,
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
      projectType === "الاشراف علي التنفيذ"
    ) {
      console.log("validation");
      const updatedUserData = {
        ...userData,
        ownerName: ownerName.value,
        buildingLocation: buildingLocation.value,
        city: city?.value,
        area: area.value,
        pieceNumber: pieceNumber.value,
        chartNumber: chartNumber.value,
        projectType,
        projectName: projectName.value,
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
    projectType,
    projectName.value,
    projectName.isValid,
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
      console.log(data);
      if (data?.sucsses) {
        // setProjectCategory(data.category);
      } else {
        console.log("Data retrieval failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    getCategories();
    signalParent(IsVaildState);
  }, [IsVaildState]);
  useEffect(() => {
    console.log(projectCategory);
  }, [projectCategory]);

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
                    value: "تصميم",
                    label: "تصميم",
                  },
                  {
                    value: "اشراف علي التنفيذ",
                    label: "اشراف علي التنفيذ",
                  },
                ]}
                placeholder="اختر نوع المشروع"
                onChange={(e) => {
                  setProjectType(e.value);
                  setCheckProjectType(e.value);
                }}
              />
            </FormControl>
          </div>
          {projectType === "تصميم" ? (
            <>
              <div className=" col-md-4 mb-4">
                <FormGroup className="flex flex-col gap-3">
                  <InputLabel
                    htmlFor="project-type-select"
                    label={"استخدام المشروع"}
                  />
                  <select
                    name="projectUse"
                    id="projectUse"
                    label="Grouping"
                    className="h-[37px] bg-[#2B2B40] text-white !border-transparent hover:!border-transparent focus:!border-transparent"
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
                              <option key={_id} value={categoryId}>
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
                <Select
                  label={"  نوع الخدمة "}
                  OptionbackgroundColor="#414162"
                  {...serviceType.bind}
                  options={serviceTypeRoles}
                  mandatory
                />
              </div>
            </>
          ) : (
            projectType === "الاشراف علي التنفيذ" && null
          )}
        </div>
      </FormControl>
    </fieldset>
  );
};
