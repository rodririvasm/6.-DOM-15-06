/*document.getElementsByClassName('parrafo')[0].innerHTML =  ' hola soy un documento diferente';*/

/*var parrafos = document.getElementsByClassName('parrafo');
console.log(parrafos);

document.getElementsByClassName('parrafo')[0].innerHTML = 'parrafo 1234';*/

document.querySelectorAll('.parrafo')[0].textContent = 'nuevo texto de parrafo';

document.querySelector('#parrafo2').textContent = 'nuevo texto de parrafo';

var parrafo1 = document.querySelectorAll('.parrafo')[0];

var parrafo2 = document.querySelector('#parrafo2');

console.log(document);
console.log(document.head);
console.log((document.body);
console.log(parrafo1);
console.log(parrafo2);