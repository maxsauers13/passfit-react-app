import React from 'react';
import Form from './form.js';
import TitleForm from './titleform';

class Psychological extends React.Component {
    render() {
        return <div class="wrapper">
        <TitleForm label="Psychological"></TitleForm>
        <Form label="Psychological"></Form>
        </div>;
    }
}

export default Psychological;