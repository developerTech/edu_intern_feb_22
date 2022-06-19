import React,{Fragment,Component} from 'react';
import './Header.css';

class Header extends Component {

    constructor(){
        super()
        console.log(">>>>inside constructor>>>>")
        this.state={
            heading:'React Developer Funnel',
            keyword:'User Text Here'
        }
    }

    handleChange = (event) => {
        //console.log(event.target.value);
        //console.log(">>>>inside handleChange>>>>")
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
        this.props.userText(event.target.value)
    }

    render(){
        console.log(">>>>inside render>>>>")
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.heading}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'white',fontSize:'20px'}}>{this.state.keyword}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        )
    }
}

export default Header;
