import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBooks extends Component {
    state = {
        query: '',
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }

    clearQuery = () => {
        this.updateQuery('')
    }

    handleSelect = (event) => {
        event.preventDefault();
        return this.props.updateShelf(event.target.name, event.target.value);
    }

    render(){
        const {query} = this.state
        const {books} = this.props

        const showingBooks = query === ''
            ? books
            : books.filter((b) => (
                b.title.toLowerCase().includes(query.toLowerCase())
            ))
        return(
            <div>
                <Link to='/'>{`<<< Back`}</Link>
                <div>
                    <input
                        type='text'
                        placeholder='Search Books'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                    <Link
                        to='/search'
                        className='add-book'
                    >Add Book</Link>
                </div>

                {showingBooks.length !== books.length && (
                    <div >
                        <span>{`Now showing ${showingBooks.length} of ${books.length}.`}</span>
                        <button onClick={this.clearQuery}>Show All</button>
                    </div>
                )}
                <div>
                    {showingBooks.map((book, index) => (
                        <span key={index}>
                            <div>
                             
                                    <p>{book.title}, {book.shelf}</p>
                                    <select
                                        name={index}
                                        defaultValue={book.shelf}
                                        onChange={this.handleSelect}>
                                        <option disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read" >Already Read</option>
                                    </select>
                                
                            </div>
                        </span>
                    ))}
                </div>

            </div>
        )
    }
}
export default SearchBooks