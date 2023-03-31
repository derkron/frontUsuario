import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../Modelo/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

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
}
