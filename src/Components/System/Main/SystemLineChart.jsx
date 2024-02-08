import React from "react";
import ReactApexChart from "react-apexcharts";
import "./MainSystem.css";
class SystemLineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "employee rate",
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2],
        },
      ],
      options: {
        chart: {
          height: 150,
          type: "bar",
          
        },
        legend: {
          labels: {
            colors: "#FFF", // Use the color you want (e.g., blue)
          },
        },
        plotOptions: {
          bar: {
            columnWidth: 10,
            borderRadius: 5,
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: "14px",
            colors: ["#fff"],
          },
        },
        colors: ["#00C4C9"],
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "FFF",
              colorTo: "#FFF",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },

        xaxis: {
          categories: [
            "مدني",
            "معماري",
            "كهربا",
            "ميكانيكا",
            "الحسابات",
            "الموارد البشرية",
            "البرمجة",
          ],
          position: "top",
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#fff",
                colorTo: "#fff",
                stops: [0, 100],    
                opacityFrom: 0.9,
                opacityTo: 1,
              },
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart" className="w-90  systemLineChart custom-chart h-90">
        <ReactApexChart
          className="p-0"
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width={"100%"}
          height={"90%"}
        />
      </div>
    );
  }
}

export default SystemLineChart;
