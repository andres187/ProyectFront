import { Usuario } from './../../Modelo/Usuario';
import { ServiceService } from './../../Service/service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  user:Usuario = new Usuario();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(usuario:Usuario){
    this.service.createUsuario(this.user)
    .subscribe(data=>{
      alert("Se registró exitosamente.");
      this.router.navigate(["listar"]);
    })
  }

}
