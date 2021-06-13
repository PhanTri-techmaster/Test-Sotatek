import React, { useState } from 'react';
import checked from '../assets/icons/checked.svg';
import non_checked from '../assets/icons/non-checkbox.svg';
import '../assets/scss/TodoItem.scss';
import Button from '../components/Button';
import TodoForm from '../components/TodoForm';


function TodoItem({
    todo,
    updateTodo = () => {},
    removeTodo = () => {},
    activeTodo = () => {},
}) {
    const [showDetail, setShowDetail] = useState(false);
    return (
        <div>
            <div className="todo-item">
                <img
                    className="todo-item__icon"
                    src={todo.checked ? checked : non_checked}
                    width={20}
                    alt=""
                    onClick={() =>
                        activeTodo({
                            ...todo,
                            checked: !todo.checked,
                        })
                    }
                />
                <span className="todo-item__content">{todo.todo || 'N/A'}</span>
                <div className="todo-item__actions">
                    <Button
                        name="Detail"
                        type="detail"
                        onClick={() => {
                            setShowDetail(!showDetail);
                        }}
                    />
                    <Button
                        name="Remove"
                        type="remove"
                        onClick={() => {
                            removeTodo(todo);
                        }}
                    />
                </div>
            </div>
            {showDetail && (
                <TodoForm
                    type="Edit"
                    todo={todo}
                    getFormEdit={(form) => {
                        updateTodo(form);
                        setShowDetail(!showDetail);
                    }}
                />
            )}
        </div>
    );
}

export default TodoItem;
