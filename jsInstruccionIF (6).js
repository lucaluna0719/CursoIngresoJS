function mostrar()
{
//tomo la e var edad1;
    var edad1;
    edad1=edad.value;
    edad1=parseInt(edad1);
  /*
    if(edad1<18 && edad1>12)
	{		
	alert(" adolescete"); 
	} 

    if(edad1>17)
    {
    alert("mayor");  
    }

    if(edad1<13)
    {
        alert("niño")
    }

*/
   var mensaje;
  
    if(edad1>17)
    {
         mensaje="mayor";  
    }else
    {
         if(edad1<13)
        {
            mensaje="niño";
        }else
        {
            mensaje="adolescente";
        }
    }

    alert(mensaje);

   

}//FIN DE LA FUNCIÓN