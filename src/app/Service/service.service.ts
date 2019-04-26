import { Usuario } from './../Modelo/Usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  URL = 'https://uninorte-api.herokuapp.com/usuarios';
  urlApi = 'https://uninorte-api.herokuapp.com/usuarios/descargar';

  getUsuarios(){
    return this.http.get<Usuario[]>(this.URL);
  }

  createUsuario(usuario:Usuario){
    return this.http.post<Usuario>(this.URL,usuario);
  }

  login(credenciales:any){
    return this.http.post<any>(this.URL+"/login",credenciales)
  }

  getDescargar(){
    return this.http.get(this.urlApi,{
      responseType: 'arraybuffer'
    });
  }

}
