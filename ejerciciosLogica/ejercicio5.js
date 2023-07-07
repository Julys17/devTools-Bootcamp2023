function drawX(n){
    if (n % 2 === 0){
        console.log('n no debe ser par');
        return;
    }
    for(let i = 0; i < n; i++){
        let linea = '';
        for (let l = 0; l < n; l++){
            if (i === l || i + l === n-1){
                linea += '*';                
            }else {
                linea += ' ';
            }
        }
        console.log(linea);        
    }
    
}

drawX(5);