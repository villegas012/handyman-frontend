import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RelacionModelo } from '../../modelos/relacionModelo';
import { TecnicoModelo } from '../../modelos/tecnicoModelo';


@Injectable({
  providedIn: 'root'
})
export class TecnicoService {
  urlTecnicos = 'http://localhost:9001/tecnico/';
  constructor(private readonly http: HttpClient) { }

  obtenerDatoTecnico(idTecnico: string): Observable<TecnicoModelo> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<TecnicoModelo>(`${this.urlTecnicos}/${idTecnico}`, { headers });
  }

  gruardarServicioTecnico(relacion: RelacionModelo): Observable<TecnicoModelo> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<TecnicoModelo>(this.urlTecnicos, relacion, { headers });
  }

  obternerDiasSemana(idTecnico: string, semana: number): Observable<TecnicoModelo> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<TecnicoModelo>(`${this.urlTecnicos}/${idTecnico}/${semana}`, { headers });
  }
}
