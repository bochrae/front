import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    
  private API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const loginRequest = { username, password };
    return this.http.post<any>(`${this.API_URL}/user`, loginRequest);
  }
}
