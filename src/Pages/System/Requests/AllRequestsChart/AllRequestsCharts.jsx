import React from "react";
import "./index.css";
import AllRequestsPieChart from "../../../../Components/System/Requests/AllRequestsPieChart/AllRequestsPieChart";
import AllRequestLineChart from "../../../../Components/System/Requests/AllRequestlineChart/AllRequestLineChart";
export const AllRequestsCharts = () => {
  return (
    <div className="p-4 flex gap-5 AllRequests items-center h-100 flex-col">
      <div className="AllRequestsPieChartContainer w-100  d-flex align-items-center justify-content-center">
        <AllRequestsPieChart />
      </div>
      <div className="AllRequestsLineChartContainer w-100  d-flex align-items-center justify-content-center">
        <AllRequestLineChart />
      </div>
    </div>
  );
};
