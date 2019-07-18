package modelo;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.NoResultException;
import javax.persistence.Persistence;
import javax.persistence.Query;

import entidades.Reserva;

public class DaoReservas {
	EntityManager em;
	public DaoReservas() {
		EntityManagerFactory factoria=Persistence.createEntityManagerFactory("spacefyPU");
		em=factoria.createEntityManager();
	}
	public boolean cancelarReserva(int idReserva, int idUsuario, String idTypeUser) {
		boolean resultado=false;
		try {
			Reserva res=em.find(Reserva.class, idReserva);
			if(res.getIdUser()==idUsuario || idTypeUser.equals("A")){
				EntityTransaction tx=em.getTransaction();
				tx.begin();
				em.remove(res);
				tx.commit();
				resultado=true;
			}
		} catch(NullPointerException ex) {
			ex.printStackTrace();
			resultado=false;
		}
		return resultado;		
	}
	public List<Reserva> mostrarSala(Date fecha, int idSala){
		String jpql="select s from Reserva s where s.idSpace=?1 and s.dateBooked BETWEEN ?2 AND ?3";
		Query qr=em.createQuery(jpql);
		qr.setParameter(1, idSala);
		qr.setParameter(2, fecha);	
		Calendar c= Calendar.getInstance();
		c.setTime(fecha);
		c.add(Calendar.DATE, 1);
		fecha=c.getTime();		
		qr.setParameter(3, fecha);
		List<Reserva> resultado=qr.getResultList();
		return resultado;
	}
	public List<Reserva> mostrarUsuario(Date fecha, int idUsuario){
		String jpql="select s from Reserva s where s.idUser=?1 and s.dateBooked BETWEEN ?2 AND ?3";
		Query qr=em.createQuery(jpql);
		qr.setParameter(1, idUsuario);		
		Calendar c= Calendar.getInstance();
		c.setTime(fecha);
		c.add(Calendar.DATE, -1);
		fecha=c.getTime();	
		qr.setParameter(2, fecha);
		c.add(Calendar.MONTH, 1);
		fecha=c.getTime();
		qr.setParameter(3, fecha);
		List<Reserva> resultado=qr.getResultList();
		return resultado;
	}
	public boolean altaReserva(Date fecha, int idSala, int idUsuario) {
		boolean resultado=true;
		java.sql.Date fechaSql=new java.sql.Date((new java.util.Date()).getTime());
		Reserva res=new Reserva(fecha, fechaSql, idSala, idUsuario);
		try{
			EntityTransaction tx=em.getTransaction();
			tx.begin();
			em.persist(res);
			tx.commit();
		}catch(NoResultException ex) {
			ex.printStackTrace();
			resultado=false;
		}
		return resultado;
	}
}

