<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang=es>
<head>
	<title>SPACEFY</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="asset_menu/css/style.css">
	<script type="text/javascript" src="asset_menu/js/jquery.min.js"></script>
	<script type="text/javascript" src="asset_perfil/js/moment.min.js"></script>
	<script type="text/javascript" src="asset_menu/js/funciones.js"></script>
</head>
<body>
	<header>
		<!-- MENU PRINCIPAL -->
		<div class="menu-info">
			<div class="menu-btn-container justify">
				<div class="menu-btn menu-high" id="menu-reserva">
					<a><img class="menu-img" src="asset_perfil/img/reserva.png"></a>
					<div class="menu-texto">reserva</div>
				</div>
				<div class="menu-btn menu-high" id="menu-user">
					<a href="Controller?op=toPerfil"><img class="menu-img" src="asset_perfil/img/usuario.svg"></a>
					<div class="menu-texto">perfil</div>
				</div>
				<div class="menu-btn menu-high" id="menu-contacto">
					<a href="Controller?op=toContacto"><img class="menu-img" src="asset_perfil/img/contacto.svg"></a>
					<div class="menu-texto">contacto</div>
				</div>
				<div class="menu-btn menu-high" id="menu-cerrar">
					<a href="Controller?op=doDesconexion"><img class="menu-img" src="asset_perfil/img/logout.svg"></a>
					<div class="menu-texto">cerrar sesion</div>
				</div>
			</div>						
		</div>
		<!-- END: MENU  PRINCIPAL -->
	</header>

	<main>
	    <!-- MENU BLOCK -->
	    <section class="menu-info-block">
	        <!-- DATOS PERSONALES: BLOCK -->
	        <div class="content-wrapper">
	            <div class="flex-content closed-bar caption">
	                <div class="flex-1 title"><h3></h3></div>
	                <div class="flex-2"><h3 class="subtitle">SELECCIONA EL ESPACIO</h3></div>
	                <div class="flex-4"></div>
	            </div>
	            <div class="gray-block hidden border-radius divsala">
					<a id="sala2" href="#">
						<img class="imagen"src="asset_menu/img/padel.jpg"/>
					</a>
					<!--  						
					<a id="sala3" href="#">
						<img class="imagen"src="asset_menu/img/gimnasio.jpg"/>
					</a>
					<a id="sala4" href="#">
						<img class="imagen"src="asset_menu/img/pool.jpeg"/>
					</a>
					-->
					<a id="sala1" href="#">
						<img class="imagen"src="asset_menu/img/sala.jpg"/>
					</a>
				</div>         
	        </div>
	        <!-- END: BLOCK -->

	        <!-- RESERVAS: BLOCK -->
	        <div class="content-wrapper">
	        	<div class="flex-content closed-bar caption">
	        		<div class="flex-1 title"><h3></h3></div>
	                <div class="flex-2"><h3 class="subtitle">SELECCIONA EL DÍA</h3></div>
	                <div class="flex-4"></div>
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
							        <button class="anadir" id="add-anadir">Realizar Reserva</button>
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
		</section>
        <!-- END: MENU BLOCK -->
    </main>
</body>
</html>

	        