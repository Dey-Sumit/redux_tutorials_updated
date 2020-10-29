import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import notes_reducer from './reducers/notes.reducer'

export const store = createStore(notes_reducer, composeWithDevTools())