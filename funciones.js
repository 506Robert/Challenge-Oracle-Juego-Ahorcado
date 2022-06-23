var palabras = localStorage.getItem('myArray');
palabras = JSON.parse(palabras);

let btnAgregar = document.getElementById('guardar-palabra');
let inputNuevaPalabra = document.getElementById('ingresar-palabra-nueva');

function id(str){
    return document.getElementById(str);
}

function obtenerRandom(numMin, numMax){
    const amplitudValores = numMax - numMin;
    const valorAzar = Math.floor(Math.random() * amplitudValores) + numMin;
    return valorAzar;
}

function capturarTexto(){
    let nuevaPalabra = document.querySelector("input").value;
    return nuevaPalabra.toUpperCase();
}

function agregarPalabra(){
  nuevaPalabra = capturarTexto();
  let criterio = /^[a-zA-Z]+$/; //solo se aceptan letras 
  if(palabras.indexOf(nuevaPalabra) < 0 && criterio.test(nuevaPalabra)){
  palabras.push(nuevaPalabra);
  localStorage.setItem('myArray', JSON.stringify(palabras));
  alert ('Se agrego "'+ nuevaPalabra +'" a la lista');
  inputNuevaPalabra.value = "";
  return;

  } if (palabras.indexOf(nuevaPalabra) > 0){
    alert('La palabra "' + nuevaPalabra + '" ya se encuentra en la lista');
    inputNuevaPalabra.value = "";
  } if (nuevaPalabra.length == 0) {
    alert('No ingreso ninguna palabra!');
    return;
  } if (!criterio.test(nuevaPalabra)){
    alert('No se admiten espacios, numeros ni caracteres especiales');
  } 
};