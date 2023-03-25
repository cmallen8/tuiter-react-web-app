import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";                // useDispatch to call reducers
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";        // import reducer funct exported by todos-reducer

const Todos = () => {
    const todos                                         // retrieve todos from reducer. assign to local const
        = useSelector(state => state.todos);
    const [todo, setTodo] = useState({do:''});  // create local state variable
    const dispatch = useDispatch();                       // get dispatcher to invoke reducer funct
    const toggleTodoDone = (todo) => {
        dispatch(todoDoneToggle(todo))
    }
    const deleteTodoClickHandler = (index) => {           // handle delete button click, accepts TD index dispatch event to deleteTodo reducer funct passing index of td we want to delete
        dispatch(deleteTodo(index))
    }
    const createTodoClickHandler = () => {                 // handle button click
        dispatch(addTodo(todo))                           // call reducer funct passing new object
    }                                                     // as the payload in the action object
    const todoChangeHandler = (event) => {              // handle keystroke changes in input field
        const doValue = event.target.value;             // get data from input field
        const newTodo = {                               // create new object instance
            do: doValue                                 // set its do property
        };
        setTodo(newTodo);                               // change local state variable
    }
    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <button onClick={createTodoClickHandler}
                            className="btn btn-primary w-25
                          float-end">
                        Create</button>
                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control w-75"/>
                </li>
                {
                    todos.map((todo, index) =>
                        <li key={todo._id}
                            className="list-group-item">
                            <button onClick={() =>
                                deleteTodoClickHandler(index)}
                                    className="btn btn-danger
                                               float-end ms-2">
                                Delete
                            </button>
                            <input type="checkbox"
                                   checked={todo.done}
                                   onChange={() =>
                                    toggleTodoDone(todo)}
                                   className="me-2"/>
                            {todo.do}
                        </li>
                    )
                }
            </ul>
        </>
    );
};
export default Todos;