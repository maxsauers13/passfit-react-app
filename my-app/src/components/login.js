import React from 'react';
import TitleForm from './titleform';
import TitleQuestion from './titlequestion';

class Login extends React.Component {
    render() {
        return <div class="wrapper">
        <TitleForm label="Login"></TitleForm>
        <TitleQuestion label="Username"></TitleQuestion>
        <Input placeholder="Username..."></Input>
        <TitleQuestion label="Password"></TitleQuestion>
        <Input placeholder="Password..."></Input>
        <Submit></Submit>
        </div>;
    }
}

export default Login;

class Submit extends React.Component {
    render() {
        return <button class="submit-button" type="submit">Submit Form</button>;
    }
}

class Input extends React.Component {
    render() {
        return <div class="input">
        <input class="text-input" type="text" placeholder={this.props.placeholder}/><br/>;
        </div>;
    }
}