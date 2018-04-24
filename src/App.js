import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBookPage from './SearchBookPage';
import SearchBookButton from './SearchBookButton'
import BookCase from './BookCase'

class BooksApp extends React.Component {
  state = {
    booksCurrently: [],
    booksWant : [],
    booksRead: [],
    booksFilter: []
  }
  
  componentDidMount() {
    BooksAPI.getAll().then(result => { 
      this.setState({ booksCurrently : result.filter(book => book.shelf === "currentlyReading" ) })
      this.setState({ booksWant: result.filter(book => book.shelf === "wantToRead" ) })
      this.setState({ booksRead: result.filter(book => book.shelf === "read" ) })
    })
  }

  searchBooks = query => {  
    BooksAPI.search(query).then( booksFilter => {
      if (!booksFilter.error){
          this.setState( { booksFilter } ) 
        }else{
          this.setState({ booksFilter : [] }) 
        }  
      
      })
    }  
  
  
  render() {
    return (
      <div className="app">
        <Route path="/add" render={({ history }) => {
        return ( 
          <SearchBookPage handlerSearchInput={this.searchBooks} booksSearch={this.state.booksFilter} /> 
        )
          }}/> 
        
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookCase title='Currently Reading' books={this.state.booksCurrently} />
              <BookCase title='Want to Read' books={this.state.booksWant} />
              <BookCase title='Read' books={this.state.booksRead} />
            </div>
            <SearchBookButton />
          </div>
        )} />
      
      </div>
    )
  }
}

export default BooksApp
