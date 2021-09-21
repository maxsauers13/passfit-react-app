import React from 'react';

class TitleForm extends React.Component {
    render() {
        return <h3 class="title-form">{this.props.label}</h3>;
    }
}

export default TitleForm;