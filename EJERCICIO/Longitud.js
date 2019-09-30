//EJERCICIO NÚMERO 1
let texto = "el volcan de parangaricutirimicuaro esta parangaricutirimicuarizado en un pueblo de por ahi";
let newTexto = texto.replace(/[a-z]{7,}/g, "°");
console.log(newTexto);

//EJERCICIO NÚMERO 2
let texto1 = "el murcielago esta volando por el pais de japon hacia sudamerica";
let newTexto1 = texto1.replace(/[aeiou]/g,"°");
console.log(newTexto1);

//EJERCICIO NÚMERO 3
let inicio = /(M|m)[^aeiou+](\w{0,})/;
console.log(inicio.test("mama"));

//EJERCICIO NUMERO 4
let comillas = /['"']/; 
console.log(comillas.test("La mama de maria es 'comediante'"));

//EJERCICIO NUMERO 5
let usoIP = /([0-9](\d{1,3})[.](\d{1,3})[.](\d{1})[.](\d{1,}))/;
console.log(usoIP.test("La direccion ip es 125.168.1.1"));

//EJERCICIO NUMERO 6
let Hora = /([0-9](\d{1,2})[:](\d{1,2})(pm|am))/;
console.log(Hora.test("La hora es: 2:00pm"));

//EJERCICIO NUMERO 7
let numeros = /[0-9]{10}/;
console.log(numeros.test("9851331321"));

//EJERCICIO NUMERO 8
let correo = /(\W{0,}|\w{0,})(@)(gmail|outlook|hotmail)(.com|.es|.mx)/;
console.log(correo.test("netomo2099@outlook.mx"));

//EJERCICIO NUMERO 9
let URL = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
console.log(URL.test("http://blog.ejemplo.com/libros/javascript.html"));

//EJERCICIO NUMERO 10
let CP = /[0-9]{5,}/;
console.log(CP.test("El codigo postal es 97780"));

