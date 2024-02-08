import React from "react";
import ReactApexChart from "react-apexcharts";

class AllClientstLineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltip: {
        enabled: true,
      },
      series: [
        {
          name: "التصميم",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
        },
        {
          name: "الاشراف في التنفيذ",
          data: [50, 60, 40, 20, 36, 39, 40, 30, 10, 10, 20, 20],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },

        stroke: {
          width: [5, 7, 5],
          curve: "smooth",
          dashArray: [0, 0],
        },
        title: {
          text: "Page Statistics",
          align: "right",
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return (
              val +
              " - " +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              ""
            );
          },
        },

        colors: ["#EFAA20", "#00C4C9"],

        yaxis: [
          {
            title: {},
            opposite: true, // Display the Y-axis on the left
            labels: {
              show: true, // Display labels on the left Y-axis
              align: "left", // Align labels to the right
              style: {
                colors: "#ffffff", // Set the color to white
              },
            },
          },
        ],

        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
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

          labels: {
            style: {
              colors: "#ffffff", // Set the color to white for both top and bottom labels
            },
          },
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + " (mins)";
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val + " per session";
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                },
              },
            },
          ],
        },
        grid: {
          borderColor: "#f1f1f1",
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
      <div id="chart" className="w-100 custom-chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          className="w-100 "
          height={270}
        />
      </div>
    );
  }
}
export default AllClientstLineChart;
