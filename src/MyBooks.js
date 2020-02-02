import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';



class MyBooks extends Component {
    handleSelect = (event) => {
        event.preventDefault();
        return this.props.updateShelf(event.target.name, event.target.value);
    }
    
    render(){
        const {books} = this.props
        return(
            <div>
                <Link to='/search'>{`Go to Search >>>`}</Link>
                <div>
                    <h1 className='shelfHeader'>Currently Reading</h1>
                    <div className='shelfBG1'>
                        <div className='bookShelf'>
                            
                            {books.map((book, index) => (
                                book.shelf === 'currentlyReading' &&
                                    <div className='bookProfile' key={index}>
                                        <img className='bookImage' src={book.imageLinks.smallThumbnail} alt={book.title}></img>
                                        <div className='bookInfo'>
                                            <p className='bookTitle'><b>{book.title}</b><br></br><em>{book.subtitle}</em></p>
                                            <ul>
                                                <li>Authors: {book.authors}</li>
                                                <li>Published: {book.publishedDate}</li>
                                                <li>ISBN 13: {book.industryIdentifiers[0].identifier}</li>
                                                <li>ISBN 10: {book.industryIdentifiers[1].identifier}</li>
                                                <li>Pages: {book.pageCount}</li>
                                                <li><a href={book.previewLink}>PREVIEW</a></li>
                                            </ul>
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
                                    </div>
                            ))}
                        </div>
                    </div>

                    <h1 className='shelfHeader'>Wanting to Read</h1>
                    <div className='shelfBG2'>
                        <div className='bookShelf'>
                            {books.map((book, index) => (
                                book.shelf === 'wantToRead' &&
                                    <div className='bookProfile' key={index}>
                                        <img className='bookImage' src={book.imageLinks.smallThumbnail} alt={book.title}></img>
                                        <div className='bookInfo'>
                                            <p className='bookTitle'><b>{book.title}</b><br></br><em>{book.subtitle}</em></p>
                                            <ul>
                                                <li>Authors: {book.authors}</li>
                                                <li>Published: {book.publishedDate}</li>
                                                <li>ISBN 13: {book.industryIdentifiers[0].identifier}</li>
                                                <li>ISBN 10: {book.industryIdentifiers[1].identifier}</li>
                                                <li>Pages: {book.pageCount}</li>
                                                <li><a href={book.previewLink}>PREVIEW</a></li>
                                            </ul>
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
                                    </div>
                            ))}
                        </div>
                    </div>

                    <h1 className='shelfHeader'>Done Reading</h1>
                    <div className='shelfBG3'>
                        <div className='bookShelf'>
                            {books.map((book, index) => (
                                book.shelf === 'read' &&
                                    <div className='bookProfile' key={index}>
                                        <img className='bookImage' src={book.imageLinks.smallThumbnail} alt={book.title}></img>
                                        <div className='bookInfo'>
                                            <p className='bookTitle'><b>{book.title}</b><br></br><em>{book.subtitle}</em></p>
                                            <ul>
                                                <li>Authors: {book.authors}</li>
                                                <li>Published: {book.publishedDate}</li>
                                                <li>ISBN 13: {book.industryIdentifiers[0].identifier}</li>
                                                <li>ISBN 10: {book.industryIdentifiers[1].identifier}</li>
                                                <li>Pages: {book.pageCount}</li>
                                                <li><a href={book.previewLink}>PREVIEW</a></li>
                                            </ul>
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
                                    </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        )
   }
}
export default MyBooks