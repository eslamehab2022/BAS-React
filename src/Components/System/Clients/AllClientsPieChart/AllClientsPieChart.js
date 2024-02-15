import React from "react";
import ReactApexChart from "react-apexcharts";

class AllClientsPieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [70, 30],
      title: this.props.title,
      options: {
        chart: {
          width: 500,
          type: "donut",
        },
        labels: [`داخلى `, ` خارجى  `],

        colors: ["#E40038", "#EFAA20"],
        stroke: {
          show: false, // Set this to false to remove the border of the donut segments
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "left",
          offsetY: 0,
          height: 230,
        },
        


        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  label: "كل العملاء",
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
    this.componentDidMount = () => {
      console.log("series 0 is " + this.state.series[0]);
    };
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
export default AllClientsPieChart;
