//App.jsx
import Table from './Table'
function App() {

  //arreglo de objetos
  const characters = [
    {
      nombre: 'Carlos',
      trabajo: 'Ingeniero'
    },
    {
      nombre: 'Dori',
      trabajo: 'Administrador'
    },
    {
      nombre: 'Kat',
      trabajo: 'Dentista'
    },
  ]

  return (
   <div className="App">
    <h1>Componenetes y props</h1>
    <hr/>
    <div>
      <Table characterData={characters} />
    </div>
   </div>
  )
}

export default App;
