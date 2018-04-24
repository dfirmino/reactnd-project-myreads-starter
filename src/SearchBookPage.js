import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookCase from './BookCase'
class SearchBook extends Component {
    
    state = {
        query: ''
    }
    
    updateQuery = (query) => {
        const { handlerSearchInput, booksSearch } = this.props
        this.setState({ query: query.trim() })
        if (query) {
            handlerSearchInput(query)
        }
    }
    
    render(){
        const { query } = this.state
        const { handlerSearchInput, booksSearch } = this.props
        
        return (
            <div className="search-books">
                {console.log(booksSearch)}
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
                        <BookCase title='Result' books={booksSearch} />
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook