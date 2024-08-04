// src/App.jsx
import './App.css';

const App = () => {
  const tasks = [
    { name: 'dishes', completed: true },
    { name: 'making lunch', completed: false },
    { name: 'cleaning the toilet', completed: true },
  ];

  return (
    <>
      <h1>tasks List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : 'not-completed'}>
            {task.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;