import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) {}

  urlServer = "http://localhost:3000/signin";

  validarLogin(usuario: User): Observable<any> {
    return this.httpClient.post(this.urlServer, JSON.stringify(usuario), {
      headers: new HttpHeaders({"Content-Type":"application/json"}),
      observe: 'response'
    })
  }

}
