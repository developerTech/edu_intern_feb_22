import React from 'react';
import './footer.css';

const Footer = (props) => {
    return(
        <footer id="footer">
            <p id="footText">&copy; Developer Funnel</p>
            <hr/>
            <div class="footDiv">
                <p>Contact Us</p>
                <p>About Us</p>
            </div>
            <div class="footDiv">
                <p>Contact Us</p>
                <p>About Us</p>
            </div>
            <div class="footDiv noBorder">
                <p>Contact Us</p>
                <p>About Us</p>
            </div>
        </footer>
    )
}

export default Footer;