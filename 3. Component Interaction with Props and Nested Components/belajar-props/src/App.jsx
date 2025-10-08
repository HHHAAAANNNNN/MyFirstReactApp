import './App.css'
import Avatar from './avatar.jsx'
import Card from './card.jsx'

const user = {
  name: "Jane Smith",
  avatarUrl: "https://i.pravatar.cc/100",
}

function App() {
  return (
    <>
    <Card>
      <Avatar user = {user}/>
      <h1>Selamat Datang, {user.name}</h1>
    </Card>
    </>
  );
}

export default App
