import React from 'react';
import Form from './form.js';
import TitleForm from './titleform';

class Physical extends React.Component {
    render() {
        return <div class="wrapper">
        <TitleForm label="Physical"></TitleForm>
        <Form></Form>
        </div>;
    }
}

export default Physical;