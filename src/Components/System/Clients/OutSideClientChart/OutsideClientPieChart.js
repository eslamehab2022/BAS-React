import React from "react";
import ReactApexChart from "react-apexcharts";
import "./index.css";
class OutsideClientPieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [70, 30],
      options: {
        chart: {
          width: 380,
          type: "donut",
        },
        labels: [`داخلى  `],

        colors: ["#E40038", "#151A20"],
        stroke: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },

        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  label: " الخارجي",
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
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
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
          height: 230,
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
      <div>
        <div className="chart-wrap ">
          <div id="chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="donut"
              width={"90%"}
              height={250}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default OutsideClientPieChart;
