$(document).ready(function() {
  $('#slides').superslides({
    slide_easing: 'easeInOutCubic',
    slide_speed: 10,
    pagination: true,
    hashchange: true,
    scrollable: true
  });
});

$('#iconoFormulario').click(function (){

	$('div#formAcceso').css('display', 'block');

});

$('#enviaForm').click(validaForm);



function validaForm(){

	var nombre = $('#nombre').val();
	var pass = $('#pass').val();



	if(nombre == ''){
		$('#errorNombre').fadeIn(10)
		return false;
	}else{
		$('#errorNombre').fadeOut('slow')
		
	}

	

	if(pass == ''){
		$('#errorPass').fadeIn('slow')
		return false;
	}else{
		$('#errorPass').fadeOut('slow')
	}

registrado(nombre,pass);


}


function registrado(nombre, pass){
	var arrayNombre = ['Noelia','Pablo','Laura'];
	var arrayPass = ['hola','hola2','hola3']
	var nombre;
	var pass;
	if(nombre==arrayNombre[0] && pass==arrayPass[0]){
		alert('usted está perfectamente registrado y puede acceder a nuestros servicios')
	}




}






