//EXPRESIONES REGULARES 
//SE PUEDEN DEFINIR DE LAS 2 SIGUIENTES MANERAS

let re1 = new RegExp("abc");
let re2 = /[0-9]/;

result = re1.test("abc"); //true
console.log(result);
result = re2.test("aniversario en 1985");
console.log(result); //true

let re3 = /\d+[-|/]\d+[-|/]\d+/;
console.log(re3.test("13/09/1991"));
console.log(re3.test("18-06-1999"));

let re4 = /\d\d[-|/]\d\d[-|/]\d\d\d\d/;
let re5 = /(\d{1,2}) [-|/] (\d{1,2}) [-|/] (\d{4})/;

var re6 = /[aeiou]/; //cuando esta con corchetes se considera individual las vocales
console.log(re6.test("Start"));//true    //.test SIRVE PARA EL TRUE Y FALSE


//NOS PUEDE SERVIR PARA LA ENCRIPTACIÓN DE MENSAJES
//REMPLAZO TODAS LAS VOCALES EN LA PALABRA CORRECAMINOS
let mensaje = "correcaminos";
let newMensaje = mensaje.replace(/[^aeiou]/g,"*");
console.log(newMensaje);


let mensaje2 = "el 20 de enero de 2019 se dio inicio a la 3 semana nacional de la tecnologia";
//let newMensaje2 = mensaje2.replace(/[0-9]{2,4}/g, "0");	//{4} SIGNIFICA LONGITUD DE LA CADENA
let newMensaje2 /*3*/= mensaje2/*3*/.replace(/[a-z]{5,}/g, ""); 
console.log(newMensaje2);
//console.log(newMensaje3);


//let newMensaje3=mensaje3.replace(/[a-z]);

var hsitoria = "\
A lo largo de la historia y desde la invención de la escritura, \
han sido múltiples los ejemplos de autores que a través de esta han dado rienda suelta a su\
imaginación con el fin de expresar sus sentimientos, emociones y pensamientos.\
";

//MOSTRAR PALABRAS QUE EMPIECE LA PRIMERA LETRA CON MAYUSCULA Y LA SIGUIENTES CON MINUSCULAS
//BUCAR PALABRAS QUE NO TENGAN VOCAL EN LA SEGUNDA LETRA DE LA PALABRA Y EL ESPACIO PARA QUE NO SALGAN PALABRAS
//var expresion = /[A-Z][^aeiou ][a-z]+g;   	

var expresion = /[A-Z|a-z]+/g;    
result = hsitoria.match(expresion);
console.log(result);