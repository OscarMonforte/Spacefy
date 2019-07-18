package controlador;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import modelo.DaoReservas;


@WebServlet("/CancelarAction")
public class CancelarAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int idReserva=Integer.parseInt(request.getParameter("idReserva"));
		int idUsuario=(Integer)request.getSession().getAttribute("idUsuario");
		String idTypeUser=(String)request.getSession().getAttribute("tpUsuario");
		String resultado="false";
		DaoReservas dao=new DaoReservas();
		if(dao.cancelarReserva(idReserva, idUsuario, idTypeUser)) {
			resultado="true";
		}
		PrintWriter out=response.getWriter();
		response.setContentType("text/plain");
		out.println(resultado);
	}
}
