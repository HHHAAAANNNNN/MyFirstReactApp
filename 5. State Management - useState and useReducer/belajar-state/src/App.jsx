import './App.css'
import { useState, useReducer } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const initialTasks = [
    {id: 1, Text: 'Belajar React', Done: true},
    {id: 2, Text: 'Belajar Redux', Done: false},
    {id: 3, Text: 'Belajar Context API', Done: false},
  ]

  // Komponen untuk halaman useState
  function UseStateComponent() {
    const [count, setCount] = useState(0);
    const [person, setPerson] = useState({
      firstName: "John",
      lastName: "Doe",
      age: 50,
      email: "john.doe@example.com"
    });

    function handleFirstNameChange(e){
      setPerson({...person, firstName: e.target.value})
    }

    function handleLastNameChange(e){
      setPerson({...person, lastName: e.target.value})
    }

    function handleAgeChange(e){
      setPerson({...person, age: e.target.value})
    }

    function handleEmailChange(e){
      setPerson({...person, email: e.target.value}) 
    }

    return (
      <>
        <button onClick={() => setCurrentPage('home')}>← Kembali ke Halaman Utama</button>
        <h1>Counter yang SEKARANG berfungsi</h1>
        <h2>Angka: {count} </h2>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
        <hr />
        <h1>Form yang SEKARANG berfungsi</h1>
        <form>
          <label>
            First Name:
            <input type="text" value={person.firstName} onChange={handleFirstNameChange} />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" value={person.lastName} onChange={handleLastNameChange} />
          </label>
          <br />
          <label>
            Age:
            <input type="number" value={person.age} onChange={handleAgeChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={person.email} onChange={handleEmailChange} />
          </label>
        </form>
        <h2>Preview:</h2>
        <p>First Name: {person.firstName}</p>
        <p>Last Name: {person.lastName}</p>
        <p>Age: {person.age}</p>
        <p>Email: {person.email}</p>
      </>
    );
  }

  // Komponen untuk halaman useReducer (dummy)
  function UseReducerComponent() {
    function taskReducer(tasks, action){
      switch(action.type){
        case 'added': {
          return [...tasks, {id: action.id, Text: action.Text, Done: false}];
        }
        case 'deleted': {
          return tasks.filter((task) => task.id !== action.id);
        }
        default: {
          throw new Error('Unknown action: ' + action.type);
        }
      }
    }

    function TaskApp() {
      const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
      const [text, setText] = useState('');
      let nextId = 4;

      function handleAddTask(e){
        dispatch({type: 'added', id: nextId++, Text: text});
        setText('');
      }

      function handleDeleteTask(taskId){
        dispatch({type: 'deleted', id: taskId});
      }

      return (
        <>
          <h1>Daftar Tugas</h1>
          <input placeholder='Tambah Tugas Baru' value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleAddTask}>Tambah Tugas</button>
          <ul>
            {tasks.map(task => (
              <li key={task.id}>
                {task.Text} <button onClick={() => handleDeleteTask(task.id)}>Hapus</button>
              </li>
            ))}
          </ul>
        </>
      )
    }
    return (
      <>
        <button onClick={() => setCurrentPage('home')}>← Kembali ke Halaman Utama</button>
        <TaskApp />
      </>
    );
  }

  // Halaman utama dengan 2 button
  function HomePage() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>State Management - React</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', marginTop: '30px' }}>
          <button 
            onClick={() => setCurrentPage('useState')}
            style={{ padding: '15px 30px', fontSize: '18px', cursor: 'pointer' }}
          >
            Implementasi UseState
          </button>
          <button 
            onClick={() => setCurrentPage('useReducer')}
            style={{ padding: '15px 30px', fontSize: '18px', cursor: 'pointer' }}
          >
            Implementasi UseReducer
          </button>
        </div>
      </div>
    );
  }

  // Render halaman berdasarkan state currentPage
  return (
    <>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'useState' && <UseStateComponent />}
      {currentPage === 'useReducer' && <UseReducerComponent />}
    </>
  );
}

export default App
