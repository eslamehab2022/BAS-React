import React from "react";
import ReactApexChart from "react-apexcharts";

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: this.props.series,
      options: {
        chart: {
          width: 400,
          type: "donut",
        },
        labels: this.props.labels,
        toolbar: {
          show: true,
          offsetX: -40, // Adjust this value to move the toolbar horizontally
          offsetY: -50, // Adjust this value to move the toolbar vertically
          tools: {
            download: true,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
          },
          autoSelected: "download",
        },

        colors: this.props.colors,
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
                  label: "",
                  formatter: (val) => {
                    // console.log(" val is " + val);
                    return  "message";

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

  render() {
    return (
      <div>
        <div class="chart-wrap">
          <div id="chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="donut"
              width={this.props.width ? this.props.width : 200}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default PieChart;
