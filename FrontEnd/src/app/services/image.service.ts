import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../model/userEntity';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = "http://localhost:8080/";

  constructor(
    private http:HttpClient
  ) { }

  //Manda la imágen
  sendImage( image:FormData ): Observable<String>{
    const url = `${this.apiUrl}create/image`;
    return this.http.post( url, image, { responseType: 'text' });
  }

  //Pide la imágen
  getImage(): Observable<User>{
    const url = `${this.apiUrl}get/image`;
    return this.http.get<User>( url )
  }

}
