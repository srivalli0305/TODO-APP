import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    // Load todos from localStorage when the component mounts
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    const addTodo = (text) => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
        alert('To-do list saved!');
    };

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <TodoItem key={index} index={index} todo={todo} removeTodo={removeTodo} />
                ))}
            </ul>
            <button className="save-button" onClick={saveTodos}>Save</button>
        </div>
    );
};

export default TodoList;

