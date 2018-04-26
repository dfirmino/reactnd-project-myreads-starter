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
    booksRead: []
  }
  
  componentDidMount() {
    BooksAPI.getAll().then(result => { 
      this.setState({ booksCurrently : result.filter(book => book.shelf === "currentlyReading" ) })
      this.setState({ booksWant: result.filter(book => book.shelf === "wantToRead" ) })
      this.setState({ booksRead: result.filter(book => book.shelf === "read" ) })
    })
  }

  setCurrently = book => {
    BooksAPI.update(book,"currentlyReading").then(result =>{
      this.setState(state => ({
        booksCurrently: state.booksCurrently.concat([book])
      }))
    })
  }
  
  setWant = book => {
    BooksAPI.update(book, "wantToRead").then(result => {
      this.setState(state => ({
        booksWant: state.booksWant.concat([book])
      }))
    })
  }
  
  setRead = book => {
    BooksAPI.update(book, "read").then(result => {
      this.setState(state => ({
        booksRead: state.booksRead.concat([book])
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/add" render={({ history }) => {
        return ( 
          <SearchBookPage booksWant={this.state.booksWant}
                          booksCurrently={this.state.booksCurrently}
                          booksRead={this.state.booksRead} 
                          handleCurrently={this.setCurrently} 
                          handleWant={this.setWant} 
                          handleRead={this.setRead}/> 
        )
          }}/> 
        
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookCase title='Currently Reading' books={this.state.booksCurrently} 
                        booksWant={this.state.booksWant} 
                        booksCurrently={this.state.booksCurrently}
                        booksRead={this.state.booksRead}
                        handleCurrently={this.setCurrently}
                        handleWant={this.setWant} 
                        handleRead={this.setRead} />
              
              <BookCase title='Want to Read' books={this.state.booksWant} 
                        booksWant={this.state.booksWant}
                        booksCurrently={this.state.booksCurrently}
                        booksRead={this.state.booksRead}
                        handleCurrently={this.setCurrently}
                        handleWant={this.setWant} 
                        handleRead={this.setRead} />
              
              <BookCase title='Read' books={this.state.booksRead} 
                        booksWant={this.state.booksWant}
                        booksCurrently={this.state.booksCurrently}
                        booksRead={this.state.booksRead} 
                        handleCurrently={this.setCurrently}
                        handleWant={this.setWant} 
                        handleRead={this.setRead}/> 
            </div>
            <SearchBookButton />
          </div>
        )} />
      
      </div>
    )
  }
}

export default BooksApp
