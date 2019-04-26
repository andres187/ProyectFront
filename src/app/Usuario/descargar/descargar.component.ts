import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { saveAs } from 'file-saver';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-descargar',
  templateUrl: './descargar.component.html',
  styleUrls: ['./descargar.component.css']
})
export class DescargarComponent implements OnInit {

  constructor(private route:Router, private http:ServiceService, private app:AppComponent) { }

  ngOnInit() {
    if(this.app.autenticado){
    this.http.getDescargar()
    .subscribe(data=>{
      //saveAs(new Blob([data], {type: 'text/csv'}));
      alert("Descargado en la ruta C:\\Datos\.")
    });
    this.route.navigate(["listar"]);
  }else{this.route.navigate(["login"])};
}

}
