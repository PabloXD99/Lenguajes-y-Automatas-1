const saludar = () => { //FUNCION
	return "Hola a todos";
}

let persona = {
	nombre: "Juan",
	apellido: "Perez,",
	edad: 25,
	peso: 60.5,
	hobbies: ["musica", "futbol", "internet"],
	saludar //FUNCION
};

persona.apellido = "Perez Sosa";
console.log(persona.nombre + " " + persona.apellido);
console.log(persona.hobbies);
console.log(persona.saludar());


//ARREGLO DE OBJETOS
let frutas = [
{
	nombre: "Grosella",
	familia: "Saxifragáceas",
	calorias: 29.3
},

{
	nombre: "Limón",
	familia: "Rutáceas",
	calorias: 40.2
},

{
	nombre: "Piña",
	familia: "BromoLiáceas",
	calorias: 46
}
];

for (let i=0; i<frutas.length; i+=1){
	console.log(frutas[i]);
}