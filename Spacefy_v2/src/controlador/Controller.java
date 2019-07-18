package controlador;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/Controller")
public class Controller extends HttpServlet {
	
protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String op=request.getParameter("op");
		String url="login.html";
		switch(op){
			case "doUsuarios":
				url="UsuariosAction";
			break;
			case "doCargar":
				url="CargarAction";
			break;
			case "doMostrar":
				url="MostrarAction";
			break;
			case "doActualizar":
				url="ActualizarAction";
			break;
			case "doCancelar":
				url="CancelarAction";
			break;
			case "doSalas":
				url="SalasAction";
			break;
			case "doReserva":
				url="ReservaAction";
			break;
			case "toPerfil":
				url="perfil.jsp";
			break;
			case "toMenu":
				url="menu.jsp";
			break;
			case "toContacto":
				url="contacta.html";
			break;
			case "toLogin":
				url="login.html";
			break;
			case "doDesconexion":
				url="DesconexionAction";
				break;
		}		
		request.getRequestDispatcher(url).forward(request, response);
	}

}
