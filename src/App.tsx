import './App.css';
import Note from './components/note';
import { AllNotes } from './components/data';
import AddNote from './components/add-note/add-note';
import { useState } from 'react';
import {  NoteType } from './components/notes-types';

function App() {
  const [notes,setNotes]=useState(AllNotes);
  const addNote = (note:NoteType)=>{
    console.log(note);
    setNotes([
      note,
      ...notes,
    ])
  }
  return (
    <div className="App">
      <h1>Notes App</h1>
      <AddNote addNote={addNote} />
      <div>
        {
          notes.map((note)=><Note key={+note.id} priority={note.priority} text={note.text} />)
        }
      </div>
    </div>
  );
}

export default App;
