import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class MyBooks extends Component {
    handleSelect = (event) => {
        event.preventDefault();
        return this.props.updateShelf(event.target.name, event.target.value);
    }
    
    render(){
        const {books} = this.props
        return(
            <div>
                <Link to='/search'>{`Search >>>`}</Link>
                <div>
                <h1>Currently Reading</h1>
                    {books.map((book, index) => (
                        book.shelf === 'currentlyReading' &&
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
                
                <h1>Want To Read</h1>
                    {books.map((book, index) => (
                        book.shelf === 'wantToRead' &&
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

                <h1>Done Reading</h1>
                    {books.map((book, index) => (
                        book.shelf === 'read' &&
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
export default MyBooks