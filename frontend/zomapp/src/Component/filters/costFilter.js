import React,{Component} from 'react';
import axios from 'axios';

const url = "https://zomatoajulypi.herokuapp.com/filter";

class CostFilter extends Component{
   
    filterCuisine = (event) => {
        let mealId = sessionStorage.getItem('mealId')
        let cost = (event.target.value).split('-');
        let lcost = cost[0];
        let hcost = cost[1]
        let costUrl;
        if(event.target.value === ""){
            costUrl = `${url}/${mealId}`
        }else{
            costUrl = `${url}/${mealId}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl)
        .then((res) => {this.props.restPerCost(res.data)})

    }

    render(){
        return(
            <>
                <center>Cost Filter</center>
                <div style={{marginLeft:'15%'}} onChange={this.filterCuisine}>
                    <label className="radio">
                        <input type="radio" value="" name="cuisine"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="100-400" name="cuisine"/>100-400
                    </label>
                    <label className="radio">
                        <input type="radio" value="401-700" name="cuisine"/>401-700
                    </label>
                    <label className="radio">
                        <input type="radio" value="701-1000" name="cuisine"/>701-1000
                    </label>
                    <label className="radio">
                        <input type="radio" value="1001-2000" name="cuisine"/>1001-2000
                    </label>
                    <label className="radio">
                        <input type="radio" value="2001-5000" name="cuisine"/>2001-5000
                    </label>
                </div>
            </>
        )
    }

}

export default CostFilter