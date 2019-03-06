/* Realizar el algoritmo que  pida la base y la altura de un triángulo equilátero, informar la superficie
 y el perímetro en una sola ventana alert. */
function mostrar()
{
var base;
var altura;
var perimetro;
var superficie;
 
 base=prompt("Ingresar base");
 base=parseInt(base);

 altura=prompt("Ingresar altura");
 altura=parseInt(altura);
superficie= 2*base;
perimetro= 2*(base + altura);
alert("su perimetro es " + perimetro + " y su superficie es " + superficie); 
}
