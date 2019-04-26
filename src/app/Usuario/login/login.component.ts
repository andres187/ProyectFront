import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../Modelo/Usuario';
import { ServiceService } from './../../Service/service.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:Usuario = new Usuario();
  credenciales={};
  OK_STATUS = 'ok';
  userId: string;
  constructor(private router:Router, private service:ServiceService, public appComponent:AppComponent) { }

  ngOnInit() {
  }

  Guardar(usuario:Usuario){
    this.service.createUsuario(this.user)
    .subscribe(data=>{
      alert("Se registró exitosamente.");
      this.router.navigate(["listar"]);
    });
  }

  storeSecurityToken(token){
    window.localStorage.setItem ("token", token);
  }

  login(){
    this.credenciales['usuario'] = this.user.usuario;
    this.credenciales['password'] = this.user.password;
    this.service.login(this.credenciales)
    .subscribe(data=>{
      let response = data;
      if (response.status == this.OK_STATUS){
         this.userId = response.userId;
      if (response.token!= null){
        this.appComponent.autenticado = true;
         this.storeSecurityToken(response.token);
         this.router.navigate(["listar"]);
      }
    }else{
      alert("Error al iniciar sesion");
    }

  })
}
}

