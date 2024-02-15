import React from "react";
import ReactApexChart from "react-apexcharts";
import "./index.css";

class   AllUsersPieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [70, 30],

      options: {
        chart: {
          type: "donut",
        },
        labels: [`السعودية  `, `مصر   `],

        colors: ["#03795D", "#F1416C"],
        stroke: {
          show: false, // Set this to false to remove the border of the donut segments
        },
        dataLabels: {
          enabled: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
                height: 300,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
        legend: {
          position: "left",
          offsetY: 0,
          height: 1000,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  label: "كل المستخدمين",
                  color: "#fff",
                  formatter: (val) => {
                    return "100";
                  },
                },
              },
              value: {
                show: true,
                fontSize: "16px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 400,
                color: "#fff",
                offsetY: 16,
                formatter: function (val) {
                  return 40;
                },
              },
            },
          },
        },
      },
    };
  }
  componentDidMount() {
    const text = document.querySelectorAll(
      "text.apexcharts-text.apexcharts-datalabel-value"
    );
    text[0].setAttribute("fill", "#FFFFFF");
  }
  render() {
    return (
      <div className="chart-wrap h-100">
        <div id="chart" className="h-100  overflow-x-hidden">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            width={"450px"}
          ></ReactApexChart>  
        </div>
      </div>
    );
  }
}
export default AllUsersPieChart;
