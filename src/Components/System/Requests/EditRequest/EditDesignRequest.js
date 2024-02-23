import React, { Fragment, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./index.css";
import Input from "../../../FormHandler/Input";
import KSACites from "../../../KSACItes";
import { MenuItem, ListSubheader } from "@mui/material";
import { UseInput, UseSelect } from "../../../../hooks";
import Select from "../../../FormHandler/Select";

import { useState } from "react";
import { ConfirmPopup } from "primereact/confirmpopup";
import ConfirmPoper from "../../ConfirmPoper";
import { FormModal } from "../../../../Pages/System/PlanModel/components/FormModal";
import CustomSelect from "../../../../Pages/System/PlanModel/components/CustomSelect";
import { CiSearch } from "react-icons/ci";
import { InputLabel } from "../../../../Pages/System/PlanModel/components/InputLabel";
import { getDesignRequestsWithid } from "../../../../helper/fetchers/Requests";
import { toast } from "react-toastify";
import Progress from "../../../Progress";
import { Controller, useForm } from "react-hook-form";
import { getAllCategories } from "../../../../helper/fetchers/Categories";
import { getAllServices } from "../../../../helper/fetchers/Services";

const EditDesignRequest = ({
  editRequest,
  setEditRequest,
  setConfirmPoper,
  handleClose,
  id,
}) => {
  const [ConfirmUpdate, setConfirmUpdate] = useState(false);
  const [request, setRequest] = useState();

  const clientTypeRoles = [
    {
      label: "فردي",
      value: 3,
    },
    {
      label: " شركه  او مؤسسة",
      value: 2,
    },
    {
      label: "  حكومي او مستثمر ",
      value: 1,
    },
  ];
  const projectTypeRoles = [
    {
      label: "سجل تجاري",
      value: 2,
    },
    {
      label: "هوية",
      value: 1,
    },
  ];

  //
  const [clientType, setClientType] = useState();
  const [city, setCity] = useState();
  const [identityType, setIdentityType] = useState();
  const [instrumentImage, setInstrumentImage] = useState();
  const [agencyAttachments, setAgencyAttachments] = useState(null);
  const [InstrumentAttachments, setInstrumentAttachments] = useState(null);
// category 
  const [projectCategory,setProjectCategory]= useState()
  const [categoryId,setCategoryId]= useState()
  const [subcategoryId,setSubcategoryId]= useState()
// services
  const [servicesId, setServiceId] = useState();
  const [subservicesId, setsubServicesId] = useState();
  const [projectServices,setProjectServices]= useState()
  
  

  const {
    register,
    handleSubmit,
    control,
    watch,

    formState: { errors, isValid },
  } = useForm();

  // get request with id
  const getRequestWithid = async () => {
    try {
      const { data } = await getDesignRequestsWithid(id);
      console.log(data);

      if (data?.request) {
        setRequest(data?.request);
      } else {
        console.log("Data retrieval failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  // get categories
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
  // get services
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
  // handle categories
  const handleCategories = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const selectedCategoryId = selectedOption.getAttribute("categoryId");
    const selectedSubcategoryId = e.target.value;
    setCategoryId(selectedCategoryId);
    setSubcategoryId(selectedSubcategoryId);
  };
  // handle services
  const handleServices = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const selctedServicesId = selectedOption.getAttribute("servicesId");
    const selectedSubservices = e.target.value;
    setServiceId(selctedServicesId);
    setsubServicesId(selectedSubservices);
    console.log(servicesId);
    console.log(setsubServicesId);
  };

  const [isDataValid, setIsDataValid] = useState();

  // useEffect(() => {
  //   if (
  //     isValid &&
  //     categoryId &&
  //     subCategoryId &&
  //     servicesId &&
  //     subservicesId &&
  //     clientType &&
  //     city &&
  //     identityType &&
  //     instrumentImage &&
  //     agencyAttachments &&
  //     InstrumentAttachments
  //   ) {
  //     setIsDataValid(false);
  //   } else {
  //     setIsDataValid(true);
  //   }
  // }, [
  //   isValid,
  //   categoryId,
  //   subcategoryId,
  //   servicesId,
  //   subservicesId,
  //   clientType,
  //   city,
  //   identityType,
  //   instrumentImage,
  //   agencyAttachments,
  //   InstrumentAttachments,
  // ]);

  const handleUpdate = (data) => {
    console.log(data);
    console.log(categoryId);
    console.log(subcategoryId);
    console.log(servicesId);
    console.log(subservicesId);
  };
  useEffect(() => {
    getRequestWithid();
    console.log(id);
  }, [id]);
  useEffect(() => {
    getCategories();
    getServices();
  }, []);

  return (
    <div>
      <Modal
        size="lg"
        show={editRequest}
        onHide={handleClose}
        aria-labelledby=" example-modal-sizes-title-lg"
        className="systemModal"
        contentClassName="scrollbar-none"
      >
        <div
          className="p-1 mx-auto my-3 edit-header
         w-50"
        >
          <p className="golden   text-center">تعديل فى طلب التصميم</p>
        </div>

        <div className="mx-4">
          {request ? (
            <Form
              onSubmit={handleSubmit(handleUpdate)}
              className="row flex-col gap-4 w-100 m-auto "
            >
              <FormModal title={"بيانات المشروع"}>
                <div className="row w-100">
                  <div className=" col-md-7 mb-4">
                    <Form.Group>
                      <Form.Label>اسم المالك</Form.Label>
                      <input
                        className="w-100   form-control "
                        defaultValue={request.ownerName}
                        mandatory
                        {...register("ownerName", {
                          pattern: /^([A-Za-z ]+|[\u0600-\u06FF ]+)$/,
                          minLength: 5,
                        })}
                      />
                      {errors.ownerName && (
                        <span>{errors.ownerName.message}</span>
                      )}
                    </Form.Group>
                  </div>
                  <div className=" col-md-6 mb-4">
                    <Form.Group>
                      <Form.Label>اسم المشروع</Form.Label>
                      <input
                        className="w-100   form-control "
                        defaultValue={request.projectName}
                        mandatory
                        {...register("projectName", {
                          pattern: /^([A-Za-z ]+|[\u0600-\u06FF ]+)$/,
                          minLength: 5,
                          required: "this field is required",
                        })}
                      />
                      {errors.projectName && (
                        <span>{errors.projectName.message}</span>
                      )}
                    </Form.Group>
                  </div>
                  <div className=" col-md-6 mb-4">
                    <Form.Group>
                      <Form.Label>موقع المشروع </Form.Label>
                      <input
                        className="w-100   form-control "
                        defaultValue={request.buildingLocation}
                        mandatory
                        {...register("buildingLocation", {
                          pattern: /^([A-Za-z ]+|[\u0600-\u06FF ]+)$/,
                          minLength: 5,
                          required: "this field is required",
                        })}
                      />
                      {errors.buildingLocation && (
                        <span>{errors.buildingLocation.message}</span>
                      )}
                    </Form.Group>
                  </div>
                  <div className=" col-md-6 mb-4">
                    <InputLabel
                      mandatory
                      size={16}
                      id="city"
                      label={"المدينة"}
                    />

                    <CustomSelect
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                      defaultValue={request.city}
                    >
                      <MenuItem disabled>
                        <div className="w-full flex justify-between">
                          <span>بحث ...</span>
                          <CiSearch />
                        </div>
                      </MenuItem>
                      {KSACites.map(({ arLabel, value }, index) => (
                        <MenuItem key={index} value={value}>
                          {arLabel}
                        </MenuItem>
                      ))}
                    </CustomSelect>
                  </div>

                  <div className=" col-md-6 mb-4">
                    <Form.Group>
                      <InputLabel
                        mandatory
                        size={16}
                        id="city"
                        label={"الحي "}
                      />

                      <input
                        className="w-100   form-control "
                        defaultValue={request.area}
                        mandatory
                        {...register("area", {
                          pattern: /^([A-Za-z ]+|[\u0600-\u06FF ]+)$/,
                          minLength: 5,
                          required: "this field is required",
                        })}
                      />
                      {errors.area && <span>{errors.area.message}</span>}
                    </Form.Group>
                  </div>

                  <div className=" col-md-6 mb-4">
                    <Form.Group>
                      <InputLabel
                        mandatory
                        size={16}
                        id="city"
                        label={"  رقم القطعة"}
                      />
                      <input
                        className="w-100   form-control "
                        defaultValue={request.pieceNumber}
                        mandatory
                        {...register("pieceNumber", {
                          pattern: /^([A-Za-z ]+|[\u0600-\u06FF ]+)$/,
                          minLength: 5,
                          required: "this field is required",
                        })}
                      />
                      {errors.pieceNumber && (
                        <span>{errors.pieceNumber.message}</span>
                      )}
                    </Form.Group>
                  </div>

                  <div className=" col-md-6 mb-4">
                    <Form.Group>
                      <InputLabel
                        mandatory
                        size={16}
                        id="city"
                        label={"  رقم المخطط"}
                      />
                      <input
                        className="w-100   form-control "
                        defaultValue={request.chartNumber}
                        mandatory
                        {...register("chartNumber", {
                          pattern: /^[\u0600-\u06FF]\/\d+$/,
                          required: "this field is required",
                        })}
                      />

                      {errors.chartNumber && (
                        <span>{errors.chartNumber.message}</span>
                      )}
                    </Form.Group>
                  </div>

                  <div className="col-md-6 mb-4">
                    <InputLabel
                      mandatory
                      size={16}
                      id="city"
                      label={"استخدام المشروع"}
                    />
                    <Form.Group className="flex flex-col gap-3">
                      <select
                        name="projectUse"
                        id="projectUse"
                        label="Grouping"
                        className="h-[37px] bg-[#2B2B40] text-white !border-transparent hover:!border-transparent focus:!border-transparent"
                        onChange={handleCategories}
                      >
                        {Array.isArray(projectCategory) &&
                        projectCategory.length > 0 ? (
                          projectCategory.map(
                            ({ name, _id, subcategories }) => (
                              <optgroup
                                key={_id}
                                id={_id}
                                className="bg-[#2B2B40] text-[#fff]"
                                label={name}
                              >
                                {subcategories.length > 0 &&
                                  subcategories.map(
                                    ({ _id, name, categoryId }) => (
                                      <option
                                        key={_id}
                                        categoryId={categoryId}
                                        value={_id}
                                        className="h-[37px] px-2"
                                      >
                                        {name}
                                      </option>
                                    )
                                  )}
                              </optgroup>
                            )
                          )
                        ) : (
                          <option value="">No Categories</option>
                        )}
                      </select>
                    </Form.Group>

                    {/* <CustomSelect onChange={handleCategories}>
                      {projectCategory?.map(({ _id, name, subcategories }) => (
                        <optgroup
                          key={_id}
                          className="bg-[#2B2B40] text-[#fff]"
                          label={name}
                        >
                          {subcategories.length > 0 ? (
                            subcategories.map(
                              ({ _id, categoryId, name }) => (
                                <option
                                key={_id}
                                categoryId={categoryId}
                                value={_id}
                                className="h-[37px] px-2"
                                >
                                  {name}
                                </option>
                              )
                            )
                          ) : (
                            <option key="noSubcategories" value="">
                              No Subcategories
                            </option>
                          )}
                        </optgroup>
                      ))}
                    </CustomSelect> */}
                  </div>

                  <div className="col-md-6 mb-4">
                    <Form.Group className="flex flex-col gap-3">
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
                    </Form.Group>
                  </div>
                </div>
              </FormModal>
              <FormModal title={"بيانات المالك"}>
                <div className="row  w-100">
                  <div className="col-md-6 mb-4">
                    <InputLabel
                      mandatory
                      size={16}
                      id="service"
                      label={"المدينة "}
                    />

                    <CustomSelect
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                      defaultValue={request.city}
                    >
                      <MenuItem disabled>
                        <div className="w-full flex justify-between">
                          <span>بحث ...</span>
                          <CiSearch />
                        </div>
                      </MenuItem>
                      {KSACites.map(({ arLabel, value }, index) => (
                        <MenuItem key={index} value={value}>
                          {arLabel}
                        </MenuItem>
                      ))}
                    </CustomSelect>
                  </div>

                  <div className="col-md-6 mb-4">
                    <InputLabel
                      mandatory
                      size={16}
                      id="service"
                      label={"نوع العميل "}
                    />

                    <Select
                      onChange={(e) => {
                        setClientType(e.value);
                      }}
                      options={clientTypeRoles}
                      defaultValue={
                        request.clientType === 1
                          ? "حكومي او مستثمر"
                          : request.clientType === 2
                          ? "شركه او مؤسسة"
                          : "فردي"
                      }
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <InputLabel
                      mandatory
                      size={16}
                      id="city"
                      label={"نوع الهوية"}
                    />
                    <CustomSelect
                      onChange={(e) => {
                        setIdentityType(e.target.value);
                      }}
                      defaultValue={
                        request.identityType == 1
                          ? "هوية"
                          : request.identityType == 2
                          ? " تجاري"
                          : null
                      }
                    >
                      <MenuItem disabled value="">
                        <div className="w-full flex justify-between">
                          <span>بحث ...</span>
                          <CiSearch />
                        </div>
                      </MenuItem>
                      {projectTypeRoles.map(({ label, value }, index) => (
                        <MenuItem
                          key={index}
                          value={label}
                          // onClick={(e) => setSelectedSupervisor(name)}
                          // style={getStyles(name, selectedItem, theme)}
                        >
                          {label}
                        </MenuItem>
                      ))}
                    </CustomSelect>
                  </div>
                  <div className="col-md-6 mb-4">
                    <Form.Group>
                      <Form.Label> رقم الجوال </Form.Label>
                      <input
                        className="w-100   form-control "
                        defaultValue={request.phone}
                        mandatory
                        {...register("phone", {
                          pattern:
                            /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/,
                          required: "this field is required",
                        })}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-6 mb-4">
                    <Form.Group>
                      <Form.Label> البريد الالكتروني </Form.Label>
                      <input
                        className="w-100   form-control "
                        defaultValue={request.email}
                        mandatory
                        {...register("email", {
                          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          required: "this field is required",
                        })}
                      />
                    </Form.Group>
                  </div>

                  <div className="col-md-6 mb-4">
                    <Form.Group controlId="formBasicImage">
                      <Form.Label className="d-flex gap-2 align-items-center">
                        صورة الهويه
                      </Form.Label>

                      <Form.Control
                        type="file"
                        placeholder="صورة الهويه"
                        name="imageFile"
                        onChange={(e) =>
                          setInstrumentImage(e.currentTarget.files[0])
                        }
                      />
                    </Form.Group>
                  </div>

                  <div className="col-md-6 mb-4">
                    <Form.Group>
                      <Form.Label> رقم الشهادة الضريبية </Form.Label>
                      <input
                        className="w-100   form-control "
                        defaultValue={request.taxNumber}
                        mandatory
                        {...register("taxNumber", {
                          pattern: /^\d{12,}$/,
                          required: "this field is required",
                        })}
                      />
                    </Form.Group>
                  </div>
                </div>
              </FormModal>
              <FormModal title={"بيانات الوكيل"}>
                <div className="row  w-100">
                  <div className="col-md-6 mb-4">
                    <Form.Label> الوكيل </Form.Label>
                    <input
                      className="w-100   form-control "
                      defaultValue={request.agent}
                      mandatory
                      {...register("agent", {
                        pattern: /^([A-Za-z ]+|[\u0600-\u06FF ]+)$/,
                        required: "this field is required",
                      })}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <Form.Label> رقم الوكيل </Form.Label>

                    <input
                      className="w-100   form-control "
                      defaultValue={request.agencyNumber}
                      mandatory
                      {...register("agencyNumber", {
                        pattern: /^\d{3,}(\.\d+)?$/,
                        required: "this field is required",
                      })}
                    />
                    {errors.agencyNumber && (
                      <span>{errors.agencyNumber.message}</span>
                    )}
                  </div>

                  <div className="col-md-6 mb-4">
                    <Form.Group controlId="formBasicImage">
                      <Form.Label className="d-flex gap-2 align-items-center">
                        ارفاق الوكالة
                      </Form.Label>
                      <Form.Control
                        type="file"
                        placeholder="صورة الهويه"
                        name="imageFile"
                        onChange={(e) =>
                          setAgencyAttachments(e.currentTarget.files[0])
                        }
                      />
                    </Form.Group>
                  </div>

                  <div className="col-md-6 mb-4">
                    <Form.Label> رقم الصك </Form.Label>

                    <input
                      className="w-100   form-control "
                      defaultValue={request.instrumentNumber}
                      {...register("instrumentNumber", {
                        pattern: /^\d{3,}(\.\d+)?$/,
                        required: "this field is required",
                      })}
                    />
                    {errors.instrumentNumber && (
                      <span>{errors.instrumentNumber.message}</span>
                    )}
                  </div>
                  <div className="col-md-6 mb-4">
                    <Form.Group controlId="formBasicImage">
                      <Form.Label className="d-flex gap-2 align-items-center">
                        صورة الصك
                      </Form.Label>
                      <Form.Control
                        type="file"
                        placeholder="صورة الصك"
                        name="imageFile"
                        onChange={(e) =>
                          setInstrumentAttachments(e.currentTarget.files[0])
                        }
                      />
                    </Form.Group>
                  </div>
                </div>
              </FormModal>

              <div className="flex items-center justify-end w-90">
                <Button
                  disable={!isValid}
                  type="submit"
                  className="sumbmitAddUpdateUser"
                >
                  حفظ
                </Button>
              </div>
            </Form>
          ) : (
            <Progress />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default EditDesignRequest;
