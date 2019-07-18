package controlador;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
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


@WebServlet("/SalasAction")
public class SalasAction extends HttpServlet {

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String fecha=request.getParameter("fecha");		
		int idSala=Integer.parseInt(request.getParameter("idSala"));
		DaoReservas dao=new DaoReservas();
		String strDate=fecha;
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		java.util.Date date=new java.util.Date();
		try {
			date = sdf.parse(strDate);
			java.sql.Date fechaSql=new java.sql.Date(date.getTime());
			List<Reserva> lista=dao.mostrarSala(fechaSql, idSala);
			String respuestaJson=transformarJson(lista);
			PrintWriter out=response.getWriter();
			response.setContentType("text/plain");
			out.println(respuestaJson);
			
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
		}		
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
