import React from 'react';
import Form from './form.js';
import TitleForm from './titleform';

class Cognitive extends React.Component {
    render() {
        return <div class="wrapper">
        <TitleForm label="Cognitive"></TitleForm>
        <Form></Form>
        </div>;
    }
}

export default Cognitive;