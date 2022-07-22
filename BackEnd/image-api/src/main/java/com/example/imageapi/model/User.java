package com.example.imageapi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

/**
 * @author Uriel Spiridione
 */

@Getter @Setter
@Entity
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @NotNull
    @Size( min = 1, max = 50, message = "(nombre) - No cumple con los requerimentos" )
    private String nombre;
    
    @NotNull
    @Size( min = 1, max = 50, message = "(apellido) - No cumple con los requerimentos" )
    private String apellido;
    
    @Size( min = 1, max = 50, message = "(mg_url) - No cumple con los requerimentos" )
    private String img_url;

    public User(Long id, String nombre, String apellido, String img_url) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.img_url = img_url;
    }

    public User() {
    }
    
}
