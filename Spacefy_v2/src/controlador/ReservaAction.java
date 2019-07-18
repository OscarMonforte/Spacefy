package controlador;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import modelo.DaoReservas;

/**
 * Servlet implementation class ReservaAction
 */
@WebServlet("/ReservaAction")
public class ReservaAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String fecha=request.getParameter("fecha");
		int idSala=Integer.parseInt(request.getParameter("idSala"));
		int idUsuario=(Integer)request.getSession().getAttribute("idUsuario");
		String resultado="false";
		DaoReservas dao=new DaoReservas();
		String strDate=fecha;
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		java.util.Date date=new java.util.Date();
		try {
			date = sdf.parse(strDate);
			java.sql.Date fechaSql=new java.sql.Date(date.getTime());
			if(dao.altaReserva(fechaSql, idSala, idUsuario)) {
				resultado="true";
			}
			
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
		}
		PrintWriter out=response.getWriter();
		response.setContentType("text/plain");
		out.println(resultado);
	}

}
