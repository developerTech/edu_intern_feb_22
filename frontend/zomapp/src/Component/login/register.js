import React,{Component} from 'react';
import Header from '../../header'

const url = "https://developerjwt.herokuapp.com/api/auth/register";

class Register extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'',
            email:'',
            password:'',
            phone:'435346544'
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
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3>Register</h3>
                        </div>
                        <div className="panel-body">
                            <div className="form-group col-md-6">
                                <label htmlFor="fname">Name</label>
                                <input id="fname" name="name" className="form-control"
                                value={this.state.name} onChange={this.handleChange}/>
                            </div>
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
                            <div className="form-group col-md-6">
                                <label htmlFor="phone">Phone</label>
                                <input id="phone" name="phone" className="form-control"
                                value={this.state.phone} onChange={this.handleChange}/>
                            </div>
                            <buttin className="btn btn-success" onClick={this.handleSubmit}>Register</buttin>
                        </div>
                        
                    </div>
                </div>
            </>
            
        )
    }
}

export default Register;