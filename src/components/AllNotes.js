import React from 'react'
import Note from './Note';

import { store } from '../redux/store'
import { connect } from 'react-redux'
const AllNotes = ({ toggle_note, notes }) => {
    // const notes = store.getState().notes
    return (
        <div className='my-3'>
            <h5>All Notes</h5>
            <div className="row">
                {
                    notes.map(note => <Note key={note.id} note={note} toggle_note={toggle_note} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    notes: state.notes
})
export default connect(mapStateToProps)(AllNotes)
