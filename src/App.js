import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBookPage from './SearchBookPage';
import SearchBookButton from './SearchBookButton'
import BookCase from './BookCase'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  componentDidMount() {
    BooksAPI.getAll().then(result => { 
      this.setState({ books : result })
    })
  }

  update = (book,status) => {
    BooksAPI.update(book, status).then(result => {
      book.shelf = status
      this.setState({ books: this.state.books.filter(books => books.id != book.id).concat([book]) })
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/add" render={({ history }) => {
        return ( 
          <SearchBookPage allBooks={this.state.books} handleUpdate={this.update}/> 
        )
          }}/> 
        
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookCase title='Currently Reading' books={this.state.books.filter(book => book.shelf === "currentlyReading") } 
                        handleUpdate={this.update} />
              
              <BookCase title='Want to Read' books={this.state.books.filter(book => book.shelf === "wantToRead")} 
                        handleUpdate={this.update} />
              
              <BookCase title='Read' books={this.state.books.filter(book => book.shelf === "read")} 
                        handleUpdate={this.update} /> 
            </div>
            <SearchBookButton />
          </div>
        )} />
      
      </div>
    )
  }
}

export default BooksApp
