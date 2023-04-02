import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/Modelo/Usuarios';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  usuario:Usuarios[];
  constructor(private service:ServiceService, private router:Router){

  }

  ngOnInit() {

    this.service.getUsuario()
    .subscribe(data=>{ this.usuario=data});

  }

  Editar(usuario:Usuarios):void{
    localStorage.setItem("id",usuario.id.toString());
    this.router.navigate(["edit"]);


  }

  
}
