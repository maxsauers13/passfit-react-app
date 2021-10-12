import React from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class BarChart extends React.Component {
    getResult(component) {
        if (localStorage.getItem(component) == null) {
            return 0;
        } else {
            return parseInt(localStorage.getItem(component));
        }
    }

    render() {
        const options = {
            animationEnabled: true,
            animationDuration: 500,
            axisX: {
                labelFontFamily: "coolvetica",
                labelFontSize: 16
            },
            axisY: {
                includeZero: true,
                gridThickness: 0,
                labelFontFamily: "coolvetica",
                labelFontSize: 16
            },
            backgroundColor: "#ede6f2",
            dataPointMaxWidth: 200,
			data: [{
				type: "column",
				dataPoints: [
					{ label: "Physical", y: this.getResult("physicalTotal"), color: "#62c1c9" },
					{ label: "Cognitive", y: this.getResult("cognitiveTotal"), color: "#231d5b" },
					{ label: "Psychological", y: this.getResult("psychologicalTotal"), color: "#e7288f" }
				]
			}]
        }
        return <div class="barchart"><CanvasJSChart options={options}/></div>
    }
}

export default BarChart;