import React from 'react';

class TitleQuestion extends React.Component {
    render() {
        return <h5 class="title-question">{this.props.label}</h5>;
    }
}

export default TitleQuestion;