import React,{Component} from 'react';
import './placeOrder.css';
import Header from '../../header';

const url = "http://zomatoajulypi.herokuapp.com/menuItem";
const purl = "http://localhost:9100/placeOrder";

class PlaceOrder extends Component {
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.restName,
            name:sessionStorage.getItem('userinfo')?sessionStorage.getItem('userinfo').split(',')[0]:'',
            email:sessionStorage.getItem('userinfo')?sessionStorage.getItem('userinfo').split(',')[1]:'',
            cost:0,
            phone:sessionStorage.getItem('userinfo')?sessionStorage.getItem('userinfo').split(',')[2]:'',
            address:'Hno 28',
            menuItem:''
        }
    }

    checkout = () => {
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('menu');
        fetch(purl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        //.then(this.props.history.push('/viewBooking'))
    }
    renderItem = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="orderItems"  key={item.menu_id}>
                        <img src={item.menu_image} alt={item.menu_name}/>
                        <h3>{item.menu_name}</h3>
                        <h4>Rs. {item.menu_price}</h4>
                    </div>
                )
            })
        }
    }

    handleChange =(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    render(){
        if(sessionStorage.getItem('loginStatus') === 'false'){
            return(
                <div>
                    <Header/>
                    <center>
                        <h2>Login First To Place Order</h2>
                    </center>
                </div>
            )

        }
        return(
            <>
                <Header/>
                <div className="container">
                    <div className="panel panel-primary">
                       
                        <div className="panel-heading">
                            <h3>Your Order For {this.state.hotel_name}</h3>
                        </div>
                        <div className="panel-body">
                            <form action="https://developerpayment.herokuapp.com/paynow" method="POST">
                                <input type="hidden" name="cost" value={this.state.cost}/>
                                <input type="hidden" name="id" value={this.state.id}/>
                                <input type="hidden" name="hotel_name" value={this.state.hotel_name}/>
                                <div className="form-group col-md-6">
                                    <label htmlFor="fname">Name</label>
                                    <input id="fname" name="name" className="form-control"
                                    value={this.state.name} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" name="email" className="form-control"
                                    value={this.state.email} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="phone">Phone</label>
                                    <input id="phone" name="phone" className="form-control"
                                    value={this.state.phone} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="address">Address</label>
                                    <input id="address" name="address" className="form-control"
                                    value={this.state.address} onChange={this.handleChange}/>
                                </div>
                                {this.renderItem(this.state.menuItem)}
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2>Total Price is Rs.{this.state.cost}</h2>
                                    </div>
                                </div>
                                <button className="btn btn-success" onClick={this.checkout} type="submit">PlaceOrder</button>
                            </form>
                        </div>
                        
                        
                    </div>
                </div>
            </>
        )
    }

    //call api 
    componentDidMount(){
        let menuItem =  sessionStorage.getItem('menu');
        let orderId = [];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res) =>  res.json())
        .then((data)=>{
            console.log(data)
            let totalPrice = 0;
            data.map((item) => {
                totalPrice = totalPrice + parseFloat(item.menu_price)
                return 'ok'
            })
            this.setState({menuItem:data,cost:totalPrice})
        })
    }

}

export default PlaceOrder