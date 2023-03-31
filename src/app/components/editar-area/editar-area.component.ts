import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Areas } from 'src/app/Modelo/Areas';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar-area',
  templateUrl: './editar-area.component.html',
  styleUrls: ['./editar-area.component.css']
})
export class EditarAreaComponent implements OnInit {


  area:Areas=new Areas();
  constructor (private router:Router,private service:ServiceService){}

  ngOnInit() {
    this.Editar_ar();

  }
  Editar_ar(){
    let id=localStorage.getItem("id")!;
    this.service.getAreaId(+id)
    .subscribe(data=>{
      this.area=data;
    })
  }

  Actualizar_ar( area:Areas){
    this.service.updateArea(this.area)
    .subscribe(data=>{
      this.area=data;
      alert("Se Actualizo con Exito");
      this.router.navigate(["listar_ar"]);
    })
  }

}
