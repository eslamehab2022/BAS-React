import React from "react";
import ReactApexChart from "react-apexcharts";

class CountryPieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [20, 35, 20],
      options: {
        annotations: {
          points: [
            {
              x: "50%", // X-coordinate, you can adjust this value
              y: "50%", // Y-coordinate, you can adjust this value
              label: {
                text: "Custom Text",
                style: {
                  fontSize: "16px",
                  color: "#FF5733", // Text color
                },
              },
            },
          ],
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  label: " المستخدمين",
                  color: "#fff",
                  formatter: (val) => {
                    return "100";
                  },
                },
              },
            },
          },
        },
        chart: {
          width: 380,
          type: "donut",
        },
        labels: [`  مدير المكتب    `, `مدير القسم      `, `موظفين `],
        stroke: {
          show: false, // Set this to false to remove the border of the donut segments
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#EFAA20", "#FD6074", "#03795D"],
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
      <div className="countryPiechart">
        <div className="chart-wrap">
          <div id="chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="donut"
              width={"400px"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CountryPieChart;
