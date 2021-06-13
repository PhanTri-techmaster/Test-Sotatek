import React, { useState,  useEffect} from 'react';
import shortid from 'shortid';
import '../assets/scss/AddTodo.scss';
import Button from '../components/Button';
import DatePickerCustom from '../components/Datepicker';
import Input from '../components/Input';
import Select from '../components/Select';
import TextArea from '../components/TextArea';

const INIT_FORM = {
    todo: '',
    description: '',
    date: new Date(),
    piority: 'normal',
    checked: false,
};

const Layout = ({ children }) => (
    <div
        style={{
            margin: '10px 0',
            width: '100%',
        }}
    >
        {children}
    </div>
);

const TodoForm = ({
    type = '',
    todo = {},
    getForm = () => {},
    getFormEdit = () => {},
}) => {
    const [form, setForm] = useState(INIT_FORM);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (type === 'add-todo' && (!form.description || !form.todo)) {
            alert('Please fill all');
            return;
        }

        if (type === 'add-todo') {
            getForm({
                ...form,
                id: shortid.generate(),
            });
            alert("Add success");
        } else {
            const newForm = { ...todo };
            for (let key in newForm) {
                newForm[key] = form[key] || todo[key];
            }
            getFormEdit(newForm);
            alert("Edit success");
        }

        setForm(INIT_FORM);
    };
    
    useEffect(() => {
        if (type === 'Edit' ){
            setForm(todo);
        }
    },[])

    console.log(form,"form");

    return (
        <form onSubmit={handleSubmit} className="add-todo">
            <Layout>
                <Input
                    className="custom__input-title"
                    type="text"
                    name="todo"
                    defaultValue={todo.todo}
                    value={form.todo}
                    onChange={(value) =>
                        setForm((form) => {
                            return { ...form, todo: value };
                        })
                    }
                />
            </Layout>
            <Layout>
                <TextArea
                    title="Description:"
                    value={form.description}
                    defaultValue={todo.description}
                    onChange={(value) =>
                        setForm((form) => {
                            return { ...form, description: value };
                        })
                    }
                />
            </Layout>

            <div className="add-todo__datepick">
                <Layout>
                    <div style={{ marginRight: 10 }}>
                        <DatePickerCustom
                            title="Due Date"
                            selected={
                                type === 'add-todo'
                                    ? form.date
                                    : new Date(todo.date)
                            }
                            onChange={(v) =>
                                setForm((form) => {
                                    return {
                                        ...form,
                                        date: v,
                                    };
                                })
                            }
                        />
                    </div>
                </Layout>
                <Layout>
                    <div style={{ marginLeft: 10 }}>
                        <Select
                            title="Piority"
                            value={todo.piority || form.piority}
                            onChange={(v) =>
                                setForm((form) => {
                                    return {
                                        ...form,
                                        piority: v,
                                    };
                                })
                            }
                            options={[
                                { value: 'low', label: 'Low' },
                                { value: 'normal', label: 'Normal' },
                                { value: 'high', label: 'High' },
                            ]}
                        />
                    </div>
                </Layout>
            </div>

            <Button
                name={type === 'add-todo' ? 'ADD' : 'UPDATE'}
                type="add"
                onClick={(e) => {
                    handleSubmit(e);
                    setForm(INIT_FORM);
                }}
            />
        </form>
    );
};

export default TodoForm;
