import React, {Component} from 'react';
import './Header.css'
import {Link} from 'react-router-dom'
class Header extends Component {
    render(){
        return(
            <div id="header">
                <div id="icon">
                    <h1>Xomato <Link to="/" className="btn btn-info">Home</Link></h1> &nbsp;
                    
                </div>
                <div id="social">
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src="https://i.ibb.co/dtzG625/facebook.png" alt="fb" className="slogo"/>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="https://i.ibb.co/19H5LvT/insta.png" alt="fb" className="slogo"/>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank">
                        <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="fb" className="slogo"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Header;