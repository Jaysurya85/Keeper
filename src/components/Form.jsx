import React from "react";

function CreateArea (props){
    const [note,setNote] = React.useState({
        title:"",
        content:""
    }
    );
    function noteChange(event){
            const{name,value} = event.target;
            setNote(prevNote => {
                return{
                    ...prevNote,
                    [name]:value
                };
            })
    }
    
    function submitForm(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
    }

    

    return(
    <div>
        <form>
    <input name ="title"
            value={note.title} 
            onChange={noteChange} 
            placeholder="Title" />
    <textarea name="content"
            value={note.content} 
            onChange={noteChange} 
            placeholder="Take a note..." 
            rows="3"/>
    
    <button onClick={submitForm}>add</button>
</form>
</div>
    )
}

export default CreateArea ;
