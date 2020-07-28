export function calcularTotal(cantidad,plazo){
    //cantidades
    //0-1000 % 50 
    //1001-5000 = %25
    //5001-1000 = %15  
    //10001 = %10


    let totalCantidad = 0;

    if(cantidad <=1000){
        totalCantidad =  cantidad * 0.25;
    }else if(cantidad >1000 && cantidad<=5000){
        totalCantidad = cantidad * 0.25;
    }else if(cantidad > 5000 && 10000 ){
        totalCantidad = cantidad * 0.15 ;
    }else if(cantidad > 10000){
        totalCantidad = cantidad *0.10;
    }
    
   

    let totalPlazo = 0;
    
    if(plazo === '3' ){
        totalPlazo = cantidad * 0.05;
    }
    else if(plazo === '6'){
        totalPlazo = cantidad * 0.10;
        
    }
    else if(plazo === '12')
    {
        totalPlazo = cantidad * 0.15;
    }
    else if (plazo === '24'){
        totalPlazo =  cantidad * 0.20;
    }


    return totalCantidad +  totalPlazo + cantidad;
}