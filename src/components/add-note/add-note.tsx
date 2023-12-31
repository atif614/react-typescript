import './add-note.css';
import { useEffect, useState } from 'react';
import { NoteType, Priority } from '../notes-types';
import { v4 as uuidv4 } from 'uuid';
import Card from '../card/card';

type AddNoteProps = {
    addNote: (note: NoteType) => void,
    editMode: boolean,
    noteToBeEdited: NoteType | null,
    updateNote: (updatedNote: NoteType) => void
}
function AddNote(props: AddNoteProps) {
    const [text, setText] = useState("");
    // const defaultPriority: 'low' | 'medium' | 'high' =  'low';
    const [priority, setPriority] = useState<Priority>('low');
    const theme = 'dark';
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        // console.log(e.target.value);
        setText(e.target.value);
        // console.log(text);
    }
    function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        // console.log(text);
        if (props.editMode) {
            props.noteToBeEdited && props.updateNote({
                text,
                priority,
                id: props.noteToBeEdited.id,
            })
        } else {
            props.addNote({
                text,
                priority,
                id: uuidv4(),
            })
        }

        setText('');
        setPriority('low');
    }
    function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
        console.log(e.target.value);
        //    Type Assertion
        setPriority(e.target.value as Priority);

    }

    const setNoteContent = (note: NoteType) => {
        console.log(note)
        setText(note.text);
        setPriority(note.priority);
    }
    useEffect(() => {
        console.log('useEffect')
        if (props.noteToBeEdited && props.editMode) {
            setNoteContent(props.noteToBeEdited);
        }
    }, [props.noteToBeEdited, props.editMode])

    return (
        <Card bgColor={theme === 'dark' ? '#333' : '#ddd'} height='2' padding='1'>
            <form className="add-note">
                <input type="text" value={text} onChange={handleChange} />
                <select onChange={handleSelect} value={priority}>
                    <option value="high" >High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <button onClick={handleClick}>{props.editMode ? 'Update' : 'Add'}</button>
            </form>
        </Card>
    )
}
export default AddNote;