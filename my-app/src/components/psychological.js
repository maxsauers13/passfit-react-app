import React from 'react';
import TitleForm from './titleform';
import TitleQuestion from './titlequestion';

class Psychological extends React.Component {
    render() {
        return <div class="wrapper">
        <TitleForm label="Psychological"></TitleForm>
        <PsychologicalForm label="Psychological"></PsychologicalForm>
        </div>;
    }
}

export default Psychological;

class PsychologicalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {weather: ''};
        this.state = {vacation: ''};
        this.state = {encouragement: ''};
        this.state = {stress: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, input) {
        if (input === 1) {
            this.setState({weather: event.target.value});
        }
        if (input === 2) {
            this.setState({vacation: event.target.value});
        }
        if (input === 3) {
            this.setState({encouragement: event.target.value});
        }
        if (input === 4) {
            this.setState({stress: event.target.value});
        }
    }

    handleSubmit(event) {
        var bars_avg = (parseFloat(this.state.weather) + parseFloat(this.state.vacation) + parseFloat(this.state.encouragement) + parseFloat(this.state.stress)) / 4;
        if (bars_avg <= 50) {
            localStorage.setItem("bars_flag", 1);
        } else {
            localStorage.setItem("bars_flag", 0);
        }

        var total = parseFloat(bars_avg);
        localStorage.setItem("psychologicalTotal", total);
        localStorage.setItem("totalScore", parseInt(localStorage.getItem("physicalTotal")) + parseInt(localStorage.getItem("cognitiveTotal")) + parseInt(localStorage.getItem("psychologicalTotal")));
        
        window.open("/");
        //window.close();
    }

    render() {
        return <form onSubmit={(e) => this.handleSubmit(e)} class="formpage">
            <TitleQuestion label="Please indicate the degree to which you are confident that you could exercise in the event that any of the following 
            circumstances were to occur by entering the appropriate % from 0 to 100. Select the response that most closely matches your own, remembering that there 
            are no right or wrong answers."></TitleQuestion>
            <QuestionInstruction label="0 = Not confident at all, 50 = Moderately confident, 100 = Highly confident"></QuestionInstruction>
            <TitleQuestion label="1. The weather was very bad (hot, humid, rainy, cold)."></TitleQuestion>
            <input class="text-input" type="text" value={this.state.badWeather} onChange={(e) => this.handleChange(e, 1)} placeholder="Enter % from 0 to 100"/><br/>
            <TitleQuestion label="2. I was on vacation."></TitleQuestion>
            <input class="text-input" type="text" value={this.state.vacation} onChange={(e) => this.handleChange(e, 2)} placeholder="Enter % from 0 to 100"/><br/>
            <TitleQuestion label="3. An instructor does not offer me any encouragement."></TitleQuestion>
            <input class="text-input" type="text" value={this.state.encouragement} onChange={(e) => this.handleChange(e, 3)} placeholder="Enter % from 0 to 100"/><br/>
            <TitleQuestion label="4. I was under personal stress of some kind."></TitleQuestion>
            <input class="text-input" type="text" value={this.state.stress} onChange={(e) => this.handleChange(e, 4)} placeholder="Enter % from 0 to 100"/><br/>
            
            <Submit></Submit>
        </form>
    }
}

class QuestionInstruction extends React.Component {
    render() {
        return <h5 class="question-instruction">{this.props.label}</h5>;
    }
}

class Submit extends React.Component {
    render() {
        return <button class="submit-button" type="submit">Submit Form</button>;
    }
}