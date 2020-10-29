import React, { useState } from 'react'
import AllNotes from './components/AllNotes'
import CreateNote from './components/CreateNote'
import ImportantNotes from './components/ImportantNotes'

const App = () => {

    const [notes, setNotes] = useState([])

    const createNote = (newNote) => {
        setNotes([...notes, newNote])
    }

    const toggle_note = (id) => {
        const new_notes = notes.slice()

        const index = new_notes.findIndex(note => note.id === id)

        const note = new_notes[index]

        const new_note = {
            ...note,
            isImportant: !note.isImportant
        }
        new_notes[index] = new_note
        setNotes(new_notes)

    }

    console.log(notes);

    return (
        <div className="container mt-3 p-3">
            <CreateNote />
            <hr />
            <ImportantNotes notes={notes} toggle_note={toggle_note} />
            <hr />
            <AllNotes toggle_note={toggle_note} />
        </div>
    )
}

export default App
