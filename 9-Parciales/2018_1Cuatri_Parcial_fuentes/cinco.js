function mostrar()
{
var sistemaSolar = prompt("ingrese un planeta");

switch (sistemaSolar)
{
	case "mercurio":
	case "venus":
		alert("aca hace mas calor");
		break
	case "tierra":
		alert("aca vivimos");
		break
	case "marte":
	case "jupiter":
	case "saturno":
	case "urano":
	case "neptuno":
		alert("aca hace mas frio");
		break
	default:
		alert("No es un planeta, ingrese un planeta");


}







}
