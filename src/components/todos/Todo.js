import React from 'react'

const Todo = ({ todo, deleteTodo }) => {
    return (
        <div>
            <span>{todo.text}</span><button onClick={() => deleteTodo(todo.id)}>DELETE</button>
        </div>
    )
}

export default Todo;
