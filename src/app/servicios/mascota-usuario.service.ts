import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloMascota } from '../modelos/mascota.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class MascotaUsuarioService {

  url = `https://backend-mascota-feliz-ciclo4.vercel.app/`;
  token: string = " ";
  constructor(private http: HttpClient,
    private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }


  ObtenerRegistrosPorId(id: string): Observable<ModeloMascota[]>{

    return this.http.get<ModeloMascota[]>(`${this.url}/usuarios/${id}/mascotas`);
  }

  
}
