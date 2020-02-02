import React, { Component } from 'react';

class SearchFunction extends Component {
    state = {
        query:''
    }
    searchAPI = (query) => {
            this.setState(() => ({
                query: query.trim()
            }))
            this.props.searchAPI(query)
        }
    render() {
        return(
            <div>
                <input
                    className='search-books'
                    type='text'
                    placeholder='Search Books'
                    value={this.state.query}
                    onChange={(event) => this.searchAPI(event.target.value)}
                />
            </div>
        )
    }
}
export default SearchFunction