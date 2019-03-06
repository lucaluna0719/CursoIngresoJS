function mostrar()
/* Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10),
 la edad y el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
 a) El promedio de las notas totales. b) La nota más baja y el sexo de esa persona. 
 d) La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6.
 d) El sexo y la nota del más joven. d) La edad y la nota de la primera mujer ingresada o informar si no hubo ninguna mujer*/
{
	var nota;
	var contador=0;
	var acumulador=1;
	var sexoNotaMasBaja;
	var varonesMayoresNotaMayorSeis=0;
	var promedioTotal;
	var sexoYNotaMasJoves;
	var notaPrimerMujer;
	var notaMaxima;
	var notaMinima=10;

 while(contador<5)
 {
 	contador++;
 	nota=prompt("ingrese nota: ");
 	nota=parseInt(nota);
 	while(isNaN(nota)== true || nota<0 || nota>10)
 	{
 			nota=prompt("nota invalida, ingrese nota: ");
 			nota=parseInt(nota);
			

 	}
 	sexo=prompt("ingrese sexo, f o m : ");
 	while(isNaN(sexo) == false || sexo != "f" && sexo!= "m" )
 	{
 		sexo=prompt("error, ingrese sexo");
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
 			sexoYNotaMasJoves=sexo;
 		}
 	}
 	if(nota>5 && sexo=="m")
 	{
 		varonesMayoresNotaMayorSeis=varonesMayoresNotaMayorSeis+1;
 	}
 	else
 	{

 	}

 }

promedio=acumulador/contador;
alert("el promedio de las notas totales es " + promedio + " la nota mas baja es " + notaMinima + " el sexo de la nota mas baja es " + sexoNotaMasBaja + " la cantidad de varones que superaron el 6 " + varonesMayoresNotaMayorSeis);



















}
