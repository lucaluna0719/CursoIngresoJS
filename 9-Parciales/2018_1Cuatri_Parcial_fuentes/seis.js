function mostrar()
{
	var hora;
	hora=laHora.value;
	hora=parseInt(hora);


	switch(hora)
	{
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("es de mañana");
		break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 18:
			alert("Es de tarde");
		default
		break;
		if (hora>=20&& hora<24)||(hora>=1 && <=5)
		{
			alert("es de noche");
		}else
		{
			alert("hora invalida");
		}
	}	

	}















}
