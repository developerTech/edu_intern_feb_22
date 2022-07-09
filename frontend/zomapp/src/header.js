import React, {Component} from 'react';
import './Header.css'
import {Link} from 'react-router-dom'
class Header extends Component {

    conditionalHeader = () => {
        return(
            <>
                <Link to="/login" className="btn btn-success">
                    <span className="glyphicon glyphicon-log-in"></span> Login
                </Link> &nbsp;
                <Link to="/register" className="btn btn-info">
                    <span className="glyphicon glyphicon-user"></span> Register
                </Link>
            </>
        )
    }

    render(){
        return(
            <div id="header">
                <div id="icon">
                    <h1>Xomato <Link to="/" className="btn btn-info">Home</Link></h1> &nbsp;
                </div>
                <div id="social">
                    {this.conditionalHeader()}
                </div>
            </div>
        )
    }
}

export default Header;