export const getData = () => JSON.parse(localStorage.getItem('todoList')) || [];

export const setData = (list) =>
    localStorage.setItem('todoList', JSON.stringify(list));

export const removeData = () => localStorage.remove('todoList');
