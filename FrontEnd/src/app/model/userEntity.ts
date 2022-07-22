export class User {
    
    id?: number;
    nombre: String;
    apellido: String;
    img_url: String;

    constructor( nombre: String, apellido:String ,img_url:String ){
        this.nombre = nombre;
        this.img_url = img_url; 
        this.apellido = apellido;
    }

}