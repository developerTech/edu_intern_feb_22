import React,{Fragment,Component} from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return(
            <Fragment>
                <header>
                    <div className="logo">Developer Funnel</div>
                    <center>
                        <input/>
                        <div style={{color:'white',fontSize:'20px'}}>User Text Here</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        )
    }
}

export default Header;
