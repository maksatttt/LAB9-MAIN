import { Task } from '../types';

interface TodoProps {
    todo: Task;
    editTodo: (id: number | string, updatedTodo: Task) => void;
    deleteTodo: (id: number | string) => void;
    toggleStatus: (id: number | string) => void;
}

export function Todo({ todo, editTodo, deleteTodo, toggleStatus }: TodoProps) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    value=""
                    onChange={() => toggleStatus(todo.id)} 
                    checked={todo.status === 'completed'}
                />
                <p style={{ margin: '0 10px', textDecoration: todo.status === 'completed' ? 'line-through' : 'none' }}>{todo.title}</p>
                <div>
                    <button type="button" className="btn btn-secondary" onClick={() => editTodo(todo.id, {...todo, title: 'Обновленный заголовок'})}>Редактировать</button>
                    <button type="button" className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Удалить</button>
                </div>
            </div>
        </div>
    );
}