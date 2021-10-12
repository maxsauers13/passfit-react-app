import React from 'react';
import TitleQuestion from './titlequestion';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {answer1: ''};
        this.state = {answer2: ''};
        this.state = {answer3: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, input) {
        if (input === 1) {
            this.setState({answer1: event.target.value});
        }
        if (input === 2) {
            this.setState({answer2: event.target.value});
        }
        if (input === 3) {
            this.setState({answer3: event.target.value});
        }
    }

    handleSubmit(event, page) {
        if (page === "Physical") {
            localStorage.setItem("physicalTotal", parseInt(this.state.answer1) + parseInt(this.state.answer2) + parseInt(this.state.answer3));
        }
        if (page === "Cognitive") {
            localStorage.setItem("cognitiveTotal", parseInt(this.state.answer1) + parseInt(this.state.answer2) + parseInt(this.state.answer3));
        }
        if (page === "Psychological") {
            localStorage.setItem("psychologicalTotal", parseInt(this.state.answer1) + parseInt(this.state.answer2) + parseInt(this.state.answer3));
        }
        localStorage.setItem("totalScore", parseInt(localStorage.getItem("physicalTotal")) + parseInt(localStorage.getItem("cognitiveTotal")) + parseInt(localStorage.getItem("psychologicalTotal")));
        window.open("/");
        window.close();
    }

    render() {
        return <form onSubmit={(e) => this.handleSubmit(e, this.props.label)} class="formpage">
            <TitleQuestion label="Question 1"></TitleQuestion>
            <input class="text-input" type="text" value={this.state.answer1} onChange={(e) => this.handleChange(e, 1)} placeholder="Answer 1..."/><br/>
            <TitleQuestion label="Question 2"></TitleQuestion>
            <input class="text-input" type="text" value={this.state.answer2} onChange={(e) => this.handleChange(e, 2)} placeholder="Answer 2..."/><br/>
            <TitleQuestion label="Question 3"></TitleQuestion>
            <input class="text-input" type="text" value={this.state.answer3} onChange={(e) => this.handleChange(e, 3)} placeholder="Answer 3..."/><br/>
            <Submit></Submit>
        </form>
    }
}

export default Form;

class Submit extends React.Component {
    render() {
        return <button class="submit-button" type="submit">Submit Form</button>;
    }
}