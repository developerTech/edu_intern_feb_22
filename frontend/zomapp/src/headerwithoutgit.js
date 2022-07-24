import React, {Component} from 'react';
import './Header.css'
import {Link, withRouter} from 'react-router-dom'

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo";
class Header extends Component {

    constructor(){
        super();

        this.state={
            userData:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('userinfo');
        sessionStorage.setItem('loginStatus',false);
        sessionStorage.removeItem('ltk');
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        
        if(sessionStorage.getItem('ltk')){
            let data = this.state.userData;
            let outArray = [data.name, data.email, data.phone, data.role];
            sessionStorage.setItem('userinfo',outArray);
            sessionStorage.setItem('loginStatus',true)
            return(
                <>
                    <div className="btnlogin">
                        <Link to="/" className="btn btn-success">
                            <span className="glyphicon glyphicon-user"></span> Hi {data.name}
                        </Link> &nbsp;
                        <button onClick={this.handleLogout} className="btn btn-danger">Logout</button>
                    </div>
                </>
            )
        }else{
            return(
                <>
                    <a  className="btn btn-primary" href="https://github.com/login/oauth/authorize?client_id=8ce44d256625bdef6536">
                        Login With Git
                    </a> &nbsp;
                    <Link to="/login" className="btn btn-success">
                        <span className="glyphicon glyphicon-log-in"></span> Login
                    </Link> &nbsp;
                    <Link to="/register" className="btn btn-info">
                        <span className="glyphicon glyphicon-user"></span> Register
                    </Link>
                </>
            )
        }
        
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

    //getuser info after login 
    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
}

export default withRouter(Header)