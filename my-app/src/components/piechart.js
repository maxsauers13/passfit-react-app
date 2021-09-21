import React from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

/** 
class Piechart extends React.Component {
    render() {
        return <div>
            <Image></Image>
            <Map></Map>
        </div>
    }
}

export default Piechart;
class Image extends React.Component {
    render() {
        return <img class="piechart" src={logo} usemap="#piechartmain" alt="PIECHART"></img>;
    }
}

class Map extends React.Component {
    render() {
        return <map name="piechartmain">
            <AreaPhysical></AreaPhysical>
            <AreaCognitive></AreaCognitive>
            <AreaPsychological></AreaPsychological>
        </map>
    }
}

class AreaPhysical extends React.Component {
    render() {
        return <area shape="rect" coords="50,100,175,200" alt="Physical" href="/physical"/>;
    }
}

class AreaCognitive extends React.Component {
    render() {
        return <area shape="rect" coords="250,100,375,200" alt="Cognitive" href="/cognitive"/>;
    }
}

class AreaPsychological extends React.Component {
    render() {
        return <area shape="rect" coords="125,250,300,350" alt="Psychological" href="/psychological"/>;
    }
}

*/

class Piechart extends React.Component {
    render() {
        const options = {
            explodeOnClick: false,
            animationEnabled: true,
            animationDuration: 250,
            backgroundColor: "#ede6f2",
            labelFontFamily: "coolvetica",
            labelFontSize: 20,
            data: [{
                type: "pie",
                cursor: "pointer",
                toolTipContent: "{name}",
                indexLabel: "{name}",
                indexLabelFontColor: "#ede6f2",
                indexLabelPlacement: "inside",
                indexLabelFontFamily: "coolvetica",
                indexLabelFontSize: 20,
                dataPoints: [
                { name: "Physical", y: 1, link:"/physical", color:"#62c1c9" },
                { name: "Cognitive", y: 1, link:"/cognitive", color:"#231d5b"},
                { name: "Psychological", y: 1, link:"/psychological", color:"#e7288f" }     
                ]
            }]
        }
        
        options.data[0].click = function(e){ 
            var dataPoint = e.dataPoint;
            window.open(dataPoint.link,'_self');  
        };

        return <div class="piechart"><CanvasJSChart options={options}/></div>
    }
}

export default Piechart;