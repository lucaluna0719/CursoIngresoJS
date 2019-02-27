function mostrar()
{
	var contador=0;
	var acumulador=0;
	var promedio;
	var nota;
	var numero;
	var sexoNotaMasBaja;
	var cantidadVaronesMayorASeis=0;
	var notaMinima;

	while(contador<5)
	{
		
		nota=prompt("Ingrese nota:"),
		nota= parseInt(nota);
		while (isNaN(nota) == true || nota<0 || nota>=10 )
		{
			nota=prompt("error,Ingrese nota:");
			nota= parseInt(nota);
		}
		sexo=prompt("ingrese sexo");
		while (isNaN(sexo) == false || sexo != "f" && sexo!= "m" )
		{
			sexo=prompt("error ,ingrese sexo");
		}

		acumulador=acumulador+nota;
		if(contador==0)
		{
			notaMinima=nota;
			sexoNotaMasBaja=sexo;
		}
		else
		{
			if(notaMinima>nota)
			{
				notaMinima=nota;
				sexoNotaMasBaja=sexo;
			}
		}

		if(nota> 5 && sexo=="m")
		{			
				cantidadVaronesMayorASeis=cantidadVaronesMayorASeis+1;
		}

		contador=contador+1;
	}	
	alert(sexoNotaMasBaja);

}
