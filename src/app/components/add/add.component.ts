import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/Modelo/Usuarios';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  usuario:Usuarios=new Usuarios();

  constructor(private router:Router,private service:ServiceService){}

  ngOnInit() {

  }

  Guardar(usuario:Usuarios){
    this.service.createUsuario(usuario).subscribe(data=>{alert("Se agrego con Exito");
    this.router.navigate(["listar"]);
  })
  }

}
