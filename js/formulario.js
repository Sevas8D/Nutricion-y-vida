//Creamos una variable con el nombre de evaluar, la cual, segun sea el caso, 
//dejará arriba o no el label si el texbox esta o no lleno
var evaluar = document.getElementsByClassName('formulario__input');
for (var i=0; i<evaluar.length; i++)
	{
	evaluar[i].addEventListener('keyup', function()
	{
	if(this.value.length>=1)
		{
		this.nextElementSibling.classList.add('fijar');//Dejamos el label arriba (texbos lleno)
		}else
		{
		this.nextElementSibling.classList.remove('fijar');//Regresamos el label donde pertenece (texbox vacio)
		}
	});
}


//Espacio para validar que los campos no esten vacios
function validar()
{
	var nombre, direccion, telefono ,correo, ciudad, edad, expresion; 
	nombre=document.getElementById("Nombre").value;
	direccion=document.getElementById("Direccion").value;
	telefono=document.getElementById("Telefono").value;
	correo=document.getElementById("Email").value;
	ciudad=document.getElementById("Ciudad").value;
	edad=document.getElementById("Edad").value;
	
	if(nombre==="" || direccion==="" || telefono==="" || correo==="" || ciudad==="" || edad==="")
		{
			alert("Debes llenasr los campos obligatorios");
			return false;
		}
}

















