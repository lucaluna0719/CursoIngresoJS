function mostrar()
{

	var contador=0;
	var acumulador=0;
	
	while (contador <5)
	{
		contador++;
		numero= prompt("ingrese un numero:");
		numero= parseInt(numero);
		acumulador+=numero;
	}

	promedio=suma/contador;



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN