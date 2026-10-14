import React, { useState } from 'react';

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Instalar Node.js y Vite', completed: true },
    { id: 2, title: 'Comprender Componentes y Props', completed: true },
    { id: 3, title: 'Practicar estado con useState', completed: false },
    { id: 4, title: 'Desplegar en GitHub Pages', completed: false }
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', textAlign: 'left' }}>
      <h3>Lista de Tareas Dinámica</h3>
      
      <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
        <input 
          type="text" 
          placeholder="Nueva tarea..." 
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '8px 12px', cursor: 'pointer' }}>Agregar</button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li 
            key={task.id} 
            style={{
              padding: '10px',
              borderBottom: '1px solid #eee',
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? '#888' : '#000'
            }}
          >
            <span onClick={() => toggleTask(task.id)} style={{ cursor: 'pointer' }}>
              {task.completed ? '+ ' : '-'} {task.title}
            </span>
            <button 
              onClick={() => toggleTask(task.id)} 
              style={{ fontSize: '0.8rem', padding: '4px 8px', cursor: 'pointer' }}
            >
              {task.completed ? 'Desmarcar' : 'Completar'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}