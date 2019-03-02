function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio= prompt("Ingrese precio: ");
	descuento= prompt("Ingrese el porcentaje de descuento");

	precio = parseFloat(precio); 
	descuento = parseInt(descuento);

	//descuento= precio + precioFinal/100;
	precioFinal = precio - (precio*descuento/100);

	elPrecioFinal.value=precioFinal;










}
