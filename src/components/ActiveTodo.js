import React from 'react';
import '../assets/scss/TodoItem.scss';
import Button from '../components/Button';

function ActiveTodo({ todo, removeTodo = () => {} }) {
    return (
        <div>
            <div className="todo-item" style={{ background: '#cacaca', maxWidth:"800px", margin:"auto",padding: "24px 0px", borderRadius: 0 }}>
                <span className="todo-item__content">{'Bulk Actions'}</span>
                <div className="todo-item__actions">
                    <Button name="Done" type="done" />
                    <Button name="Remove" type="remove" onClick={removeTodo} />
                </div>
            </div>
        </div>
    );
}

export default ActiveTodo;
