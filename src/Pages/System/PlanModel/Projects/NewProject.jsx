import React from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FormModal } from "../components/FormModal";
import { InputLabel } from "../components/InputLabel";
export default function NewProject() {
  return (
    <div>
      <FormModal title={"تفاصيل المهمة"}>
        <div className="grid grid-cols-12 mb-5">
          <div className="col-span-5">
            <InputLabel id="new-project-name" label={"اسم المسؤل"} />
            <input
              id="new-project-name"
              type="text"
              className="w-full p-2 bg-[#2B2B40] rounded-[7px]"
              placeholder="اختار اسم المشرف"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 mb-5">
          <div className="col-span-5">
            <InputLabel id="new-project-name" label={"تاريخ التسليم"} />
            <input
              id="new-project-name"
              type="text"
              className="w-full p-2 bg-[#2B2B40] rounded-[7px]"
              placeholder="اضف تاريخ التسليم"
            />
          </div>
          <div className="col-span-2"></div>
          <div className="col-span-5">
            <InputLabel id="find-project" label={"تاريخ الاستلام"} />
            <input
              id="find-project"
              type="text"
              className="w-full p-2 bg-[#2B2B40] rounded-[7px]"
              placeholder="اضف تاريخ الاستلام"
            />
          </div>
        </div>

        <div className="">
          <InputLabel id="new-project-name" label={"تاريخ التسليم"} />
          <CKEditor
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            editor={ClassicEditor}
            data="<h2>تفاصيل الاجتماع</h2>"
            onBlur={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
          />
        </div>
      </FormModal>
      <FormModal title={"ملاحظات العميل"}>
        <div className="">
          <InputLabel id="new-project-name" label={"تاريخ التسليم"} />
          <CKEditor
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            editor={ClassicEditor}
            data="<h2>تفاصيل الاجتماع</h2>"
            onBlur={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
          />
        </div>
      </FormModal>
      <FormModal title={"ملفات المشروع"}>
        <div className="flex gap-2">
          <div
            className={`border !border-[#D59921] !border-dashed max-w-fit rounded-[12.06px] pointer bg-[#2B2B40] py-4 px-2 flex flex-col items-center justfiy-center`}
          >
            <div>
              <svg
                className="m-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M1 8H8M8 8H15M8 8V15M8 8V1"
                  stroke="#EFAA20"
                  stroke-width="2"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-sm mx-auto text-white">اضافة جديدة</p>
            </div>
          </div>
        </div>
      </FormModal>
      <FormModal title={"المرفقات"}>
        <div className="flex gap-2">
          <div
            className={`border !border-[#D59921] !border-dashed max-w-fit rounded-[12.06px] pointer bg-[#2B2B40] py-4 px-2 flex flex-col items-center justfiy-center`}
          >
            <div>
              <svg
                className="m-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M1 8H8M8 8H15M8 8V15M8 8V1"
                  stroke="#EFAA20"
                  stroke-width="2"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-sm mx-auto text-white">اضافة جديدة</p>
            </div>
          </div>
        </div>
      </FormModal>
    </div>
  );
}
