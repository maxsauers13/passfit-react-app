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
        this.state = {regularly: ''};
        this.state = {regularlyCertain: ''};
        this.state = {regularlyImportant: ''};
        this.state = {inShape: ''};
        this.state = {inShapeCertain: ''};
        this.state = {inShapeImportant: ''};     
        this.state = {physicallyActive: ''};
        this.state = {physicallyActiveCertain: ''};
        this.state = {physicallyActiveImportant: ''};
        this.state = {exerciser: ''};
        this.state = {exerciserCertain: ''};
        this.state = {exerciserImportant: ''};

    
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
        if (input === 5) {
            this.setState({regularly: event.target.value});
        }
        if (input === 6) {
            this.setState({regularlyCertain: event.target.value});
        }
        if (input === 7) {
            this.setState({regularlyImportant: event.target.value});
        }
        if (input === 8) {
            this.setState({inShape: event.target.value});
        }
        if (input === 9) {
            this.setState({inShapeCertain: event.target.value});
        }
        if (input === 10) {
            this.setState({inShapeImportant: event.target.value});
        }
        if (input === 11) {
            this.setState({physicallyActive: event.target.value});
        }
        if (input === 12) {
            this.setState({physicallyActiveCertain: event.target.value});
        }
        if (input === 13) {
            this.setState({physicallyActiveImportant: event.target.value});
        }
        if (input === 14) {
            this.setState({exerciser: event.target.value});
        }
        if (input === 15) {
            this.setState({exerciserCertain: event.target.value});
        }
        if (input === 16) {
            this.setState({exerciserImportant: event.target.value});
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
        window.close();
    }

    render() {
        return <form onSubmit={(e) => this.handleSubmit(e)} class="formpage">
            <TitleQuestion label="Please indicate the degree to which you are confident that you could exercise in the event that any of the following 
            circumstances were to occur by entering the appropriate % from 0 to 100. Select the response that most closely matches your own, remembering that there 
            are no right or wrong answers."></TitleQuestion>
            <QuestionInstruction label="0 = Not confident at all, 50 = Moderately confident, 100 = Highly confident"></QuestionInstruction>

            <TitleQuestion label="1. The weather was very bad (hot, humid, rainy, cold)."></TitleQuestion>
            <select class="text-input" id="weather" onChange={(e) => this.handleChange(e, 1)}>
                <option value=""></option>
                <option value="0">0% - Does not describe me</option>
                <option value="10">10%</option>
                <option value="20">20%</option>
                <option value="30">30%</option>
                <option value="40">40%</option>
                <option value="50">50%</option>
                <option value="60">60%</option>
                <option value="70">70%</option>
                <option value="80">80%</option>
                <option value="90">90%</option>
                <option value="100">100% - Describes me</option>
            </select>

            <TitleQuestion label="2. I was on vacation."></TitleQuestion>
            <select class="text-input" id="vacation" onChange={(e) => this.handleChange(e, 2)}>
                <option value=""></option>
                <option value="0">0% - Does not describe me</option>
                <option value="10">10%</option>
                <option value="20">20%</option>
                <option value="30">30%</option>
                <option value="40">40%</option>
                <option value="50">50%</option>
                <option value="60">60%</option>
                <option value="70">70%</option>
                <option value="80">80%</option>
                <option value="90">90%</option>
                <option value="100">100% - Describes me</option>
            </select>

            <TitleQuestion label="3. An instructor does not offer me any encouragement."></TitleQuestion>
            <select class="text-input" id="encouragement" onChange={(e) => this.handleChange(e, 3)}>
                <option value=""></option>
                <option value="0">0% - Does not describe me</option>
                <option value="10">10%</option>
                <option value="20">20%</option>
                <option value="30">30%</option>
                <option value="40">40%</option>
                <option value="50">50%</option>
                <option value="60">60%</option>
                <option value="70">70%</option>
                <option value="80">80%</option>
                <option value="90">90%</option>
                <option value="100">100% - Describes me</option>
            </select>

            <TitleQuestion label="4. I was under personal stress of some kind."></TitleQuestion>
            <select class="text-input" id="stress" onChange={(e) => this.handleChange(e, 4)}>
                <option value=""></option>
                <option value="0">0% - Does not describe me</option>
                <option value="10">10%</option>
                <option value="20">20%</option>
                <option value="30">30%</option>
                <option value="40">40%</option>
                <option value="50">50%</option>
                <option value="60">60%</option>
                <option value="70">70%</option>
                <option value="80">80%</option>
                <option value="90">90%</option>
                <option value="100">100% - Describes me</option>
            </select>

            <TitleQuestion label="For each of the following questions you are asked to make a rating on a scale of numbers.
            Answer each question by SELECTING THE APPROPRIATE NUMBER."></TitleQuestion>

            <TitleQuestion label="5. Someone who exercises regularly"></TitleQuestion>
            <select class="text-input" id="regularly" onChange={(e) => this.handleChange(e, 5)}>
                <option value=""></option>
                <option value="1">1 - Does not describe me</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11 - Describes me</option>
            </select>

            <TitleQuestion label="6. How certain are you of this self-description?"></TitleQuestion>
            <select class="text-input" id="regularlyCertain" onChange={(e) => this.handleChange(e, 6)}>
                <option value=""></option>
                <option value="1">1 - Not at all certain</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11 - Very certain</option>
            </select>

            <TitleQuestion label="7. How important is being someone who exercises regularly to the image you have of yourself, 
            regardless of whether or not the trait describes you?"></TitleQuestion>
            <select class="text-input" id="regularlyImportant" onChange={(e) => this.handleChange(e, 7)}>
                <option value=""></option>
                <option value="1">1 - Not at all important</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11 - Very important</option>
            </select>

            <TitleQuestion label="8. Someone who keeps in shape"></TitleQuestion>
            <select class="text-input" id="inShape" onChange={(e) => this.handleChange(e, 8)}>
                <option value=""></option>
                <option value="1">1 - Does not describe me</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11 - Describes me</option>
            </select>

            <TitleQuestion label="9. How certain are you of this self-description?"></TitleQuestion>
            <select class="text-input" id="inShapeCertain" onChange={(e) => this.handleChange(e, 9)}>
                <option value=""></option>
                <option value="1">1 - Not at all certain</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11 - Very certain</option>
            </select>

            <TitleQuestion label="10. How important is being someone who keeps in shape regularly to the image you have of yourself, 
            regardless of whether or not the trait describes you?"></TitleQuestion>
            <select class="text-input" id="inShapeImportant" onChange={(e) => this.handleChange(e, 10)}>
                <option value=""></option>
                <option value="1">1 - Not at all important</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11 - Very important</option>
            </select>

            <TitleQuestion label="11. Physically active"></TitleQuestion>
            <select class="text-input" id="physicallyActive" onChange={(e) => this.handleChange(e, 11)}>
                <option value=""></option>
                <option value="1">1 - Does not describe me</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11 - Describes me</option>
            </select>

            <TitleQuestion label="12. How certain are you of this self-description?"></TitleQuestion>
            <select class="text-input" id="physicallyActiveCertain" onChange={(e) => this.handleChange(e, 12)}>
                <option value=""></option>
                <option value="1">1 - Not at all certain</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11 - Very certain</option>
            </select>

            <TitleQuestion label="13. How important is being physically active to the image you have of yourself, 
            regardless of whether or not the trait describes you?"></TitleQuestion>
            <select class="text-input" id="physicallyActiveImportant" onChange={(e) => this.handleChange(e, 13)}>
                <option value=""></option>
                <option value="1">1 - Not at all important</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11 - Very important</option>
            </select>

            <TitleQuestion label="14. I am someone who will always be an exerciser"></TitleQuestion>
            <select class="text-input" id="exerciser" onChange={(e) => this.handleChange(e, 14)}>
                <option value=""></option>
                <option value="1">1 - Does not describe me</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11 - Describes me</option>
            </select>

            <TitleQuestion label="15. How certain are you of this self-description?"></TitleQuestion>
            <select class="text-input" id="exerciserCertain" onChange={(e) => this.handleChange(e, 15)}>
                <option value=""></option>
                <option value="1">1 - Not at all certain</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11 - Very certain</option>
            </select>

            <TitleQuestion label="16. How important is always being an exerciser to the image you have of yourself, 
            regardless of whether or not the trait describes you?"></TitleQuestion>
            <select class="text-input" id="exerciserImportant" onChange={(e) => this.handleChange(e, 16)}>
                <option value=""></option>
                <option value="1">1 - Not at all important</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11 - Very important</option>
            </select>
            
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