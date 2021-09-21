import React from 'react';
import logo from '../img/piechart.png';

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