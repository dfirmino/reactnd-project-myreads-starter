import React, { Component } from 'react'

class ActionMenu extends Component {
    render() {
        const { booksWantTitle, bookRef, booksCurrentlyTitle, booksReadTitle, bindCurrently, bindWant, bindRead} =  this.props
        return (
            <div className="book-shelf-changer">
                <select>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading" onClick={() => { bindCurrently(bookRef)} }> {booksCurrentlyTitle.includes(bookRef.title) && "✔" } Currently Reading</option>
                    <option value="wantToRead" onClick={() => { bindWant(bookRef)} }> { booksWantTitle.includes(bookRef.title) && "✔"} Want to Read</option>
                    <option value="read" onClick={() => { bindRead(bookRef)}}> {booksReadTitle.includes(bookRef.title) && "✔"} Read </option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ActionMenu