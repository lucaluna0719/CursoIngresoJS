function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numerorandom;
	numerorandom=Math.floor((Math.random() * 10) + 1);
	console.log(numerorandom);

	if(numerorandom>=9)
	{
		alert("EXCELENTE");
	}else
	{
		alert("APROBO")
	} if(numerorandom<=3)
	{
		alert("Vamos, la proxima se puede");
	}


	

}//FIN DE LA FUNCIÓN