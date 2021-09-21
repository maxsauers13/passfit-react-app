import React from 'react';
import Title from './title';
import Piechart from './piechart';

class Home extends React.Component {
    render() {
        return <div class="wrapper">
        <Title label="Passfit"></Title>
        <Piechart></Piechart>
        </div>;
    }
}

export default Home;