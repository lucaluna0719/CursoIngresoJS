/*) (SWITCH ) pedir el ingreso de un día de la semana, si es fin de semana mostrar " buen finde", 
 si es  día hábil “ a trabajar”, si no es un día valido, también informarlo, usar una sola ventana alert. */
function mostrar()
{
var diaDeLaSemana=prompt("Ingresar dia de la semana");
var mensaje;

	switch (diaDeLaSemana)
	{
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
		 mensaje="A trabajar";
		break;
		case "sabado":
		case "domingo":
		 mensaje="Buen finde"
		break;
		default:
		mensaje="dia invalido";
	}


alert(mensaje);







}
