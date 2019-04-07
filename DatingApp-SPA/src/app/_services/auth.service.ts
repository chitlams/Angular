import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHealtper = new JwtHelperService();
  decodedToken:any;
  baseUtl = "http://locahost:5000/api/auth/";
  constructor(private http: HttpClient) { }
  httpOptions :any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  login(model: any) {
    var url = this.baseUtl + "login";
    return this.http.post("http://localhost:5000/api/auth/login",
      model, this.httpOptions)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem("token", user.token);
            this.decodedToken = this.jwtHealtper.decodeToken(user.token);
            console.log(this.decodedToken);
          }
        }));
  }

  register(model: any) {
    return this.http.post("http://localhost:5000/api/auth/register", model, this.httpOptions);
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !this.jwtHealtper.isTokenExpired(token);
  }
}
