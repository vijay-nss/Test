import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  public baseurl = 'http://localhost:3000/api/';

  doLogin(data: any) {
    return this.http.post(this.baseurl + 'login', data);
  }
}
