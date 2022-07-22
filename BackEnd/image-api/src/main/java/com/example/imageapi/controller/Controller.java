package com.example.imageapi.controller;

import com.example.imageapi.model.User;
import com.example.imageapi.util.FileUploadUtil;
import java.io.IOException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin( origins = "http://localhost:4200" )
public class Controller {
        
    User user = new User( 1l , "UserName", "UserSurname", "" );//                   <= Usuario ficticio para probar la función

    @PostMapping("/create/image") //LLEGADA DE IMAGEN
    public String createUser( @RequestParam("image") MultipartFile image ) throws IOException{
        
        //URL de la API
        String apiURL = ServletUriComponentsBuilder.fromCurrentContextPath().build().toUriString() + "/";
        
        String uploadDir = "user-photos/" + this.user.getId();//                    <= direccion de guardado: apiURL/carpeta/userID
        this.user.setImg_url( apiURL + uploadDir + "/header.png");//                <= Guardar imágen url en usuario

        FileUploadUtil.saveFile(uploadDir, "header.png", image);//                  <= Clase que se encarga de guardar el archivo en una carpeta
        System.out.println("INGRESO DE IMAGEN");
        return "Succes!";
        
    }
    
    @GetMapping("/get/image") //PETICION DE IMAGEN
    public User getImage(){
        return this.user;//                 <= Devuelve un usuario que luego la pagina se encarga de ubicar la imagen
    }
    
    
}