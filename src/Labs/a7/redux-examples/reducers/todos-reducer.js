import { createSlice } from '@reduxjs/toolkit'

const initialTodos = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];

const todosSlice = createSlice({
    name: 'todos',
    initialState: initialTodos,
    reducers: {                                         // define reducer funct as map
        addTodo(state, action) {                        // reducer functions receive current state
            state.push({                                // mutate current state into new state
                _id: (new Date()).getTime(),            // ex pushing new object. id set to current date
                do: action.payload.do,                  // do set to "do" object sent through action obj
                done: false                             // commonly referred to as the payload
            });
        },
        deleteTodo(state, action) {
            const index = action.payload
            state.splice(index, 1)
        },
        todoDoneToggle(state, action) {
            const todo = state.find((todo) =>
                  todo._id === action.payload._id)
            todo.done = !todo.done
        }
    }
});

export const {addTodo, deleteTodo, todoDoneToggle} = todosSlice.actions            // export actions so we can call from UI
export default todosSlice.reducer