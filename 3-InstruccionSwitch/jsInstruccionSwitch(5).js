function mostrar()
{
//tomo la edad  
var mensaje;
var laHora = document.getElementById('hora').value;

//alert (laHora);
	switch(laHora)
	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			mensaje="es de mañana";
			break;
	}
alert(mensaje);


}//FIN DE LA FUNCIÓN