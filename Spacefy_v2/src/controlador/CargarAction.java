package controlador;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

import entidades.Usuario;
import modelo.DaoUsuarios;

/**
 * Servlet implementation class CargarAction
 */
@WebServlet("/CargarAction")
public class CargarAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int idCliente=(Integer)request.getSession().getAttribute("idUsuario");
		DaoUsuarios daoU=new DaoUsuarios();
		Usuario cliente=daoU.ObtenerUsuario(idCliente);
		String respuestaJson=transformarJson(cliente);
		PrintWriter out=response.getWriter();
		response.setContentType("text/plain");
		out.println(respuestaJson);
	}
	private static String transformarJson(Usuario user) {
		JSONObject ob=new JSONObject();
		ob.put("bankAccountUser", user.getBankAccountUser());
		ob.put("dni", user.getDni());
		ob.put("email", user.getEmail());
		ob.put("firstName", user.getFirstName());
		ob.put("idCommunity", user.getIdCommunity());
		ob.put("idTypeUser", user.getIdTypeUser());
		ob.put("lastName", user.getLastName());
		ob.put("password", user.getPassword());
		ob.put("phone", user.getPhone());
		return ob.toJSONString();
	}


}
