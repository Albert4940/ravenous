import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    
        state = { 
            sortByOptions :{
            'Best Match': ' best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'reviewCount'
        }
    }
    

    renderSortByOptions(){
        return Object.keys(this.state.sortByOptions).map( sortByOption => {
            let sortByOptionValue = this.state.sortByOptions[sortByOption];
        return <li key={sortByOptionValue}>{sortByOption}</li>;
        });
    }

    render(){
        return(
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a href="">Let's Go</a>
            </div>
            </div>
        );
    }
}

export default SearchBar;