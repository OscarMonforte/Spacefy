package controlador;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import entidades.Usuario;
import modelo.DaoUsuarios;

/**
 * Servlet implementation class ActualizarAction
 */
@WebServlet("/ActualizarAction")
public class ActualizarAction extends HttpServlet {
	
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		DaoUsuarios dao=new DaoUsuarios();
		String json=request.getParameter("usuario");
		json="{"+json+"}";
		Gson gson=new Gson();
		Usuario userNew=gson.fromJson(json, Usuario.class);
		Usuario userOld=dao.ObtenerUsuario((Integer)request.getSession().getAttribute("idUsuario"));
		userNew.setIdUser((Integer)request.getSession().getAttribute("idUsuario"));
		userNew.setIdCommunity(userOld.getIdCommunity());
		userNew.setIdTypeUser(userOld.getIdTypeUser());		
		dao.actualizarUsuario(userNew);		
	}

}
