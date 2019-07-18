$(document).ready(function() {

//EVENTOS MENU*****************************************************************
    $("#datos-personales").click(desplegarMenuDatos);
    $("#datos-personales-content").click(desplegarMenuDatos);
    $("#datos-bancarios").click(desplegarMenuBancarios);
    $("#datos-bancarios-content").click(desplegarMenuBancarios);
    $("#datos-reservas").click(desplegarMenuReservas);
    $("#datos-reservas-content").click(desplegarMenuReservas);

    //cambiar nombre
    $("#nombreImg").click(function(){
        $("#nombreImg").attr("href","#modal");
        $(".modal h2").text("Nombre");
        $(".modal input").val("");

        var flagNombre=true;
        $(".button.submit").click(function(){  
            if(flagNombre){
                var texto = $(".modal input").val();
                $("#nombreTexto").text(texto);
                flagNombre=false;
            }
        });
        $(".button.cancel").click(function(){
            if(flagNombre){
                $(".modal input").show();
                flagNombre=false;
            }
        });
    });

    //cambiar apellidos
    $("#apellidosImg").click(function(){
        $("#apellidosImg").attr("href","#modal");
        $(".modal h2").text("Apellidos");
        $(".modal input").val("");

        var flagApellidos=true;
        $(".button.submit").click(function(){          
            if(flagApellidos){
                var texto = $(".modal input").val();
                $("#apellidosTexto").text(texto);
                flagApellidos=false;
            }
        });
        $(".button.cancel").click(function(){
            if(flagApellidos){
                $(".modal input").show();
                flagApellidos=false;
            }
        });
    });

    //cambiar dni
    $("#dniImg").click(function(){
        $("#dniImg").attr("href","#modal");
        $(".modal h2").text("DNI");
        $(".modal input").val("");

        var flagDni=true;
        $(".button.submit").click(function(){          
            if(flagDni){
                var texto = $(".modal input").val();
                $("#dniTexto").text(texto);
                flagDni=false;
            }
        });
        $(".button.cancel").click(function(){
            if(flagDni){
                $(".modal input").show();
                flagDni=false;
            }
        });
    });

    //cambiar e-mail
    $("#emailImg").click(function(){
        $("#emailImg").attr("href","#modal");
        $(".modal h2").text("e-mail");
        $(".modal input").val("");

        var flagEmail=true;
        $(".button.submit").click(function(){          
            if(flagEmail){
                var texto = $(".modal input").val();
                $("#emailTexto").text(texto);
                flagEmail=false;
            }
        });
        $(".button.cancel").click(function(){
            if(flagEmail){
                $(".modal input").show();
                flagEmail=false;
            }
        });
    });

    //cambiar telefono
    $("#telfImg").click(function(){
        $("#telfImg").attr("href","#modal");
        $(".modal h2").text("telefono");
        $(".modal input").val("");

        var flagTelefono=true;
        $(".button.submit").click(function(){          
            if(flagTelefono){
                var texto = $(".modal input").val();
                $("#telfTexto").text(texto);
                flagTelefono=false;
            }
        });
        $(".button.cancel").click(function(){
            if(flagTelefono){
                $(".modal input").show();
                flagTelefono=false;
            }
        });
    });

    //cambiar password
    $("#passImg").click(function(){
        $("#passImg").attr("href","#modal");
        $(".modal h2").text("password");
        $(".modal input").val("");

        var flagPass=true;
        $(".button.submit").click(function(){
            if(flagPass){
                var texto = $(".modal input").val();
                $("#passTexto").text(texto);
                flagPass=false;
            }
        });
        $(".button.cancel").click(function(){
            if(flagPass){
                $(".modal input").show();
                flagPass=false;
            }
        });
    });

    //funcion AJAX guardar cambios en base de datos
    $("#saveDatosImg").click(function(){
    	$("#saveDatosImg").attr("href","#modal");
    	$(".modal h2").text("guardar cambios");
        $(".modal input").hide();
        var flagSalvarDatos=true;
        $(".button.submit").click(function(){          
            if(flagSalvarDatos){            	
		        var nombre = $("#nombreTexto").text();
		        var apellidos = $("#apellidosTexto").text();
		        var dni = $("#dniTexto").text();
		        var email = $("#emailTexto").text();
		        var tlf = $("#telfTexto").text();
		        var pass = $("#passTexto").text();
		        var cuenta = $("#cuentaTexto").text();
		        var json="'firstName':"+nombre+",'lastName':"+apellidos+",'password':"+pass+",'bankAccountUser':"+cuenta+",'phone':"+tlf+",'dni':"+dni+",'email':"+email;
		        var url="Controller?op=doActualizar&usuario="+json;
		    	$.post(url);
		        $("#titulo-usuario").text(nombre+" "+apellidos);
		        $(".modal input").show();
		        flagSalvarDatos=false;
            }
        });
        $(".button.cancel").click(function(){
            if(flagSalvarDatos){
                $(".modal input").show();
                flagSalvarDatos=false;
            }
        });
    });

    //cambiar cuenta corrienta
    $("#cuentaImg").click(function(){
        $("#cuentaImg").attr("href","#modal");
        $(".modal h2").text("cuenta bancaria");
        $(".modal input").val("");

        var flagCuenta=true;
        $(".button.submit").click(function(){          
            if(flagCuenta){
                var texto = $(".modal input").val();
                $("#cuentaTexto").text(texto);
                flagCuenta=false;
            }
        });
        $(".button.cancel").click(function(){
            if(flagCuenta){
                $(".modal input").show();
                flagCuenta=false;
            }
        });
    });

    //funcion AJAX guardar cambios en base de datos
    $("#saveCuentaImg").click(function(){
    	$("#saveCuentaImg").attr("href","#modal");
    	$(".modal h2").text("guardar cambios");
        $(".modal input").hide();
        var flagSalvarCuenta=true;
        $(".button.submit").click(function(){          
            if(flagSalvarCuenta){            	
		        var nombre = $("#nombreTexto").text();
		        var apellidos = $("#apellidosTexto").text();
		        var dni = $("#dniTexto").text();
		        var email = $("#emailTexto").text();
		        var tlf = $("#telfTexto").text();
		        var pass = $("#passTexto").text();
		        var cuenta = $("#cuentaTexto").text();
		        var json="'firstName':"+nombre+",'lastName':"+apellidos+",'password':"+pass+",'bankAccountUser':"+cuenta+",'phone':"+tlf+",'dni':"+dni+",'email':"+email;
		        var url="Controller?op=doActualizar&usuario="+json;
		    	$.post(url);
		    	$("#titulo-cuenta").text(cuenta);
		    	$(".modal input").show();
		    	flagSalvarCuenta=false;
            }
        });
        $(".button.cancel").click(function(){
            if(flagSalvarCuenta){
                $(".modal input").show();
                flagSalvarCuenta=false;
            }
        });
    });

    //cerrar sesion
    $("#menu-cerrar")
    .click(function(){
 //       alert("enlace a pagina principal");
    })
    .mouseenter(function(){
        $("#menu-cerrar").children("div").css({ "filter": "invert(1)" });
        $("#menu-cerrar").children("a").children("img").css({ "filter": "invert(1)" });
    })
    .mouseleave(function(){
        $("#menu-cerrar").children("div").css({ "filter": "invert(0.6)" });
        $("#menu-cerrar").children("a").children("img").css({ "filter": "invert(0.6)" });
    });

    //añadir reserva
    $("#menu-reserva")
    .click(function(){
//        alert("enlace a pagina de reservas");
//    	enlaceMenu();
    })
    .mouseenter(function(){
        $("#menu-reserva").children("div").css({ "filter": "invert(1)" });
        $("#menu-reserva").children("a").children("img").css({ "filter": "invert(1)" });
    })
    .mouseleave(function(){
        $("#menu-reserva").children("div").css({ "filter": "invert(0.6)" });
        $("#menu-reserva").children("a").children("img").css({ "filter": "invert(0.6)" });
    });

    //contacto
    $("#menu-contacto")
    .click(function(){
 //       alert("enlace a pagina de contacto");
    })
    .mouseenter(function(){
        $("#menu-contacto").children("div").css({ "filter": "invert(1)" });
        $("#menu-contacto").children("a").children("img").css({ "filter": "invert(1)" });
    })
    .mouseleave(function(){
        $("#menu-contacto").children("div").css({ "filter": "invert(0.6)" });
        $("#menu-contacto").children("a").children("img").css({ "filter": "invert(0.6)" });
    });

    //usuario
    $("#menu-user")
    .click(function(){

    })
    .mouseenter(function(){
        $("#menu-user").children("div").css({ "filter": "invert(1)" });
        $("#menu-user").children("a").children("img").css({ "filter": "invert(1)" });
    })
    .mouseleave(function(){
        $("#menu-user").children("div").css({ "filter": "invert(0.6)" });
        $("#menu-user").children("a").children("img").css({ "filter": "invert(0.6)" });
    });

//FIN EVENTOS MENU*****************************************************************************************

//EVENTOS CALENDARIO****************************************************************************************
    var date = new Date();
    var today = date.getDate();

    $(".right-button").click({date: date}, next_year);
    $(".left-button").click({date: date}, prev_year);
    $(".month").click({date: date}, month_click);
    $(".months-row").children().eq(date.getMonth()).addClass("active-month");
    $("#add-anadir").click(function(){
 //       alert("enlace a pagina de reservas");
//    	enlaceMenu();
    });
    $(".events-container").on("click",".event-eliminar",{date: date},reservaCancelar);
    init_calendar(date);
    var events = check_events(today, date.getMonth()+1, date.getFullYear());
    show_events(events, months[date.getMonth()], today);    
//FIN EVENTOS CALENDARIO*************************************************************************************
});

//funcion AJAX para que al arrancar coja los datos del usuario y sus reservas
function cargarUsuario(){
	var url="Controller?op=doCargar";
	$.get(url, mostrarUsuario);
	url="Controller?op=doMostrar";
	$.get(url, cargarEventos);
}

//funcion AJAX para mostrar los datos al usuario
function mostrarUsuario(data){
	let json=JSON.parse(data);
	$("#nombreTexto").text(json.firstName);
	$("#apellidosTexto").text(json.lastName);
	$("#dniTexto").text(json.dni);
	$("#emailTexto").text(json.email);
	$("#telfTexto").text(json.phone);
	$("#passTexto").text(json.password);
	$("#cuentaTexto").text(json.bankAccountUser);
	$("#titulo-usuario").text(json.firstName+" "+json.lastName);
	$("#titulo-cuenta").text(json.bankAccountUser);
}

//funcion AJAX cargar los eventos al calendario
function cargarEventos(data){
	let json=JSON.parse(data);
	for(let i=0; i<json.length;i++){
		var name;
		var nowDate = new Date(parseInt(json[i].dateBooked));		
		switch(json[i].idSpace){
			case 1:
				name="SALA COMUN";
			break;				
			case 2:
				name="PADEL";
			break;
			case 3:
				name="GARAJE";
			break;
			case 4:
				name="PISCINA";
			break;
		}
	    var event = {
	        "occasion": name,
	        "invited_count": moment(nowDate).format('HH:00'),
	        "year": parseInt(moment(nowDate).format('YYYY')),
	        "month": parseInt(moment(nowDate).format('MM')),
	        "day": parseInt(moment(nowDate).format('DD')),
	        "idBooking": parseInt(json[i].idBooking)
	    }
	    event_data["events"].push(event);
	}
	var date = new Date();
    var today = date.getDate();
    date.setDate(today);    
    init_calendar(date);
}

//funcion AJAX cancelar reserva
function enviarReservaCancelar(i, dia, mes, anyo, idBooking){
	var url="Controller?op=doCancelar&idReserva="+idBooking;
	$.get(url, function(data){
		if(data.trim()=="true"){
			event_data["events"][i].cancelled=true; 
			show_events(check_events(dia, mes, anyo));
		}
		else{
			alert("Error de conexión");
		}
	});	
}

//datos-personales menu-out btns toggle
function desplegarMenuDatos() {
    let container = $('#datos-personales-content'),
        content = container.parent().parent().nextAll('.gray-block'),
        circle = container.first(),
        caption = $('#datos-personales-content').parent().parent();
    if (container.hasClass('circle-opened')) {
        content.removeClass('hidden').addClass('slideDown');
        circle.removeClass('circle-opened');
        caption.removeClass('closed-bar');

        $('#datos-personales-content').parent().parent().parent().animate({height:"600px"}, 1000);
    } else {
        content.addClass('hidden');
        circle.addClass('circle-opened');
        caption.addClass('closed-bar');

        $('#datos-personales-content').parent().parent().parent().animate({height: "40px"}, 1000);
    }
}

//datos-bancarios menu-out btns toggle
function desplegarMenuBancarios() {
    let payOut = $('#datos-bancarios-content'),
        content = payOut.parent().parent().nextAll('.gray-block'),
        caption = payOut.parent().parent();
    if ( payOut.hasClass('circle-opened') ) {
        payOut.removeClass('circle-opened');
        content.removeClass('hidden').addClass('slideDown');
        caption.removeClass('closed-bar');

        $('#datos-bancarios-content').parent().parent().parent().animate({height:"175px"}, 1000);
    }else {
        payOut.addClass('circle-opened');
        content.addClass('hidden');
        caption.addClass('closed-bar');

        $('#datos-bancarios-content').parent().parent().parent().animate({height: "40px"}, 1000);
    }
}

//datos-reservas menu-out btns toggle
function desplegarMenuReservas() {
    let payOut = $('#datos-reservas-content'),
        content = payOut.parent().parent().nextAll('.gray-block'),
        caption = payOut.parent().parent();
    if ( payOut.hasClass('circle-opened') ) {
        payOut.removeClass('circle-opened');
        content.removeClass('hidden').addClass('slideDown');
        caption.removeClass('closed-bar');

        $('#datos-reservas-content').parent().parent().parent().animate({height:"645px"}, 1000);
    }else {
        payOut.addClass('circle-opened');
        content.addClass('hidden');
        caption.addClass('closed-bar');

        $('#datos-reservas-content').parent().parent().parent().animate({height: "40px"}, 1000);
    }
}

//Inicializa el calendario
function init_calendar(date) {
    $(".tbody").empty();
    $(".events-container").empty();
    var calendar_days = $(".tbody");
    var month = date.getMonth();
    var year = date.getFullYear();
    var day_count = Math.round(days_in_month(month, year));
    var row = $("<tr class='table-row'></tr>");
    var today = date.getDate();
    date.setDate(1);
    // var first_day = date.getDay();
    var first_day = date.getDay()-1;
    if(first_day < 0){
        first_day=6;
    }
    for(var i=0; i<35+first_day; i++) {
       var day = i-first_day+1;
        if(i%7===0) {
            calendar_days.append(row);
            row = $("<tr class='table-row'></tr>");
        }
        if(i < first_day || day > day_count) {            
            var curr_date = $("<td class='table-date nil'>"+"</td>");
            row.append(curr_date);
        }   
        else {
            var curr_date = $("<td class='table-date'>"+day+"</td>");
            var events = check_events(day, month+1, year);
            if(today===day && $(".active-date").length===0) {
                curr_date.addClass("active-date");
                show_events(events, months[month], day);
            }
            if(events.length!==0) {
                curr_date.addClass("event-date");
            }
            curr_date.click({events: events, month: months[month], day:day}, date_click);
            row.append(curr_date);
        }
    }
    calendar_days.append(row);
    $(".year").text(year);
}

// Numero de dias mes año
function days_in_month(month, year) {
    var monthStart = new Date(year, month, 1);
    var monthEnd = new Date(year, month + 1, 1);
    return (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
    //return (new Date(year, month-1, 0).getDate());    
}

// Fecha click
function date_click(event) {
    $(".events-container").show(250);
    $("#dialog").hide(250);
    $(".active-date").removeClass("active-date");
    $(this).addClass("active-date");
    show_events(event.data.events, event.data.month, event.data.day);
};

// Mes click
function month_click(event) {
    $(".events-container").show(250);
    $("#dialog").hide(250);
    var date = event.data.date;
    $(".active-month").removeClass("active-month");
    $(this).addClass("active-month");
    var new_month = $(".month").index(this);
    date.setMonth(new_month);
    init_calendar(date);
}

// Boton derecho año
function next_year(event) {
    $("#dialog").hide(250);
    var date = event.data.date;
    var new_year = date.getFullYear()+1;
    $("year").html(new_year);
    date.setFullYear(new_year);
    init_calendar(date);
}

// Boton izquierdo año
function prev_year(event) {
    $("#dialog").hide(250);
    var date = event.data.date;
    var new_year = date.getFullYear()-1;
    $("year").html(new_year);
    date.setFullYear(new_year);
    init_calendar(date);
}

// Añade un evento
function new_event_json(name, count, date, day) {
    var event = {
        "occasion": name,
        "invited_count": count,
        "year": date.getFullYear(),
        "month": date.getMonth()+1,
        "day": day
    };
    event_data["events"].push(event);
}

// Muestra los eventos
function show_events(events, month, day) {
    // Clear the dates container
    $(".events-container").empty();
    $(".events-container").show(250);
    if(events.length===0) {
        var event_card = $("<div class='event-card'></div>");
        var event_name = $("<div class='event-name'>NO HAY RESERVA "+month+" "+day+".</div>");
        $(event_card).css({ "border-left": "10px solid #FF1744" });
        $(event_card).append(event_name);
        $(".events-container").append(event_card);
    }
    else {
        for(var i=0; i<events.length; i++) {
            var event_card = $("<div class='event-card'></div>");
            var event_name = $("<div class='event-name'>"+events[i]["occasion"]+"</div>");
            var event_count = $("<div class='event-count'>"+events[i]["invited_count"]+"</div>");           
            if(events[i]["cancelled"]===true) {
                $(event_card).css({
                    "border-left": "10px solid #FF1744"
                });
                event_count = $("<div class='event-cancelled'>CANCELADO</div>");
            }
            else{
                var event_eliminar = $("<a class='event-eliminar'><img class='edit-img' src='asset_perfil/img/quit.svg'></a>"); 
                $(event_card).append(event_eliminar);
            }
            $(event_card).append(event_name).append(event_count);            
            $(".events-container").append(event_card);
        }
    }
}

// Chequea eventos
function check_events(day, month, year) {
    var events = [];
    for(var i=0; i<event_data["events"].length; i++) {
        var event = event_data["events"][i];
        if(event["day"]===day &&
            event["month"]===month &&
            event["year"]===year) {
                events.push(event);
            }
    }
    return events;
}

// Cancelar reserva
function reservaCancelar(event){
    $(this).attr("href","#modal");
    $(this).parent().addClass("select");
    $(".modal h2").text("eliminar");
    $(".modal input").hide();
    var flagCancelar=true;
    $(".button.submit").click(function(){          
        if(flagCancelar){
            var date = event.data.date;
            var dia = parseInt($(".active-date").html());
            var mes = date.getMonth()+1;
            var anyo = date.getFullYear();
            var sala = $(".select").children(".event-name").text();
            var hora = $(".select").children(".event-count").text();
            for(var i=0; i<event_data["events"].length; i++){
                var evento = event_data["events"][i];
                if(evento["day"] === dia &&
                   evento["month"] === mes &&
                   evento["year"] === anyo &&
                   evento["occasion"] === sala &&
                   evento["invited_count"] === hora){
                		enviarReservaCancelar(i, dia, mes, anyo, evento["idBooking"]);
                }
            }
            $(".event-eliminar").parent().removeClass("select");
            $(".modal input").show();
            flagCancelar=false;               
        }
    });
    $(".button.cancel").click(function(){
        $(".event-eliminar").parent().removeClass("select");
        if(flagCancelar){
            $(".modal input").show();
            flagCancelar=false;
        }
    });
    
}

// Eventos de pureba
var event_data = {
    "events": [
    {
        "occasion": "PADEL",
        "invited_count": "17:00",
        "year": 2019,
        "month": 5,
        "day": 10,
        "cancelled": true
    },
    {
        "occasion": "GIMNASIO",
        "invited_count": "18:00",
        "year": 2019,
        "month": 5,
        "day": 4,
        "cancelled": true
    },
        {
        "occasion": "SALA-1",
        "invited_count": "10:00",
        "year": 2019,
        "month": 5,
        "day": 21,
        "cancelled": true
    },
    {
        "occasion": "SALA-2",
        "invited_count": "14:00",
        "year": 2019,
        "month": 5,
        "day": 10
    },
    {
        "occasion": "SALA-1",
        "invited_count": "18:00",
        "year": 2019,
        "month": 5,
        "day": 10
    },
    {
        "occasion": "SALA-3",
        "invited_count": "19:00",
        "year": 2019,
        "month": 5,
        "day": 4
    }
    ]
};

const months = [ 
    "Enero", 
    "Febrero", 
    "Marzo", 
    "Abril", 
    "Mayo", 
    "Junio", 
    "Julio", 
    "Agosto", 
    "Septiembre", 
    "Octubre", 
    "Noviembre", 
    "Diciembre" 
];
