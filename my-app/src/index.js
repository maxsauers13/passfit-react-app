import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Physical from "./components/physical";
import Cognitive from "./components/cognitive";
import Psychological from "./components/psychological";
import Login from "./components/login";
import Results from "./components/results";
import Home from "./components/home";
import './css/style.css';

const App = () => (
    <div className='App'>
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={() => <Home />} />
                <Route path="/physical" exact component={() => <Physical />} />
                <Route path="/cognitive" exact component={() => <Cognitive />} />
                <Route path="/psychological" exact component={() => <Psychological />} />
                <Route path="/login" exact component={() => <Login />} />
                <Route path="/results" exact component={() => <Results />} />
            </Switch>
            <Footer />
        </Router>
    </div>
)

ReactDOM.render(<App />, document.getElementById('app'));