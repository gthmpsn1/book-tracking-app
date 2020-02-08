import React, { Component } from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI.js';
import { Route } from 'react-router-dom';
import MyBooks from './MyBooks.js';
import SearchBooks from './SearchBooks.js';

class App extends Component {
  state = {
    books: [],
    searchResult: []
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
      if (Array.isArray(books)) {
        this.setState(() => ({
          searchResult: books
      }))}
    // } else {
    //   this.setState(() => ({
    //     searchResult: []
    // }))
    // } 
  })}
  updateShelf = (bookIndex, shelfUpdate) => {
    BooksAPI.update(this.state.books[bookIndex], shelfUpdate) 
    this.setState(prevState => {
      prevState.books[bookIndex].shelf= shelfUpdate
      return {books: prevState.books}
    });
  }
  updateSearchShelf = (bookIndex, shelfUpdate) => {
    BooksAPI.update(this.state.searchResult[bookIndex], shelfUpdate)
    this.setState(prevState => {
      prevState.searchResult[bookIndex].shelf= shelfUpdate
      return {searchResult: prevState.searchResult}
    });

    this.state.books.id.includes(this.state.searchResult[bookIndex].id) &&
      BooksAPI.update(this.state.books[bookIndex], shelfUpdate) 
      this.setState(prevState => {
        prevState.books[bookIndex].shelf= shelfUpdate
        return {books: prevState.books}
      });
    
    !this.state.books.id.includes(this.state.searchResult[bookIndex].id) &&
    BooksAPI.update(this.state.books[bookIndex], shelfUpdate) 
    this.setState(prevState => {
      prevState.books.push(this.state.searchResult[bookIndex])
      return {books: prevState.books}
    });
  }

  render() {
      return(
      <div>
        <header className='App-header'>Gabriel's Favorite Books</header>
        <Route exact path='/' render={() => (<MyBooks books={this.state.books} updateShelf={this.updateShelf}/>)} />
        <Route path='/search' render={() => (<SearchBooks books={this.state.books} updateShelf={this.updateShelf} searchResult={this.state.searchResult} updateSearchShelf={this.updateSearchShelf} searchAPI={this.searchAPI} />)} />
      </div>
      )
  }
}

export default App;
