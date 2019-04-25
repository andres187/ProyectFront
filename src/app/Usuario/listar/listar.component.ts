import { Usuario } from './../../Modelo/Usuario';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios:Usuario[];
  constructor(private http:ServiceService, private router:Router) { }

  ngOnInit() {
    this.http.getUsuarios()
    .subscribe(data=>{
      this.usuarios=data;
    })
  }

  descargar(){
    this.router.navigate(["descargar"])
  }

}
