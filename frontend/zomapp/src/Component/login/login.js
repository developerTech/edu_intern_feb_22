import React,{Component} from 'react';
import Header from '../../header'
const url = "https://developerjwt.herokuapp.com/api/auth/login";

class Login extends Component {

    constructor(props){
        super(props)

        this.state={
            email:'',
            password:''
        }
    }

    handleChange =(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/login'))
    }

    render(){
        return(
            <>
                <Header/>
                <div className="container">
                    <hr/>
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                            <h3>Login</h3>
                        </div>
                        <div className="panel-body">
                            <div className="form-group col-md-6">
                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" className="form-control"
                                value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="fname">Password</label>
                                <input id="password" name="password" className="form-control"
                                value={this.state.password} onChange={this.handleChange}/>
                            </div>
                            <buttin className="btn btn-info" onClick={this.handleSubmit}>Login</buttin>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }
}

export default Login;