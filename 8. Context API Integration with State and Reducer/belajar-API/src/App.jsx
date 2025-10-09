import './App.css'
import { createContext, useContext, useReducer, useState, useRef } from 'react'
import { ThemeContext } from './ThemeContext.js'

function App() {
  const [theme, setTheme] = useState('light')
  const [view, setView] = useState('home') // 'home' | 'todo'
  // Todo list moved to TodoView component

  function toggleTheme() {
    setTheme (theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div style={appStyle(theme)}>
        {view === 'home' ? (
          <>
            <h1>Selamat Datang!</h1>
            <Form onOpenTodo={() => setView('todo')} />
            <button onClick={toggleTheme}>Toggle Theme</button>
          </>
        ) : (
          <TodoView onBack={() => setView('home')} />
        )}
      </div>
    </ThemeContext.Provider>
  )
}

function Form({ onOpenTodo }){
  return(
    <Panel title="Login">
      <Button onClick={onOpenTodo}>To-do List</Button>
    </Panel>
  )
}

function Panel({title, children}){
  const theme = useContext(ThemeContext);
  return(
    <section style={panelStyle(theme)}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

// Button that accepts onClick via props
function Button({ children, onClick }){
  const theme = useContext(ThemeContext)
  return (
    <button style={buttonStyle(theme)} onClick={onClick}>
      {children}
    </button>
  )
}

function TodoView({ onBack }){
  const theme = useContext(ThemeContext)
  
  // Create stable contexts once per component instance
  const TasksContextRef = useRef(createContext(null))
  const TasksDispatchContextRef = useRef(createContext(null))

  const TasksContext = TasksContextRef.current
  const TasksDispatchContext = TasksDispatchContextRef.current

  let nextIdRef = useRef(4)
  const initialTasks = [
    {id: 1, text: 'Belajar React', done: true},
    {id: 2, text: 'Membuat Aplikasi', done: false},
    {id: 3, text: 'Belajar React Native', done: false},
  ]

  function tasksReducer(tasks, action){
    switch(action.type){
      case 'added': {
        return [...tasks, {id: action.id, text: action.text, done: false}]
      }
      case 'deleted': {
        return tasks.filter((t) => t.id !== action.id)
      }
      default: {
        throw Error('Unknown action: ' + action.type)
      }
    }
  }

  function TasksProvider({children}) {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

    return (
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          {children}
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    )
  }

  function AddTask(){
    const [text, setText] = useState('')
    const dispatch = useContext(TasksDispatchContext)
    const inputRef = useRef(null)

    function handleAdd() {
      if(!text.trim()){
        inputRef.current.focus()
        return
      }
      setText('')
      dispatch({type: 'added', id: nextIdRef.current++, text: text.trim()})
      inputRef.current.focus()
    }

    return (
      <div>
        <input 
          ref={inputRef}
          placeholder='Masukkan tugas...' 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
        <button style={buttonStyle(theme)} onClick={handleAdd}>Tambah</button>
      </div>
    )
  }

  function TaskList(){
    const tasks = useContext(TasksContext)

    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text} <TaskDeleteButton task={task} />
          </li>
        ))}
      </ul>
    )
  }

  function TaskDeleteButton({task}){
    const dispatch = useContext(TasksDispatchContext)

    return (
      <button style={buttonStyle(theme)} onClick={() => dispatch({type: 'deleted', id: task.id})}>Hapus</button>
    )
  }

  return (
    <div style={appStyle(theme)}>
      <TasksProvider>
        <h1>Daftar Tugas</h1>
        <AddTask />
        <TaskList />
        <hr />
        <button style={buttonStyle(theme)} onClick={onBack}>Back</button>
      </TasksProvider>
    </div>
  )
}

function appStyle(theme){
  return{
    padding: '20px',
    borderRadius: '5px',
    backgroundColor: theme === 'dark' ? '#333' : '#f5f5f5',
    color: theme === 'dark' ? '#f5f5f5' : '#333',
    minHeight: '50vh',
    textAlign: 'center',
  }
}

function panelStyle(theme){
  return{
    padding: '20px',
    borderRadius: '5px',
    backgroundColor: theme === 'dark' ? '#333' : '#f5f5f5', 
    color: theme === 'dark' ? '#f5f5f5' : '#333',
    margin: '20px auto',
    maxWidth: '400px',
  }
}

function buttonStyle(theme){
  return{
    backgroundColor: theme === 'dark' ? '#333' : '#f5f5f5',
    color: theme === 'dark' ? '#f5f5f5' : '#333',
    border: '1px solid',
    borderColor: theme === 'dark' ? '#f5f5f5' : '#333',
    borderRadius: '3px',
    padding: '10px',
    margin: '5px',
    cursor: 'pointer',
  }
}

export default App
