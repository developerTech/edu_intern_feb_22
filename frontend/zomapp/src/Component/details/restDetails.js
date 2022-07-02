import React,{Component} from 'react';
import axios from 'axios';
import './details.css';
import {Link} from 'react-router-dom';

const url = "http://zomatoajulypi.herokuapp.com";

class RestDetails extends Component {
    constructor(){
        super()

        this.state={
            details:'',
            menuList:'',
            userItem:'',
            mealId:sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):'1'
        }
    }

    render(){
        //let details = this.state.details
        let {details} = this.state
        return(
            <>
                <div id="mainContent">
                    <div className="imgDiv">
                        <img src={this.state.details.restaurant_thumb} alt="snacks"/>
                    </div>
                    <div className="contentDiv">
                        <h1>{details.restaurant_name}</h1>
                        <span>231 Customers Rating is {details.rating_text}</span>
                        <h3><del>Old Pric: 1000</del></h3>
                        <h3>New Price: Rs.{details.cost}</h3>
                        <h3>Test Food with Refreshing Taste</h3>
                    </div>

                </div>
            </>
        )
    }

    // calling with async await 
    async componentDidMount(){
        let restId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/details/${restId}`)
        console.log(">>>>",response.data)
        let menu = await axios.get(`${url}/menu/${restId}`)
        this.setState({details:response.data[0],menuList:menu.data})
    }
}


export default RestDetails