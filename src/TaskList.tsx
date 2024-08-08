import React from 'react';
import TaskItem from './TaskItem';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
    toggleComplete: (id: number) => void;
    editTask: (id: number, newTitle: string) => void;
    deleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleComplete, editTask, deleteTask }) => {
    return (
        <ul id="task-list">
            {tasks.map(task => (
                <TaskItem 
                    key={task.id}
                    task={task}
                    toggleComplete={toggleComplete}
                    editTask={editTask}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
}

export default TaskList;
