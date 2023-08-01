export type NoteProps = {
    text:String,
    priority? : 'high' | 'medium' | 'low' | string  
}

export type NoteType = {
    id:String;
    text:String,
    priority? : 'high' | 'medium' | 'low' | string  
}