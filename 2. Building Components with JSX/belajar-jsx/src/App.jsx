import './App.css'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
}

function App() {
  return (
    <>
    {/* {mengambil dari const user di atas} */}
      <h1>Profil: {user.name}</h1>
      <img 
        className="avatar"
        src={user.imageUrl}
        alt={'Foto ' + user.name}
      />

      {/* {mengambil dari file lokal} */}
      <h1>Profil: Orange Cat</h1>
      <img 
        className="avatar"
        src='/orangecat.png' // path gambar berada di '/public/...'
        alt="Foto Orange Cat"
      />
    </>
  )
}

export default App
