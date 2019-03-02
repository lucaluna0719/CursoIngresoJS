//-(0,5pts.) (IF) Pedir dos números y mostrar el resultado:
//Si son iguales los muestro concatenados. Si el primero es mayor, los resto, de lo contrario los sumo.
//Si la suma es mayor a 10, además de mostrar el resultado, muestro el mensaje "la suma es xxx y supero
//el 10".
function mostrar()
{
	var numero1;
	var numero2;
	var suma;
	var mensaje;

	numero1=prompt("Ingrese un numero");
	numero1=parseInt(numero1);

	numero2= prompt("Ingrese el segundo numero");
	numero2= parseInt(numero2);

	suma=numero1 + numero2;

	if (numero1==numero2)
	{
		alert(numero1 + " y " + numero2);
	}else 
	{
		if (numero1>numero2)
		{
			alert(numero1 + numero2);
			
		}
		else
		{
			alert(numero2 - numero1);
		}
	}






/* var producto;
var precio;
var descuento1;
var descuento2;
var recargo; 
var preciofinal;

 producto=prompt("Cuantos productos desea llevar?");
 producto=parseInt(producto);

 precio=prompt("Ingrese el precio")
precio=parseInt(precio);
// if(producto <1)
 */

}
