import React ,{useState,Fragment}from 'react'
import { calcularTotal } from './Helpers';

const Formulario = (props) => {


    const {cantidad,guardarCantidad ,plazo,guardarPlazo,guardarTotal,cargarSpinner} = props
  
    //definir state
    const [error,guardarError] = useState(false);

    //evento cuando se presiona submit
    const calcularPrestamo = e =>{
        e.preventDefault();
        //validar campo vacio
        if(cantidad === 0 || plazo === ''){
            guardarError(true);
        }

        //habilitar spinner
        cargarSpinner(true);
        setTimeout(() => {
             //realizar la cotizacion
                const total =  calcularTotal(cantidad,plazo);
             //guardar total
                guardarTotal(total);

             //ocultar Spinner
             cargarSpinner(false);

        }, 3000);

        //eliminar error previo
        guardarError(false);
       
 
    }


    return (
        <Fragment>
         <form onSubmit={calcularPrestamo}>
             
                <div className="row">
                     <div>
                                <label>Cantidad Prestamo</label>
                                <input 
                                    className="u-full-width" 
                                    type="number" 
                                    placeholder="Ejemplo: 3000" 
                                    onChange={e => guardarCantidad(parseInt(e.target.value)) }
                                />
                      </div>
                       <div>
                                <label>Plazo para Pagar</label>
                                <select 
                                    onChange={e =>guardarPlazo(parseInt( e.target.value))}
                                    className="u-full-width"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="3">3 meses</option>
                                    <option value="6">6 meses</option>
                                    <option value="12">12 meses</option>
                                    <option value="24">24 meses</option>
                                </select>
                     </div>
                     <div>
                                <input 
                                    type="submit" 
                                    value="Calcular" 
                                    className="button-primary u-full-width" 
                                />
                     </div>
                </div>
         </form>
            {(error) ?  <p className="error">Todos los campos son obligatorios</p> : '' }
            
         </Fragment>
      );
}
 
export default Formulario;