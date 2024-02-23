import React, { useContext, useEffect, useState } from "react";
import myAxiosInstance from "../../../../helper/https";
import { IoIosAdd } from "react-icons/io";
import SearchButton from "../SearchButton";

import { FormModal } from "../../PlanModel/components/FormModal";
import { toast } from "react-toastify";
import { getAllCategories } from "../../../../helper/fetchers/Categories";
import { useQueryClient } from "react-query";
import {
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
import { useDeleteService, useGetAllServices, useUpdateService } from "../../../../hooks/fetchers/Services";
import { useAddSubService, useDeleteSubService, useGetAllSubServices, useUpdateSubService } from "../../../../hooks/fetchers/SubService";
const settingtypes = ["uses", "service", "type"];

const UpdateModal = ({ id, show, setShow }) => {
  const [newCategory, setNewCategory] = useState("");
  const [successfull, setSuccsesfull] = useState(false);

  const handleClose = () => setShow(false);
  const queryClient = useQueryClient();
  const { mutate: updateMutation } = useUpdateCategory(() => {
    queryClient.invalidateQueries("category");
    setSuccsesfull(true);
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
const UpdateSubModal = ({ categoryId, subId, show, setShow }) => {
  const [newCategory, setNewCategory] = useState("");
  const [successfull, setSuccsesfull] = useState(false);

  const handleClose = () => setShow(false);
  const queryClient = useQueryClient();
  const { mutate: updateMutation } = useUpdateSubCategory(
    () => {
      queryClient.invalidateQueries("sub-category");
      setSuccsesfull(true);
    },
    categoryId,
    subId
  );
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



const UpdateServiceModal = ({ id, show, setShow }) => {
  const [newService, setNewService] = useState("");
  const [successfull, setSuccsesfull] = useState(false);

  const handleClose = () => setShow(false);
  const queryClient = useQueryClient();
  const { mutate: updateMutation } = useUpdateService(() => {
    queryClient.invalidateQueries("services");
    setSuccsesfull(true);
  }, id);
  return (
    <>
      <AddModal
        title={"تعديل"}
        show={show}
        handleClose={handleClose}
        setNewValue={setNewService}
        handleSave={() => {
          updateMutation({ name: newService });

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
const UpdateSubServiceModal = ({ serviceId, subId, show, setShow }) => {
  const [newService, setNewService] = useState("");
  const [successfull, setSuccsesfull] = useState(false);

  const handleClose = () => setShow(false);
  const queryClient = useQueryClient();
  const { mutate: updateMutation } = useUpdateSubService(
    () => {
      queryClient.invalidateQueries("sub-service");
      setSuccsesfull(true);
    },
    serviceId,
    subId
  );
  return (
    <>
      <AddModal
        title={"تعديل"}
        show={show}
        handleClose={handleClose}
        setNewValue={setNewService}
        handleSave={() => {
          updateMutation({ name: newService });

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
  const [service, setService] = useState({});
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const { data, isLoading, isSuccess } = useGetAllCategories();
  const {
    data: servicesData,
    isLoading: servicesIsLoading,
    isSuccess: servicesIsSuccess,
  } = useGetAllServices();

  const { mutate: deleteCategoryMutation } = useDeleteCategory();
  const { mutate: deleteServiceMutation } = useDeleteService();

  const [activeCategories, setActiveCategories] = useState([]);
  const [activeServices, setActiveServices] = useState([]);
  const { setSettingType, orderType, setOrderType } =
    useContext(SettingContext);
  useEffect(() => {
    setSettingType("uses");
  }, []);
  useEffect(() => {
    isSuccess && setCategory(data?.data?.category[0] || {});
    servicesIsSuccess && setService(servicesData?.data?.services[0] || {})
    // console.log("servicesData: ",servicesData);
  }, [isSuccess,servicesIsSuccess]);
  console.log("servicesData: ", servicesData?.data?.services);
  return (
    <section className="!h-full">
      <div className="grid grid-cols-12 gap-2 !h-full">
        <div className="bg-[#1E1E2D] col-span-3 !h-full rounded-[19px]">
          <div className="p-2 ">
            <p className="w-full text-white text-right my-3">الطلبات</p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setOrderType(1)}
                className={`add-user-button px-2 text-right !w-full border hover:!border-[#EFAA20] rounded-md ${
                  orderType === 1 ? "!border-[#EFAA20]" : ""
                } `}
              >
                {"استخدام المشروع"}
              </button>
              <button
                onClick={() => setOrderType(2)}
                className={`add-user-button px-2 text-right !w-full border hover:!border-[#EFAA20] rounded-md ${
                  orderType === 2 ? "!border-[#EFAA20]" : ""
                } `}
              >
                {"خدمات المشروع"}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#1E1E2D] col-span-3 !h-full rounded-[19px]">
          <div className=" flex flex-col gap-2">
            <div className="p-3">
              <SearchButton />
            </div>
            <p className="w-full px-2 text-white text-right mt-2">
              {orderType === 1
                ? "كل استخدمات المشروع"
                : orderType === 2
                ? "كل خدمات المشروع"
                : orderType === 3
                ? "نوع المشروع"
                : null}
            </p>
            {orderType === 1 ? (
              <>
                {data?.data?.category?.length > 0 ? (
                  data?.data?.category?.map(({ _id, name }, index) => (
                    <div
                      className={`flex w-full justify-between items-center px-2 text-[#ffffff80] border hover:!border-[#EFAA20] text-base ${
                        activeCategories === _id
                          ? "!border-[#EFAA20]"
                          : "!border-transparent"
                      }`}
                      key={_id}
                    >
                      <button
                        onClick={() => {
                          setActiveCategories(_id);
                          setCategory(data?.data?.category[index]);
                        }}
                        className="w-full"
                      >
                        <p className="w-full text-white text-right my-3">
                          {name}
                        </p>
                      </button>

                      <UpdateModal id={_id} show={show} setShow={setShow} />
                      <OptionsButton
                        id={_id}
                        onUpdate={handleShow}
                        onDelete={() => deleteCategoryMutation(_id)}
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-white text-2xl text-center">
                    {"لا يوجد بيانات لعرضها"}
                  </p>
                )}
              </>
            ) : orderType === 2 ? (
              <>
                {servicesData?.data?.services?.length > 0 ? (
                  servicesData?.data?.services?.map(({ _id, name }, index) => (
                    <div
                      className={`flex w-full justify-between items-center px-2 text-[#ffffff80] border hover:!border-[#EFAA20] text-base ${
                        activeServices === _id
                          ? "!border-[#EFAA20]"
                          : "!border-transparent"
                      }`}
                      key={_id}
                    >
                      <button
                        onClick={() => {
                          setActiveServices(_id);
                          setService(servicesData?.data?.services[index]);
                        }}
                        className="w-full"
                      >
                        <p className="w-full text-white text-right my-3">
                          {name}
                        </p>
                      </button>

                      <UpdateServiceModal id={_id} show={show} setShow={setShow} />
                      <OptionsButton
                    id={_id}
                    onUpdate={handleShow}
                    onDelete={() => deleteServiceMutation(_id)}
                  />
                    </div>
                  ))
                ) : (
                  <p className="text-white text-2xl text-center">
                    {"لا يوجد بيانات لعرضها"}
                  </p>
                )}
              </>
            ) : null}
          </div>
        </div>
        <div className="bg-[#1E1E2D] flex flex-col rounded-[19px] col-span-6 ">
          {orderType === 1 && <SubCategoriesDesign category={category} />}
          {orderType === 2 && <SubServicesDesign service={service} />}
        </div>
      </div>
    </section>
  );
}

const AddNewButton = ({ ...props }) => {
  return (
    <button
      className="flex flex-col justify-center items-center gap-1 w-full bg-[#2B2B40] p-2 border !border-[#EFAA20] !border-dashed rounded-xl"
      {...props}
    >
      <IoIosAdd fontSize={35} color="#EFAA20" />
      <p className=" text-white">أضافة جديدة</p>
    </button>
  );
};

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
    <div className="py-4 px-4 h-full flex flex-col">
      <AddNewButton onClick={handleShow} />

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
  );
};

const SubCategoriesList = ({ category }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  const queryClient = useQueryClient();
  const { mutate: deleteMutation } = useDeleteSubCategory(() => {});

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
            <UpdateSubModal
              categoryId={category?._id}
              subId={_id}
              show={show}
              setShow={setShow}
            />

            <OptionsButton
              id={_id}
              onUpdate={handleShow}
              onDelete={() => deleteMutation([category._id, _id])}
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





const SubServicesDesign = ({ service }) => {
  const [show, setShow] = useState(false);
  const [newSubService, setNewSubService] = useState({});
  const queryClient = useQueryClient();
  const [successfull, setSuccsesfull] = useState(false);
  const { mutate } = useAddSubService(() => {
    queryClient.invalidateQueries("sub-service");
    setSuccsesfull(true);
  }, service._id);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="py-4 px-4 h-full flex flex-col">
      <AddNewButton onClick={handleShow} />

      <AddModal
        title={"اضافة جديدة"}
        show={show}
        handleClose={handleClose}
        setNewValue={setNewSubService}
        handleSave={() => {
          mutate({ name: newSubService });

          handleClose();
        }}
      />
      <div className="p-2 flex-1">
        {/* <div
        className={`relative h-full py-4  px-2 border !border-[#d5992133] `}
      > */}
        <FormModal title={service?.name} className={"h-full"}>
          <SubServicesList service={service} />
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
  );
};


const SubServicesList = ({ service }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  const queryClient = useQueryClient();
  const { mutate: deleteMutation } = useDeleteSubService(() => {});

  console.log("allSubServices: ", service?.subservices);

  return (
    <div className="h-full overflow-y-scroll scrollbar-none">
      {service?.subservices?.length > 0 ? (
        service?.subservices?.map(({ _id, name }) => (
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
            <UpdateSubServiceModal
              serviceId={service?._id}
              subId={_id}
              show={show}
              setShow={setShow}
            />

            <OptionsButton
              id={_id}
              onUpdate={handleShow}
              onDelete={() => deleteMutation([service._id, _id])}
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
