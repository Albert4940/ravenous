import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    
    constructor(props){
        super(props);
        this.state = { 
            term:'',
            location:'',
            sortBy:'best_match'
        }
        this.sortByOptions = {
            'Best Match': ' best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'reviewCount'
       }
    }
    
    getSortByClass(sortByOption){
       return  sortByOption === this.state.sortBy ? 'active' : '';
    }

    handleSortByChange(sortByOption){
        this.setState({
            sortBy: sortByOption
        })
    }

    handleTermChange(e){
        this.setState({
            term: e.target.value
        })
    }

    handleLocationChange(e){
        this.setState({
            location: e.target.value
        })
    }

    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map( sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
        return <li key={sortByOptionValue} onClick={this.handleSortByChange.bind(this,sortByOptionValue)}>{sortByOption}</li>;
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