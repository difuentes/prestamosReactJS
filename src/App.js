import React,{Fragment,useState} from 'react';
import Header from './componentes/Header.js';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner'


function App() {
  //definir state
  const[cantidad,guardarCantidad] = useState(0);
  const[plazo,guardarPlazo] = useState('');
  const[total, guardarTotal ]= useState(0);
  const[spinner,cargarSpinner] = useState(false);

  let componente ;
  ///cambio de componente mesaje//resultado 
  if(spinner){  
    componente = <Spinner/>
  }else if(total===  0){
    componente = <Mensaje/>
  }
  else{
    componente = <Resultado
      total= {total}
      plazo={plazo}
      cantidad={cantidad}
    />

  }



  return (
   
     <Fragment>
       <Header
        titulo='Prastamos con React ®DiFuentes '
        signo=''
       />
       <div className="container">
        <Formulario
        cantidad={cantidad}
        guardarCantidad={guardarCantidad}
        plazo= {plazo}
        guardarPlazo={guardarPlazo}
        guardarTotal={guardarTotal}
        cargarSpinner={cargarSpinner}
        
        />
        <div className="mensajes">
             {componente} 
        </div>
        
       </div>
      
     </Fragment>
      
   
  );
}

export default App;
