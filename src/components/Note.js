import React from 'react'

const Note = ({ note: { date, note, id, isImportant }, toggle_note }) => {

    return (
        <div className="card m-2">
            <div className="card-header">{date}</div>
            <div className="card-body">{note}</div>
            <button className="btn m-2" onClick={() => toggle_note(id)}>
                {isImportant ? 'Remove from Important' : 'Add to important'}
            </button>
        </div>
    )
}

export default Note
