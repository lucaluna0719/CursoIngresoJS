
function mostrar()
{
var nombre1; 
var nombre2;
var edad1;
var edad2;
var edadsumada;

nombre1=prompt("Usted es: ");
edad1=prompt("y su edad: ");
nombre2=prompt("Usted es: ");
edad2=prompt("Y su edad: ");
edad1=parseInt(edad1);
edad2=parseInt(edad2);
edadsumada=edad1 + edad2 ;

alert("ustedes son " + nombre1 +  " y "  + nombre2 + " y la suma de sus edades es " + edadsumada);
 // "y la suma de sus edades es" + edad1 + edad2);


}
