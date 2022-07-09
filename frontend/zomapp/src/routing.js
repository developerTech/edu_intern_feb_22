import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import Listing from './Component/listing/listing';
import Details from './Component/details/restDetails';
import Footer from './footer';
import PlaceOrder from './Component/booking/placeOrder';
import ViewOrder from './Component/booking/viewOrder';
import Login from './Component/login/login';
import Register from './Component/login/register';

const Routing = () => {
    return(
        <BrowserRouter>
                <Route exact path="/" component={Home}/>
                <Route path="/listing/:id" component={Listing}/>
                <Route path="/details" component={Details}/>
                <Route path="/placeOrder/:restName" component={PlaceOrder}/>
                <Route path="/viewBooking" component={ViewOrder}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing