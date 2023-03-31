import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Areas } from 'src/app/Modelo/Areas';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.component.html',
  styleUrls: ['./add-area.component.css']
})
export class AddAreaComponent implements OnInit {

  area:Areas=new Areas();

  constructor(private router:Router,private service:ServiceService){}

  ngOnInit() {

  }

  GuardarA(area:Areas){
    this.service.createArea(area).subscribe(data=>{alert("Se agrego con Exito");
    this.router.navigate(["listar_ar"]);
  })
  }

}
