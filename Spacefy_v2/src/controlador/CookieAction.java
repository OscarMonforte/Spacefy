package controlador;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import modelo.DaoUsuarios;

/**
 * Servlet implementation class CookieAction
 */
@WebServlet("/CookieAction")
public class CookieAction extends HttpServlet {
	
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			Cookie[] cookies=request.getCookies();
			boolean encontrada=false;
			String url="Controller?op=toLogin";
			if(cookies!=null) {
				for(Cookie ck:cookies) {
					if(ck.getName().equals("credenciales")) {
						DaoUsuarios gestion=new DaoUsuarios();
						encontrada=true;
						//Recuperamos los valores de la cookie email/usuario y clave/password para registrar AtributoSesion
						String valor=ck.getValue();
						String email=valor.split("[|]")[0];
						String pwd=valor.split("[|]")[1];
						url="UsuariosAction?cuenta="+email+"&pwd="+pwd;
					}
				}
			}
				
			request.getRequestDispatcher(url).forward(request, response);
		}

}
