import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookCase from './BookCase'
import * as BooksAPI from './BooksAPI'
class SearchBook extends Component {
    
    state = {
        query: '',
        booksFilter: []
    }
    
    updateQuery = (query) => {
        this.setState({ query })
        if (query) {
            BooksAPI.search(query).then(booksFilter => {
                if (!booksFilter.error) {
                    this.setState({ booksFilter })
                } else {
                    this.setState({ booksFilter: [] })
                }
            })  
        }
    }

    render(){
        const { query, booksFilter } = this.state
        const { booksWant, booksCurrently, booksRead, handleUpdate } = this.props
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search' to="/"> Close </Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            value={query} 
                            type="text" 
                            placeholder="Search by title or author"
                            onChange={event => { this.updateQuery(event.target.value) }} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <BookCase title='Result' books={booksFilter} 
                                booksWant={booksWant}
                                booksCurrently={booksCurrently} 
                                booksRead={booksRead}
                                handleUpdate={handleUpdate} />
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook