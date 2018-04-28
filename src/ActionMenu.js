import React, { Component } from 'react'

class ActionMenu extends Component {
    state = {
        bookRef: this.props.bookRef
    }
    render() {
        const { status, bindUpdate} =  this.props
        const { bookRef } =  this.state
        return (
            <div className="book-shelf-changer">
                <select value={bookRef.shelf ? bookRef.shelf : "none"} onChange={(e) => { this.setState({ "bookRef" : bindUpdate(bookRef, e.target.value) }) }}>
                    <option value="none" disabled >Move to...</option>
                    <option value="currentlyReading"> {bookRef.shelf === "currentlyReading"  && "✔" } Currently Reading</option>
                    <option value="wantToRead"> {bookRef.shelf === "wantToRead" && "✔"} Want to Read</option>
                    <option value="read"> {bookRef.shelf === "read" && "✔"} Read </option>
                    <option value="none">  None</option>
                </select>
            </div>
        )
    }
}

export default ActionMenu