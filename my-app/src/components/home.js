import React from 'react';
import Title from './title';
import Piechart from './piechart';
import Reset from './reset';

class Home extends React.Component {
    render() {
        return <div class="wrapper">
        <Title label="Passfit"></Title>
        <Piechart></Piechart>
        <Reset></Reset>
        </div>
    }
}

export default Home;