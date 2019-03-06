function mostrar()
{
var numero1;
var numero2;
var suma;
var divido;
var mensaje;

numero1=prompt("ingrese primer numero");
numero1=parseInt(numero1)
numero2=prompt("Ingrese segundo numero");
numero2=parseInt(numero2);

	if(numero1==numero2)
	{
		mensaje="los numeros son " + numero1 + " y " + numero2;
	}
	else
	{
		if (numero1>numero2)
		{
			divido=numero1/numero2;
			mensaje="el resultado de la division es " + divido;
		}
		else
		{
			suma=numero1 + numero2;
			mensaje="la suma de los numeros es " + suma;
		}
		if(suma<50)
		{
			mensaje="la suma es " + suma + " y es menor que 50";
		}
	}
		alert(mensaje);
}

