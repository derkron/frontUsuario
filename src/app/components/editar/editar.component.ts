import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/Modelo/Usuarios';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {


  usuario:Usuarios=new Usuarios();
  constructor (private router:Router,private service:ServiceService){}

  ngOnInit() {
    this.Editar();

  }
  Editar(){
    let id=localStorage.getItem("id")!;
    this.service.getUsuarioId(+id)
    .subscribe(data=>{
      this.usuario=data;
    })
  }

  Actualizar(usuario:Usuarios){
    this.service.updateUsuario(this.usuario)
    .subscribe(data=>{
      this.usuario=data;
      alert("Se Actualizo con Exito");
      this.router.navigate(["listar"]);
    })
  }

}
