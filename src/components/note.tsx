 import './note.css'
import { NoteProps } from './notes-types';
// type NoteProps = {
//     text:String,
//     priority? : 'high' | 'medium' | 'low' | string  
// }

function Note(props:NoteProps){
  return(
    <div className={`notes ${props.priority}`}>
        {props.text}
    </div>
  )
}

export default Note;