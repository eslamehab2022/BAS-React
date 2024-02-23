import { useContext, useEffect, useState } from "react";
import SystemControler from "../../../Components/System/SystemControler/SystemControler";
import { Outlet, useLocation } from "react-router-dom";
import AddNewTimeLine from "../../../Components/AddNewBtn/Settings/AddNewTimeLine";
import AddNewCitizenServices from "../../../Components/AddNewBtn/Settings/AddNewCitizenServices";
import AddNewOrders from "../../../Components/AddNewBtn/Settings/AddNewOrders";
import { toast } from "react-toastify";

import AddUpdateReciption from "../../../Components/System/Settings/Reception/AddUpdateReception";
import SettingContext from "../../../Context/SettingContext";
import AddNewAccounating from "../../../Components/AddNewBtn/Settings/AddNewAccounating";
import AddModal from "./AddModal";
import { useAddCategory } from "../../../hooks/fetchers/Categories";
import SuccessfullModal from "../../../Components/Modals/SuccessfullModal";
import { useQueryClient } from "react-query";
import { useAddService } from "../../../hooks/fetchers/Services";
import { useAddClause, useUpdateClause } from "../../../hooks/fetchers/Clause";

const Settings = () => {
  const [clause, setClause] = useState({});
  const {
    settingType,
    setSettingType,
    ReciptionType,
    setReciptionType,
    orderType,
    setOrderType,
    citizenServicesType,
    setCitizenServicesType,
  } = useContext(SettingContext);
  const [vacations, setVacations] = useState({});
  const [services, setServices] = useState({});
  const [successfull, setSuccsesfull] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const queryClient = useQueryClient();
  // ***********************************
  const [newCategory, setNewCategory] = useState("");
  const [newService, setNewService] = useState("");

  const {
    mutate: mutateCategory,
    isSuccess,
    isError,
    error,
  } = useAddCategory(() => {
    queryClient.invalidateQueries("category");
    setSuccsesfull(true);
  });
  const { mutate: mutateService } = useAddService(() => {
    queryClient.invalidateQueries("services");
    setSuccsesfull(true);
  });
  const { mutate: mutateClause } = useAddClause(() => {
    queryClient.invalidateQueries("clause");
    setSuccsesfull(true);
  });

  // ***********************************
  const [show, setShow] = useState(false);

  useEffect(() => {
    setErrorModal(isError);
    // console.log(error?.message);
  }, [isError]);
  let { pathname } = useLocation();
  let pagePath = pathname.split("/System/Settings/")[1];
  const handleOpen = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    // handleCloseDelete();
    // console.log("Delete");
  };
  const handleAddButton = () => {
    handleOpen();
    if (pagePath === "Reception") {
      console.log("This is Reception Page");
    } else if (pagePath === "Orders") {
      console.log("This is Orders Page");
    } else if (pagePath === "Accounating") {
      console.log("This is Accounating Page");
    } else if (pagePath === "CitizenServices") {
      console.log("This is CitizenServices Page");
    } else if (pagePath === "TimeLine") {
      console.log("This is TimeLine Page");
    }
    // handleOpen()
  };
  // console.log("settingType: ", settingType);
  return (
    <div className="">
      <SystemControler
        child={
          <button
            onClick={handleAddButton}
            className="add-user-button rounded-md text-white"
          >
            إضافة جديدة
          </button>
        }
      />
      {/* {pagePath === "Reception" ? (
        <AddUpdateReciption
          handleClose={handleClose}
          ReciptionType={ReciptionType}
          id={null}
          show={show}
          setShow={setShow}
        />
      ) : pagePath === "Orders" && settingType === "settings/orders/uses" ? (
        <AddNewOrders
          handleClose={handleClose}
          title={"اضافة استخدام جديد للمشروع "}
          show={show}
        />
      ) : pagePath === "Orders" && settingType === "settings/orders/service" ? (
        <AddNewOrders
          handleClose={handleClose}
          title={"اضافة خدمة جديدة للمشروع "}
          show={show}
        />
      ) : pagePath === "Orders" && settingType === "settings/orders/type" ? (
        <AddNewOrders
          handleClose={handleClose}
          title={"اضافة نوع مشروع جديد للمشروع "}
          show={show}
        />
      ) : pagePath === "Accounating" ? (
        <AddNewAccounating
          handleClose={handleClose}
          title={"اضافة بند جديد"}
          show={show}
        />
      ) : pagePath === "CitizenServices" &&
        settingType === "settings/Citizen/vacations" ? (
        <AddNewCitizenServices
          handleClose={handleClose}
          title={"اضافة نوع اجازة جديد"}
          show={show}
          type={"vacations"}
        />
      ) : pagePath === "CitizenServices" &&
        settingType === "settings/Citizen/services" ? (
        <AddNewCitizenServices
          handleClose={handleClose}
          title={"اضافة خدمة جديدة"}
          show={show}
          type={"services"}
        />
      ) : pagePath === "TimeLine" ? (
        <AddNewTimeLine
          handleClose={handleClose}
          title={"اضافة مرحله للخطه الزمنيه"}
          show={show}
        />
      ) : null} */}

      {pagePath === "Reception" ? (
        <AddUpdateReciption
          handleClose={handleClose}
          ReciptionType={ReciptionType}
          id={null}
          show={show}
          setShow={setShow}
        />
      ) : null}

      {orderType === 1 && pagePath === "Orders" && (
        <AddModal
          title={"اضافة جديدة"}
          show={show}
          handleClose={handleClose}
          setNewValue={setNewCategory}
          handleSave={() => {
            mutateCategory({ name: newCategory });

            handleClose();
          }}
        />
      )}
      {orderType === 2 && pagePath === "Orders" && (
        <AddModal
          title={"اضافة جديدة"}
          show={show}
          handleClose={handleClose}
          setNewValue={setNewService}
          handleSave={() => {
            mutateService({ name: newService });

            handleClose();
          }}
        />
      )}
      {orderType === 1 || orderType === 2 ? (
        <>
          <SuccessfullModal
            show={successfull}
            message={"تمت الاضافة بنجاح"}
            handleClose={() => {
              setSuccsesfull(false);
            }}
          />
          <SuccessfullModal
            status="error"
            show={errorModal}
            message={error?.message}
            handleClose={() => {
              setErrorModal(false);
            }}
          />
        </>
      ) : null}
      {citizenServicesType === 1 && pagePath === "CitizenServices" && (
        <AddNewCitizenServices
          handleClose={handleClose}
          title={"اضافة نوع اجازة جديد"}
          show={show}
          setData={setVacations}
          type={"vacations"}
          // onSave={()=>{
          //   console.log("vacations: ",vacations);
          // }}
        />
      )}
      {citizenServicesType === 2 && pagePath === "CitizenServices" && (
        <AddNewCitizenServices
          handleClose={handleClose}
          title={"اضافة خدمة جديدة"}
          show={show}
          setData={setServices}
          type={"services"}
          // onSave={()=>{
          //   console.log("services: ",services);
          // }}
        />
      )}

      {/* *********************************** */}
      {pagePath === "Accounating" ? (
        <AddNewAccounating
          handleClose={handleClose}
          title={"اضافة بند جديد"}
          show={show}
          setData={setClause}
          onSave={() => {
            console.log("Mutated Clause: ", clause);
            // mutateClause(clause)
          }}
        />
      ) : null}
      <div className="h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
