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

    handleChange(event) {
        this.setState({answer1: event.target.answer1});
        this.setState({answer2: event.target.answer2});
        this.setState({answer3: event.target.answer3});
        //localStorage.setItem('answer1', event.target.answer1);
        //localStorage.setItem('answer2', event.target.answer2);
        //localStorage.setItem('answer3', event.target.answer3);
    }

    handleSubmit(event) {
        localStorage.setItem("answer1", this.state.answer1);
        localStorage.setItem("answer2", this.state.answer2);
        localStorage.setItem("answer3", this.state.answer3);
        alert(this.state.answer1);
        alert(this.state.answer2);
        alert(this.state.answer3);
    }

    render() {
        return <form onSubmit={this.handleSubmit} class="formpage">
            <TitleQuestion label="Question 1"></TitleQuestion>
            <input class="text-input" type="text" value={this.state.answer1} onChange={this.handleChange} placeholder="Answer 1..."/><br/>
            <TitleQuestion label="Question 2"></TitleQuestion>
            <input class="text-input" type="text" value={this.state.answer2} onChange={this.handleChange} placeholder="Answer 2..."/><br/>
            <TitleQuestion label="Question 3"></TitleQuestion>
            <input class="text-input" type="text" value={this.state.answer3} onChange={this.handleChange} placeholder="Answer 3..."/><br/>
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

/**class Input extends React.Component {
    render() {
        return <div class="input">
        <input class="text-input" type="text" value={this.props.value} onChange={this.handleChange} placeholder={this.props.placeholder}/><br/>
        </div>
    }
}*/