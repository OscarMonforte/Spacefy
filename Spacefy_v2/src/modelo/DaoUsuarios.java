package modelo;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.Query;


import entidades.Usuario;

public class DaoUsuarios {
	EntityManager em;
	public DaoUsuarios() {
		EntityManagerFactory factoria=Persistence.createEntityManagerFactory("spacefyPU");
		em=factoria.createEntityManager();
	}	
	public boolean autenticar(String mail, String pass) {		
		boolean res=false;
		String jpql="Select u From Usuario u Where u.email=?1 and u.password=?2";
		Query q=em.createQuery(jpql);
		q.setParameter(1, mail);
		q.setParameter(2, pass);		
		if(q.getResultList().size()>0) {
			res=true;
		}
		return res;		
	}	
	public int ObtenerIdUsuario(String mail, String pass) {
		int res=0;
		String jpql="Select u From Usuario u Where u.email=?1 and u.password=?2";
		Query q=em.createQuery(jpql);
		q.setParameter(1, mail);
		q.setParameter(2, pass);
		List<Usuario> usuarios=(List<Usuario>)q.getResultList();
		if(usuarios.size()>0) {
			res=usuarios.get(0).getIdUser();
		}		
		return res;		
	}	
	public Usuario ObtenerUsuario(int numUser) {
		Usuario usu=new Usuario();
		String jpql="Select u From Usuario u Where u.idUser=?1";
		Query q=em.createQuery(jpql);
		q.setParameter(1, numUser);		
		List<Usuario> usuarios=(List<Usuario>)q.getResultList();
		if(usuarios.size()>0) {
			usu=usuarios.get(0);
		}
		return usu;						
	}	
	public void actualizarUsuario(Usuario user) {				
		EntityTransaction tx=em.getTransaction();
		tx.begin();
		em.merge(user);
		tx.commit();		
	}	
}
