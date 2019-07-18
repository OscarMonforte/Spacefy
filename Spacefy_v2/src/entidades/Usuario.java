package entidades;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the users database table.
 * 
 */
@Entity
@Table(name="users")
//@NamedQuery(name="Usuario.findAll", query="SELECT u FROM Usuario u")
public class Usuario implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idUser;

	private String bankAccountUser;

	private String dni;

	private String email;

	private String firstName;

	private int idCommunity;

	private String idTypeUser;

	private String lastName;

	private String password;

	private int phone;

	public Usuario() {
	}

	public Usuario(String bankAccountUser, String dni, String email, String firstName, int idCommunity,
			String idTypeUser, String lastName, String password, int phone) {
		super();
		this.bankAccountUser = bankAccountUser;
		this.dni = dni;
		this.email = email;
		this.firstName = firstName;
		this.idCommunity = idCommunity;
		this.idTypeUser = idTypeUser;
		this.lastName = lastName;
		this.password = password;
		this.phone = phone;
	}

	public int getIdUser() {
		return this.idUser;
	}

	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}

	public String getBankAccountUser() {
		return this.bankAccountUser;
	}

	public void setBankAccountUser(String bankAccountUser) {
		this.bankAccountUser = bankAccountUser;
	}

	public String getDni() {
		return this.dni;
	}

	public void setDni(String dni) {
		this.dni = dni;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFirstName() {
		return this.firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public int getIdCommunity() {
		return this.idCommunity;
	}

	public void setIdCommunity(int idCommunity) {
		this.idCommunity = idCommunity;
	}

	public String getIdTypeUser() {
		return this.idTypeUser;
	}

	public void setIdTypeUser(String idTypeUser) {
		this.idTypeUser = idTypeUser;
	}

	public String getLastName() {
		return this.lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getPhone() {
		return this.phone;
	}

	public void setPhone(int phone) {
		this.phone = phone;
	}

}