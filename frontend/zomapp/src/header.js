import React, {Component} from 'react';
import './Header.css'
import {Link, withRouter} from 'react-router-dom'

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo";
class Header extends Component {

    constructor(){
        super();

        this.state={
            userData:'',
            userImg:'',
            userName:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('userinfo');
        sessionStorage.setItem('loginStatus',false);
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('uName');
        sessionStorage.removeItem('uImg');
        this.setState({userData:''})
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if(this.state.userData.name ||  sessionStorage.getItem('uName') !== null){
            if(sessionStorage.getItem('uName') !== null){
                let name =  sessionStorage.getItem('uName');
                let image = sessionStorage.getItem('uImg');
                return(
                    <>
                        <div className="btnlogin">
                            <Link to="/" className="btn btn-success">
                                <span className="glyphicon glyphicon-user"></span>
                                 Hi <img src={image} style={{height:50,width:50}}/> {name}
                            </Link> &nbsp;
                            <button onClick={this.handleLogout} className="btn btn-danger">Logout</button>
                        </div>
                    </>
                )
            }else{
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
            }

        }else{
            return(
                <>
                    <a  className="btn btn-primary" href="https://github.com/login/oauth/authorize?client_id=9176b4958929e2c28dd6">
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
        /* Login With GIT */
        if(this.props.location.search){
            if(this.props.location.search.split('=')[0] == '?code'){
                var code = this.props.location.search.split('=')[1]
            }

            if(code){
                let requestedData={
                    code:code
                }
                fetch(`http://localhost:9800/oauth`,{
                    method: 'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(requestedData)
                })
                .then((res) => res.json())
                .then((data) => {
                    let username = data.name;
                    let img = data.avatar_url;
                    sessionStorage.setItem('uName',username)
                    sessionStorage.setItem('uImg',img);
                    sessionStorage.setItem('loinStatus',true)
                    this.setState({username:username,userImg:img})
                })
            }
        }
        /* Login With JWT */
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