import { Usuario } from './../Modelo/Usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  URL = 'http://localhost:8080/usuarios';
  urlApi = 'http://localhost:8080/usuarios/descargar';

  getUsuarios(){
    return this.http.get<Usuario[]>(this.URL);
  }

  createUsuario(usuario:Usuario){
    return this.http.post<Usuario>(this.URL,usuario);
  }

  getDescargar(){
    return this.http.get(this.urlApi,{
      responseType: 'arraybuffer'
    });
  }

}
