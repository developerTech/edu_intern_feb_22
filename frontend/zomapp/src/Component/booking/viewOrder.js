import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';
import Header from '../../header';

const url = "http://localhost:9100/orders";
const updateUrl= "http://localhost:9100/updateOrder"

class ViewOrder extends Component {
    constructor(props) {
        super(props)

        this.state={
            orders:''
        }
    }

    render(){
        if(sessionStorage.getItem('loginStatus') === 'false'){
            return(
                <div>
                    <Header/>
                    <center>
                        <h2>Login First To View Order</h2>
                    </center>
                </div>
            )

        }
        return(
            <>
                <Header/>
                <OrderDisplay orderData={this.state.orders}/>
            </>
        )
    }

    //api Call 
    componentDidMount(){
        if(this.props.location){
            let queryp = this.props.location.search;
            if(queryp){
                let data={
                    "status":queryp.split('&')[0].split('=')[1],
                    "date":queryp.split('&')[2].split('=')[1],
                    "bank_name":queryp.split('&')[3].split('=')[1]
                }
                let id = queryp.split('&')[1].split('=')[1].split('_')[1];
                console.log(">>>",`${updateUrl}/${id}`)
                console.log(data)
                fetch(`${updateUrl}/${id}`,{
                    method:'PUT',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(data)
                })
            }
        }
        //let email = sessionStorage.getItem('userinfo')
        console.log(">>>>",sessionStorage.getItem('userinfo'))
        //console.log(`${url}?email=${email}`)
        axios.get(`${url}`).then((res)=>{this.setState({orders:res.data})})
    }

}

export default ViewOrder