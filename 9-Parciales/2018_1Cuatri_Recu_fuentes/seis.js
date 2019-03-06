function mostrar()
/*(SWITCH + IF) Se ingresa una nota. Si está entre las 0 y las 3 mostrar: "la próxima se puede",
 si es desde las 4 a las 6: "raspando", de lo contrario informar que aprobó. Informar si la nota no es válida.
  Si es aprobó y la nota es mayor a 8 se debe agregar el mensaje: "muy bien". 
  Si es nota  para  “raspando” y la nota es menor a 5 se debe agregar el mensaje: "debes preocuparte más".     
  Aclaración: hacer un switch y dentro toda la lógica incluyendo los if y con una sola ventana alert. */
{
	var nota;
	var mensaje;
	nota=laHora.value;
	nota=parseInt(nota);

	switch(nota)
	{
		case 0:
		case 1:
		case 2:
		case 3:
		 mensaje="la proxima se puede"
		break;
		case 4:
		case 5:
		case 6:
		 mensaje="raspando"
			if(nota<5 && nota>=4)
			{
				mensaje="raspando debes preocuparte mas";
			}
			break;
			default:
				if(nota>6 && nota<=10)
				{
					mensaje="aprobo";
					if(nota>=8 && nota <=10)
					{
						mensaje="aprobo muy bueno";
					}
				}
				else
				{
					mensaje:"nota invalida";
				}
			
	}
	alert(mensaje);
			
			

}