import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-api',
  templateUrl: './image-api.component.html',
  styleUrls: ['./image-api.component.css']
})
export class ImageApiComponent implements OnInit {

  public archivos: any[] = []
  public preview: string = "";
  public loading: boolean = true;
  public img_url: String = "";
  
  constructor(
    private imgService:ImageService
  ) { }

  ngOnInit(): void {
  }
  
  //PRIMERO: se guarda el archivo seleccionado
  captureFile(event:any){
    const savedFile = event.target.files[0]; //Array, puede guardar más archivos
    this.extraerBase64(savedFile).then( //Funcion base64
      (image:any) => {
        this.preview = image.base; //Actualiza el view (Muestra un preview del archivo)
      }
    )
    this.archivos.push(savedFile);
    this.loading = false;
  }

  //FUNCION BASE64: Transforma la imagen en base 64 para mostrarla
  extraerBase64 = async ($event: any) => new Promise((resolve) => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
      return null;
    } catch (e) {
      return null;
    }
  })

  //SEGUNDO: Manda la imagen al Backend
  onSubmit(){
    try {
      const dataForm = new FormData();
      this.archivos.forEach(element => {
        dataForm.append( "image", element, element.name )
      }); 
      this.imgService.sendImage( dataForm ).subscribe(
        res => {
          this.loading = true;
          console.log( res );
        }
      );
    } catch (error) {
      console.log("ERROR" + error);
      this.loading = true;
    }
  }

  //TERCERO: Trae una url con la imagen almacenada en la api
  getImage(){
    this.imgService.getImage().subscribe(
      data => {
        this.img_url = data.img_url
      }
    )
  }

}
