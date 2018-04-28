import React, { Component } from 'react'

class ActionMenu extends Component {
    render() {
        const { status, bookRef, bindUpdate} =  this.props
        return (
            <div className="book-shelf-changer">
                <select>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading" onClick={() => { bindUpdate(bookRef,"currentlyReading") }}> {status === "currentlyReading"  && "✔" } Currently Reading</option>
                    <option value="wantToRead" onClick={() => { bindUpdate(bookRef,"wantToRead") }}> {status === "wantToRead" && "✔"} Want to Read</option>
                    <option value="read" onClick={() => { bindUpdate(bookRef,"read") }}> {status === "read" && "✔"} Read </option>
                    <option value="none" onClick={() => { bindUpdate(bookRef, "none") }}>None</option>
                </select>
            </div>
        )
    }
}

export default ActionMenu