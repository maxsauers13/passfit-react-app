import React from 'react';
import Title from './titleform';
import TitleQuestion from './titlequestion';
import BarChart from './barchart';

class Results extends React.Component {
    render() {
        return <div class="wrapper">
            <Title label="Results"></Title>
            <ResultDisplay label="Passfit Score: " value="totalScore"></ResultDisplay>
            <BarChart></BarChart>
        </div>
    }
}

export default Results;

class ResultDisplay extends React.Component {
    render() {
        return <TitleQuestion label={this.props.label + localStorage.getItem(this.props.value)}></TitleQuestion>
    }
}