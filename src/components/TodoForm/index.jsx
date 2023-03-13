import "./styles.css";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import {useDispatch, useSelector} from 'react-redux';
import { requestPostTodos } from "actions/todos";
import { sendAlert } from "actions/todos";

const TodoForm = () => {
    const [newLabel, setNewLabel] = useState('');
    const dispatch = useDispatch();
    const { todos } = useSelector(state => state);
    const {newId} = todos;
    const handleInput = e => {
        setNewLabel(e.target.value);
    }

    const handleNewToDo = () => {
        if(newLabel != ''){
            dispatch(requestPostTodos({
                "label": newLabel,
                "checked": false,
                "id": newId
            }))
        }
        else{
            dispatch(sendAlert({
                kind: 'error',
                message: 'No puedes crear un ToDo con un label vacío'
            }));
        }
    }

    return(
        <div className="input-btn">
            <input className="input-form" type="text" onChange={handleInput} placeholder="Enter new to do" />
            <Button variant="primary" className="btn-primary" onClick={handleNewToDo}> ADD TO DO </Button>
        </div>
    );
}

export default TodoForm;