import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = ''

  getAll() {
    return this.http.get(this.url);
  }

  getByCode(code: any) {
    return this.http.get(this.url + '/' + code)
  }

  proceedRegister(inputdata: any) {
    return this.http.post(this.url, inputdata);
  }

  updateUser(code: any, inputdata: any) {
    return this.http.put(this.url + '/' + code, inputdata);
  }
}
