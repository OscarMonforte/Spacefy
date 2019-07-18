package controlador;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import entidades.Reserva;
import modelo.DaoReservas;

/**
 * Servlet implementation class MostrarAction
 */
@WebServlet("/MostrarAction")
public class MostrarAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int idCliente=(Integer)request.getSession().getAttribute("idUsuario");
		DaoReservas daoR=new DaoReservas();
		java.sql.Date fechaSql=new java.sql.Date((new java.util.Date()).getTime());
		List<Reserva> lista=daoR.mostrarUsuario(fechaSql, idCliente);
		String respuestaJson=transformarJson(lista);
		PrintWriter out=response.getWriter();
		response.setContentType("text/plain");
		out.println(respuestaJson);		
	}
	private static String transformarJson(List<Reserva> reservas) {
		JSONArray array=new JSONArray(); 
		for(Reserva r:reservas) {
			JSONObject ob=new JSONObject();
			ob.put("dateBooked", r.getDateBooked().getTime());
			ob.put("dateRequest", r.getDateRequest().getTime());
			ob.put("idSpace", r.getIdSpace());
			ob.put("idUser", r.getIdUser());
			ob.put("idBooking", r.getIdBooking());
			array.add(ob);
		}
		return array.toJSONString();
	}

}
