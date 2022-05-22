import React, { Component } from "react";
import './search.styles.css'

class SearchBar extends Component {
    render (){
        return (
            <div>
                <input 
                className={`search-bar ${this.props.className}`}
                type={'search'}
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler} />
            </div>
        )
    }
}
export default SearchBar