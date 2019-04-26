import { Usuario } from './../../Modelo/Usuario';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios:Usuario[];
  constructor(private http:ServiceService, private router:Router, private app:AppComponent) { }

  ngOnInit() {
    if(this.app.autenticado){
    this.http.getUsuarios()
    .subscribe(data=>{
      this.usuarios=data;
    })
  }else{this.router.navigate(["login"])}
  }

  descargar(){
    this.router.navigate(["descargar"])
  }

}
