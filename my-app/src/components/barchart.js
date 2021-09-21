import React from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class BarChart extends React.Component {
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
					{ label: "Physical", y: parseInt(localStorage.getItem("physicalTotal")), color: "#62c1c9" },
					{ label: "Cognitive", y: parseInt(localStorage.getItem("cognitiveTotal")), color: "#231d5b" },
					{ label: "Psychological", y: parseInt(localStorage.getItem("psychologicalTotal")), color: "#e7288f" }
				]
			}]
        }
        return <div class="barchart"><CanvasJSChart options={options}/></div>
    }
}

export default BarChart;