import React, { useContext, useEffect, useState } from "react";
import myAxiosInstance from "../../../../helper/https";
import { IoIosAdd } from "react-icons/io";
import SearchButton from "../SearchButton";

import { FormModal } from "../../PlanModel/components/FormModal";
import { toast } from "react-toastify";
import { getAllCategories } from "../../../../helper/fetchers/Categories";
import { useQueryClient } from "react-query";
import {
  useAddCategory,
  useDeleteCategory,
  useGetAllCategories,
  useUpdateCategory,
} from "../../../../hooks/fetchers/Categories";
import AddModal from "../AddModal";
import SettingContext from "../../../../Context/SettingContext";
import {
  useAddSubCategory,
  useDeleteSubCategory,
  useGetAllSubCategories,
  useUpdateSubCategory,
} from "../../../../hooks/fetchers/SubCategory";
import SuccessfullModal from "../../../../Components/Modals/SuccessfullModal";
import { OptionsButton } from "../OptionsButton";
const settingtypes = ["uses", "service", "type"];

const UpdateModal = ({ id ,show,setShow}) => {
  const [newCategory, setNewCategory] = useState("");
  const [successfull, setSuccsesfull] = useState(false);
  
  const handleClose = () => setShow(false);
  
  const { mutate: updateMutation } = useUpdateCategory(() => {
    setSuccsesfull(true)
  }, id);
  return (
    <>
      
      <AddModal
        title={"تعديل"}
        show={show}
        handleClose={handleClose}
        setNewValue={setNewCategory}
        handleSave={() => {
          updateMutation({ name: newCategory });

          handleClose();
        }}
      />
      <SuccessfullModal
        show={successfull}
        message={"تم التعديل بنجاح"}
        handleClose={() => {
          setSuccsesfull(false);
        }}
      />
    </>
  );
};
const UpdateSubModal = ({ categoryId,subId ,show,setShow}) => {
  const [newCategory, setNewCategory] = useState("");
  const [successfull, setSuccsesfull] = useState(false);
  
  const handleClose = () => setShow(false);
  
  const { mutate: updateMutation } = useUpdateSubCategory(() => {
    setSuccsesfull(true)
  },categoryId,subId);
  return (
    <>
      
      <AddModal
        title={"تعديل"}
        show={show}
        handleClose={handleClose}
        setNewValue={setNewCategory}
        handleSave={() => {
          updateMutation({ name: newCategory });

          handleClose();
        }}
      />
      <SuccessfullModal
        show={successfull}
        message={"تم التعديل بنجاح"}
        handleClose={() => {
          setSuccsesfull(false);
        }}
      />
    </>
  );
};

export default function Orders() {
  const [category, setCategory] = useState({});
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const { data, isLoading } = useGetAllCategories();
  const { mutate: deleteMutation } = useDeleteCategory();

  const [activeCategories, setActiveCategories] = useState([]);
  const { setSettingType } = useContext(SettingContext);
  useEffect(() => {
    setSettingType("uses");
  }, []);
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
                onClick={() => alert({ name: "نون الف" })}
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
            {data?.data?.category?.length > 0 ? (
              data?.data?.category?.map(({ _id, name }, index) => (
                <div
                  className={`flex w-full justify-between items-center px-2 text-[#ffffff80] border hover:!border-[#EFAA20] text-base ${
                    activeCategories == _id
                      ? "!border-[#EFAA20]"
                      : "!border-transparent"
                  }`}
                  key={_id}
                >
                  <button
                    // onClick={() => setActive(index)}
                    onClick={() => {
                      setActiveCategories(_id);
                      setCategory(data?.data?.category[index]);
                    }}
                    className="w-full"
                  >
                    <p className="w-full text-white text-right my-3">{name}</p>
                  </button>
                  
                  <UpdateModal id={_id} show={show} setShow={setShow}/>
                  <OptionsButton
                    id={_id}
                    onUpdate={handleShow}
                    onDelete={() => deleteMutation(_id)}
                  />
                </div>
              ))
            ) : (
              <p className="text-white text-2xl text-center">
                {"لا يوجد بيانات لعرضها"}
              </p>
            )}
          </div>
        </div>
        <SubCategoriesDesign category={category} />
      </div>
    </section>
  );
}

const SubCategoriesDesign = ({ category }) => {
  const [show, setShow] = useState(false);
  const [newSubcategory, setNewSubCategory] = useState({});
  const queryClient = useQueryClient();
  const [successfull, setSuccsesfull] = useState(false);
  const { mutate } = useAddSubCategory(() => {
    queryClient.invalidateQueries("sub-category");
    setSuccsesfull(true);
  }, category._id);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
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
          setNewValue={setNewSubCategory}
          handleSave={() => {
            mutate({ name: newSubcategory });

            handleClose();
          }}
        />
        <div className="p-2 flex-1">
          {/* <div
        className={`relative h-full py-4  px-2 border !border-[#d5992133] `}
      > */}
          <FormModal title={category?.name} className={"h-full"}>
            <SubCategoriesList category={category} />
            <SuccessfullModal
              show={successfull}
              message={"تمت الاضافة بنجاح"}
              handleClose={() => {
                setSuccsesfull(false);
              }}
            />
          </FormModal>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

const SubCategoriesList = ({ category }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { data } = useGetAllSubCategories(category._id);
  const { mutate: deleteMutation } = useDeleteSubCategory();

  console.log("allSubCategories: ", category?.subcategories);

  return (
    <div className="h-full overflow-y-scroll scrollbar-none">
      {category?.subcategories?.length > 0 ? (
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
              <p className="w-full text-white text-right my-3">{name}</p>
            </button>
            <UpdateSubModal categoryId={category?._id} subId={_id} show={show} setShow={setShow}/>

            <OptionsButton 
              
              
              id={_id}
              onUpdate={handleShow}
              onDelete={() => deleteMutation([category._id,_id])}
             />





          </div>
        ))
      ) : (
        <p className="text-white text-2xl text-center">
          {"لا يوجد بيانات لعرضها"}
        </p>
      )}
    </div>
  );
};
