import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    const nombre = 'Estudiante';

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="titulo">Titulo React</h1>
    
          <p>Hola, {nombre}</p>
          
          <br />
          
        </header>
      </div>
    );
  }
}

export default App;
