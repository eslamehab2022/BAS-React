import React, { useEffect, useState } from "react";
import myAxiosInstance from "../../../../helper/https";
import SearchButton from "../SearchButton";
import { OptionsButton } from "./Test";
import { FormModal } from "../../PlanModel/components/FormModal";

export default function Orders() {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    myAxiosInstance("category").then((data) => {
      setCategories(data?.data?.category);
      setSubCategories(data?.data?.category[0]?.subcategories);

      // console.log("categories: ",data);
    });
    setIsLoading(false);
  }, [isLoading]);
  console.log("isLoading: ", isLoading);
  console.log("categories: ", categories);
  console.log("subCategories: ", subCategories);
  return (
    <section className="h-full">
      <div className="grid grid-cols-12 gap-2 h-full">
        <div className="bg-[#1E1E2D] col-span-3 rounded-[19px]">
          <div className="p-2 ">
            <p className="w-full text-white text-right my-2">الطلبات</p>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => alert("Hello world")}
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
            {categories?.length > 0 ?
            
            categories?.map(({ _id, name }, index) => (
              <div
                className={`flex w-full justify-between items-center px-2 text-[#ffffff80] border hover:!border-[#EFAA20] text-base ${"!border-[#EFAA20]"}`}
                key={_id}
              >
                <button
                  // onClick={() => setActive(index)}
                  onClick={() => {
                    setSubCategories(categories[index].subcategories);
                  }}
                  className="w-full"
                >
                  <p className="w-full text-white text-right my-3">{name}</p>
                </button>
                <OptionsButton />
              </div>
            )): 
            <p className="text-white text-2xl text-center">{"لا يوجد بيانات لعرضها"}</p>
            }
          </div>
        </div>
        <div className="bg-[#1E1E2D] flex flex-col rounded-[19px] col-span-6 ">
          <div className="py-4 px-4 h-full flex flex-col">
            <button
              // onClick={handleShow}
              className="flex flex-col justify-center items-center gap-1 w-full bg-[#2B2B40] p-2 border !border-[#EFAA20] !border-dashed rounded-xl"
            >
              <span>
                <svg
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
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <p className=" text-white">أضافة جديدة</p>
            </button>

            <div className="p-2 flex-1">
              {/* <div
                className={`relative h-full py-4  px-2 border !border-[#d5992133] `}
              > */}
                <FormModal title={"subCategory?.name"} className={"h-full"}>

                
                <div className="h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-[#C8D0D0] scrollbar-track-transparent">
                  {
                    subCategories?.length > 0?
                  subCategories?.map(({ _id, name }) => (
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
