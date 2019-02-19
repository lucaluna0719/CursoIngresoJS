function mostrar()
{
//tomo la edad 
var mensaje; 
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño){
		case "Febrero":
			mensaje= " Este mes tiene mas de 28 dias.";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje= "Este mes tiene 30 dias";
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje= "Este mes tiene 31 dias";
			break;
//alert (mesDelAño);
}
alert(mensaje);
	



}//FIN DE LA FUNCIÓN