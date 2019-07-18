package entidades;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the booking database table.
 * 
 */
@Entity
@Table(name="booking")
//@NamedQuery(name="Reserva.findAll", query="SELECT r FROM Reserva r")
public class Reserva implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idBooking;

	@Temporal(TemporalType.TIMESTAMP)
	private Date dateBooked;

	@Temporal(TemporalType.TIMESTAMP)
	private Date dateRequest;

	private int idSpace;

	private int idUser;

	public Reserva() {
	}

	public Reserva(Date dateBooked, Date dateRequest, int idSpace, int idUser) {
		super();
		this.dateBooked = dateBooked;
		this.dateRequest = dateRequest;
		this.idSpace = idSpace;
		this.idUser = idUser;
	}

	public int getIdBooking() {
		return this.idBooking;
	}

	public void setIdBooking(int idBooking) {
		this.idBooking = idBooking;
	}

	public Date getDateBooked() {
		return this.dateBooked;
	}

	public void setDateBooked(Date dateBooked) {
		this.dateBooked = dateBooked;
	}

	public Date getDateRequest() {
		return this.dateRequest;
	}

	public void setDateRequest(Date dateRequest) {
		this.dateRequest = dateRequest;
	}

	public int getIdSpace() {
		return this.idSpace;
	}

	public void setIdSpace(int idSpace) {
		this.idSpace = idSpace;
	}

	public int getIdUser() {
		return this.idUser;
	}

	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}

}