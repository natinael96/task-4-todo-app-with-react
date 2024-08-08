import React from 'react';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskItemProps {
    task: Task;
    toggleComplete: (id: number) => void;
    editTask: (id: number, newText: string) => void;
    deleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleComplete, editTask, deleteTask }) => {
    const handleEdit = () => {
        const newText = prompt('editText', task.text);
        if (newText) {
            editTask(task.id, newText);
        }
    };

    return (
        <li id={`task-${task.id}`}>
            <input
                type="checkbox"
                className="check"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
            />
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            <button className="edit" onClick={handleEdit}>Edit</button>
            <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
};

export default TaskItem;