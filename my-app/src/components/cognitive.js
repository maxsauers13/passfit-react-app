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
        // handle multiple choice questions that aren't changed
        var memory = 1;
        if (this.state.memory !== undefined) {
            memory = parseFloat(this.state.memory);
        }

        if (memory >= 6) {
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
        window.close();
    }

    render() {
        return <form onSubmit={(e) => this.handleSubmit(e)} class="formpage">
            <TitleQuestion label="1. On a scale from 1 to 7, how would you rate your memory in terms of the kinds of problems you have?"></TitleQuestion>
            <QuestionInstruction label="1 = no problems, 7 = major problems"></QuestionInstruction>
            <select class="text-input" id="memory" onChange={(e) => this.handleChange(e, 1)}>
                <option value=""></option>
                <option value="1">1 - no problems</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4 - some problems</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7 - major problems</option>
            </select>
            
            <TitleQuestion label="For the next 5 questions, please indicate if each situation or feeling described CURRENTLY pertains to you. 
            Select the response that most closely matches your own, remembering that there are no right or wrong answers."></TitleQuestion>

            <TitleQuestion label="2. Are you basically satisfied?"></TitleQuestion>
            <select class="text-input" id="satisfied" onChange={(e) => this.handleChange(e, 2)}>
                <option value=""></option>
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>

            <TitleQuestion label="3. Do you get bored often?"></TitleQuestion>
            <select class="text-input" id="bored" onChange={(e) => this.handleChange(e, 3)}>
                <option value=""></option>
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>

            <TitleQuestion label="4. Do you often feel helpless?"></TitleQuestion>
            <select class="text-input" id="helpless" onChange={(e) => this.handleChange(e, 4)}>
                <option value=""></option>
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <TitleQuestion label="5. Do you prefer to stay at home, rather than going out and doing new things?"></TitleQuestion>
            <select class="text-input" id="stayHome" onChange={(e) => this.handleChange(e, 5)}>
                <option value=""></option>
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <TitleQuestion label="6. Do you feel worthless the way you are now?"></TitleQuestion>
            <select class="text-input" id="worthless" onChange={(e) => this.handleChange(e, 6)}>
                <option value=""></option>
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            
            <TitleQuestion label="For the next 8 questions, please indicate how often you feel the way each of the statements below is 
            descriptive of you. There are no right or wrong answers."></TitleQuestion>
            <QuestionInstruction label="1 = Never, 2 = Rarely, 3 = Sometimes, 4 = Always"></QuestionInstruction>

            <TitleQuestion label="7. I lack companionship."></TitleQuestion>
            <select class="text-input" id="companionship" onChange={(e) => this.handleChange(e, 7)}>
                <option value=""></option>
                <option value="1">1 - Never</option>
                <option value="2">2 - Rarely</option>
                <option value="3">3 - Sometimes</option>
                <option value="4">4 - Always</option>
            </select>

            <TitleQuestion label="8. There is no one to turn to."></TitleQuestion>
            <select class="text-input" id="turnTo" onChange={(e) => this.handleChange(e, 8)}>
                <option value=""></option>
                <option value="1">1 - Never</option>
                <option value="2">2 - Rarely</option>
                <option value="3">3 - Sometimes</option>
                <option value="4">4 - Always</option>
            </select>

            <TitleQuestion label="9. I am an outgoing person."></TitleQuestion>
            <select class="text-input" id="outgoing" onChange={(e) => this.handleChange(e, 9)}>
                <option value=""></option>
                <option value="1">1 - Never</option>
                <option value="2">2 - Rarely</option>
                <option value="3">3 - Sometimes</option>
                <option value="4">4 - Always</option>
            </select>

            <TitleQuestion label="10. I feel left out."></TitleQuestion>
            <select class="text-input" id="leftOut" onChange={(e) => this.handleChange(e, 10)}>
                <option value=""></option>
                <option value="1">1 - Never</option>
                <option value="2">2 - Rarely</option>
                <option value="3">3 - Sometimes</option>
                <option value="4">4 - Always</option>
            </select>

            <TitleQuestion label="11. I feel isolation from others."></TitleQuestion>
            <select class="text-input" id="isolation" onChange={(e) => this.handleChange(e, 11)}>
                <option value=""></option>
                <option value="1">1 - Never</option>
                <option value="2">2 - Rarely</option>
                <option value="3">3 - Sometimes</option>
                <option value="4">4 - Always</option>
            </select>

            <TitleQuestion label="12. I can find companionship when I want it."></TitleQuestion>
            <select class="text-input" id="findCompanionship" onChange={(e) => this.handleChange(e, 12)}>
                <option value=""></option>
                <option value="1">1 - Never</option>
                <option value="2">2 - Rarely</option>
                <option value="3">3 - Sometimes</option>
                <option value="4">4 - Always</option>
            </select>

            <TitleQuestion label="13. I am unhappy being so withdrawn."></TitleQuestion>
            <select class="text-input" id="withdrawn" onChange={(e) => this.handleChange(e, 13)}>
                <option value=""></option>
                <option value="1">1 - Never</option>
                <option value="2">2 - Rarely</option>
                <option value="3">3 - Sometimes</option>
                <option value="4">4 - Always</option>
            </select>

            <TitleQuestion label="14. People are around me but not with me."></TitleQuestion>
            <select class="text-input" id="aroundNotWith" onChange={(e) => this.handleChange(e, 14)}>
                <option value=""></option>
                <option value="1">1 - Never</option>
                <option value="2">2 - Rarely</option>
                <option value="3">3 - Sometimes</option>
                <option value="4">4 - Always</option>
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