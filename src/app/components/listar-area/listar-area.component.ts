import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Areas } from 'src/app/Modelo/Areas';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar-area',
  templateUrl: './listar-area.component.html',
  styleUrls: ['./listar-area.component.css']
})
export class ListarAreaComponent  implements OnInit {

  area:Areas[];

  constructor(private router:Router,private service:ServiceService){}

  ngOnInit() {
    this.service.getArea()
    .subscribe(data=>{ this.area=data});

  }

  Editar(area:Areas):void{
    localStorage.setItem("id",area.id.toString());
    this.router.navigate(["edit_ar"]);


  }

  Delete(area:Areas){
    this.service.deleteArea(area)
    .subscribe(data=>{
      this.area=this.area.filter(p=>p!==area);
      alert("Usuario eliminado");
    })
  }

}
