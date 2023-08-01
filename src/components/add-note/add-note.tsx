import './add-note.css';
import { useState } from 'react';
import { NoteType } from '../notes-types';
import { v4 as uuidv4 } from 'uuid';

type AddNoteProps = {
    addNote: (note: NoteType) => void
}
function AddNote(props:AddNoteProps){
    const [text,setText]=useState("");
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value);
        setText(e.target.value);
    } 
    function handleClick(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault();
        props.addNote({
            text,
            priority:'low',
            id:uuidv4(),
        })
    }
    function handleSelect(e:React.ChangeEvent<HTMLSelectElement>){
       console.log(e.target.value);
       
    }
    return(
        <div>
         <form className="add-note">
            <input type="text" onChange={handleChange} />
            <select onChange={handleSelect}>
                <option value="high" >High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <button onClick={handleClick}>Add</button>
         </form>
        </div>
    )
}
export default AddNote;