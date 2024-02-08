import React from "react";
import ReactApexChart from "react-apexcharts";

class CountryColumnChart extends React.Component {
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
          height: 350,
          type: "bar",
        },
        legend: {
          labels: {
            colors: "#FFF", // Use the color you want (e.g., blue)
          },
        },

        plotOptions: {
          bar: {
            borderRadius: 6,
            columnWidth: this.props.ColumnChart
              ? this.props.ColumnChart
              : "6px",
            dataLabels: {
              position: "top",
            },
          },
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  label: this.props.country,
                  color: "#fff",
                  formatter: (val) => {
                    return "100";
                  },
                },
              },
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
        colors: ["#EFAA20"],

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
        },
      },
    };
  }

  render() {
    return (
      <div id="chart" className="w-100 custom-chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width={"100%"}
          height={230}
        />
      </div>
    );
  }
}

export default CountryColumnChart;
