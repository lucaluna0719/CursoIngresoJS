/* Pedir por prompt el precio y el porcentaje de descuento, mostrar:
 1-el descuento en dinero, 2-el precio con el descuento ,3-el IVA , todos los anteriores e un solo  alert.
 4-y solo el precio con descuento más el IVA por id . */
function mostrar()
{
var precio;
var porcentajeDeDescuento;
var descuento;
var precioConDescuento;
var preciofinal;

	precio=prompt("Ingrese precio")
	precio=parseInt(precio)

	porcentajeDeDescuento=prompt("Ingresar porcentaje De Descuento")
	porcentajeDeDescuento=parseInt(porcentajeDeDescuento);
	
	

	descuento=(precio*porcentajeDeDescuento)/100;
	precioConDescuento=precio-descuento;
	IVA=(precioConDescuento-(precioConDescuento*21)/100);
	preciofinal=precioConDescuento+IVA;



	

	alert("el descuento en dinero es: " + descuento + " el precio con el descuento " + precioConDescuento + " el iva " + IVA);
	preciofinal=elPrecioFinal.value;

}
/*var precio;
    var porcentajeDeDescuento;
    var descuento;
    var precioConDescuento;
    var IVA;
    var precioFinal;

    precio=prompt("ingrese el precio");
    precio=parseInt(precio);

    porcentajeDeDescuento=prompt("ingrese el porcentaje de descuento");
    porcentajeDeDescuento=parseInt(porcentajeDeDescuento);

    descuento=(precioporcentajeDeDescuento)/100;
    precioConDescuento=precio-descuento;
    IVA=(precioConDescuento-(precioConDescuento21)/100)
    precioFinal=precioConDescuento+IVA;

    alert("el descuento en dinero es: "+descuento+" el precio con el descuento "+precioConDescuento+" el iva "+IVA);
    elPrecioFinal.value=precioFinal;*/