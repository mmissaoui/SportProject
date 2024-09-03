import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //adress de destination (serveur backend:local)
  userURL: string = "http://localhost:3000/users";
  constructor(private httpClient: HttpClient) { }
  //request: Add User
  //response: Message ok
  //user={firstname,lastname,email,pwd,tel,role}
  signUp(user: any, photo: File) {
    let fData = new FormData();
    fData.append("firstName", user.firstName);
    fData.append("lastName", user.lastName);
    fData.append("email", user.email);
    fData.append("password", user.password);
    fData.append("role", user.role);
    fData.append("img", photo);
    return this.httpClient.post<{ msg: string }>(this.userURL + "/signup", fData);
  }
  //user={email,pwd}
  login(user: any) {
    console.log("here into service", user);
    return this.httpClient.post<{ msg: string, user: any }>(this.userURL + "/login", user);
  }
}
