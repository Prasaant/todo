import React, { useEffect, useState } from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import { Button } from '@material-ui/core';
import firebase from "firebase";
import './App.css';
import SendIcon from '@material-ui/icons/Send';
import ToDo from "./components/ToDo"
import db from './firebase';
function App() {
  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState("");
  useEffect(() => {
  
    db.collection("todos").orderBy("timestamp","desc").onSnapshot(snapshot=>{setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data()})))})
  }, [])
  const addTodo=(event)=>{
    event.preventDefault();
    
    db.collection("todos").add({task:input,timestamp:firebase.firestore.FieldValue.serverTimestamp()})
    
    setInput("");
  }
  return (
    <div className="App">
      <h1>Share your thoughts</h1>
      <form>
      <FormControl>
      <InputLabel htmlFor="my-input">Thoughts..</InputLabel>
      <Input id="my-input"   value={input} onChange={event=>setInput(event.target.value)} ></Input>
     
    </FormControl>
      
      <Button disabled={!input} variant="outlined" color="primary"  type="sumbit" onClick={addTodo}><SendIcon/></Button>
      </form>
      <ul>
        {
          todos.map(todo=>(
          <ToDo todo={todo.todo} id={todo.id}/>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
