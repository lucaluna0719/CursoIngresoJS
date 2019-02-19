function mostrar()
{
//tomo la edad
var mensaje;  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch (mesDelAño){
		case "Febrero":
		mensaje= " Este mes no tiene mas de 29 dias.";
		break;
default:
		mensaje= "Este mes tiene 30 o mas dias"
		break;

		


}
	
alert(mensaje);
}//FIN DE LA FUNCIÓN