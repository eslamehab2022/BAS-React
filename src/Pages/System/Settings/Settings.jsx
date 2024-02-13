import { useContext, useState } from "react";
import SystemControler from "../../../Components/System/SystemControler/SystemControler";
import { Outlet, useLocation } from "react-router-dom";
import AddNewTimeLine from "../../../Components/AddNewBtn/Settings/AddNewTimeLine";
import AddNewCitizenServices from "../../../Components/AddNewBtn/Settings/AddNewCitizenServices";
import AddNewOrders from "../../../Components/AddNewBtn/Settings/AddNewOrders";

import AddUpdateReciption from "../../../Components/System/Settings/Reception/AddUpdateReception";
import SettingContext from "../../../Context/SettingContext";
import AddNewAccounating from "../../../Components/AddNewBtn/Settings/AddNewAccounating";
const Settings = () => {
  const { settingType, setSettingType, ReciptionType, setReciptionType } =
    useContext(SettingContext);

  const [show, setShow] = useState(false);
  let { pathname } = useLocation();
  let pagePath = pathname.split("/System/Settings/")[1];
  const handleOpen = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    // handleCloseDelete();
    console.log("Delete");
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
  console.log("settingType: ", settingType);
  return (
    <div className="w-full h-full">
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
      {pagePath === "Reception" ? (
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
      ) : null}
      <div className="h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
