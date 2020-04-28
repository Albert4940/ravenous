import React from 'react';
import './Business.css'; 

class Business extends React.Component{

    
        state = {
            business : {
            imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
            name: 'MarginOtto Pizzeria',
            address: '1010 Paddington Way',
            city: 'Flavortown',
            state: 'NY',
            zipCode: '10101',
            category: 'Italian',
            rating: 4.5,
            reviewCount: 90
        }
        }
    

    render(){
        return(
            <div className="Business">
            <div className="image-container">
                <img src={this.state.business.imageSrc} alt={this.state.business.name}/>
            </div>
            <h2>{this.state.business.name}</h2>
            <div className="Business-information">
                <div className="Business-address">
                <p>{this.state.business.address}</p>
                <p>{this.state.business.city}</p>
                <p>{this.state.business.state} {this.state.business.zipCode}</p>
                </div>
                <div className="Business-reviews">
                <h3>{this.state.business.category}</h3>
                <h3 className="rating">{this.state.business.rating} stars}</h3>
                <p>{this.state.business.reviewCount} reviews</p>
                </div>
            </div>
            </div>
        );
    }
}

export default Business;