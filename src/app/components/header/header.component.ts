import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  user: any;
  ngOnInit(): void {
  }
  isLoggedIn() {
    let token = sessionStorage.getItem("token");
    if (token) {
      this.user = jwtDecode(token);
    }
    return !!token;
  }
  logout(){
    sessionStorage.removeItem("token");
    this.router.navigate(['/']);

  }
}