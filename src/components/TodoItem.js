import React from 'react';

const TodoItem = ({ todo, index, removeTodo }) => {
    return (
        <li>
            {todo.text}
            <button onClick={() => removeTodo(index)}>Remove</button>
        </li>
    );
};

export default TodoItem;
