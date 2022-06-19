import React from 'react';
import './productDisplay.css';

const Product = (props) => {
    console.log(props)

    const renderProduct = props.prodData.map((item) => {
        return(
            <div className="col">
                <div className="card" style={{height:'350px'}}>
                    <img src={item.image}  style={{height:'150px',width:'70%',marginLeft:'10%'}}/>
                    <div>
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                        <p>Rs. {item.cost}</p>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className="row row-cols-1 row-cols-4 g-4">
            {renderProduct}
        </div>
    )
}

export default Product