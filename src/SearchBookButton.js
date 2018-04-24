import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBookButton extends Component {
    render() {
        return (
            <div className="open-search">
                <Link to="/add" >Add a book</Link>
            </div>
        )
    }
}

export default SearchBookButton