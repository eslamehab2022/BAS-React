import React, { useEffect, useState } from "react";
import myAxiosInstance from "../../../../helper/https";
import { IoIosAdd } from "react-icons/io";
import SearchButton from "../SearchButton";
import { OptionsButton } from "./Test";
import { FormModal } from "../../PlanModel/components/FormModal";
import { toast } from "react-toastify";

import { getAllCategories } from "../../../../helper/fetchers/Categories";
import {useQuery} from 'react-query'
import { useAddCategory, useDeleteCategory, useGetAllCategories } from "../../../../hooks/fetchers/Categories";
import AddModal from "../AddModal";
export default function Orders() {
  const [newCategory,setNewCategory] = useState("")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [category, setCategory] = useState({});
  const {data , isLoading} = useGetAllCategories()
  const {mutate,isSuccess} = useAddCategory(()=> toast.success("تمت الاضافة بنجاح"))
  const {mutate:deleteMutation} = useDeleteCategory()
  const [activeCategories, setActiveCategories] = useState([]);
  useEffect(() => {
    
    myAxiosInstance("category").then((data) => {
      setCategory(data?.data?.category[0]);
    });
    
  }, [isLoading]);
  console.log("isLoading: ", isLoading);
  console.log("category: ", category);
  console.log("data: ", data?.data?.category);





  return (
    <section className="h-full">
      <div className="grid grid-cols-12 gap-2 h-full">
        <div className="bg-[#1E1E2D] col-span-3 rounded-[19px]">
          <div className="p-2 ">
            <p className="w-full text-white text-right my-2">الطلبات</p>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => alert({"name": "نون الف"})}
                className={`add-user-button px-2 text-right !w-full border hover:!border-[#EFAA20] rounded-md  `}
              >
                {"استخدام المشروع"}
              </button>
              
            </div>
          </div>
        </div>

        <div className="bg-[#1E1E2D] col-span-3 rounded-[19px]">
          <div className=" flex flex-col gap-2">
            <div className="p-3">
              <SearchButton />
            </div>
            <p className="w-full px-2 text-white text-right mt-2">
              {"استخدام المشروع"}
            </p>
            {data?.data?.category?.length > 0 ?
            
            data?.data?.category?.map(({ _id, name }, index) => (
              <div
                className={`flex w-full justify-between items-center px-2 text-[#ffffff80] border hover:!border-[#EFAA20] text-base ${"!border-[#EFAA20]"}`}
                key={_id}
              >
                <button
                  // onClick={() => setActive(index)}
                  onClick={() => {
                    setCategory(data?.data?.category[index]);
                  }}
                  className="w-full"
                >
                  <p className="w-full text-white text-right my-3">{name}</p>
                </button>
                <button
                  onClick={() => {
                    deleteMutation(_id);
                  }}
                  className="w-full"
                >
                  حذف
                </button>

                <OptionsButton id={_id} />
              </div>
            )): 
            <p className="text-white text-2xl text-center">{"لا يوجد بيانات لعرضها"}</p>
            }
          </div>
        </div>
        <div className="bg-[#1E1E2D] flex flex-col rounded-[19px] col-span-6 ">
          <div className="py-4 px-4 h-full flex flex-col">
            <button
              onClick={handleShow}
              className="flex flex-col justify-center items-center gap-1 w-full bg-[#2B2B40] p-2 border !border-[#EFAA20] !border-dashed rounded-xl"
            >
              <IoIosAdd fontSize={35} color="#EFAA20" />
              <p className=" text-white">أضافة جديدة</p>
            </button>
            <AddModal
          title={"اضافة جديدة"}
          show={show}
          handleClose={handleClose}
          setNewValue={setNewCategory}
          handleSave={() => {
            mutate({"name": newCategory});
            
            handleClose()
            
          }}
        />
            <div className="p-2 flex-1">
              {/* <div
                className={`relative h-full py-4  px-2 border !border-[#d5992133] `}
              > */}
                <FormModal title={category?.name} className={"h-full"}>

                
                <div className="h-full overflow-y-scroll scrollbar-none">
                  {
                    category?.subcategories?.length > 0?
                    category?.subcategories?.map(({ _id, name }) => (
                    <div
                      className={`flex w-full justify-between items-center px-2 text-[#ffffff80] border hover:!border-[#EFAA20] text-base ${" !border-transparent"}`}
                      key={_id}
                    >
                      <button
                        //  onClick={() =>
                        //   setActive(index)
                        // }
                        className="w-full"
                      >
                        <p className="w-full text-white text-right my-3">
                          {name}
                        </p>
                      </button>
                      <OptionsButton />
                    </div>
                  )):
                  <p className="text-white text-2xl text-center">{"لا يوجد بيانات لعرضها"}</p>}
                </div>
                </FormModal>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
