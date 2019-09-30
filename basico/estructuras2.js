var band = true;

do{
	let respuesta = prompt("¿Cuál es tu clima favorita?");

	switch (respuesta){
		case "lluvia" :
		alert("Recuerda llevar un paraguas");
		break;
		case "sol" :
		alert("Recuerda llevar ropa ligera");
		break;
		case "nublado" :
		alert("Sal a pasear");
		break;
		default:
		band = false;
	}
}while (band);

alert("Adios...");