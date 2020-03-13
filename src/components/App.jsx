import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./Form";

function App(){
    const [notes ,setNotes]= React.useState([])
    function addNote(note){
        setNotes(preNotes=>{
            return([...preNotes,note])
        })
    }
    function removeNote(id){
        setNotes(preNotes=>{
          return  preNotes.filter((notesItem,index)=>{
                return index!==id;
            })
        })
    }
return (
    
        <div>
            <Heading />
            <CreateArea onAdd={addNote} />
            {notes.map((noteitem,index)=>{
               return <Note 
                        key = {index}
                        id = {index}
                        title={noteitem.title}
                        content={noteitem.content}
                        onDelete={removeNote}/>
            })}
            <Footer/>
        </div>
        

)
 
}
export default App;