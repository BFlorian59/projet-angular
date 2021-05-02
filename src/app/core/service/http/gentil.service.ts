import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gentil } from '../../models/gentil';

@Injectable({
  providedIn: 'root',
})
export class GentilService {
  endPoint: string = environment.nomEndpoint;

  constructor(private _httpClient: HttpClient) {}

  get(): Observable<Gentil[]> {
    return this._httpClient.get<Gentil[]>(this.endPoint);
  }

  getById(id: number): Observable<Gentil> {
    return this._httpClient.get<Gentil>(this.endPoint + '/' + id);
  }

  post(gentil: Gentil): Observable<Gentil> {
    return this._httpClient.post<Gentil>(this.endPoint, gentil);
  }

  put(gentil: Gentil, id: number): Observable<Gentil> {
    return this._httpClient.put<Gentil>(this.endPoint + '/' + id, gentil);
  }

  delete(gentil: Gentil): Observable<Gentil> {
    return this._httpClient.delete<Gentil>(this.endPoint + '/' + gentil.id);
  }
}
