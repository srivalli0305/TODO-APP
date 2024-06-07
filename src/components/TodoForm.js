import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit} className="todo-input">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;
