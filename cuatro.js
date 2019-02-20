function mostrar()
/*l ingresar 4 datos si la suma da mas de 100 se la hace descuento de 10%
si la suma da mas de 50 un descuento de 5%
y si la suma era menos de 50 se le agrega un 15%  
*/
{
var importe1;
var importe2;
var importe3;
var importe4;
var descuentodiez;
var descuentocinco;
var aumento;
var suma;
var preciofinal;
var mayor;

importe1=prompt("Ingrese el primer importe");
importe1=parseInt(importe1);

importe2=prompt("ingrese el segundo importe");
importe2=parseInt(importe2);

importe3=prompt("Ingrese el tercer importe");
importe3=parseInt(importe3);

importe4=prompt("ingrese el cuarto importe");
importe4=parseInt(importe4);

suma=importe1+importe2+importe3+importe4;
mayor=
if(suma>100)
{
	descuentodiez=suma*10/100;
	preciofinal=suma-descuentodiez;
}
else
	{
		if(suma>50)
		{
			descuentocinco=suma*5/100;
			preciofinal=suma-descuentocinco;
					

		}
		else
			{
				aumento=suma*15/100;
				preciofinal=suma+aumento;
			}
		}

alert("El numero mayor es: " + mayor);
alert("Su precio final es: " + preciofinal);
}
