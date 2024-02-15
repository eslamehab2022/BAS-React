import React from "react";
import ReactApexChart from "react-apexcharts";

class DesignRequestChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [50, 30, 10, 10],
      options: {
        chart: {
          width: 380,
          type: "donut",
        },
        labels: [`قيد التنفيذ `, `فى الانتظار  `, `منتهية`, `مرفوضة`],

        colors: ["#4200FF", "#D59921", "#03795D", "#E40038"],
        stroke: {
          show: false, // Set this to false to remove the border of the donut segments
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
                  label: "طلبات التصميم",
                  color: "#fff",
                  formatter: (val) => {
                    return "100";
                  },
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
        <div className="chart-wrap">
          <div id="chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="donut"
              width={400}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default DesignRequestChart;
