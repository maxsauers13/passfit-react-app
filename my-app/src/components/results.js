import React from 'react';
import Title from './titleform';
import TitleQuestion from './titlequestion';
import BarChart from './barchart';

class Results extends React.Component {
    render() {
        return <div class="wrapper">
            <Title label="Results"></Title>
            <ResultDisplay label="Passfit Score: "></ResultDisplay>
            <BarChart></BarChart>
        </div>
    }
}

export default Results;

class ResultDisplay extends React.Component {
    getTotalResult() {
        if (localStorage.getItem("physicalTotal") == null 
        || localStorage.getItem("cognitiveTotal") == null 
        || localStorage.getItem("psychologicalTotal") == null) {
            return "In Progress";
        } else {
            return localStorage.getItem("totalScore");
        }
    }

    render() {
        return <TitleQuestion label={this.props.label + this.getTotalResult()}></TitleQuestion>
    }
}