import './App.css';
import Note from './components/note';
import { AllNotes } from './components/data';

function App() {
  return (
    <div className="App">
      <h1>Notes App</h1>
      <div>
        {
          AllNotes.map((note)=><Note key={note.id} priority={note.priority} text={note.text} />)
        }
      </div>
    </div>
  );
}

export default App;
