import './App.css'

const products = [
  {id: 'P01', title: 'Apple', isFruit: true},
  {id: 'P02', title: 'Carrot', isFruit: false},
  {id: 'P03', title: 'Broccoli', isFruit: false},
];

function App() {
  const UserIsLoggedIn = true;
  const listItems = products.map(product => (
    <li key={product.id} style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}>
      {product.title}
    </li>
  ));
  return (
    <>
    <h1>Aplikasi Login Sederhana</h1>
    <Greeting isLoggedIn={UserIsLoggedIn} />
    <br />
    <div>
      <h1>Daftar Produk</h1>
      <ul>{listItems}</ul>
    </div>
    </>
  )
}

function Greeting({ isLoggedIn }) {
  return (
    <h2>{ isLoggedIn ? 'Berhasil Login' : 'Silahkan Login' }</h2>
  )
}

export default App
