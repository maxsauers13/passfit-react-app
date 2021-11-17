import React from 'react';
import TitleForm from './titleform';
import TitleQuestion from './titlequestion';
import slst_img from '../img/slst.jpg';
import rhrTimer from '../video/rhrTimer.mp4';

class Physical extends React.Component {
    render() {
        return <div class="wrapper">
        <TitleForm label="Physical"></TitleForm>
        <PhysicalForm label="Physical"></PhysicalForm>
        </div>;
    }
}

export default Physical;

class PhysicalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {gender: ''};
        this.state = {age: ''};
        this.state = {weight_lbs: ''};
        this.state = {height_inch: ''};
        this.state = {rhr: ''};
        this.state = {srpa: ''};
        this.state = {standing_leg: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, input) {
        if (input === 1) {
            this.setState({gender: event.target.value});
        }
        if (input === 2) {
            this.setState({age: event.target.value});
        }
        if (input === 3) {
            this.setState({weight_lbs: event.target.value});
        }
        if (input === 4) {
            this.setState({height_inch: event.target.value});
        }
        if (input === 5) {
            this.setState({rhr: event.target.value});
        }
        if (input === 6) {
            this.setState({srpa: event.target.value});
        }
        if (input === 7) {
            this.setState({standing_leg: event.target.value});
        }
    }

    handleSubmit(event) {
        var weight_kgs = this.state.weight_lbs / 2.205;
        var height_cm = this.state.height_inch * 2.54;
        var bmi = ((weight_kgs / height_cm) / height_cm) * 10000;
        var srpa_values = [0, 0.32, 1.06, 1.76, 3.03];

        // handle the case where the multiple choice questions are not changed
        // var gender = 1;
        // if (this.state.gender !== undefined) {
        //     gender = parseFloat(this.state.gender);
        // }
        // var srpa = 1;
        // if (this.state.srpa !== undefined) {
        //     srpa = parseFloat(this.state.srpa);
        // }
        
        var crf = (parseFloat(this.state.gender) * 2.77) - (parseFloat(this.state.age) * 0.1) - (parseFloat(bmi) * 0.17) - (parseFloat(this.state.rhr) * 0.03) + parseFloat(srpa_values[parseFloat(this.state.srpa) - 1]) + 18.07;

        localStorage.setItem("crf", crf);
        if (crf < 8.1) {
            localStorage.setItem("crf_flag", 1);
        } else {
            localStorage.setItem("crf_flag", 0);
        }

        if (parseFloat(this.state.standing_leg) < 50) {
            localStorage.setItem("slst_flag", 1);
        } else {
            localStorage.setItem("slst_flag", 0);
        }

        var total = crf + (parseFloat(this.state.standing_leg) * 0.2);
        localStorage.setItem("physicalTotal", total);
        localStorage.setItem("totalScore", parseInt(localStorage.getItem("physicalTotal")) + parseInt(localStorage.getItem("cognitiveTotal")) + parseInt(localStorage.getItem("psychologicalTotal")));
        
        window.open("/");
        window.close();
    }

    render() {
        return <form onSubmit={(e) => this.handleSubmit(e)} class="formpage">
            <TitleQuestion label="1. Enter your gender"></TitleQuestion>
            <select class="text-input" id="gender" onChange={(e) => this.handleChange(e, 1)}>
                <option value=""></option>
                <option value="1">Male</option>
                <option value="0">Female</option>
            </select>

            <TitleQuestion label="2. Enter your age in years"></TitleQuestion>
            <input class="text-input" type="text" value={this.state.age} onChange={(e) => this.handleChange(e, 2)} placeholder="Enter age in years"/><br/>

            <TitleQuestion label="3. Enter your weight in lbs"></TitleQuestion>
            <input class="text-input" type="text" value={this.state.weight_lbs} onChange={(e) => this.handleChange(e, 3)} placeholder="Enter weight in lbs"/><br/>

            <TitleQuestion label="4. Enter your height in inches"></TitleQuestion>
            <input class="text-input" type="text" value={this.state.height_inch} onChange={(e) => this.handleChange(e, 4)} placeholder="Enter height in inches"/><br/>

            <TitleQuestion label="5. Enter your resting heart rate"></TitleQuestion>
            <QuestionInstruction label="a. Gently place 2 fingers (not your thumb) on this inside of your wrist, below your thumb."></QuestionInstruction>
            <QuestionInstruction label="b. Count the beats for 30 seconds. You may use the video below to time yourself."></QuestionInstruction>
            <video class="video-instruction" controls>
                <source src={rhrTimer} type="video/mp4"></source>
                Your browswer does not support the video tag.
            </video>
            <QuestionInstruction label="c. Double this number to get your resting heart rate."></QuestionInstruction>
            <input class="text-input" type="text" value={this.state.rhr} onChange={(e) => this.handleChange(e, 5)} placeholder="Enter RHR"/><br/>

            <TitleQuestion label="6. Choose one activity category that best describes your usual pattern of daily physical activities, including activities 
            related to house and family care, transportation, occupation, exercise and wellness, and leisure or recreational purposes."></TitleQuestion>
            <QuestionInstruction label="Level 1: Inactive or little activity other than usual daily activities."></QuestionInstruction>
            <QuestionInstruction label="Level 2: Regularly (>= 5 days/week) participate in physical activities requiring low levels of exertion that result
            in slight increases in breathing and heart rate for at least 10 minutes at a time."></QuestionInstruction>
            <QuestionInstruction label="Level 3: Participate in aerobic exercises such as brisk walking, jogging or running, cycling, swimming, or vigorous
            sports at a comfortable pace or other activities requiring similar levels of exertion for 20 to 60 minutes per week."></QuestionInstruction>
            <QuestionInstruction label="Level 4: Participate in aerobic exercises such as brisk walking, jogging or running at a comfortable pace, or other
            activities requiring similar levels of exertion for 1 to 3 hours per week."></QuestionInstruction>
            <QuestionInstruction label="Level 5: Participate in aerobic exercises such as brisk walking, jogging or running at a comfortable pace, or other
            activities requiring similar levels of exertion for over 3 hours per week."></QuestionInstruction>
            <select class="text-input" id="srpa" onChange={(e) => this.handleChange(e, 6)}>
                <option value=""></option>
                <option value="1">Level 1</option>
                <option value="2">Level 2</option>
                <option value="3">Level 3</option>
                <option value="4">Level 4</option>
                <option value="5">Level 5</option>
            </select>
            
            <TitleQuestion label="7. Without trying the test, please rate how confident are you that could complete the Single Leg Stance Test (by raising your right leg) for 60 seconds."></TitleQuestion>
            <QuestionInstruction label="The Single Leg Stance Test is a measure of balance. The test begins by standing with legs shoulder-width apart. While 
            maintaining balance, the right foot is raised off the ground by bending the knee to a 90-degree angle. The goal of the Single Leg Stance Test is 
            to see how long you can balance on one leg (as shown in the image below) without letting your raised leg touch the ground and without hopping or skipping."></QuestionInstruction>
            <img class="slst-img" src={slst_img} alt="SLST"></img>
            <QuestionInstruction label="Enter your answer as a representation of your confidence from 100 (very confident) to 0 (not confident at all)."></QuestionInstruction>
            <input class="text-input" type="text" value={this.state.standing_leg} onChange={(e) => this.handleChange(e, 7)} placeholder="Enter confidence rating"/><br/>
            
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