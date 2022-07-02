import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import Listing from './Component/listing/listing';
import Details from './Component/details/restDetails';
import Header from './header';
import Footer from './footer';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/listing/:id" component={Listing}/>
                <Route path="/details" component={Details}/>
                
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing