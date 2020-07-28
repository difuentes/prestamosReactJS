import React ,{Fragment} from 'react'

function Header(props){

    return(
        <Fragment>  
            <h1>{props.titulo} </h1>
            <h2>{props.signo}</h2>
        </Fragment>
        
    )
}




export default Header;