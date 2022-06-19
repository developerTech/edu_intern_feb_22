import React,{Component} from 'react';
import Footer from './Footer';
import Header from './Header';
import Product from './productDisplay'
import JSON from './db.json';


class Home extends Component {
    constructor(){
        super()

        this.state={
            productData:JSON,
            filteredData: JSON
        }
    }

    filterProduct = (keyword) =>{
        let output = this.state.productData.filter((item) => {
            return item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })

        this.setState({filteredData:output})
    }

    render(){
        return(
            <>
                <Header userText={(data) => {this.filterProduct(data)}}/>
                <Product prodData={this.state.filteredData}/>
                <Footer year="2022" month="June"/>
            </>
        )
    }
    
}

export default Home;