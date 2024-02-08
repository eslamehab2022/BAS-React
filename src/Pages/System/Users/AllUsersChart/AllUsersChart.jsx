import React, { useContext, useState } from "react";
import "./index.css";
import { showAddUpdateUser } from "../../../../Context/CheckAddUpdateUserVisability";
import AddUserButton from "../../../../Components/System/AddUserButton/AddUserButton";
import SystemControler from "../../../../Components/System/SystemControler/SystemControler";
import Select from "../../../../Components/FormHandler/Select";
import AllUsersPieChart from "../../../../Components/System/Users/AllUsersChart/AllUsersPieChart";
import AllUsersColumnChart from "../../../../Components/System/Users/AllUsersChart/AllUsersColumnChart";
import AddUpdateUser from "../../../../Components/System/Users/AddUpdateUser/AddUpdateUser";
import DeptamentSlider from "../../../../Components/System/Users/AllUsersChart/DeprtamentSlide/DeptamentSlider";
import { CountriesChart } from "./CountriesChart";
import { Link, Outlet } from "react-router-dom";
import AllUserCategories from "../../../../Components/System/Users/AllUserCategories/AllUserCategories";

const AllUsersChart = () => {
  const { showAddUserModel, setShowAddUserModel } =
    useContext(showAddUpdateUser);
  const [showSaudiOption, setShowSaudiOption] = useState(false);

  return (
    <div className="AllUsersChart">
      <SystemControler />

      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-3">
          <AllUserCategories />
        </div>
        <div className="col-span-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AllUsersChart;
