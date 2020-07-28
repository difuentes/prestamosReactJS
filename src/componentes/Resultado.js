import React from 'react'


const Resultado = ({cantidad,total,plazo}) => {
    return ( 

    <div className="u-full-width resultado">
        <h2>Resumen</h2>
        <p>la cantidad solicitada es : {cantidad}</p>
        <p>plazo es : {plazo} meses </p>
        <p>cuota  mensual : {(total / plazo).toFixed(1)}  </p>
        <p>Total a cancelar : {(total).toFixed(1)}</p>
        
    </div> 
    );
}
 
export default Resultado;