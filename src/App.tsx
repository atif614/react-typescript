import './App.css';
import Note from './components/note';
import { AllNotes } from './components/data';
import AddNote from './components/add-note/add-note';
import { useState } from 'react';
import { NoteType } from './components/notes-types';

function App() {
  const [notes, setNotes] = useState(AllNotes);
  const [editMode,setEditMode]=useState(false);
  const [noteToBeEdited,setNoteToBeEdited]=useState<NoteType | null>(null);

  const addNote = (note: NoteType) => {
    console.log(note);
    setNotes([
      note,
      ...notes,
    ])
  }

  const updateNote = (updatedNote: NoteType) => {
    const index = notes.findIndex(note=>note.id===updatedNote.id);
    let editedNotes = [...notes];
    editedNotes.splice(index,1,updatedNote);
    setNotes(editedNotes);
    setEditMode(false);
  }
  const editNote = (id: string) => {
    console.log('Edit', id);
    const note = notes.find(note=>note.id===id);
    console.log(note);
    setEditMode(true);
    note && setNoteToBeEdited(note);
  }

  const deleteNote = (id: string) => {
    console.log('Delete', id);
    // setNotes(notes.filter((item)=>item.id!==id));
    const index = notes.findIndex(note=>note.id===id);
    let editNotes = [...notes];
    editNotes.splice(index,1);
    setNotes(editNotes);
  }

  return (
    <div className="App">
      <h1>Notes App [{notes.length}]</h1>
      <AddNote addNote={addNote} editMode={editMode} noteToBeEdited={noteToBeEdited} updateNote={updateNote}   />
      <div>
        {
          notes.map((note) => <Note key={note.id} priority={note.priority} text={note.text} editNote={editNote} deleteNote={deleteNote} id={note.id} />)
        }
      </div>
    </div>
  );
}

export default App;
