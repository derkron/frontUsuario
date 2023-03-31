import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../Modelo/Usuarios';
import { Areas } from '../Modelo/Areas';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  url='http://localhost:8080/areas'

  Url='http://localhost:8080/usuarios';

  getUsuario(){
    return this.http.get<Usuarios[]>(this.Url);
  }
  createUsuario(usuario:Usuarios){
    return this.http.post<Usuarios>(this.Url,usuario);
  }
  getUsuarioId(id:number){
    return this.http.get<Usuarios>(this.Url+"/"+id);
  }

  updateUsuario(usuario:Usuarios){
    return this.http.put<Usuarios>(this.Url+"/"+usuario.id,usuario);

  }
  deleteUsusario(usuario:Usuarios){
    return this.http.delete<Usuarios>(this.Url+"/"+usuario.id);
  }

  getArea(){
    return this.http.get<Areas[]>(this.url);
  }
  createArea(area:Areas){
    return this.http.post<Areas>(this.url,area);
  }
  getAreaId(id:number){
    return this.http.get<Areas>(this.url+"/"+id);
  }

  updateArea(area:Areas){
    return this.http.put<Areas>(this.url+"/"+area.id,area);

  }
  deleteArea(area:Areas){
    return this.http.delete<Areas>(this.url+"/"+area.id);
  }
}
