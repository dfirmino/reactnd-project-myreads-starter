import React, { Component } from 'react'
import ActionMenu from './ActionMenu'

class BookCase extends Component {
    render() {
        const { books, booksWant, booksCurrently, booksRead, handleCurrently, handleWant, handleRead } = this.props
        const booksWantTitle = booksWant.map(book => book.title)
        const booksCurrentlyTitle = booksCurrently.map(book => book.title)
        const booksReadTitle = booksRead.map(book => book.title)
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map( book => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})`}}></div>
                                        <ActionMenu status={book.shelf} bookRef={book} 
                                            booksWantTitle={booksWantTitle}
                                            booksCurrentlyTitle={booksCurrentlyTitle}
                                            booksReadTitle={booksReadTitle}
                                            bindCurrently={handleCurrently}
                                            bindWant={handleWant} 
                                            bindRead={handleRead} />
                                    </div>
                                    <div className="book-title">{ book.title }</div>
                                    <div className="book-authors">{ book.authors ? book.authors.join(',') : "nothing search " }</div>
                                </div>
                            </li>

                        ))}
                       
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookCase