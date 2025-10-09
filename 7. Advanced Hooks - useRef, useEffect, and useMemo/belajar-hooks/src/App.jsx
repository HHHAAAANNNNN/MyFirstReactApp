import { useRef, useEffect, useState, useMemo } from 'react'
import { useToggle } from './useToggle'
import './App.css'

function App() {
  const inputRef = useRef(null);
  const [name, setName] = useState('anonim');
  const [isToggled, toggle] = useToggle();

  const initialItems = [
    {id: 1, name: 'Apple', category: 'fruit'},
    {id: 2, name: 'Carrot', category: 'vegetable'},
    {id: 3, name: 'Banana', category: 'fruit'},
    {id: 4, name: 'Broccoli', category: 'vegetable'},
  ]
  const [items] = useState(initialItems);
  const [selectedCategory, setSelectedCategory] = useState('fruit');
  const [count, setCount] = useState(0);

  const visibleItems = useMemo(() => {
    console.log('Menghitung ulang item yang terlihat...');
    return items.filter(item => item.category === selectedCategory);
  }, [items, selectedCategory]);

  useEffect(() => {
    document.title = `Hello, ${name}`;
    console.log(`Effect dijalankan. Judul diubah menjadi: Hello, ${name}!`);
  }, [name]);

  function handleClick() {
    inputRef.current.focus();
  }

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Penggunaan 'inputRef'</h1>
      <input ref={inputRef} placeholder='Ketik Disini...' />
      <button onClick={handleClick}>Focus Input</button>
      <hr />
      <h1>Penggunaan 'useEffect'</h1>
      <h2>Ubah Judul Tab Browser</h2>
      <input placeholder='Ketik Disini...' value={name} onChange={e => setName(e.target.value)} />
      <p>Halo, {name}!</p>
      <hr />
      <h1>Penggunaan Fetching dari API</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <hr />
      <h1>Penggunaan 'useMemo'</h1>
      <h2>Daftar Items</h2>
      <p><button onClick={() => setCount(c => c + 1)}>
        Click Saya: (Count: {count})</button></p>
      <button onClick={() => setSelectedCategory('fruit')}>
        Fruit</button>
      <button onClick={() => setSelectedCategory('vegetable')}>
        Vegetable</button>
      <button onClick={() => setSelectedCategory('all')}>
        Reset</button>
        <ul>
        {visibleItems.map(item => (
          <li key={item.id}>{item.name} - {item.category}</li>
        ))}
        </ul>
        <hr />
        <h1>Penggunaan 'Custom Hook'</h1>
        <h2>Penggunaan 'useToggle'</h2>
        <p>Status: {isToggled ? 'ON' : 'OFF'}</p>
        <button onClick={toggle}>Toggle</button>
        <hr />
    </div>
  )
}

export default App
