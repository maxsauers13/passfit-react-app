import React from 'react';
import logo from '../img/logo.jpg';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return <div class="header">
            <Logo></Logo>
            <HeaderRight></HeaderRight>
        </div>;
    }
}

export default withRouter(Header);
class Logo extends React.Component {
    render() {
        return <img class="logo-img" src={logo} alt="LOGO"></img>;
    }
}

class HeaderRight extends React.Component {
    render() {
        return <div class="header-right">
            <HeaderLink label="Home" pathname="/"></HeaderLink>
            <HeaderDivider></HeaderDivider>
            <HeaderLink label="Results" pathname="/results"></HeaderLink>
        </div>;
    }
}

class HeaderLink extends React.Component {
    render() {
    return <Link class="header-link" to={this.props.pathname}>{this.props.label}</Link>;
    }
}

class HeaderDivider extends React.Component {
    render() {
        return <div class="header-link-divider"></div>;
    }
}