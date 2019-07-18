var tipoSala=0;
var eventos;
var horaEvento;
var fecha=0;
$(document).ready(function() {

//EVENTOS MENU*****************************************************************
    $("#datos-personales").click(desplegarMenuDatos);
    $("#datos-personales-content").click(desplegarMenuDatos);
    $("#datos-bancarios").click(desplegarMenuBancarios);
    $("#datos-bancarios-content").click(desplegarMenuBancarios);
    $("#datos-reservas").click(desplegarMenuReservas);
    $("#datos-reservas-content").click(desplegarMenuReservas);

    //sala 1
    $("#sala1").click(function(){
    	tipoSala=1;
    	if(eventos!=null){
    		cargarSala();
    	}
    });
    
    //sala 2
    $("#sala2").click(function(){
    	tipoSala=2;
    	if(eventos!=null){
    		cargarSala();
    	}
    });
    
    //sala 3
    $("#sala3").click(function(){
    	tipoSala=3;
    	if(eventos!=null){
    		cargarSala();
    	}
    });
    
    //sala 4
    $("#sala4").click(function(){
    	tipoSala=4;
    	if(eventos!=null){
    		cargarSala();
    	}
    });
    
    //cerrar sesion
    $("#menu-cerrar")
    .click(function(){
//        alert("enlace a pagina principal");
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
    	if(fecha!=0 && tipoSala!=0){
	    	var url="Controller?op=doReserva&fecha="+fecha+"&idSala="+tipoSala;
	    	$.get(url, function(data){
	    		if(data.trim()=="true"){
	    			$(location).attr("href","#modal");
	    			$(".modal h2").text("reservado");
	    		    $(".modal input").hide();
	    		    var flagLogrado=true;
	    		    $(".button.submit").click(function(){          
	    		        if(flagLogrado){	    		        	
	    		            $(".modal input").show();
	    		            flagLogrado=false; 
	    		            url="Controller?op=toPerfil";
	    	    			$(location).attr('href',url);
	    		        }
	    		    });
	    		    $(".button.cancel").click(function(){
	    	            if(flagLogrado){
	    	                $(".modal input").show();
	    	                flagLogrado=false;
	    	                url="Controller?op=toPerfil";
	    	    			$(location).attr('href',url);
	    	            }
	    	        });
	    		}
	    		else{
	    			alert("fallo");
	    		}
	    	});
    	}
    });
    $(".events-container").on("click","#hora0",{date: date, hora: 9},seleccionHora);
    $(".events-container").on("click","#hora1",{date: date, hora: 10},seleccionHora);
    $(".events-container").on("click","#hora2",{date: date, hora: 11},seleccionHora);
    $(".events-container").on("click","#hora3",{date: date, hora: 12},seleccionHora);
    $(".events-container").on("click","#hora4",{date: date, hora: 13},seleccionHora);
    $(".events-container").on("click","#hora5",{date: date, hora: 14},seleccionHora);
    $(".events-container").on("click","#hora6",{date: date, hora: 15},seleccionHora);
    $(".events-container").on("click","#hora7",{date: date, hora: 16},seleccionHora);
    $(".events-container").on("click","#hora8",{date: date, hora: 17},seleccionHora);
    $(".events-container").on("click","#hora9",{date: date, hora: 18},seleccionHora);
    $(".events-container").on("click","#hora10",{date: date, hora: 19},seleccionHora);
    $(".events-container").on("click","#hora11",{date: date, hora: 20},seleccionHora);
    $(".events-container").on("click","#hora12",{date: date, hora: 21}, seleccionHora);

    init_calendar(date);
	var events = check_events(today, date.getMonth()+1, date.getFullYear());
	show_events(events, months[date.getMonth()], today);    
//FIN EVENTOS CALENDARIO*************************************************************************************
});

//funcion AJAX cojer los eventos de la sala
function cargarSala(){
	$(".events-container").empty();
    $(".events-container").show(250);
    var event_card = $("<div class='event-card'></div>");
    var event_name = $("<div class='event-name'>CARGANDO....</div>");
    $(event_card).css({ "border-left": "10px solid #FF1744" });
    $(event_card).append(event_name);
    $(".events-container").append(event_card);
    
	var fechaTemp=eventos.data.year+"-"+eventos.data.mes+"-"+eventos.data.day
	var url="Controller?op=doSalas&fecha="+fechaTemp+"&idSala="+tipoSala;
	$.get(url, cargarEventos);
}

//funcion AJAX cargar los eventos al calendario
function cargarEventos(data){
	if(data!=null){
		event_data["events"]=[];
		let json=JSON.parse(data);
		for(let i=0; i<json.length;i++){
			var name;
			var nowDate = new Date(parseInt(json[i].dateBooked));		
			switch(json[i].idSpace){
				case 1:
					name="Sala Comunitaria "
				break;				
				case 2:
					name="Pista Padel"
				break;
				case 3:
					name="Garaje"
				break;
				case 4:
					name="Piscina"
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
		var nuevo = check_events(parseInt(moment(nowDate).format('DD')), parseInt(moment(nowDate).format('MM')), parseInt(moment(nowDate).format('YYYY')));
	    show_events(nuevo, parseInt(moment(nowDate).format('MM')), parseInt(moment(nowDate).format('DD')));
	}
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
            curr_date.click({events: events, month: months[month], day:day, mes:(month+1), year:year}, date_click);
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
}

// Fecha click
function date_click(event) {
    $(".events-container").show(250);
    $("#dialog").hide(250);
    $(".active-date").removeClass("active-date");
    $(this).addClass("active-date");
    eventos=event;
    if(tipoSala!=0){
    	cargarSala();
    }
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
   	var j=0;
   	var o="";
   	switch(tipoSala){
   		case 1:
   			o="SALA COMUN";
   		break;
   		case 2:
   			o="PADEL";
   		break;
   		case 3:
   			o="GARAJE";
   		break;
   		case 4:
   			o="PISCINA";
   		break;
   	}
   	if(tipoSala!=0){
   		for(var i=0; i<12; i++){
   			var hora=9+i;
	       	if(hora<10){
	       		hora="0"+hora
	       	}
	       	var r=hora;
	       	var event_card = $("<div class='event-card' id='hora"+i+"'></div>");
	        var event_name = $("<div class='event-name'> "+o+" "+r+":00 a "+(10+i)+":00 "+"</div>");
	        $(event_card).append(event_name); 
	        $(".events-container").append(event_card);
   		}
   		for(var j=0; j<events.length; j++){
   			var clase=0;
   			switch(events[j]["invited_count"]){
   				case "09:00":
   					clase="hora0";   					
   				break;
   				case "10:00":
   					clase="hora1";   					
   				break;
   				case "11:00":
   					clase="hora2";   					
   				break;
   				case "12:00":
   					clase="hora3";   					
   				break;
   				case "13:00":
   					clase="hora4";   					
   				break;
   				case "14:00":
   					clase="hora5";   					
   				break;
   				case "15:00":
   					clase="hora6";   					
   				break;
   				case "16:00":
   					clase="hora7";   					
   				break;
   				case "17:00":
   					clase="hora8";   					
   				break;
   				case "18:00":
   					clase="hora9";   					
   				break;
   				case "19:00":
   					clase="hora10";   					
   				break;
   				case "20:00":
   					clase="hora11";   					
   				break;
   				case "21:00":
   					clase="hora12";   					
   				break;
   				case "22:00":
   					clase="hora13";   					
   				break;
   			}
   			$("#"+clase).empty();
			var event_name = $("<div class='event-name'>"+o+"</div>");
        	var event_count = $("<div class='event-cancelled'>"+events[j]["invited_count"]+" NO DISPONIBLE</div>");   		        	
			$("#"+clase).append(event_name).append(event_count);
			$("#"+clase).css({
        		"border-left": "10px solid #FF1744"
        	});
			$("#"+clase).attr("id",clase+"20");
   		}   		
   	}
   	else{
   		var event_card = $("<div class='event-card'></div>");
        var event_name = $("<div class='event-name'>SELECCIONE DIA Y ESPACIO</div>");
        $(event_card).css({ "border-left": "10px solid #FF1744" });
        $(event_card).append(event_name);
        $(".events-container").append(event_card);
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

//Seleccionar hora
function seleccionHora(event){
    var date = event.data.date;
    var dia = parseInt($(".active-date").html());
    var mes = date.getMonth()+1;
    var anyo = date.getFullYear();
    var hora = event.data.hora;
    for(var i=0; i<12; i++){
    	$("#hora"+i).css({
    		"border-left": "10px solid #52A0FD"
    	});
    }
    fecha=0;    
    switch($(this).attr("id")){
		case "hora0":
		case "hora1":
		case "hora2":
		case "hora3":
		case "hora4":
		case "hora5":
		case "hora6":
		case "hora7":
		case "hora8":
		case "hora9":
		case "hora10":
		case "hora11":
		case "hora12":
		case "hora13":
		    $(this).css({
				"border-left": "10px solid #F8FF44"
			});
		    if(mes<10){
		    	mes="0"+mes;
		    }
		    if(dia<10){
		    	dia="0"+dia;
		    }
		    if(hora<10){
		    	hora="0"+hora;
		    }
		    fecha=anyo+"-"+mes+"-"+dia+" "+hora+":00:00"; 
		break;
	}          
}

// Eventos de pureba
var event_data = {
    "events": [
    {
        "occasion": "PADEL",
        "invited_count": "9:00",
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

