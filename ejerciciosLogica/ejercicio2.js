function createNumber(digitos) {
  const regex = /^[0-9]*$/;
  numeroNuevo = "";

  if (digitos.length != 10) {
    return "ingrese maximo 10 digitos";
  }
  for (let i = 0; i < 10; i++) {
    digitosRevisar = digitos[i];
    
    if (regex.test(digitosRevisar)) {
      numeroNuevo = numeroNuevo + digitosRevisar;
    } else {
      return "valide los numero ingresado, o su formato";
    }
  }

  numeroNuevo = numeroNuevo.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  return numeroNuevo;
}
const array=[3,8,9,0,5,9,5,6,6,8];
console.log(createNumber(array));
