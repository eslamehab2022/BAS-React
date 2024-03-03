// import React from "react";
// import ReactApexChart from "react-apexcharts";

// class CountryPieChart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       series: [
//         this.props.HR,
//         this.props.employee,
//         this.props.admin,
//         this.props.officeManager,
//         this.props.audit,
//         this.props.senior,
//         this.props.accountant,
//         this.props.administrator,
//       ],
//       options: {
//         annotations: {
//           points: [
//             {
//               x: "50%", // X-coordinate, you can adjust this value
//               y: "50%", // Y-coordinate, you can adjust this value
//               label: {
//                 text: "Custom Text",
//                 style: {
//                   fontSize: "16px",
//                   color: "#FF5733", // Text color
//                 },
//               },
//             },
//           ],
//         },
//         plotOptions: {
//           pie: {
//             donut: {
//               labels: {
//                 show: true,
//                 total: {
//                   show: true,
//                   label: " المستخدمين",
//                   color: "#fff",
//                   formatter: (val) => {
//                     return "100";
//                   },
//                 },
//               },
//             },
//           },
//         },
//         chart: {
//           width: 380,
//           type: "donut",
//         },
//         labels: [
//           `  مدير المكتب `,
//           `مدير القسم`,
//           `موظفين`,
//           `  مدير المكتب `,
//           `مدير القسم`,
//           `موظفين`,
//           `  مدير المكتب `,
//           `مدير القسم`,
//         ],
//         stroke: {
//           show: false, // Set this to false to remove the border of the donut segments
//         },
//         dataLabels: {
//           enabled: false,
//         },
//         // colors: ["#EFAA20", "#FD6074", "#03795D"],
//         responsive: [
//           {
//             breakpoint: 480,
//             options: {
//               chart: {
//                 width: 200,
//               },
//               legend: {
//                 show: false,
//               },
//             },
//           },
//         ],
//         legend: {
//           position: "left",
//           offsetY: 0,
//           height: 230,
//         },
//       },
//     };
//   }
//   componentDidMount() {
//     const text = document.querySelectorAll(
//       "text.apexcharts-text.apexcharts-datalabel-value"
//     );
//     text[0].setAttribute("fill", "#FFFFFF");
//   }
//   componentDidUpdate(prevProps) {
//     // Check if the props Saudi or Egypet have changed
//     if (
//       prevProps.HR !== this.props.HR ||
//       prevProps.employee !== this.props.employee ||
//       prevProps.admin !== this.props.admin ||
//       prevProps.officeManager !== this.props.officeManager ||
//       prevProps.audit !== this.props.audit ||
//       prevProps.senior !== this.props.senior ||
//       prevProps.accountant !== this.props.accountant ||
//       prevProps.administrator !== this.props.administrator
//     ) {
//       // If changed, update the state with new values
//       this.setState({
//           series: [
//             this.props.HR,
//             this.props.employee,
//             this.props.admin,
//             this.props.officeManager,
//             this.props.audit,
//             this.props.senior,
//             this.props.accountant,
//             this.props.administrator,
//           ],
//       });
//     }
//   }
//   render() {
//     return (
//       <div className="countryPiechart">
//         <div className="chart-wrap">
//           <div id="chart">
//             <ReactApexChart
//               options={this.state.options}
//               series={this.state.series}
//               type="donut"
//               width={"400px"}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default CountryPieChart;
import React from "react";
import ReactApexChart from "react-apexcharts";

class CountryPieChart extends React.Component {
  constructor(props) {
    super(props);
    //   {
    //     "admin": 4,
    //     "employee": 3,
    //     "office manager": 1,
    //     "audit": 0,
    //     "senior": 0,
    //     "accountant": 0,
    //     "HR": 0,
    //     "administrator": 0
    // }
    this.state = {
      series: [
        this.props.HR,
        this.props.accountant,
        this.props.admin,
        this.props.officeManager,
        this.props.audit,
        this.props.senior,
        this.props.employee,
        this.props.administrator,
      ],
      options: {
        annotations: {
          points: [
            {
              x: "50%",
              y: "50%",
              label: {
                text: "Custom Text",
                style: {
                  fontSize: "16px",
                  color: "#FF5733",
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
        labels: [
          "موارد بشرية",
          "موظفين",        
          "مدير",
          "مدير المكتب",
          "مدقق",
          "كبير",
          "محاسب",
          "مدير نظام",
        ],
        stroke: {
          show: false,
        },
        dataLabels: {
          enabled: false,
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

  componentDidUpdate(prevProps) {
    // Check if any of the props have changed
    if (
      Object.keys(prevProps).some(
        (prop) => prevProps[prop] !== this.props[prop]
      )
    ) {
      this.setState({
        series: [
          this.props.HR,
          this.props.employee,
          this.props.admin,
          this.props.officeManager,
          this.props.audit,
          this.props.senior,
          this.props.accountant,
          this.props.administrator,
        ],
      });
    }
  }

  render() {
    const { options, series } = this.state;

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
