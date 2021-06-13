import React from 'react';
import '../assets/scss/AddTodo.scss';
import TodoForm from '../components/TodoForm';

const AddTodo = ({ title = 'New Task', getTodo = () => {} }) => {
    const handleSubmit = (form) => {
        getTodo(form);
    };
    return (
        <div>
                <h3 style={{ textAlign: 'center' }}>{title}</h3>

                <TodoForm
                    type="add-todo"
                    getForm={(form) => handleSubmit(form)}
                />
        </div>
    );
};

export default AddTodo;
