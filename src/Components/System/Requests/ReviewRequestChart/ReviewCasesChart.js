import React from "react";
import ReactApexChart from "react-apexcharts";

class ReviewCasesChart extends React.Component {
    constructor(props) {
        super(props);



        const { projectType, color } = this.props

        this.state = {

            series: [2,9],
            options: {
                chart: {
                    width: 380,
                    type: 'donut',
                },
                labels: [projectType],




                colors: [color,"#151A20"],
                stroke: {
                    show: false // Set this to false to remove the border of the donut segments
                },
                dataLabels: {
                    enabled: false
                },


                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            show: false
                        }
                    }
                }],
                legend: {
                    position: 'left',
                    offsetY: 0,
                    height: 230,
                }
            },


        };
    }

    componentDidUpdate(prevProps) {
        // Check if the color prop has changed
        if (this.props.color !== prevProps.color) {
            this.updateChart(this.props.color);
        }
    }
    updateChart(newColor) {
        // Perform actions to update the chart with the new color
        this.setState((prevState) => ({
            options: {
              ...prevState.options,
              colors: [newColor,"#151A20"],
            },
          }));

    }
    componentDidMount() {
        this.updateChart(this.props.color);
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
                        <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={400} />
                    </div>
                </div>


            </div>)
    }
}
export default ReviewCasesChart