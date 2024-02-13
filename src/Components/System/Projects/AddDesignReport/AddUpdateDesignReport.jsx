import { UseInput } from "../../../../hooks";
import Input from "../../../FormHandler/Input";

import "./AddUpdateDesignReport.css";
import { Controller, useForm, useFieldArray } from "react-hook-form";
import FormDatePicker from "../../../FormDatePicker";
import { useContext, useState } from "react";
import AddAttachment from "../../AddAttachment";
import SaveButton from "../../../SaveButton";
import { Form } from "react-bootstrap";
import { showAddUpdateUser } from "../../../../Context/CheckAddUpdateUserVisability";
import Select from "../../../FormHandler/Select";

const AddUpdateDesignReport = ({
  id = null,
  setId,
  setEditReport,
  handleClose,
}) => {
  // defineing rest classes
  const searchProject = UseInput("", "");
  const [reportDate, setReportDate] = useState(null);
  const [attachment, setAttachment] = useState(null);

  const { showAddUserModel, setShowAddUserModel } =
    useContext(showAddUpdateUser);
  const buildingComponent = [
    { value: "حسب الرخصة", label: "حسب الرخصة" },
    { value: "حسب المنفذ", label: "حسب المنفذ" },
  ];

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      select: {},
      itemGroup: [{ item: "", confirmity: "" }],
      areaGroup: [
        {
          component: "",
          rolesDueTolisence: "",
          usage: "",
          lisence: "",
          lisenceUnitesNumber: "",
          nature: "",
          natureUnitesNumber: "",
          difference: "",
          areaNotes: "",
        },
      ],
    },
  });

  const {
    fields: listOneFields,
    append: appedListOne,
    remove: removeListone,
  } = useFieldArray({
    control,
    name: "itemGroup",
  });
  const {
    fields: listTwoFields,
    append: appendListTwo,
    remove: removeListTwo,
  } = useFieldArray({
    control,
    name: "areaGroup",
  });
  console.log("errors in form are ", errors);

  const onSubmit = (data) => {
    console.log(data);
    handleClose();
    // after ensuring the data is submitted
    if (id) {
      // update case
      setId(null);
      setEditReport(false);
    } else {
      //Add case
      setShowAddUserModel(false);
    }
  };
  return (
    <div className="AddDesignReport overflow-y-auto  scrollbar-none p-3">
      {id ? (
        <p className="text-xl text-[#EFAA20] ">تعديل التقرير</p>
      ) : (
        <p className="text-xl text-[#EFAA20] ">إضافة جديدة</p>
      )}

      {!id && (
        <fieldset className="fieldBorder mb-4  p-2 mt-3">
          <legend className="text-center">بحث عن المشروع</legend>
          <Input
            width="190px"
            className="form-control mb-4"
            placeholder="ابحث عن ...."
            {...searchProject.bind}
          />
        </fieldset>
      )}

      {searchProject.value && (
        <>
          <Form onSubmit={handleSubmit(onSubmit)} className="">
            <fieldset className="fieldBorder mb-4  p-2 mt-3">
              <legend className="text-center">بيانات المشروع</legend>
              <div className="row">
                <div className="col-md-6 d-flex align-items-center mb-4">
                  <p className="text-white">
                    اسم المالك :
                    <span className="main-text ms-3">
                      شركة محمد ابراهيم السبيعي وأولاده
                    </span>
                  </p>
                </div>
                <div className="col-md-6 d-flex align-items-center mb-4">
                  <Form.Group>
                    <Form.Label>اسم التقرير</Form.Label>
                    <input
                      className="form-control "
                      {...register("reportName")}
                    />
                  </Form.Group>
                </div>
                <div className="col-md-6 d-flex align-items-center mb-4">
                  <p className="text-white">
                    اسم المشروع :
                    <span className="main-text ms-3">شركة محمد ابراهيم</span>
                  </p>
                </div>
                <div className="col-md-6 d-flex align-items-center mb-4">
                  <Form.Group>
                    <Form.Label>رقم الجوال</Form.Label>
                    <input className="form-control " {...register("phone")} />
                  </Form.Group>
                </div>
                <div className="col-md-6 d-flex align-items-center mb-4">
                  <p className="text-white">
                    نوع المشروع :<span className="main-text ms-3">تصميم</span>
                  </p>
                </div>
                <div className="col-md-6 d-flex align-items-center mb-4">
                  <p className="text-white">
                    العنوان :
                    <span className="main-text ms-3">
                      الرياض – حي الملقا – تقاطع شارع الدهناء مع الأفضلي
                    </span>
                  </p>
                </div>
                <div className="col-md-6 d-flex align-items-center mb-4">
                  <p className="text-white">
                    نوع العميل :<span className="main-text ms-3">شركة</span>
                  </p>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldBorder mb-4  p-2 mt-3">
              <legend className="text-center">بيانات اساسيه</legend>
              <div className="row  ">
                <div className="col-md-4 d-flex align-items-center mb-4">
                  <div className="input-container">
                    <Form.Group>
                      <Form.Label>رقم الرخصة</Form.Label>
                      <input
                        className="form-control "
                        {...register("licenseNumber")}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center mb-4">
                  <div className="input-container">
                    <Form.Group>
                      <Form.Label>رقم الهوية</Form.Label>
                      <input
                        className="form-control "
                        {...register("iDNumber")}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center mb-4">
                  <div className="input-container">
                    <Form.Group>
                      <Form.Label>تاريخ التقرير</Form.Label>
                      <FormDatePicker
                        date={reportDate}
                        setDate={setReportDate}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center mb-4">
                  <div className="input-container">
                    <Form.Group>
                      <Form.Label>المخطط التنظيمي</Form.Label>
                      <input
                        className="form-control "
                        {...register("OrganizationalChart")}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center mb-4">
                  <div className="input-container">
                    <Form.Group>
                      <Form.Label>رقم القطعة</Form.Label>
                      <input
                        className="form-control  w-full"
                        {...register("pieceNumber")}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center mb-4">
                  <div className="input-container">
                    <Form.Group>
                      <Form.Label>نوع التقرير</Form.Label>
                      <input
                        className="form-control  w-full"
                        {...register("reportType")}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center mb-4">
                  <div className="input-container">
                    <Form.Group>
                      <Form.Label>مساحة الأرض</Form.Label>
                      <input
                        className="form-control  w-full"
                        {...register("landArea")}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center mb-4">
                  <div className="input-container">
                    <Form.Group>
                      <Form.Label>اسم الحي</Form.Label>
                      <input
                        className="form-control w-full "
                        {...register("DistrictName")}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center mb-4">
                  <div className="input-container">
                    <Form.Group>
                      <Form.Label>اسم الشارع</Form.Label>
                      <input
                        className="form-control  w-full"
                        {...register("streetName")}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center mb-4">
                  <div className="input-container">
                    <Form.Group>
                      <Form.Label>مكون البناء</Form.Label>
                      <Controller
                        name="buildingComponent"
                        className="w-100"
                        control={control}
                        render={({ field, onChange, value, name, ref }) => (
                          <Select
                            inputRef={ref}
                            className="w-100"
                            options={buildingComponent}
                            onChange={onChange}
                            {...field}
                            name={name}
                          />
                        )}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center mb-4">
                  <div className="input-container">
                    <Form.Group>
                      <Form.Label>الاستخدام</Form.Label>
                      <Controller
                        name="usage"
                        control={control}
                        render={({ field }) => (
                          <Select
                            className="w-100"
                            placeholder="اخترر"
                            {...field}
                            options={[
                              { value: "حسب الرخصة", label: "حسب الرخصة" },
                              { value: "حسب المنفذ", label: "حسب المنفذ" },
                            ]}
                          />
                        )}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center mb-4">
                  <div className="input-container">
                    <Form.Group>
                      <Form.Label>اختر التطابق</Form.Label>
                      <Controller
                        name="confirmity"
                        control={control}
                        render={({ field }) => (
                          <Select
                            className="w-100"
                            placeholder="اخترر"
                            {...field}
                            options={[
                              { value: "متطابق", label: "متطابق" },
                              { value: "غير متطابق ", label: "غير متطابق " },
                            ]}
                          />
                        )}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="col-md-12 d-flex align-items-center mb-4">
                  <div className="input-container">
                    <Form.Group>
                      <Form.Label>الاختلاف</Form.Label>

                      <input
                        className="form-control w-full "
                        {...register("Difference")}
                      />
                    </Form.Group>
                  </div>
                </div>

                <div className="col-md-12 d-flex align-items-center mb-4">
                  <div className="input-container">
                    <Form.Group>
                      <Form.Label>ملاحظات</Form.Label>

                      <textarea
                        cols={7}
                        rows={7}
                        placeholder="اكتب ملاحظات .................................."
                        className="form-control w-full "
                        {...register("Difference")}
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldBorder mb-4  p-2 mt-3">
              <legend className="text-center">البنود</legend>

              <ul>
                {listOneFields.map((item, index) => {
                  return (
                    <li
                      className="row  flex-wrap mb-4 w-full gap-4"
                      key={item.id}
                    >
                      <div className="col-md-4">
                        <Controller
                          render={({ field }) => (
                            <Select
                              label={`البند ${index + 1}`}
                              {...field}
                              className="w-100"
                              placeholder="اخترر"
                              options={[
                                {
                                  value: "مطابقه المساحه حسب الرخصة",
                                  label: "مطابقه المساحه حسب الرخصة",
                                },
                                {
                                  value: "مطابقه عدد الادوار حسب الرخصة",
                                  label: "مطابقه عدد الادوار حسب الرخصة",
                                },
                                {
                                  value: "مطابقه  استخدام  الرخصة",
                                  label: "مطابقه  استخدام  الرخصة",
                                },
                              ]}
                            />
                          )}
                          name={`itemGroup.${index}.item`}
                          control={control}
                        />
                      </div>

                      <div className="col-md-4">
                        <Controller
                          render={({ field }) => (
                            <Select
                              label={`المطابقة ${index + 1}`}
                              {...field}
                              className="w-100"
                              placeholder="اخترر"
                              options={[
                                { value: "متطابق", label: "متطابق" },
                                { value: "غير متطابق ", label: "غير متطابق " },
                              ]}
                            />
                          )}
                          name={`itemGroup.${index}.confirmity`}
                          control={control}
                        />
                      </div>

                      <div className="col-md-2 ">
                        <div className=" h-100 flex gap-3  items-end">
                          <svg
                            onClick={() => {
                              appedListOne({ item: "", confirmity: "" });
                            }}
                            className="pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            width="65"
                            height="65"
                            viewBox="0 0 65 65"
                            fill="none"
                          >
                            <circle
                              cx="32.5"
                              cy="32.5"
                              r="28.5"
                              fill="#2B2B40"
                            />
                            <circle
                              cx="32.5"
                              cy="32.5"
                              r="32"
                              stroke="#D59921"
                              stroke-dasharray="4 4"
                            />
                            <path
                              d="M21.4609 32.5004H32.4994M32.4994 32.5004H43.5379M32.4994 32.5004V43.5388M32.4994 32.5004V21.4619"
                              stroke="#D59921"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>

                          {index > 0 && (
                            <svg
                              className="pointer"
                              onClick={() => removeListone(index)}
                              xmlns="http://www.w3.org/2000/svg"
                              width="65"
                              height="65"
                              viewBox="0 0 65 65"
                              fill="none"
                            >
                              <circle
                                cx="32.5"
                                cy="32.5"
                                r="28.5"
                                fill="#2B2B40"
                              />
                              <circle
                                cx="32.5"
                                cy="32.5"
                                r="32"
                                stroke="#D59921"
                                stroke-dasharray="4 4"
                              />
                              <path
                                d="M21.4609 32.5H32.4994H43.5379"
                                stroke="#D59921"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </fieldset>
            <fieldset className="fieldBorder mb-4  p-2 mt-3">
              <legend className="text-center">المساحات</legend>
              <ul>
                {listTwoFields.map((field, index) => {
                  return (
                    <li key={field.id} className="row">
                      <div className="col-md-4 mb-4">
                        <div className="input-container">
                          <Form.Group>
                            <Form.Label>المكون</Form.Label>
                            <input
                              className="form-control"
                              {...register(`areaGroup.${index}.component`)}
                            />
                          </Form.Group>
                        </div>
                      </div>
                      <div className="col-md-4 mb-4">
                        <div className="input-container">
                          <Form.Group>
                            <Form.Label>الإدوار حسب الرخصة</Form.Label>

                            <input
                              className="form-control"
                              {...register(
                                `areaGroup.${index}.rolesDueTolisence`
                              )}
                            />
                          </Form.Group>
                        </div>
                      </div>
                      <div className="col-md-4 mb-4">
                        <div className="input-container">
                          <Form.Group>
                            <Form.Label>الإستخدام</Form.Label>
                            <input
                              className="form-control"
                              {...register(`areaGroup.${index}.usage`)}
                            />
                          </Form.Group>
                        </div>
                      </div>
                      <div className="col-md-3 mb-4">
                        <div className="input-container">
                          <Form.Group>
                            <Form.Label>الرخصة</Form.Label>
                            <input
                              className="form-control"
                              {...register(`areaGroup.${index}.lisence`)}
                            />
                          </Form.Group>
                        </div>
                      </div>
                      <div className="col-md-2 mb-4">
                        <div className="input-container">
                          <Form.Group>
                            <Form.Label>عدد الوحدات</Form.Label>
                            <input
                              className="form-control"
                              {...register(`areaGroup.${index}.lisence`)}
                            />
                          </Form.Group>
                        </div>
                      </div>
                      <div className="col-md-3 mb-4 ">
                        <div className="input-container">
                          <Form.Group>
                            <Form.Label>الرخصة</Form.Label>
                            <input
                              className="form-control"
                              {...register(`areaGroup.${index}.nature`)}
                            />
                          </Form.Group>
                        </div>
                      </div>
                      <div className="col-md-2 mb-4">
                        <div className="input-container">
                          <Form.Group>
                            <Form.Label>عدد الوحدات</Form.Label>
                            <input
                              className="form-control"
                              {...register(
                                `areaGroup.${index}.natureUnitesNumber`
                              )}
                            />
                          </Form.Group>
                        </div>
                      </div>
                      <div className="col-md-12 mb-4">
                        <div className="input-container">
                          <Form.Group>
                            <Form.Label>الفرق</Form.Label>
                            <input
                              className="form-control"
                              {...register(`areaGroup.${index}.diffrence`)}
                            />
                          </Form.Group>
                        </div>
                      </div>
                      <div className="col-md-12 mb-4">
                        <div className="input-container">
                          <Form.Group>
                            <Form.Label>ملاحظات</Form.Label>
                            <input
                              className="form-control"
                              {...register(`areaGroup.${index}.areaNotes`)}
                            />
                          </Form.Group>
                        </div>
                      </div>
                      <div className="col-md-12 mb-4">
                        <div className="addDelete flex justify-center">
                          <div className=" gap-3 h-100 flex  items-end">
                            <svg
                              className="pointer"
                              onClick={() => {
                                appendListTwo({
                                  Component: "",
                                  rolesDueTolisence: "",
                                  usage: "",
                                  lisence: "",
                                  lisenceUnitesNumber: "",
                                  nature: "",
                                  natureUnitesNumber: "",
                                  difference: "",
                                  areaNotes: "",
                                });
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="65"
                              height="65"
                              viewBox="0 0 65 65"
                              fill="none"
                            >
                              <circle
                                cx="32.5"
                                cy="32.5"
                                r="28.5"
                                fill="#2B2B40"
                              />
                              <circle
                                cx="32.5"
                                cy="32.5"
                                r="32"
                                stroke="#D59921"
                                stroke-dasharray="4 4"
                              />
                              <path
                                d="M21.4609 32.5004H32.4994M32.4994 32.5004H43.5379M32.4994 32.5004V43.5388M32.4994 32.5004V21.4619"
                                stroke="#D59921"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            {index > 0 && (
                              <svg
                                className="pointer"
                                onClick={() => removeListTwo(index)}
                                xmlns="http://www.w3.org/2000/svg"
                                width="65"
                                height="65"
                                viewBox="0 0 65 65"
                                fill="none"
                              >
                                <circle
                                  cx="32.5"
                                  cy="32.5"
                                  r="28.5"
                                  fill="#2B2B40"
                                />
                                <circle
                                  cx="32.5"
                                  cy="32.5"
                                  r="32"
                                  stroke="#D59921"
                                  stroke-dasharray="4 4"
                                />
                                <path
                                  d="M21.4609 32.5H32.4994H43.5379"
                                  stroke="#D59921"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </fieldset>
            <fieldset className="fieldBorder mb-4  p-2 mt-3">
              <legend className="text-center">الارتدادات</legend>
              <div className="row flex items-center">
                <div className=" col-md-1 mb-4">
                  <div className="inputs-title">
                    <p className="text-white text-xl">شمال</p>
                  </div>
                </div>
                <div className=" col-md-3 mb-4">
                  <div className="inputs-container">
                    <Form.Group>
                      <Form.Label>المجاورين</Form.Label>
                      <input
                        className="form-control"
                        {...register(`NorthNeighbors`)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className=" col-md-3 mb-4">
                  <div className="inputs-container">
                    <Form.Group>
                      <Form.Label>الطول</Form.Label>
                      <input
                        className="form-control"
                        {...register(`NorthHeight`)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className=" col-md-3 mb-4">
                  <div className="inputs-container">
                    <Form.Group>
                      <Form.Label>الرخصة</Form.Label>
                      <input
                        className="form-control"
                        {...register(`NorthLicenses`)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className=" col-md-2 mb-4">
                  <div className="inputs-container">
                    <Form.Group>
                      <Form.Label>المخطط</Form.Label>
                      <input
                        className="form-control"
                        {...register(`NorthChart`)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className=" col-md-1 mb-4">
                  <div className="inputs-title">
                    <p className="text-white text-xl">شرق</p>
                  </div>
                </div>
                <div className=" col-md-3 mb-4">
                  <div className="inputs-container">
                    <Form.Group>
                      <Form.Label>المجاورين</Form.Label>
                      <input
                        className="form-control"
                        {...register(`eastNeighbors`)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className=" col-md-3 mb-4">
                  <div className="inputs-container">
                    <Form.Group>
                      <Form.Label>الطول</Form.Label>
                      <input
                        className="form-control"
                        {...register(`eastHeight`)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className=" col-md-3 mb-4">
                  <div className="inputs-container">
                    <Form.Group>
                      <Form.Label>الرخصة</Form.Label>
                      <input
                        className="form-control"
                        {...register(`eastLicenses`)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className=" col-md-2 mb-4">
                  <div className="inputs-container">
                    <Form.Group>
                      <Form.Label>المخطط</Form.Label>
                      <input
                        className="form-control"
                        {...register(`eastChart`)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className=" col-md-1 mb-4">
                  <div className="inputs-title">
                    <p className="text-white text-xl">جنوب</p>
                  </div>
                </div>
                <div className=" col-md-3 mb-4">
                  <div className="inputs-container">
                    <Form.Group>
                      <Form.Label>المجاورين</Form.Label>
                      <input
                        className="form-control"
                        {...register(`westNeighbors`)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className=" col-md-3 mb-4">
                  <div className="inputs-container">
                    <Form.Group>
                      <Form.Label>الطول</Form.Label>
                      <input
                        className="form-control"
                        {...register(`southHeight`)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className=" col-md-3 mb-4">
                  <div className="inputs-container">
                    <Form.Group>
                      <Form.Label>الرخصة</Form.Label>
                      <input
                        className="form-control"
                        {...register(`southLicenses`)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className=" col-md-2 mb-4">
                  <div className="inputs-container">
                    <Form.Group>
                      <Form.Label>المخطط</Form.Label>
                      <input
                        className="form-control"
                        {...register(`southChart`)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className=" col-md-1 mb-4">
                  <div className="inputs-title">
                    <p className="text-white text-xl">غرب</p>
                  </div>
                </div>
                <div className=" col-md-3 mb-4">
                  <div className="inputs-container">
                    <Form.Group>
                      <Form.Label>المجاورين</Form.Label>
                      <input
                        className="form-control"
                        {...register(`westNeighbors`)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className=" col-md-3 mb-4">
                  <div className="inputs-container">
                    <Form.Group>
                      <Form.Label>الطول</Form.Label>
                      <input
                        className="form-control"
                        {...register(`westHeight`)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className=" col-md-3 mb-4">
                  <div className="inputs-container">
                    <Form.Group>
                      <Form.Label>الرخصة</Form.Label>
                      <input
                        className="form-control"
                        {...register(`westLicenses`)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className=" col-md-2 mb-4">
                  <div className="inputs-container">
                    <Form.Group>
                      <Form.Label>المخطط</Form.Label>
                      <input
                        className="form-control"
                        {...register(`westChart`)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className=" col-md-12 mb-4">
                  <div className="inputs-container">
                    <Form.Group>
                      <Form.Label>ملاحظات</Form.Label>
                      <textarea
                        cols={5}
                        rows={5}
                        className="form-control"
                        {...register(`areaNotes`)}
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldBorder mb-4  p-2 mt-3">
              <legend className="text-center">المرفقات</legend>
              <AddAttachment
                attachment={attachment}
                setAttachment={setAttachment}
              />
            </fieldset>
            <div className="submit-div flex justify-end">
              <SaveButton />
            </div>
          </Form>
        </>
      )}
      {id && (
        <Form onSubmit={handleSubmit(onSubmit)} className="">
          <fieldset className="fieldBorder mb-4  p-2 mt-3">
            <legend className="text-center">بيانات المشروع</legend>
            <div className="row">
              <div className="col-md-6 d-flex align-items-center mb-4">
                <p className="text-white">
                  اسم المالك :
                  <span className="main-text ms-3">
                    شركة محمد ابراهيم السبيعي وأولاده
                  </span>
                </p>
              </div>
              <div className="col-md-6 d-flex align-items-center mb-4">
                <Form.Group>
                  <Form.Label>اسم التقرير</Form.Label>
                  <input
                    className="form-control "
                    {...register("reportName")}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6 d-flex align-items-center mb-4">
                <p className="text-white">
                  اسم المشروع :
                  <span className="main-text ms-3">شركة محمد ابراهيم</span>
                </p>
              </div>
              <div className="col-md-6 d-flex align-items-center mb-4">
                <Form.Group>
                  <Form.Label>رقم الجوال</Form.Label>
                  <input className="form-control " {...register("phone")} />
                </Form.Group>
              </div>
              <div className="col-md-6 d-flex align-items-center mb-4">
                <p className="text-white">
                  نوع المشروع :<span className="main-text ms-3">تصميم</span>
                </p>
              </div>
              <div className="col-md-6 d-flex align-items-center mb-4">
                <p className="text-white">
                  العنوان :
                  <span className="main-text ms-3">
                    الرياض – حي الملقا – تقاطع شارع الدهناء مع الأفضلي
                  </span>
                </p>
              </div>
              <div className="col-md-6 d-flex align-items-center mb-4">
                <p className="text-white">
                  نوع العميل :<span className="main-text ms-3">شركة</span>
                </p>
              </div>
            </div>
          </fieldset>
          <fieldset className="fieldBorder mb-4  p-2 mt-3">
            <legend className="text-center">بيانات اساسيه</legend>
            <div className="row  ">
              <div className="col-md-4 d-flex align-items-center mb-4">
                <div className="input-container">
                  <Form.Group>
                    <Form.Label>رقم الرخصة</Form.Label>
                    <input
                      className="form-control "
                      {...register("licenseNumber")}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center mb-4">
                <div className="input-container">
                  <Form.Group>
                    <Form.Label>رقم الهوية</Form.Label>
                    <input
                      className="form-control "
                      {...register("iDNumber")}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center mb-4">
                <div className="input-container">
                  <Form.Group>
                    <Form.Label>تاريخ التقرير</Form.Label>
                    <FormDatePicker date={reportDate} setDate={setReportDate} />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center mb-4">
                <div className="input-container">
                  <Form.Group>
                    <Form.Label>المخطط التنظيمي</Form.Label>
                    <input
                      className="form-control "
                      {...register("OrganizationalChart")}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center mb-4">
                <div className="input-container">
                  <Form.Group>
                    <Form.Label>رقم القطعة</Form.Label>
                    <input
                      className="form-control  w-full"
                      {...register("pieceNumber")}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center mb-4">
                <div className="input-container">
                  <Form.Group>
                    <Form.Label>نوع التقرير</Form.Label>
                    <input
                      className="form-control  w-full"
                      {...register("reportType")}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center mb-4">
                <div className="input-container">
                  <Form.Group>
                    <Form.Label>مساحة الأرض</Form.Label>
                    <input
                      className="form-control  w-full"
                      {...register("landArea")}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center mb-4">
                <div className="input-container">
                  <Form.Group>
                    <Form.Label>اسم الحي</Form.Label>
                    <input
                      className="form-control w-full "
                      {...register("DistrictName")}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center mb-4">
                <div className="input-container">
                  <Form.Group>
                    <Form.Label>اسم الشارع</Form.Label>
                    <input
                      className="form-control  w-full"
                      {...register("streetName")}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center mb-4">
                <div className="input-container">
                  <Form.Group>
                    <Form.Label>مكون البناء</Form.Label>
                    <Controller
                      name="buildingComponent"
                      className="w-100"
                      control={control}
                      render={({ onChange, value, name, ref, field }) => (
                        <Select
                          inputRef={ref}
                          className="w-100"
                          options={buildingComponent}
                          onChange={onChange}
                          {...field}
                          name={name}
                        />
                      )}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center mb-4">
                <div className="input-container">
                  <Form.Group>
                    <Form.Label>الاستخدام</Form.Label>
                    <Controller
                      name="usage"
                      control={control}
                      render={({ field }) => (
                        <Select
                          className="w-100"
                          placeholder="اخترر"
                          {...field}
                          options={[
                            { value: "حسب الرخصة", label: "حسب الرخصة" },
                            { value: "حسب المنفذ", label: "حسب المنفذ" },
                          ]}
                        />
                      )}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center mb-4">
                <div className="input-container">
                  <Form.Group>
                    <Form.Label>اختر التطابق</Form.Label>
                    <Controller
                      name="confirmaity"
                      control={control}
                      render={({ field }) => (
                        <Select
                          className="w-100"
                          placeholder="اخترر"
                          {...field}
                          options={[
                            { value: "متطابق", label: "متطابق" },
                            { value: "غير متطابق ", label: "غير متطابق " },
                          ]}
                        />
                      )}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="col-md-12 d-flex align-items-center mb-4">
                <div className="input-container">
                  <Form.Group>
                    <Form.Label>الاختلاف</Form.Label>

                    <input
                      className="form-control w-full "
                      {...register("Difference")}
                    />
                  </Form.Group>
                </div>
              </div>

              <div className="col-md-12 d-flex align-items-center mb-4">
                <div className="input-container">
                  <Form.Group>
                    <Form.Label>ملاحظات</Form.Label>

                    <textarea
                      cols={7}
                      rows={7}
                      placeholder="اكتب ملاحظات .................................."
                      className="form-control w-full "
                      {...register("Difference")}
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset className="fieldBorder mb-4  p-2 mt-3">
            <legend className="text-center">البنود</legend>

            <ul>
              {listOneFields.map((item, index) => {
                return (
                  <li
                    className="row  flex-wrap mb-4 w-full gap-4"
                    key={item.id}
                  >
                    <div className="col-md-4">
                      <Controller
                        render={({ field }) => (
                          <Select
                            label={`البند ${index + 1}`}
                            {...field}
                            className="w-100"
                            placeholder="اخترر"
                            options={[
                              {
                                value: "مطابقه المساحه حسب الرخصة",
                                label: "مطابقه المساحه حسب الرخصة",
                              },
                              {
                                value: "مطابقه عدد الادوار حسب الرخصة",
                                label: "مطابقه عدد الادوار حسب الرخصة",
                              },
                              {
                                value: "مطابقه  استخدام  الرخصة",
                                label: "مطابقه  استخدام  الرخصة",
                              },
                            ]}
                          />
                        )}
                        name={`itemGroup.${index}.item`}
                        control={control}
                      />
                    </div>

                    <div className="col-md-4">
                      <Controller
                        render={({ field }) => (
                          <Select
                            label={`المطابقة ${index + 1}`}
                            {...field}
                            className="w-100"
                            placeholder="اخترر"
                            options={[
                              { value: "متطابق", label: "متطابق" },
                              { value: "غير متطابق ", label: "غير متطابق " },
                            ]}
                          />
                        )}
                        name={`itemGroup.${index}.confirmity`}
                        control={control}
                      />
                    </div>

                    <div className="col-md-2 ">
                      <div className=" h-100 flex gap-3  items-end">
                        <svg
                          onClick={() => {
                            appedListOne({ item: "", confirmity: "" });
                          }}
                          className="pointer"
                          xmlns="http://www.w3.org/2000/svg"
                          width="65"
                          height="65"
                          viewBox="0 0 65 65"
                          fill="none"
                        >
                          <circle cx="32.5" cy="32.5" r="28.5" fill="#2B2B40" />
                          <circle
                            cx="32.5"
                            cy="32.5"
                            r="32"
                            stroke="#D59921"
                            stroke-dasharray="4 4"
                          />
                          <path
                            d="M21.4609 32.5004H32.4994M32.4994 32.5004H43.5379M32.4994 32.5004V43.5388M32.4994 32.5004V21.4619"
                            stroke="#D59921"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        {index > 0 && (
                          <svg
                            className="pointer"
                            onClick={() => removeListone(index)}
                            xmlns="http://www.w3.org/2000/svg"
                            width="65"
                            height="65"
                            viewBox="0 0 65 65"
                            fill="none"
                          >
                            <circle
                              cx="32.5"
                              cy="32.5"
                              r="28.5"
                              fill="#2B2B40"
                            />
                            <circle
                              cx="32.5"
                              cy="32.5"
                              r="32"
                              stroke="#D59921"
                              stroke-dasharray="4 4"
                            />
                            <path
                              d="M21.4609 32.5H32.4994H43.5379"
                              stroke="#D59921"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </fieldset>
          <fieldset className="fieldBorder mb-4  p-2 mt-3">
            <legend className="text-center">المساحات</legend>
            <ul>
              {listTwoFields.map((field, index) => {
                return (
                  <li key={field.id} className="row">
                    <div className="col-md-4 mb-4">
                      <div className="input-container">
                        <Form.Group>
                          <Form.Label>المكون</Form.Label>
                          <input
                            className="form-control"
                            {...register(`areaGroup.${index}.component`)}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="input-container">
                        <Form.Group>
                          <Form.Label>الإدوار حسب الرخصة</Form.Label>

                          <input
                            className="form-control"
                            {...register(
                              `areaGroup.${index}.rolesDueTolisence`
                            )}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="input-container">
                        <Form.Group>
                          <Form.Label>الإستخدام</Form.Label>
                          <input
                            className="form-control"
                            {...register(`areaGroup.${index}.usage`)}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="col-md-3 mb-4">
                      <div className="input-container">
                        <Form.Group>
                          <Form.Label>الرخصة</Form.Label>
                          <input
                            className="form-control"
                            {...register(`areaGroup.${index}.lisence`)}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="col-md-2 mb-4">
                      <div className="input-container">
                        <Form.Group>
                          <Form.Label>عدد الوحدات</Form.Label>
                          <input
                            className="form-control"
                            {...register(`areaGroup.${index}.lisence`)}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="col-md-3 mb-4 ">
                      <div className="input-container">
                        <Form.Group>
                          <Form.Label>الرخصة</Form.Label>
                          <input
                            className="form-control"
                            {...register(`areaGroup.${index}.nature`)}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="col-md-2 mb-4">
                      <div className="input-container">
                        <Form.Group>
                          <Form.Label>عدد الوحدات</Form.Label>
                          <input
                            className="form-control"
                            {...register(
                              `areaGroup.${index}.natureUnitesNumber`
                            )}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="input-container">
                        <Form.Group>
                          <Form.Label>الفرق</Form.Label>
                          <input
                            className="form-control"
                            {...register(`areaGroup.${index}.diffrence`)}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="input-container">
                        <Form.Group>
                          <Form.Label>ملاحظات</Form.Label>
                          <input
                            className="form-control"
                            {...register(`areaGroup.${index}.areaNotes`)}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="addDelete flex justify-center">
                        <div className=" gap-3 h-100 flex  items-end">
                          <svg
                            className="pointer"
                            onClick={() => {
                              appendListTwo({
                                Component: "",
                                rolesDueTolisence: "",
                                usage: "",
                                lisence: "",
                                lisenceUnitesNumber: "",
                                nature: "",
                                natureUnitesNumber: "",
                                difference: "",
                                areaNotes: "",
                              });
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="65"
                            height="65"
                            viewBox="0 0 65 65"
                            fill="none"
                          >
                            <circle
                              cx="32.5"
                              cy="32.5"
                              r="28.5"
                              fill="#2B2B40"
                            />
                            <circle
                              cx="32.5"
                              cy="32.5"
                              r="32"
                              stroke="#D59921"
                              stroke-dasharray="4 4"
                            />
                            <path
                              d="M21.4609 32.5004H32.4994M32.4994 32.5004H43.5379M32.4994 32.5004V43.5388M32.4994 32.5004V21.4619"
                              stroke="#D59921"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>

                          {index > 0 && (
                            <svg
                              className="pointer"
                              onClick={() => removeListTwo(index)}
                              xmlns="http://www.w3.org/2000/svg"
                              width="65"
                              height="65"
                              viewBox="0 0 65 65"
                              fill="none"
                            >
                              <circle
                                cx="32.5"
                                cy="32.5"
                                r="28.5"
                                fill="#2B2B40"
                              />
                              <circle
                                cx="32.5"
                                cy="32.5"
                                r="32"
                                stroke="#D59921"
                                stroke-dasharray="4 4"
                              />
                              <path
                                d="M21.4609 32.5H32.4994H43.5379"
                                stroke="#D59921"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </fieldset>
          <fieldset className="fieldBorder mb-4  p-2 mt-3">
            <legend className="text-center">الارتدادات</legend>
            <div className="row flex items-center">
              <div className=" col-md-1 mb-4">
                <div className="inputs-title">
                  <p className="text-white text-xl">شمال</p>
                </div>
              </div>
              <div className=" col-md-3 mb-4">
                <div className="inputs-container">
                  <Form.Group>
                    <Form.Label>المجاورين</Form.Label>
                    <input
                      className="form-control"
                      {...register(`NorthNeighbors`)}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className=" col-md-3 mb-4">
                <div className="inputs-container">
                  <Form.Group>
                    <Form.Label>الطول</Form.Label>
                    <input
                      className="form-control"
                      {...register(`NorthHeight`)}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className=" col-md-3 mb-4">
                <div className="inputs-container">
                  <Form.Group>
                    <Form.Label>الرخصة</Form.Label>
                    <input
                      className="form-control"
                      {...register(`NorthLicenses`)}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className=" col-md-2 mb-4">
                <div className="inputs-container">
                  <Form.Group>
                    <Form.Label>المخطط</Form.Label>
                    <input
                      className="form-control"
                      {...register(`NorthChart`)}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className=" col-md-1 mb-4">
                <div className="inputs-title">
                  <p className="text-white text-xl">شرق</p>
                </div>
              </div>
              <div className=" col-md-3 mb-4">
                <div className="inputs-container">
                  <Form.Group>
                    <Form.Label>المجاورين</Form.Label>
                    <input
                      className="form-control"
                      {...register(`eastNeighbors`)}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className=" col-md-3 mb-4">
                <div className="inputs-container">
                  <Form.Group>
                    <Form.Label>الطول</Form.Label>
                    <input
                      className="form-control"
                      {...register(`eastHeight`)}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className=" col-md-3 mb-4">
                <div className="inputs-container">
                  <Form.Group>
                    <Form.Label>الرخصة</Form.Label>
                    <input
                      className="form-control"
                      {...register(`eastLicenses`)}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className=" col-md-2 mb-4">
                <div className="inputs-container">
                  <Form.Group>
                    <Form.Label>المخطط</Form.Label>
                    <input
                      className="form-control"
                      {...register(`eastChart`)}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className=" col-md-1 mb-4">
                <div className="inputs-title">
                  <p className="text-white text-xl">جنوب</p>
                </div>
              </div>
              <div className=" col-md-3 mb-4">
                <div className="inputs-container">
                  <Form.Group>
                    <Form.Label>المجاورين</Form.Label>
                    <input
                      className="form-control"
                      {...register(`westNeighbors`)}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className=" col-md-3 mb-4">
                <div className="inputs-container">
                  <Form.Group>
                    <Form.Label>الطول</Form.Label>
                    <input
                      className="form-control"
                      {...register(`southHeight`)}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className=" col-md-3 mb-4">
                <div className="inputs-container">
                  <Form.Group>
                    <Form.Label>الرخصة</Form.Label>
                    <input
                      className="form-control"
                      {...register(`southLicenses`)}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className=" col-md-2 mb-4">
                <div className="inputs-container">
                  <Form.Group>
                    <Form.Label>المخطط</Form.Label>
                    <input
                      className="form-control"
                      {...register(`southChart`)}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className=" col-md-1 mb-4">
                <div className="inputs-title">
                  <p className="text-white text-xl">غرب</p>
                </div>
              </div>
              <div className=" col-md-3 mb-4">
                <div className="inputs-container">
                  <Form.Group>
                    <Form.Label>المجاورين</Form.Label>
                    <input
                      className="form-control"
                      {...register(`westNeighbors`)}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className=" col-md-3 mb-4">
                <div className="inputs-container">
                  <Form.Group>
                    <Form.Label>الطول</Form.Label>
                    <input
                      className="form-control"
                      {...register(`westHeight`)}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className=" col-md-3 mb-4">
                <div className="inputs-container">
                  <Form.Group>
                    <Form.Label>الرخصة</Form.Label>
                    <input
                      className="form-control"
                      {...register(`westLicenses`)}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className=" col-md-2 mb-4">
                <div className="inputs-container">
                  <Form.Group>
                    <Form.Label>المخطط</Form.Label>
                    <input
                      className="form-control"
                      {...register(`westChart`)}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className=" col-md-12 mb-4">
                <div className="inputs-container">
                  <Form.Group>
                    <Form.Label>ملاحظات</Form.Label>
                    <textarea
                      cols={5}
                      rows={5}
                      className="form-control"
                      {...register(`areaNotes`)}
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset className="fieldBorder mb-4  p-2 mt-3">
            <legend className="text-center">المرفقات</legend>
            <AddAttachment
              attachment={attachment}
              setAttachment={setAttachment}
            />
          </fieldset>
          <div className="submit-div flex justify-end">
            <SaveButton onClick={() => setEditReport(false)} />
          </div>
        </Form>
      )}
    </div>
  );
};

export default AddUpdateDesignReport;
