<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang=es>
<head>
	<title>SPACEFY</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="asset_perfil/css/style.css">
	<script type="text/javascript" src="asset_perfil/js/jquery.min.js"></script>
	<script type="text/javascript" src="asset_perfil/js/moment.min.js"></script>
	<script type="text/javascript" src="asset_perfil/js/funciones.js"></script>
</head>
<body onload="cargarUsuario()">
	<header>
		<!-- MENU PRINCIPAL -->
		<div class="menu-info">
			<div class="menu-btn-container justify">
				<div class="menu-btn menu-high" id="menu-reserva">
					<a href="Controller?op=toMenu"><img class="menu-img" src="asset_perfil/img/reserva.png"></a>
					<div class="menu-texto">reserva</div>
				</div>
				<div class="menu-btn menu-high" id="menu-user">
					<a><img class="menu-img" src="asset_perfil/img/usuario.svg"></a>
					<div class="menu-texto">perfil</div>
				</div>
				<div class="menu-btn menu-high" id="menu-contacto">
					<a  href="Controller?op=toContacto"><img class="menu-img" src="asset_perfil/img/contacto.svg"></a>
					<div class="menu-texto">contacto</div>
				</div>
				<div class="menu-btn menu-high" id="menu-cerrar">
					<a href="Controller?op=doDesconexion"><img class="menu-img" src="asset_perfil/img/logout.svg"></a>
					<div class="menu-texto">cerrar sesion</div>
				</div>
			</div>						
		</div>
		<!-- END: MENU PRINCIPAL -->
	</header>

	<main>
		<!-- MENU INFO -->
	     <!-- <div class="menu-info"> -->
	     <div class="sub-menu">
	        <div class="menu-btn-container justify">
	            <div class="menu-btn" id="datos-personales">
	                DATOS PERSONALES
	            </div>
	            <div class="blue-circle"></div>
	            <div class="menu-btn" id="datos-bancarios">
	                DATOS BANCARIOS
	            </div>
	           	<div class="blue-circle"></div>
	            <div class="menu-btn" id="datos-reservas">
	                AGENDA
	            </div>
	        </div>
	    </div>
	    <!-- END: MENU INFO -->

	    <!-- MENU BLOCK -->
	    <section class="menu-info-block">
	        <!-- DATOS PERSONALES: BLOCK -->
	        <div class="content-wrapper">
	            <div class="flex-content closed-bar caption">
	                <div class="flex-1 title"><h3>DATOS PERSONALES</h3></div>
	                <div class="flex-2"><h3 id="titulo-usuario"></h3></div>
	                <div class="flex-4"><div class="circle circle-opened" id="datos-personales-content"></div></div>
	            </div>

	            <div class="gray-block hidden border-radius">
	                <div class="flex-content">
	                    <div class="flex-3 description">Nombre</div>
	                    <a id="nombreImg"><img class="edit-img" src="asset_perfil/img/edit.svg"></a>
	                </div>
	                <div class="white-content">
	                    <p class="white-content-normal" id="nombreTexto"></p>	                    
	                </div>
	            </div>

	            <div class="gray-block hidden">
	                <div class="flex-content">
	                    <div class="flex-3 description">Apellidos</div>
	                    <a id="apellidosImg"><img class="edit-img" src="asset_perfil/img/edit.svg"></a>
	                </div>
	                <div class="white-content">
	                    <p class="white-content-normal" id="apellidosTexto"></p>
	                </div>
	            </div>

	            <div class="gray-block hidden">
	                <div class="flex-content">
	                    <div class="flex-3 description">Documento de Identiddad</div>
	                    <a id="dniImg"><img class="edit-img" src="asset_perfil/img/edit.svg"></a>
	                </div>
	                <div class="white-content">
	                    <p class="white-content-normal" id="dniTexto"></p>
	                </div>
	            </div>

	            <div class="gray-block hidden">
	                <div class="flex-content">
	                    <div class="flex-3 description">E-mail</div>
	                    <a id="emailImg"><img class="edit-img" src="asset_perfil/img/edit.svg"></a>
	                </div>
	                <div class="white-content">
	                    <p class="white-content-normal" id="emailTexto"></p>
	                </div>
	            </div>

	            <div class="gray-block hidden">
	                <div class="flex-content">
	                    <div class="flex-3 description">Número de Teléfono</div>
	                    <a id="telfImg"><img class="edit-img" src="asset_perfil/img/edit.svg"></a>
	                </div>
	                <div class="white-content">
	                    <p class="white-content-normal" id="telfTexto"></p>
	                </div>
	            </div>

	            <div class="gray-block hidden">
	                <div class="flex-content">
	                    <div class="flex-3 description">Password</div>
	                    <a id="passImg"><img class="edit-img" src="asset_perfil/img/edit.svg"></a>
	                </div>
	                <div class="white-content">
	                    <p class="white-content-normal" id="passTexto"></p>
	                </div>
	            </div>

	            <div class="gray-block hidden border-radius">
	                <div class="flex-content">
	                    <div class="flex-3 description">Guardar Cambios</div>
	                    <a id="saveDatosImg"><img class="edit-img" src="asset_perfil/img/save.svg"></a>
	                </div>
	            </div>
	        </div>
	        <!-- END: BLOCK -->

	       	<!-- DATOS BANCARIOS: BLOCK -->
	        <div class="content-wrapper">
	        	<div class="flex-content closed-bar caption">
	                <div class="flex-1 title"><h3>DATOS BANCARIOS</h3></div>
	                <div class="flex-2"><h3 id="titulo-cuenta"></h3></div>
	                <div class="flex-4"><div class="circle circle-opened" id="datos-bancarios-content"></div></div>
	            </div>

	            <div class="gray-block hidden border-radius">
	                <div class="flex-content">
	                    <div class="flex-3 description">Cuenta Bancaria</div>
	                    <a id="cuentaImg"><img class="edit-img" src="asset_perfil/img/edit.svg"></a>
	                </div>
	                <div class="white-content">
	                    <p class="white-content-normal" id="cuentaTexto"></p>	                    
	                </div>
	            </div>

	            <div class="gray-block hidden border-radius">
	                <div class="flex-content">
	                    <div class="flex-3 description">Guardar Cambios</div>
	                    <a id="saveCuentaImg"><img class="edit-img" src="asset_perfil/img/save.svg"></a>
	                </div>
	            </div>
	        </div>

	        <!-- END: BLOCK -->

	        <!-- RESERVAS: BLOCK -->
	        <div class="content-wrapper">
	        	<div class="flex-content closed-bar caption">
	                <div class="flex-1 title"><h3>AGENDA</h3></div>
	                <!-- <div class="flex-2"><h3>01/01/2019 - 17:00 - PADEL</h3></div> -->
	                <div class="flex-4"><div class="circle circle-opened" id="datos-reservas-content"></div></div>
	            </div>
	        	
	            <div class="gray-block hidden border-radius">
	                <div class="flex-content">
						<!-- CALENDARIO -->
						<div class="content">
						    <div class="calendar-container">
						     	<div class="calendar"> 
						       		<div class="year-header"> 
						         		<span class="left-button" id="prev"> &lang; </span> 
						          		<span class="year" id="label"></span> 
						          		<span class="right-button" id="next"> &rang; </span>
						        	</div> 
							        <table class="months-table"> 
							          	<tbody>
							            	<tr class="months-row">
							              		<td class="month">Ene</td> 
							              		<td class="month">Feb</td> 
							              		<td class="month">Mar</td> 
							              		<td class="month">Abr</td> 
							              		<td class="month">May</td> 
							              		<td class="month">Jun</td> 
							              		<td class="month">Jul</td>
							              		<td class="month">Ago</td> 
							              		<td class="month">Sep</td> 
							              		<td class="month">Oct</td>          
							              		<td class="month">Nov</td>
							              		<td class="month">Dic</td>
							            	</tr>
							          	</tbody>
							        </table> 
						        
							        <table class="days-table">
								        <td class="day">L</td> 
								        <td class="day">M</td> 
								        <td class="day">X</td> 
								        <td class="day">J</td> 
								        <td class="day">V</td> 
								        <td class="day">S</td> 
								        <td class="day">D</td>
							        </table> 
							        <div class="frame"> 
							          	<table class="dates-table"> 
							              	<tbody class="tbody">              
							              	</tbody> 
							          	</table>
							        </div> 
							        <button class="anadir" id="add-anadir"><a href="Controller?op=toMenu" style="text-decoration:none; color:white">Añadir Reserva</a></button>
						      	</div>
						    </div>
						    <div class="events-container">
						    </div>
						  </div>
						  <!-- END: CALENDARIO-->
	                </div>
	            </div>
	        </div>
	        <!-- END: BLOCK -->

	        <!-- VENTANA EMERGENTE BLOCK -->
		    <div id="modal">
		      	<div class="modal">
			     	<h2></h2>
			     	<input placeholder="Introduzca" type="text" name="">
			     	<br>
			     	<br>
			     	<p>
			    		<a href="#" class="button submit">Aceptar</a>
			    		<a href="#" class="button cancel">Cancelar</a>
			    	</p>
		    	</div>
		    </div>
		    <!-- END: BLOCK -->
		</section>
        <!-- END: MENU BLOCK -->
    </main>
</body>
</html>