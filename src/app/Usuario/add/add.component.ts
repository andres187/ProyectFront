import { Usuario } from './../../Modelo/Usuario';
import { ServiceService } from './../../Service/service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  pwdPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,16}$"; 
  user:Usuario = new Usuario();
   isValidFormSubmitted = null;
  
  userForm = this.formBuilder.group({
   usuario: ['', Validators.required],
   nombre: ['', Validators.required],
   apellido: ['', Validators.required],
   password: ['', [Validators.required, Validators.pattern(this.pwdPattern)]]    
  });

  constructor(private formBuilder:FormBuilder, private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  onFormSubmit() {
     this.isValidFormSubmitted = false;
     if (this.userForm.invalid) {
        return;
     }
     this.isValidFormSubmitted = true;
     let user: Usuario = this.userForm.value;
     this.service.createUsuario(user)
     .subscribe(data=>{
      alert("Se registró correctamente.")
      this.router.navigate(["login"]);
     })
    }
    get usuario() {
      return this.userForm.get('usuario');
    }
    get nombre() {
      return this.userForm.get('nombre');
    }
    get apellido() {
      return this.userForm.get('apellido');
    }
    get password() {
      return this.userForm.get('password');
    }  

}
