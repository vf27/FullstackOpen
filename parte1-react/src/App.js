import './App.css';
import Mensaje2 from './Mensaje2.js'
//un componente es como una funcion pero empieza con mayuscula

const Mensaje = () => {       //componente 
  return <h3> desde componente Mensaje </h3>
}
const Descripcion = () => {       //componente 
  return <p> Otro componente </p>
}

function App() {            // componente 
  const mensaje = "Hola desde variable "
  return (
    <div className="App">
      {mensaje + ' y evaluacion'}      
    <Mensaje />
    <Mensaje2 color = 'red' message= ' primer mensaje como parametro'/>  {/*key = message, value = string */}
    <Mensaje2 color = 'yellow' message= ' segundo mensaje como parametro'/>
    <Mensaje2 color = 'green' message= ' tercer mensaje como parametro'/>
    <Descripcion/>
    </div>
  );
}

//tambien puede ser 
// const App = ()=> { return (); }
// si no escribo el return, lo que escribo dentro de { } es lo que devuelve



export default App;