import React from 'react';

class Title extends React.Component {
    render() {
        return <h1 class="title">{this.props.label}</h1>;
    }
}

export default Title;