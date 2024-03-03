import React, { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import style from "./AddItems.module.css";

import { useParams } from "react-router-dom";
import Input from "../../../FormHandler/Input";
import Select from "../../../FormHandler/Select";
import { useState } from "react";
import DatePicker from "react-datepicker";
import SaveButton from "../../../SaveButton";
import { addAccountType } from "../../../../Context/AddAccountaing";
import AddAttachment from "../../AddAttachment";
import { UseInput } from "../../../../hooks";
import { useForm } from "react-hook-form";
import { useAddBatche } from "../../../../hooks/fetchers/Batches";
const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate: mutateAddBatche } = useAddBatche(()=>{});
  const {
    accountaingType,
    setAccountaingType,
    openAddAccountant,
    setOpenAddAccountant,
  } = useContext(addAccountType);
  // define variabules

  const itemName = UseInput("", "", true);
  const [description, setDescription] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const itemCode = UseInput("", "", true);
  const [attachment, setAttachment] = useState(null);

  // console.log("attachment is " + attachment);
  // console.log("descrption is " + description);
  const [img, setImg] = useState(null);

  function updateImageDisplay(e) {
    const curFiles = e.target.files;
    if (curFiles?.length === 0) {
      return;
    } else {
      const selectedImages = Array.from(curFiles);

      setImg(selectedImages);
    }
  }

  const onSubmit = (data) => {
    const date = new Date(createdDate);
    const formattedDate = date.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
    var formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("description", data.description);
    formdata.append("dateCreated", formattedDate);
    img && img.forEach((i) => formdata.append("image", i));
    // // console.log({...data, "data": formattedDate});
    mutateAddBatche(formdata);
    // setOpenAddAccountant(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={`${style.AddItems} p-3`}>
        <p className="text-xl  my-3 golden">إضافة صنف جديدة</p>
        <fieldset className={`${style.description} mt-3`}>
          <legend className="text-center">الوصف</legend>
          <div className="row p-3">
            <div className="col-md-6 mb-4">
            <Form.Label>1- اسم الصنف</Form.Label>
              <input 
              placeholder="اكتب اسم الصنف" 
              className="w-full bg-[#2B2B40] text-white rounded-[3px] p-2"
              {...register("name")} />
            </div>
            <div className="col-md-12 mb-4">
              <Form.Group>
                <Form.Label>الوصف</Form.Label>
                <textarea
                  {...register("desc")}
                  className="form-control"
                  placeholder="اكتب الوصف المرفق ..."
                  rows={5}
                  cols={30}
                />
              </Form.Group>
            </div>
            <div className="col-md-6   mb-4">
              <Form.Group className="d-flex flex-column">
                <Form.Label>تاريخ الانشاء</Form.Label>
                <DatePicker
                  selected={createdDate}
                  placeholderText=" ادخل تاريخ الرخصة "
                  onChange={(date) => setCreatedDate(date)}
                  dateFormat="dd-MM-yyyy"
                  className="w-100 form-control"
                />
              </Form.Group>
            </div>
            <div className="col-md-4 mb-4">
              <Input placeholder={" ادخل كود الصنف"} label={"كود الصنف"} />
            </div>
          </div>
        </fieldset>
        <fieldset className={`${style.Attachment} mt-4 p-2`}>
          <legend className="text-center">الملف المرفق </legend>
          <label
            className={`addFileShape pointer my-1 bg-[#2B2B40] p-0 flex flex-col items-center justfiy-center`}
          >
            
                <input type="file" multiple className="hidden" onChange={updateImageDisplay} />  
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M1 8H8M8 8H15M8 8V15M8 8V1"
                    stroke="#EFAA20"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-sm mx-auto text-white">اضافة جديدة</p>
              
            
          </label>
        </fieldset>
        <div className="d-flex my-5 w-90  justify-content-end">
          <Button type="submit" className="sumbmitAddUpdateUser">
            حفظ
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddItems;
