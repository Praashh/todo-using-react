import React, { useState } from 'react'

const AddTodo = (props) => {
    const [title,setTitle] = useState("");
    const [Desc,setDesc] = useState(""); 

    const submit = (e) =>{
         e.preventDefault();
         if(!title || !Desc){
            alert("tittle or Description can not blank");
         }
         props.addTodo(title, Desc);
    }
  return (
    <div className="container my-3">
        <h3 className="text-center">Add a Todo</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-lable">Todo Tittle</label>
                <input type="text" value={title} onChange = {(e)=>{setTitle(e.target.value)}} className="form-control" id="tittle"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Desc" className="form-lable">Todo Description</label>
                <input type="text" value={Desc} onChange = {(e)=>{setDesc(e.target.value)}}  className="form-control" id="Desc"/>
            </div>
            <button type="submit" className="btn btn-sm btn-success">Add to Todo List</button>
        </form>
    </div>
  )
}

export default AddTodo
