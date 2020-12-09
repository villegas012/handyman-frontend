import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioModelo } from '../../modelos/servicioModelo';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  urlServicios = 'http://localhost:9001/servicio/';
  constructor(private readonly http: HttpClient ) { }

  obtenerDatoServicio(idServicio: string): Observable<ServicioModelo> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<ServicioModelo>(`${this.urlServicios}/${idServicio}`, {headers});
  }
}
