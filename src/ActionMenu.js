import React, { Component } from 'react'

class ActionMenu extends Component {
    render() {
        const { status } =  this.props
        return (
            <div className="book-shelf-changer">
                <select>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading"> {status === "currentlyReading" && "✔" } Currently Reading</option>
                    <option value="wantToRead"> {status === "wantToRead" && "✔"} Want to Read</option>
                    <option value="read"> {status === "read" && "✔"} Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ActionMenu