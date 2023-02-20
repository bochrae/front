import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  private baseURL = "http://localhost:8080/api/v1/login";
    constructor(private http: HttpClient) {}
    
    getUser() {
        return this.http.get('/api/user');
    }
}
