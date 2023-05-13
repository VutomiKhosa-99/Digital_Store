// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { map } from 'rxjs'

// const URL = 'http://localhost:2000/users'

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   authToken: any;
//   user: any;

//   constructor(private httpClient:HttpClient ) { }

//   registerUser(user: any) {
//     let headers = new HttpHeaders();
//     headers = headers.append('Content-Type', 'application/json');
//     return this.httpClient.post(URL, user, {headers: headers})
//     .pipe(map(res => res.json()));
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:2000';

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = `${this.API_URL}/users`;
    return this.http.post(url, user, httpOptions)
      .pipe(
        map(response => response)
      );
  }
}
