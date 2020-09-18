import { Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react'
import "./ToDo.css"
import StarIcon from '@material-ui/icons/Star';
import db from '../firebase';
function ToDo(props) {
    return (
        <List  >
        <ListItem className="todo__list" >
          <ListItemIcon >
            <StarIcon color="secondary"  />
          </ListItemIcon>
          <ListItemText  primary={props.todo.task} />
          <Button onClick={event=>db.collection("todos").doc(props.id).delete()}><DeleteIcon/></Button>
        </ListItem>
       
      </List>
    )
}

export default ToDo
