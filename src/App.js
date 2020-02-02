import React, { Component } from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI.js';
import { Route } from 'react-router-dom';
import MyBooks from './MyBooks.js';
import SearchBooks from './SearchBooks.js';

class App extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
      }))
    })
  }

 searchAPI = (query) => {
   BooksAPI.search(query)
    .then(books => {
      console.log(books)
      if (Array.isArray(books)) {
        this.setState(() => ({
          books
      }))
        // only proceed for valid server response
    }
    })
 }

  updateShelf = (bookIndex, shelfUpdate) => {
    BooksAPI.update(this.state.books[bookIndex], shelfUpdate) 
    this.setState(prevState => {
      prevState.books[bookIndex].shelf= shelfUpdate
      return {books: prevState.books}
    });
  }



  // updateShelf = (bookIndex, shelfUpdate) => { 
  //   this.setState(prevState => {
  //     prevState.books[bookIndex].shelf= shelfUpdate
  //     return {books: prevState.books}
  //   });
  // }
  // updateShelf = (bookIndex, shelfUpdate) => {
  //   console.log(this.state.books[bookIndex])
  // }
  // updateShelf = (bookIndex, shelfUpdate) => {
  //   this.setState(prevState => ({
  //     books: prevState.books.map(
  //       bookToUpdate => (
  //         bookToUpdate.id === bookIndex 
  //           ? Object.assign(bookToUpdate,{shelf: shelfUpdate}) 
  //           : bookToUpdate)
  //     )}));
  // };

  render() {
      return(
      <div>
        <header className='App-header'>Gabriel's Favorite Books</header>
        <Route exact path='/' render={() => (<MyBooks books={this.state.books} updateShelf={this.updateShelf}/>)} />
        <Route path='/search' render={() => (<SearchBooks books={this.state.books} updateShelf={this.updateShelf} searchAPI={this.searchAPI} />)} />
      </div>
      )
  }
}

export default App;
