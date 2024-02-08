import React from "react";
import ReactApexChart from "react-apexcharts";
class MonthlyApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Inflation",
          data: [0, 0, 0, 0, 0, 0, 0, 2.3, 1.4, 0.8, 0.0, 0.0],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "bar",
          
        },
        plotOptions: {
          bar: {
            colors: {
              ranges: [
                {
                  from: 60,
                  to: 90,

                  color: "#FFF    ", // Custom color for specific data range
                },
              ],
            },
            borderRadius: 10,
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
            fontSize: "12px",
            colors: ["#FFF"],
          },
        },

        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
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
                colorFrom: "#D59921",
                colorTo: "#D59921",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
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
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D59921",
                colorTo: "#D59921",
                stops: [0, 100],
                opacityFrom: 0.7,
                opacityTo: 0.9,
              },
            },
          },
        },
        colors: ["#D59921   ", "  #D59921 "],
      },
    };
  }
//   componentDidMount() {
//     const text = document.querySelectorAll(
//       "text.apexcharts-text.apexcharts-datalabel-value"
//     );
//     text && text[0].setAttribute("fill", "#FFFFFF");
//   }

  render() {
    return (
      <div id="chart" className="w-100 custom-chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={300}
        />
      </div>
    );
  }
}

export default MonthlyApexChart;
