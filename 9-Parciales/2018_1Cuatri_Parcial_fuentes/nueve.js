function mostrar()
{
var marca;
var peso;
var temperatura;
var contadorTemperaturaPar=0;
var maxPeso;
var flagPexoMaximo=false;
var maxMarca;
var respuesta = true;
var contTemperaturaMenosCero;
var promedioPeso;
var contadorPeso=0;
var acumuladorPeso=0;

while(respuesta == true)
{
	marca= prompt("Ingrese marca");
	peso= prompt("ingrese peso");
	while (isNaN(peso)== true || (peso) <1 || (peso) >100)
	{
		prompt("Reingrese peso");
	}
	/*validacion*/
	temperatuta= prompt("ingrese temperatuta");
	temperatura=parseInt(temperatura);
	while(temperatura < -30 || temperatura >30)
	{	/*validacion*/
		prompt("reingrese");
	}
	/*cantidad de temperaturas par*/
	if(temperatura %2==0)
	{
		contadorTemperaturaPar++;
	}

	/*maximo peso*/
	if(flagPexoMaximo== false || peso=maxPeso)
	{
			maxMarca=marca;
			maxPeso=peso;
			flagPexoMaximo=true;
	}
		if(flagPexoMaximo == false || peso<minPeso)
		{
			minPeso=peso;
			
		}
	/*cantidad de productos a menos 0 grados*/
		if (temperatura <0)
		{
			contTemperaturaMenosCero++;
		}

		contadorPeso++;
		acumuladorPeso+acumuladorPeso+peso;	

	/*....*/
	respuesta= confirm("desea ingresar otro producto? s/n");
 
}
promedio=acumuladorPeso/contadorPeso;
document.write("cantidad de temperatura pares " + contadorTemperaturaPar);
document.write("El producto maximo es: " + maxMarca);
document.write()
document.write()





}
