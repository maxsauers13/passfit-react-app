import React from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Piechart extends React.Component {
    getProgress(component) {
        if (localStorage.getItem(component) == null) {
            return "✖";
        } else {
            return "✓";
        }
    }

    render() {
        

        const options = {
            explodeOnClick: false,
            animationEnabled: true,
            animationDuration: 250,
            backgroundColor: "#ede6f2",
            labelFontFamily: "coolvetica",
            labelFontSize: 16,
            data: [{
                explodeOnClick: false,
                type: "pie",
                cursor: "pointer",
                toolTipContent: "{name}",
                indexLabel: "{name}",
                indexLabelFontColor: "#ede6f2",
                indexLabelPlacement: "inside",
                indexLabelFontFamily: "coolvetica",
                indexLabelFontSize: 18,
                dataPoints: [
                { name: "Physical: " + this.getProgress("physicalTotal"), y: 1, link:"/physical", color:"#62c1c9" },
                { name: "Cognitive: " + this.getProgress("cognitiveTotal"), y: 1, link:"/cognitive", color:"#231d5b" },
                { name: "Psychological: " + this.getProgress("psychologicalTotal"), y: 1, link:"/psychological", color:"#e7288f" }     
                ]
            }]
        }
        
        options.data[0].click = function(e){ 
            var dataPoint = e.dataPoint;
            var progress = e.dataPoint.name.split(" ")[1];
            if (progress === "✖") {
                window.open(dataPoint.link,'_self');
            }
        };

        return <div class="piechart"><CanvasJSChart options={options}/></div>
    }
}

export default Piechart;