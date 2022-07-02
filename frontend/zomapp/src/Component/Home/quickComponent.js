import React,{Component} from 'react';
import './quickComponent.css';
import QuickDisplay from './quickDisplay';

const url = "https://zomatoajulypi.herokuapp.com/quicksearch";

class QuickSearch extends Component{
    constructor(){
        super()

        this.state={
            mealType:''
        }
    }

    render(){
        return(
            <>
                <div id="quickSearch">
                    <span id="quickHeading">Quick Search</span>
                    <span id="quickSubHeading">Discover Restaurants By Meal</span>
                    <QuickDisplay mealData={this.state.mealType}/>
                </div>
            </>
        )
    }

    //apicalling
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }

}

export default QuickSearch;