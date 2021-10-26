import React from 'react';
import TitleForm from './titleform';
import TitleQuestion from './titlequestion';

class Cognitive extends React.Component {
    render() {
        return <div class="wrapper">
        <TitleForm label="Cognitive"></TitleForm>
        <CognitiveForm label="Cognitive"></CognitiveForm>
        </div>;
    }
}

export default Cognitive;

class CognitiveForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {memory: ''};
        this.state = {satisfied: ''};
        this.state = {bored: ''};
        this.state = {helpless: ''};
        this.state = {stayHome: ''};
        this.state = {worthless: ''};
        this.state = {companionship: ''};
        this.state = {turnTo: ''};
        this.state = {outgoing: ''};
        this.state = {leftOut: ''};
        this.state = {isolation: ''};
        this.state = {findCompanionship: ''};
        this.state = {withdrawn: ''};
        this.state = {aroundNotWith: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, input) {
        if (input === 1) {
            this.setState({memory: event.target.value});
        }
        if (input === 2) {
            this.setState({satisfied: event.target.value});
        }
        if (input === 3) {
            this.setState({bored: event.target.value});
        }
        if (input === 4) {
            this.setState({helpless: event.target.value});
        }
        if (input === 5) {
            this.setState({stayHome: event.target.value});
        }
        if (input === 6) {
            this.setState({worthless: event.target.value});
        }
        if (input === 7) {
            this.setState({companionship: event.target.value});
        }
        if (input === 8) {
            this.setState({turnTo: event.target.value});
        }
        if (input === 9) {
            this.setState({outgoing: event.target.value});
        }
        if (input === 10) {
            this.setState({leftOut: event.target.value});
        }
        if (input === 11) {
            this.setState({isolation: event.target.value});
        }
        if (input === 12) {
            this.setState({findCompanionship: event.target.value});
        }
        if (input === 13) {
            this.setState({withdrawn: event.target.value});
        }
        if (input === 14) {
            this.setState({aroundNotWith: event.target.value});
        }
    }

    handleSubmit(event) {
        if (parseFloat(this.state.memory) >= 6) {
            localStorage.setItem("fof_flag", 1);
        } else {
            localStorage.setItem("fof_flag", 0);
        }

        var total_depression = (1 - parseFloat(this.state.satisfied)) + parseFloat(this.state.bored) + parseFloat(this.state.helpless) + parseFloat(this.state.stayHome) + parseFloat(this.state.worthless);
        if (total_depression > 2) {
            localStorage.setItem("gds_flag", 1);
        } else {
            localStorage.setItem("gds_flag", 0);
        }

        var total_ucla = (5 - parseFloat(this.state.companionship)) + (5 - parseFloat(this.state.turnTo)) + parseFloat(this.state.outgoing) + (5 - parseFloat(this.state.leftOut)) + (5 - parseFloat(this.state.isolation)) + parseFloat(this.state.findCompanionship) + (5 - parseFloat(this.state.withdrawn)) + (5 - parseFloat(this.state.aroundNotWith));
        if (total_ucla < 19.5) {
            localStorage.setItem("ucla_flag", 1);
        } else {
            localStorage.setItem("ucla_flag", 0);
        }

        var total = (7 - parseFloat(this.state.memory)) + (5.0 - parseFloat(total_depression)) + parseFloat(total_ucla);
        localStorage.setItem("cognitiveTotal", total);
        localStorage.setItem("totalScore", parseInt(localStorage.getItem("physicalTotal")) + parseInt(localStorage.getItem("cognitiveTotal")) + parseInt(localStorage.getItem("psychologicalTotal")));
        
        window.open("/");
        //window.close();
    }

    render() {
        return <form onSubmit={(e) => this.handleSubmit(e)} class="formpage">
            <TitleQuestion label="1. On a scale from 1 to 7, how would you rate your memory in terms of the kinds of problems you have?"></TitleQuestion>
            <QuestionInstruction label="1 = no problems, 7 = major problems"></QuestionInstruction>
            <input class="text-input" type="text" value={this.state.memory} onChange={(e) => this.handleChange(e, 1)} placeholder="Enter memory rating"/><br/>
            
            <TitleQuestion label="For the next 5 questions, please indicate if each situation or feeling described CURRENTLY pertains to you by
            entering a 1 or 0 (1 = Yes, 0 = No). Select the response that most closely matches your own, remembering that there are no
            right or wrong answers."></TitleQuestion>
            <TitleQuestion label="2. Are you basically satisfied?"></TitleQuestion>
            <input class="text-input" type="text" value={this.state.satisfied} onChange={(e) => this.handleChange(e, 2)} placeholder="1 = Yes, 0 = No"/><br/>
            <TitleQuestion label="3. Do you get bored often?"></TitleQuestion>
            <input class="text-input" type="text" value={this.state.bored} onChange={(e) => this.handleChange(e, 3)} placeholder="1 = Yes, 0 = No"/><br/>
            <TitleQuestion label="4. Do you often feel helpless?"></TitleQuestion>
            <input class="text-input" type="text" value={this.state.helpless} onChange={(e) => this.handleChange(e, 4)} placeholder="1 = Yes, 0 = No"/><br/>
            <TitleQuestion label="5. Do you prefer to stay at home, rather than going out and doing new things?"></TitleQuestion>
            <input class="text-input" type="text" value={this.state.stayHome} onChange={(e) => this.handleChange(e, 5)} placeholder="1 = Yes, 0 = No"/><br/>
            <TitleQuestion label="6. Do you feel worthless the way you are now?"></TitleQuestion>
            <input class="text-input" type="text" value={this.state.worthless} onChange={(e) => this.handleChange(e, 6)} placeholder="1 = Yes, 0 = No"/><br/>
            
            <TitleQuestion label="For the next 8 questions, please indicate (enter 1, 2, 3, or 4) how often you feel the way each of the statements below is 
            descriptive of you. There are no right or wrong answers."></TitleQuestion>
            <QuestionInstruction label="1 = Never, 2 = Rarely, 3 = Sometimes, 4 = Always"></QuestionInstruction>
            <TitleQuestion label="7. I lack companionship."></TitleQuestion>
            <input class="text-input" type="text" value={this.state.companionship} onChange={(e) => this.handleChange(e, 7)} placeholder="1, 2, 3, or 4"/><br/>
            <TitleQuestion label="8. There is no one to turn to."></TitleQuestion>
            <input class="text-input" type="text" value={this.state.turnTo} onChange={(e) => this.handleChange(e, 8)} placeholder="1, 2, 3, or 4"/><br/>
            <TitleQuestion label="9. I am an outgoing person."></TitleQuestion>
            <input class="text-input" type="text" value={this.state.outgoing} onChange={(e) => this.handleChange(e, 9)} placeholder="1, 2, 3, or 4"/><br/>
            <TitleQuestion label="10. I feel left out."></TitleQuestion>
            <input class="text-input" type="text" value={this.state.leftOut} onChange={(e) => this.handleChange(e, 10)} placeholder="1, 2, 3, or 4"/><br/>
            <TitleQuestion label="11. I feel isolation from others."></TitleQuestion>
            <input class="text-input" type="text" value={this.state.isolation} onChange={(e) => this.handleChange(e, 11)} placeholder="1, 2, 3, or 4"/><br/>
            <TitleQuestion label="12. I can find companionship when I want it."></TitleQuestion>
            <input class="text-input" type="text" value={this.state.findCompanionship} onChange={(e) => this.handleChange(e, 12)} placeholder="1, 2, 3, or 4"/><br/>
            <TitleQuestion label="13. I am unhappy being so withdrawn."></TitleQuestion>
            <input class="text-input" type="text" value={this.state.withdrawn} onChange={(e) => this.handleChange(e, 13)} placeholder="1, 2, 3, or 4"/><br/>
            <TitleQuestion label="14. People are around me but not with me."></TitleQuestion>
            <input class="text-input" type="text" value={this.state.aroundNotWith} onChange={(e) => this.handleChange(e, 14)} placeholder="1, 2, 3, or 4"/><br/>
            
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