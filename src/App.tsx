import './App.css';
import React, { useState } from 'react';
import TaskList from './TaskList';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState<string>('');

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: taskInput,
        completed: false
      }
    ]);
    setTaskInput('');
  };

  const editTask = (id: number, newText: string) => {
    setTasks(tasks.map(t => 
      t.id === id 
        ? { ...t, text: newText }
        : t
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };
  
  const toggleComplete = (id: number) => {
    setTasks(tasks.map(t =>
      t.id === id
        ? { ...t, completed: !t.completed } 
        : t
    ));
  };

  return (
    <div className='container'>
      <h1>Simple Todo App with React</h1>
      <input 
        type="text" 
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      
      <TaskList 
      tasks={tasks} 
      toggleComplete={toggleComplete}
      editTask={editTask}
      deleteTask={deleteTask}
    />

    </div>
  );
};

export default App;
