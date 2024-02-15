import React from "react";
import ReactApexChart from "react-apexcharts";

class AllPlansPieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [60, 20, 20],
      options: {
        chart: {
          width: 500,
          type: "donut",
        },
        labels: [`قيد التنفيذ  `, ` معلقة `,`منتهية`],

        colors: ["#03795D","#E40038", "#EFAA20"],
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
                  color: "#FFF",
                  label: "كل المشاريع",
                  formatter: () => `100%`,
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
    const text = document.querySelectorAll("text.apexcharts-text.apexcharts-datalabel-value")
    text[0].setAttribute("fill","#FFFFFF")
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
export default AllPlansPieChart;
