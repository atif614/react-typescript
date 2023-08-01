export type NoteProps = {
    id?:number,
    text:String,
    priority? : 'high' | 'medium' | 'low' | string  
}