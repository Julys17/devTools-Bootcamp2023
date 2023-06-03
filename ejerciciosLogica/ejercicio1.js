let number = 162;

function siguientePalindromo (num) {
    while (!palindromo(num)){
        num++;
    }
    console.log(num);
}

function palindromo (num) {
   let str = num.toString();
   let separarStr = str.split("");
   let invertirArreglo = str.split("").reverse();
   //let invertirArreglos = str === str.split('').reverse().join('')//
   for (let i = 0; i< separarStr.length; i++){
      if (separarStr[i]!==invertirArreglo[i]){
        return false;
      }
   } 
   return true;
 }


siguientePalindromo(number);
