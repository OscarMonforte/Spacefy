package controlador;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import modelo.DaoUsuarios;


@WebServlet("/UsuariosAction")
public class UsuariosAction extends HttpServlet {
	
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		DaoUsuarios gestion=new DaoUsuarios();
		if(gestion.autenticar(request.getParameter("cuenta"), request.getParameter("pwd"))){			
			int idCliente=gestion.ObtenerIdUsuario(request.getParameter("cuenta"), request.getParameter("pwd"));
			request.getSession().setAttribute("idUsuario", idCliente);
			String tipoUsuario=gestion.ObtenerUsuario(idCliente).getIdTypeUser();
			request.getSession().setAttribute("tpUsuario", tipoUsuario);
			
			crearCookie(request.getParameter("cuenta"), request.getParameter("pwd"),response);
			
			if(tipoUsuario.contentEquals("C")) {			
				request.getRequestDispatcher("Controller?op=toPerfil").forward(request, response);				
			} 			
		}		
		else {
			request.getRequestDispatcher("Controller?op=toLogin").forward(request, response);
		}		
	}
	
	private void crearCookie(String datoemail, String datoclave, HttpServletResponse resp) {
		Cookie ck=new Cookie("credenciales",datoemail+"|"+datoclave);
		//Tiempo que se guarda la cookie 10min=10*60=600
		ck.setMaxAge(600);
		resp.addCookie(ck);
	}
	
	
}
