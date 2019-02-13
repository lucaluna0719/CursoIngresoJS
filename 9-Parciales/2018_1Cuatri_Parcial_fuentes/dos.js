function mostrar()
{
  var precio;
  var formadepago;
  var recargo;
  var precio final;

  precio=elNombre.value;
  formadepago=laLocalidad.value;
  precio=parseInt(precio);
  recargo=parseInt(recargo);

 recargo=precio*10/100;
 preciofinal= formadepago + recargo;

 alert( "Su total es" + preciofinal );

}
