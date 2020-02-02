import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchFunction from './SearchFuntion.js';

class SearchBooks extends Component {
    // state = {
    //     query: '',
    // }

    // updateQuery = (query) => {
    //     this.setState(() => ({
    //         query: query.trim()
    //     }))
    // }

    // clearQuery = () => {
    //     this.updateQuery('')
    // }

    handleSelect = (event) => {
        event.preventDefault();
        return this.props.updateShelf(event.target.name, event.target.value);
    }

    render(){
        // const {query} = this.state
        const {books} = this.props
        // const showingBooks = query === ''
        //     ? books
        //     : books.filter((b) => (
        //         b.title.toLowerCase().includes(query.toLowerCase())
        //     ))
        return(
            <div>
                <Link to='/'>{`<<< Back`}</Link>
                <div>
                    <SearchFunction books={this.props.books} searchAPI={this.props.searchAPI} />
                </div>

                {/* <div>
                    <input
                        className='search-books'
                        type='text'
                        placeholder='Search Books'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
                {showingBooks.length !== books.length && (
                    <div >
                        <span>{`Now showing ${showingBooks.length} of ${books.length}.`}</span>
                        <button onClick={this.clearQuery}>Show All</button>
                    </div>
                )} */}
                <div>
                    <h1 className='shelfHeader'>Search All Books</h1>
                    <div className='shelfBG1'>
                        <div className='bookShelf'>
                        
                                {books.map((book, index) => (

                                    <div className='bookProfile' key={index}>
                                        <img className='bookImage' src={(book.imageLinks.smallThumbnail === null) ? 'n/a' : book.imageLinks.smallThumbnail} alt={book.title}></img>
                                        <div className='bookInfo'>
                                            <p className='bookTitle'><b>{book.title}</b><br></br><em>{(book.subtitle === null) ? 'n/a' : book.subtitle}</em></p>
                                            <ul>
                                                <li>Authors: {(book.authors === null) ? 'n/a' : book.authors}</li>
                                                <li>Published: {(book.publishedDate === null) ? 'n/a' : book.publishedDate}</li>
                                                <li>ISBN 13: {(book.industryIdentifiers[0].identifier === null) ? 'n/a' : book.industryIdentifiers[0].identifier}</li>
                                                <li>ISBN 10: {(book.industryIdentifiers[1].identifier === null) ? 'n/a' : book.industryIdentifiers[1].identifier}</li>
                                                <li>Pages: {(book.pageCount === null) ? 'n/a' : book.pageCount}</li>
                                                <li><a href={(book.previewLink === null) ? 'n/a' : book.previewLink}>PREVIEW</a></li>
                                            </ul>
                                            <select
                                                name={index}
                                                defaultValue={book.shelf}
                                                onChange={this.handleSelect}>
                                                <option>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read" >Already Read</option>
                                            </select>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default SearchBooks