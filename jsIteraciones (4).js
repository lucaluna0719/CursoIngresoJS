function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	while(numero <0 || numero >10)
	{
		console.log(numero)
		var numero = prompt("ingrese un número entre 0 y 10.");

	}

}//FIN DE LA FUNCIÓN